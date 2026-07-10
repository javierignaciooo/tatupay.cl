# Manual de marca — tatupay

Guía mínima para mantener consistencia entre la landing, Instagram y cualquier material del piloto.
No es un manual de identidad corporativa completo — se amplía cuando haga falta (post-piloto).

## Naming

- **Nombre de marca**: `tatupay` (todo minúscula, una palabra). En texto corrido puede ir con mayúscula inicial ("Tatupay") solo al empezar una oración.
- **Wordmark**: "tatu" en color base + "pay" en verde neón (`tatu`**`pay`**) — así está implementado en `landing/index.html` (`.brand span`). Mantener siempre ese split, nunca "Tatu Pay" con espacio ni "TatuPay" en CamelCase.
- **Dominio / handle**: `tatupay.cl` · IG `@tatupay.cl`.

## Paleta

Definida como variables CSS en `landing/index.html` (`:root`) — origen único de verdad, no hardcodear hex sueltos en nuevo código.

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#0E0E0E` | Fondo principal (dark-first) |
| `--bone` | `#F4EFE6` | Texto principal sobre fondo oscuro |
| `--neon` | `#00E676` | Acento — CTA, énfasis, wordmark "pay" |
| `--skin` | `#B8AFA6` | Texto secundario / subtítulos |
| `--card` | `#171717` | Fondo de tarjetas y superficies |
| `--line` | `#262626` | Bordes y separadores |

**Acento alternativo en evaluación (P6 del plan, §10)**: naranja, a probar A/B contra el verde neón en la landing una vez haya tráfico. No cambiar el default hasta tener datos.

Regla de contraste: `--bone` y `--neon` sobre `--ink`/`--card` ya cumplen contraste AA para texto; si se agrega un color nuevo, verificar contraste antes de usarlo en texto.

## Tipografía

- Sans del sistema (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`) — sin fuentes externas, cero peso extra de carga.
- Monoespaciada del sistema (`ui-monospace, Menlo, monospace`) solo para el detalle "PASO 01/02/03" — úsala para microcopy técnico, no para cuerpo de texto.
- Jerarquía: `h1` grande y condensado (`letter-spacing:-.035em`), `h2` de sección, cuerpo con `line-height:1.6`. No introducir más de estos dos niveles de peso (800 para títulos, 400/600/700 para el resto).

## Tono de voz

- **Directo y concreto, sin jerga corporativa.** Ejemplo real de la landing: *"Cobra con tarjeta. Llena tu agenda. Cero mensualidad."* — frases cortas, verbo primero, beneficio inmediato.
- Habla el idioma del tatuador, no el de una fintech: "no-shows", "abono", "la hora se bloquea", "chao [problema]" — evitar "solución", "sinergia", "onboarding" en copy orientado al cliente final (sí se usan internamente en el plan/docs técnicos).
- Segunda persona informal ("tú/tu"), nunca "usted".
- Honestidad sobre limitaciones: cuando algo no está listo (ej. fallback si no hay KV binding), decirlo con una salida clara (link a Instagram) en vez de fallar en silencio — ya implementado en `waitlist.js` y el `.msg.err` de la landing.

## Logo

No existe un logo gráfico (isotipo) todavía — se usa el wordmark tipográfico (`tatu` + `pay` en verde) como única marca visual. Un isotipo se evalúa recién si el piloto valida el negocio (no antes; evitar gastar presupuesto de diseño en Fase 0).

## Uso en Instagram (@tatupay.cl)

- Fondo oscuro (`--ink`) consistente con la landing en todo material gráfico (posts, stories, highlights).
- CTA siempre en `--neon` sobre fondo oscuro, mismo estilo de botón que `.cta` de la landing (esquinas redondeadas ~10px, peso 700).
- Contenido: mezcla de (a) educación al tatuador sobre cobro con tarjeta / no-shows, (b) prueba social del piloto una vez existan casos reales, (c) llamada a la lista fundadora mientras dure el waitlist.
- No usar stock photos genéricas — preferir capturas reales de la landing/panel o fotos de estudios/tatuadores del piloto (con permiso).

## Qué falta (post-piloto, no bloquea Fase 0)

- Isotipo/símbolo si la marca crece más allá del wordmark.
- Guía de foto/ilustración para IG.
- Resultado del A/B de acento de color (P6).
