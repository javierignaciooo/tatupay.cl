// Entrada del despliegue como Cloudflare Pages Function (si el proyecto está en
// Pages en vez de Workers). Debe vivir en functions/ EN LA RAÍZ del repo — dentro
// de landing/ Pages la ignora. La lógica real está en worker/waitlist.js.
import { handleWaitlistGet, handleWaitlistPost } from '../../worker/waitlist.js';

export const onRequestGet = ({ request, env }) => handleWaitlistGet(request, env);
export const onRequestPost = (context) =>
  handleWaitlistPost(context.request, context.env, context);
