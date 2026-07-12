# tatupay — Manual de marca v1

Entregable del ítem 7 de Fase 0 (`docs/PLAN.md` §5). Codifica lo que la landing ya implementó implícitamente y lo extiende a Instagram y a futuras piezas (panel, notificaciones, marketing impreso).

## 1. Posicionamiento y tono

**Qué es tatupay, en una frase**: la agenda pública + cobro de reserva con tarjeta para tatuadores independientes en Chile — sin mensualidad, sin apps que aprender, sin no-shows.

**A quién le habla**: al tatuador independiente, no a un estudio corporativo. Habla de tú a tú, en chileno neutro (nada de "usted", nada de anglicismos innecesarios). Es directo y un poco callejero, nunca corporativo ni "fintech de traje".

**Tono — 4 ejes**:
- **Directo, no vendedor**: "Chao no-shows", no "Optimiza la retención de tus reservas". Frases cortas, verbos activos.
- **Cómplice, no autoridad**: hablamos como alguien que entiende el oficio (DMs de Instagram, efectivo bajo la mesa, agenda en el cuaderno), no como un banco explicándole al tatuador cómo llevar su negocio.
- **Seguro sin ser agresivo**: afirmamos con datos y lógica ("la hora existe solo si el abono está pagado"), no con superlativos vacíos ("¡la mejor plataforma de Chile!").
- **Honesto con el precio**: la comisión se dice en plata concreta ($4.900 en un tatuaje de $100k), nunca escondida en letra chica.

**Palabras que sí / palabras que no**:
| Sí | No |
|---|---|
| abono, reserva, hora, agenda, cobrar | prepago, booking, revenue, customer |
| tatuador, tatuadora, artista | proveedor, prestador de servicios |
| plata, cobrar, pagar | "monetizar", "transaccionar" |
| cliente | usuario (salvo hablando del panel/producto) |

## 2. Paleta de color

Ya implementada en `landing/index.html`, se formaliza acá como fuente de verdad:

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#0E0E0E` | Fondo base (dark-first, siempre) |
| `--bone` | `#F4EFE6` | Texto principal sobre fondo oscuro |
| `--neon` | `#00E676` | Acento primario: CTAs, énfasis, links, marca ("pay" en el wordmark) |
| `--skin` | `#B8AFA6` | Texto secundario / cuerpo largo |
| `--card` | `#171717` | Superficies elevadas (tarjetas, inputs) |
| `--line` | `#262626` | Bordes y separadores |

**Regla de fondo: dark-first siempre.** No existe versión "light" de la marca — el negro remite a tinta y estudio de tatuaje, no es una preferencia estética arbitraria. Cualquier pieza nueva (panel, correo, IG) parte de `--ink` como fondo.

**P6 abierta (`docs/PLAN.md` §10)**: acento verde neón vs. naranja. Mientras no se resuelva con el A/B en la landing, **el verde neón (`#00E676`) es el único acento en producción**. Si se corre el A/B, la variante naranja usa `--neon-alt:#FF6B35` como reemplazo directo del token `--neon` (mismo rol, mismo contraste sobre `--ink`) — no se introduce un segundo acento simultáneo en ninguna pieza.

**Contraste**: `--bone` sobre `--ink` y `--neon` sobre `--ink` cumplen AA para texto normal. `--ink` sobre `--neon` (botones CTA) cumple AA para texto grande/bold — mantener los CTA en peso 700 como en la landing.

## 3. Tipografía

