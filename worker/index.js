// Entrada del despliegue como Cloudflare Worker (ver wrangler.jsonc):
// atiende /api/waitlist y deja todo lo demás a los assets estáticos de landing/.
import { handleWaitlistGet, handleWaitlistPost } from './waitlist.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/waitlist') {
      if (request.method === 'GET') return handleWaitlistGet(request, env);
      if (request.method === 'POST') return handleWaitlistPost(request, env);
      return new Response('method not allowed', { status: 405, headers: { allow: 'GET, POST' } });
    }
    return env.ASSETS.fetch(request);
  },
};
