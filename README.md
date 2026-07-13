# tatupay.cl

Agenda pública + cobro de reserva con tarjeta para tatuadores independientes en Chile.
La hora se bloquea solo cuando el abono está pagado. Sin mensualidad: comisión única por cobro exitoso.

**El documento maestro del proyecto es [`docs/PLAN.md`](docs/PLAN.md)** — plan de negocio, pasarela,
pricing, fases, costos, riesgos y checkpoints de revisión. Toda decisión nueva se registra ahí o en `docs/`.

## Estructura

| Ruta | Qué es |
|---|---|
| `docs/PLAN.md` | Plan maestro v3 (aprobado) — leer primero |
| `docs/entrevistas/guion-entrevistas.md` | Guion de las entrevistas de validación de Fase 0 |
| `docs/entrevistas/encuesta-google-forms.md` | Versión autoadministrada (link) del guion, para armar en Google Forms |
| `docs/entrevistas/resultados.md` | Consolidado semanal de entrevistas → input del checkpoint C1 (ir llenando a medida que se entrevista) |
| `docs/brand/manual-de-marca.md` | Manual de marca: paleta, tono, wordmark, y plan de activación de Instagram |
| `docs/legal/boletas-y-tributacion-tatuadores.md` | Memo: obligación de boleta por abonos, informalidad del gremio y opciones de diseño |
| `landing/` | Landing de captación + waitlist (HTML estático + fotos en `landing/img/`) |
| `worker/` | Backend de la waitlist (`/api/waitlist`) — se despliega como Cloudflare Worker |
| `functions/` | Entrada alternativa del mismo backend si el proyecto corre en Cloudflare **Pages** |
| `wrangler.jsonc` | Configuración del despliegue en Cloudflare Workers (assets + worker + KV) |

## Desplegar la landing (Cloudflare Workers)

El repo ya está conectado a Cloudflare vía **Workers Builds** (config en `wrangler.jsonc`:
sirve `landing/` como estático y el Worker `worker/index.js` atiende `/api/waitlist`).

1. En Cloudflare Dashboard → **Workers & Pages → tatupaycl → Settings → Build** revisa que la
   **production branch** sea la rama principal de este repo (ver "Cómo manejamos las ramas").
2. **Para que la waitlist guarde registros** (sin esto el formulario cae al fallback de Instagram):
   - Crea el namespace: dashboard → **Storage & Databases → KV → Create namespace** → nombre `tatupay-waitlist`
     (o por terminal: `npx wrangler kv namespace create WAITLIST`).
   - Copia el **ID** del namespace, ábrelo en `wrangler.jsonc`, descomenta el bloque `kv_namespaces`
     y pega el ID. Commit + push → se redespliega solo.
3. (Recomendado) En el Worker → **Settings → Variables and Secrets** agrega `ADMIN_KEY` (un string
   secreto inventado por ti). Con eso puedes **descargar los registros en Excel/CSV**:
   `https://tatupay.cl/api/waitlist?format=csv&key=TU_ADMIN_KEY`
4. (Opcional, anti-bots extra) Turnstile: dashboard → **Turnstile → Add site** → dominio `tatupay.cl`.
   El **site key** se pega en `landing/index.html` (constante `TURNSTILE_SITE_KEY`) y el **secret**
   como variable `TURNSTILE_SECRET` del Worker. Sin esto igual hay honeypot + trampa de tiempo.
5. **Custom domain**: Worker → Settings → Domains & Routes → agregar `tatupay.cl`.

También puedes ver los registros uno a uno en el dashboard: KV → namespace → entradas `wl:*`
(JSON con nombre, IG, ciudad, WhatsApp, fecha).

## Cómo manejamos las ramas (leer antes de pedir cambios)

Regla simple: **una sola rama viva**. Todo lo demás se borra después de fusionarse.

- **Rama principal** (la que despliega Cloudflare): `main` — si aún no existe, la rama consolidada
  `claude/waitlist-testimonials-photos-fj299g` cumple ese rol hasta crearla.
- Cada tarea nueva se trabaja en **una rama corta** creada desde la principal, se fusiona (idealmente
  por Pull Request) y **se borra la rama** al fusionar. Nunca dos tareas en paralelo sobre la landing.
- La rama `cloudflare/workers-autoconfig` la creó Cloudflare automáticamente; ya está fusionada.
- Si Cloudflare no refleja un cambio: casi siempre es porque la **production branch** configurada en
  Cloudflare no es la rama donde quedó el cambio. Revisar eso antes que cualquier otra cosa.

## Para los socios (sin conocimientos técnicos)

Este repo se lee desde el navegador: entra a la carpeta `docs/`, los documentos se muestran como páginas.
Para comentar o proponer algo, abre un **Issue** (pestaña Issues → New issue). Nada más que aprender.

## Convenciones de desarrollo

- Regla de revisión (ver §9 del plan): todo cambio que toque **dinero, auth o disponibilidad** pasa por
  revisión de mayor capacidad (Fable) antes de mergear; UI/contenido/CRUD puede ir directo.
- El producto (Next.js + Supabase, ver §7 del plan) se construye en Fase 1; aún no existe en este repo.
