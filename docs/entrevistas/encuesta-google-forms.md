# Encuesta autoadministrada — Fase 0 (complemento al guion de entrevistas)

Versión "envíale el link y responde por su cuenta" de `docs/entrevistas/guion-entrevistas.md`, para llegar a más tatuadores de los que da el tiempo para entrevistar 1:1. **No reemplaza la entrevista en vivo**: el guion en profundidad sigue siendo la fuente principal (pide comportamiento pasado, permite repreguntar); esta encuesta sirve para llegar a más volumen y para pre-filtrar a quién priorizar para la llamada.

No existe integración con la API de Google Forms, así que el formulario se arma a mano (~10 min) copiando este contenido. El documento fuente vive también en Google Drive: **[tatupay — Encuesta Fase 0 (contenido para Google Forms)](https://docs.google.com/document/d/1LotMX2aoD4iwRkYkJckJkR_ok_GGJsUrCprLrJEKejE/edit)**.

## Descripción del formulario

> Estamos construyendo tatupay: una herramienta para que tatuadores independientes en Chile cobren con tarjeta y manejen su agenda sin mensualidad. Antes de construir nada queremos entender cómo trabajas hoy. Son ~5-7 minutos, no hay respuestas correctas — mientras más real, mejor. Gracias por tu tiempo.

## Sección 1 — Quién eres

| # | Pregunta | Tipo | Obligatoria |
|---|---|---|---|
| P1 | Nombre o nombre artístico | Respuesta corta | Sí |
| P2 | Instagram (@usuario) | Respuesta corta | Sí |
| P3 | Ciudad | Respuesta corta | Sí |
| P4 | WhatsApp (para contactarte sobre el grupo fundador) | Respuesta corta | No |
| P5 | ¿Hace cuánto tatúas? | Opción múltiple: Menos de 1 año / 1 a 3 años / 3 a 5 años / 5 a 10 años / Más de 10 años | Sí |
| P6 | ¿Trabajas de forma independiente o en un estudio? | Opción múltiple: Independiente / En un estudio pero maneja sus propios clientes / Empleado de un estudio | Sí |

## Sección 2 — Cómo trabajas hoy

| # | Pregunta | Tipo | Obligatoria |
|---|---|---|---|
| P7 | ¿Cuántos tatuajes hiciste el mes pasado, aproximadamente? | Respuesta corta (número) | Sí |
| P8 | ¿Cuál es tu precio típico por sesión? | Opción múltiple: <$30.000 / $30.000–80.000 / $80.000–150.000 / $150.000–300.000 / >$300.000 | Sí |
| P9 | ¿Cómo cobras hoy? | Casillas: Efectivo / Transferencia / Tarjeta con POS propio / Tarjeta con cuenta de un tercero / Otro | Sí |
| P10 | ¿Pides abono o reserva para tomar la hora? | Opción múltiple: Sí siempre / Sí a veces / No nunca | Sí |
| P11 | Si pides abono, ¿qué % pides? | Respuesta corta (dejar en blanco si no aplica) | No |
| P12 | ¿Dónde llevas tu agenda hoy? | Casillas: Cuaderno / Google Calendar u otra app / IG-WhatsApp / App de agendamiento / La memoria / Otro | Sí |

## Sección 3 — El dolor

| # | Pregunta | Tipo | Obligatoria |
|---|---|---|---|
| P13 | No-shows o cancelaciones de última hora el mes pasado | Respuesta corta (número) | Sí |
| P14 | ¿Un cliente ha querido pagar con tarjeta/cuotas y no pudiste aceptarle? | Opción múltiple: Nunca / Rara vez / Bastante seguido / Problema constante | Sí |
| P15 | Tiempo semanal coordinando horas por DM/WhatsApp | Opción múltiple: <1h / 1-3h / 3-6h / >6h | Sí |
| P16 | ¿Qué es lo más molesto de la parte administrativa de tu pega? | Párrafo | Sí |

## Sección 4 — tatupay: tu reacción

> Texto de sección: "Así funcionaría tatupay: tienes una página pública con tu portafolio y tus horas disponibles. El cliente elige la hora y paga el abono con tarjeta ahí mismo. La hora se bloquea solo si el abono está pagado. El saldo te lo paga en el estudio como siempre. La plata del abono te llega directo a tu cuenta de Mercado Pago."

| # | Pregunta | Tipo | Obligatoria |
|---|---|---|---|
| P17 | Primera reacción, sin filtro | Párrafo | Sí |
| P18 | Test de precio (S1): abono $50.000 → llegan ~$47.000. Escala de acuerdo | Escala lineal 1–5 (1=No pagaría eso, 5=Me parece justo) | Sí |
| P19 | ¿A qué comisión (%) dejaría de cerrarte? | Respuesta corta | Sí |
| P20 | Test de flujo (S3): abono online + saldo presencial, ¿calza? | Opción múltiple: Calza perfecto / Prefiero todo online / Prefiero todo presencial / Depende | Sí |
| P21 | ¿Qué tendría que tener sí o sí para que lo usaras? | Párrafo | No |
| P22 | ¿Usas hoy una herramienta parecida? ¿Cuál y por qué? | Párrafo | No |

## Sección 5 — Grupo fundador

| # | Pregunta | Tipo | Obligatoria |
|---|---|---|---|
| P23 | ¿Te sumas al grupo fundador cuando esté listo (2-3 meses)? | Opción múltiple: Sí cuenta conmigo / Tal vez contáctenme / No por ahora | Sí |
| P24 | Referidos (S4 + pipeline): 1-2 tatuadores más, nombre/IG | Párrafo | No |
| P25 | ¿Cuántos tatuadores activos calculas en tu comuna/ciudad? | Respuesta corta | No |

## Cómo armarlo en Google Forms (~10 min)

1. `forms.google.com` → formulario en blanco. Título + descripción de arriba.
2. Crear cada pregunta en orden con el tipo indicado; usar **Añadir sección** entre los 5 bloques.
3. Configuración (⚙): desactivar "Limitar a 1 respuesta" (no se pide login de Google) y **no** activar "Recopilar direcciones de correo".
4. P19 y P25 pueden ponerse como tipo "Número" si prefieres validación estricta.
5. Enviar → ícono de link → activar "Acortar URL" → copiar y mandar por WhatsApp/Instagram.
6. Probarlo tú mismo una vez antes de enviarlo.

## Consolidación

Las respuestas quedan en la pestaña "Respuestas" del Form (exportables a Sheets). Se consolidan junto con las entrevistas en vivo en `docs/entrevistas/resultados.md` — ese archivo es el input del checkpoint **C1** (`docs/PLAN.md` §9).
