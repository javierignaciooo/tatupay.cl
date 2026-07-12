// Cloudflare Pages Function: POST /api/waitlist (registro) y GET /api/waitlist (conteo).
// Requiere un binding KV llamado WAITLIST (Pages → Settings → Functions → KV namespace bindings).
// Sin el binding, POST responde 503 (el frontend muestra el fallback a Instagram) y GET responde count: 0.

// GET: cuántos artistas hay en la lista. El frontend solo muestra el contador si count >= 5.
export async function onRequestGet({ env }) {
  let count = 0;
  if (env.WAITLIST) {
    let cursor;
    do {
      const page = await env.WAITLIST.list({ prefix: 'wl:', cursor });
      count += page.keys.length;
      cursor = page.list_complete ? undefined : page.cursor;
    } while (cursor && count < 1000);
  }
  return new Response(JSON.stringify({ count }), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=300',
    },
  });
}

export async function onRequestPost({ request, env }) {
  if (!env.WAITLIST) {
    return new Response(JSON.stringify({ ok: false, error: 'waitlist storage not configured' }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid json' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const clean = (v, max) => String(v ?? '').trim().slice(0, max);
  const entry = {
    name: clean(data.name, 80),
    instagram: clean(data.instagram, 60),
    city: clean(data.city, 60),
    phone: clean(data.phone, 20),
    ts: new Date().toISOString(),
    ip: request.headers.get('cf-connecting-ip') ?? '',
  };

  if (!entry.name || !entry.instagram || !entry.city || !entry.phone) {
    return new Response(JSON.stringify({ ok: false, error: 'missing fields' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const key = `wl:${entry.ts}:${crypto.randomUUID()}`;
  await env.WAITLIST.put(key, JSON.stringify(entry));

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'content-type': 'application/json' },
  });
}
