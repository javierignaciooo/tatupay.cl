// Lógica compartida de la waitlist. La usan dos entradas equivalentes:
//   - worker/index.js        → despliegue como Cloudflare Worker (wrangler.jsonc)
//   - functions/api/waitlist.js → despliegue como Cloudflare Pages Function
// Guarda en un KV binding llamado WAITLIST. Sin el binding, POST responde 503
// (el frontend muestra el fallback a Instagram) y GET responde count: 0.

const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extra },
  });

// GET /api/waitlist → { count }. El frontend solo muestra el contador si count >= 5.
// GET /api/waitlist?format=csv&key=<ADMIN_KEY> → exporta los registros como CSV.
export async function handleWaitlistGet(request, env) {
  const url = new URL(request.url);

  if (url.searchParams.get('format') === 'csv') {
    if (!env.ADMIN_KEY || url.searchParams.get('key') !== env.ADMIN_KEY) {
      return json({ ok: false, error: 'unauthorized' }, 401);
    }
    if (!env.WAITLIST) return json({ ok: false, error: 'waitlist storage not configured' }, 503);
    const rows = [['fecha', 'nombre', 'instagram', 'ciudad', 'whatsapp', 'email', 'ip']];
    let cursor;
    do {
      const page = await env.WAITLIST.list({ prefix: 'wl:', cursor });
      for (const k of page.keys) {
        const raw = await env.WAITLIST.get(k.name);
        if (!raw) continue;
        try {
          const e = JSON.parse(raw);
          rows.push([e.ts, e.name, e.instagram, e.city, e.phone, e.email, e.ip]);
        } catch { /* entrada corrupta: se omite */ }
      }
      cursor = page.list_complete ? undefined : page.cursor;
    } while (cursor && rows.length < 2000);
    const csv = rows
      .map(r => r.map(v => `"${String(v ?? '').replaceAll('"', '""')}"`).join(','))
      .join('\n');
    // BOM para que Excel abra el UTF-8 con tildes correctas
    return new Response('﻿' + csv, {
      headers: {
        'content-type': 'text/csv; charset=utf-8',
        'content-disposition': 'attachment; filename="waitlist-tatupay.csv"',
      },
    });
  }

  let count = 0;
  if (env.WAITLIST) {
    let cursor;
    do {
      const page = await env.WAITLIST.list({ prefix: 'wl:', cursor });
      count += page.keys.length;
      cursor = page.list_complete ? undefined : page.cursor;
    } while (cursor && count < 1000);
  }
  return json({ count }, 200, { 'cache-control': 'public, max-age=300' });
}

// POST /api/waitlist → registra a un artista.
// Anti-spam en capas: honeypot (campo "website"), trampa de tiempo (elapsed) y
// Cloudflare Turnstile si TURNSTILE_SECRET está configurado. A los bots que caen
// en el honeypot se les responde ok:true para no delatar el filtro.
export async function handleWaitlistPost(request, env) {
  if (!env.WAITLIST) return json({ ok: false, error: 'waitlist storage not configured' }, 503);

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid json' }, 400);
  }

  if (String(data.website ?? '').trim() !== '') return json({ ok: true });
  const elapsed = Number(data.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < 2500) return json({ ok: true });

  if (env.TURNSTILE_SECRET) {
    const token = String(data.turnstile ?? '');
    if (!token) return json({ ok: false, error: 'captcha required' }, 400);
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get('cf-connecting-ip') ?? undefined,
      }),
    });
    const outcome = await verify.json();
    if (!outcome.success) return json({ ok: false, error: 'captcha failed' }, 400);
  }

  const clean = (v, max) => String(v ?? '').trim().slice(0, max);
  const entry = {
    name: clean(data.name, 80),
    instagram: clean(data.instagram, 60).replace(/^@+/, '').toLowerCase(),
    city: clean(data.city, 60),
    phone: clean(data.phone, 20),
    email: clean(data.email, 120).toLowerCase(),
    ts: new Date().toISOString(),
    ip: request.headers.get('cf-connecting-ip') ?? '',
  };

  if (!entry.name || !entry.instagram || !entry.city || !entry.phone || !entry.email) {
    return json({ ok: false, error: 'missing fields' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) {
    return json({ ok: false, error: 'invalid email' }, 400);
  }

  // Idempotente por handle de Instagram: reenviar el formulario no duplica el registro.
  const dedupeKey = `ig:${entry.instagram}`;
  if (await env.WAITLIST.get(dedupeKey)) return json({ ok: true, dup: true });

  const key = `wl:${entry.ts}:${crypto.randomUUID()}`;
  await env.WAITLIST.put(key, JSON.stringify(entry));
  await env.WAITLIST.put(dedupeKey, key);

  return json({ ok: true });
}