- **UI y web**: system-ui stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`) — cero costo de carga, cero licencias, y ya es lo que corre en la landing. No introducir una tipografía custom hasta que haya presupuesto de marca dedicado (fuera del alcance de Fase 0).
- **Monoespaciada** (`ui-monospace, Menlo, monospace`) reservada para el detalle de marca: los "PASO 01/02/03" de la landing y, por extensión, cualquier numeración o dato técnico (montos, timestamps) que se quiera destacar como "de sistema".
- **Jerarquía**: títulos en peso 800, letter-spacing negativo (`-.03` a `-.035em`) para el look condensado/urbano; cuerpo en peso 400–600, `line-height:1.6`.

## 4. Wordmark

`tatu` + `pay`, sin espacio, minúsculas siempre. El acento va en la segunda mitad: **"tatu" en `--bone`, "pay" en `--neon`**. No existe versión con mayúscula inicial, no existe isotipo/ícono separado del wordmark en esta etapa — mantiene el mismo costo cero de la landing y evita gastar presupuesto de diseño antes de validar mercado (Fase 0 no incluye diseñador). Un isotipo se evalúa recién si Fase 1 lo justifica.

## 5. Estilo visual (fotografía / imágenes)

- **Real, no stock**: portafolio de tatuadores reales, estudios reales, manos trabajando. Cero fotografía de banco de imágenes genérica (manos con guantes de látex azul "corporativo", sonrisas de stock).
- **Alto contraste, fondo oscuro**: las piezas fotográficas heredan el `--ink` de fondo — recortes o viñetados suaves, nunca un fondo blanco plano que rompa el dark-first.
- **El neón como spot color**: se usa para resaltar un dato o CTA sobre la foto (un pin de precio, un check), no como filtro de color sobre la imagen completa.

## 6. Voz aplicada — checklist rápido antes de publicar cualquier pieza

1. ¿Se entiende en una lectura, sin jerga fintech?
2. ¿El precio o beneficio está en plata concreta, no en abstracto?
3. ¿Suena a alguien que conoce el oficio, no a un banco?
4. ¿Fondo oscuro, acento verde, wordmark en minúscula?
5. ¿Cero superlativos sin respaldo ("líder", "el mejor", "revolucionario")?

---

## 7. Instagram — plan de activación (`@tatupay.cl`)

Contexto de recursos: 3 socios part-time (§1 del plan), sin presupuesto de pauta en Fase 0 (§6: "$0–100.000, orgánico"). El plan de IG está diseñado para ese límite: contenido producido con Claude (Haiku, bajo esfuerzo — ver `docs/PLAN.md` §9) y publicado por el administrador público, quien lidera el piloto y el contacto con tatuadores.

### 7.1 Objetivo de esta fase

No es crecer seguidores — es **credibilidad de marca para las entrevistas y el reclutamiento del piloto** (Fase 0 ítem 3: 15–20 entrevistas, ≥8 comprometidos). Un tatuador contactado en frío busca el perfil antes de responder; el perfil tiene que sostener que esto es real y serio, no una app de estudiante.

### 7.2 Setup del perfil

- **Handle**: `@tatupay.cl` (ya referenciado en la landing y footer).
- **Nombre visible**: `tatupay — agenda y cobro para tatuadores`.
- **Bio** (150 caracteres):
  ```
  Cobra con tarjeta. Llena tu agenda. Cero mensualidad.
  La hora se bloquea solo con abono pagado.
  👇 Súmate al grupo fundador
  ```
- **Link en bio**: `tatupay.cl/#waitlist` (directo al formulario, no a la home).
- **Foto de perfil**: wordmark sobre `--ink`, "pay" en `--neon` — mismo asset que el header de la landing, exportado en PNG cuadrado.
- **Highlights** (crear cuando haya contenido, no vacíos): "Cómo funciona" · "Precio" · "Grupo fundador".

### 7.3 Pilares de contenido (rotación, no todos cada semana)

| Pilar | Qué es | Frecuencia sugerida |
|---|---|---|
| **Educativo** | Por qué el abono mata el no-show; cómo funciona el split de pago; diferencia con un link de pago suelto | 1x/semana |
| **Prueba social** | Reposts de trabajo de los tatuadores del grupo fundador (con permiso), citas de las entrevistas de Fase 0 anonimizadas | Cuando haya insumo (post-entrevistas) |
| **Detrás de cámara** | Avance del producto en construcción, "por qué cobramos 4,9% y no una mensualidad" | Quincenal |
| **Llamado a la acción** | Invitación directa al grupo fundador, tarifa preferente de por vida | 1x cada 2 semanas |

### 7.4 Cadencia realista

Acorde a §1 del plan (8–10 h/semana por socio, todos con dayjob): **2 publicaciones por semana** es sostenible; no prometer más. Formato preferente: carrusel estático (bajo costo de producción, reutiliza los assets de la landing) por sobre reels/video, que consumen tiempo que Fase 0 no tiene asignado.

### 7.5 Primeros 4 posts (listos para producir)

1. **Presentación** — carrusel 3 slides: "Pierdes clientes de tarjeta / Los no-shows te queman horas / Tu agenda vive en los DM" (mismos 3 dolores de la landing) → CTA grupo fundador.
2. **Cómo funciona** — carrusel 3 slides con los PASO 01/02/03 de la landing, mismo copy y jerarquía visual.
3. **El precio, sin letra chica** — un solo slide: "$4.900 en un tatuaje de $100k. Sin mensualidad. Si no cobras, no pagas."
4. **Grupo fundador** — CTA directo: "Partimos con un grupo chico. Tarifa preferente de por vida para los primeros." → link en bio.

Estos 4 reutilizan copy ya validado de la landing — cero trabajo nuevo de mensaje, solo de formato visual (Canva o similar, paleta de §2).

### 7.6 Qué NO hacer en esta fase

- Sin pauta paga (presupuesto $0 de §6 hasta que haya tracción).
- Sin promesas de fecha de lanzamiento pública todavía (el piloto es guante blanco con los comprometidos de las entrevistas, no abierto).
- Sin comparaciones directas nombrando a Encuadrado/AgendaPro/etc. por nombre en contenido público — el pitch comparativo (§2 del plan) es para conversación 1:1 en las entrevistas, no para redes.

---

## 8. Próxima revisión

Este manual es v1, con presupuesto cero de diseño (consistente con §6). Se revisa en el checkpoint **C1** (fin de Fase 0, `docs/PLAN.md` §9) junto con los resultados de las entrevistas — ahí se resuelve P6 (acento verde vs. naranja) y se decide si el crecimiento de Fase 1 justifica invertir en un isotipo o tipografía custom.
