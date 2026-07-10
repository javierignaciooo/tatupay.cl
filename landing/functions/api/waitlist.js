// Cloudflare Pages Function: POST /api/waitlist
// Requiere un binding KV llamado WAITLIST (Pages → Settings → Functions → KV namespace bindings).
// Sin el binding responde 503 y el frontend muestra el fallback a Instagram.

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
