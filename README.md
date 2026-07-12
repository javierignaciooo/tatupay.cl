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
| `docs/entrevistas/resultados.md` | (pendiente) consolidado semanal de entrevistas → input del checkpoint C1 |
| `docs/brand/manual-de-marca.md` | Manual de marca: paleta, tono, wordmark, y plan de activación de Instagram |
| `landing/` | Landing de captación + waitlist, lista para Cloudflare Pages |

## Desplegar la landing (Cloudflare Pages, ~10 min)

1. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git** → este repo.
2. Build settings: framework **None**, build command vacío, output directory **`landing`**.
3. Para que la waitlist guarde registros: **KV → Create namespace** (`tatupay-waitlist`), y en el proyecto
   Pages → **Settings → Functions → KV namespace bindings** → variable **`WAITLIST`** → ese namespace.
   Sin el binding, la landing funciona igual y el formulario ofrece el fallback a Instagram.
4. **Custom domain**: agregar `tatupay.cl` (el dominio ya debe estar en Cloudflare DNS).
5. Leer registros de la waitlist: KV → namespace → entradas `wl:*` (JSON con nombre, IG, ciudad, WhatsApp, fecha).

## Para los socios (sin conocimientos técnicos)

Este repo se lee desde el navegador: entra a la carpeta `docs/`, los documentos se muestran como páginas.
Para comentar o proponer algo, abre un **Issue** (pestaña Issues → New issue). Nada más que aprender.

## Convenciones de desarrollo

- Rama de trabajo actual: `claude/tatupay-platform-design-js476x`.
- Regla de revisión (ver §9 del plan): todo cambio que toque **dinero, auth o disponibilidad** pasa por
  revisión de mayor capacidad (Fable) antes de mergear; UI/contenido/CRUD puede ir directo.
- El producto (Next.js + Supabase, ver §7 del plan) se construye en Fase 1; aún no existe en este repo.
