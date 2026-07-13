# ¿Debe el tatuador emitir boleta por cada abono? — análisis tributario y de fricción

*Memo de investigación (jul 2026) para decisiones de producto de tatupay. No es asesoría tributaria
formal; las citas normativas deben verificarse antes de usarse frente a terceros.*

## Respuesta corta

**Sí, la obligación existe y nace con cada pago percibido — incluido el abono de reserva.**
El concepto de "reserva" **no** exime de emitir boleta: para un tatuador persona natural
(segunda categoría, art. 42 N°2 LIR), la renta se grava cuando se **percibe**, y el abono
se percibe cuando queda a su disposición (su cuenta de Mercado Pago). Renombrarlo no cambia
su naturaleza. Lo que sí existe es una vía **lícita** para postergar el momento de la boleta:
que el dinero no quede a disposición del artista hasta la sesión (liberación diferida). Detalle
en §4.

## 1. El marco: cómo tributa un tatuador independiente

- **Categoría**: persona natural que presta servicios donde predomina el trabajo personal →
  **segunda categoría** (art. 42 N°2 de la Ley de Impuesto a la Renta). Documento: **boleta de
  honorarios electrónica (BHE)**, gratuita, se emite en ~1 minuto desde sii.cl o la app e-Boleta.
- **IVA**: aunque la Ley 21.420 gravó con IVA los servicios en general desde el 1.1.2023, las
  personas naturales del art. 42 N°2 que emiten BHE **quedaron fuera del IVA** — sin cambios para
  ellas ([SII](https://www.sii.cl/destacados/iva_prestacion_servicios/),
  [Círculo Verde](https://www.circuloverde.cl/cambia-la-tributacion-con-iva-de-varios-tipos-de-servicios-a-partir-del-01-01-2023/)).
  El tatuador que boletea **no recarga IVA** a su cliente.
- **Inicio de actividades**: obligatorio ante el SII **dentro de los 2 meses** siguientes al inicio
  de la actividad (art. 68 Código Tributario). 100% online y gratuito
  ([ChileAtiende](https://www.chileatiende.gob.cl/fichas/3025-inicio-de-actividades-persona-natural)).
- **Retención / PPM**: cuando el pagador es un consumidor final (el cliente del tatuaje), **no hay
  retención del pagador**; es el propio artista quien entera el pago provisional mensual (F29).
  La tasa sube gradualmente por la Ley 21.133 (cotizaciones de independientes): **15,25% en 2026**,
  llegando a 17% en 2028 ([La Tercera](https://www.latercera.com/lt-board/noticia/boletas-de-honorarios-que-cambia-en-2026-y-como-impacta-la-retencion/)).
  El ajuste final ocurre en la Renta de abril, donde además se calculan las **cotizaciones
  previsionales obligatorias** (salud, AFP, seguro de accidentes — relevante para un oficio con
  riesgo sanitario).

## 2. ¿Cuándo se emite la boleta? El punto clave para el abono

Criterio SII: la BHE se emite **cuando se percibe la remuneración** — la fecha de la boleta debe
coincidir con la del pago (la guía operativa admite regularizar hasta 90 días después)
([SII — emisor de BHE](https://www.sii.cl/servicios_online/1040-1287.html),
[Oficina Virtual](https://www.oficinavirtual.cl/blog/2026/4/20/paso-a-paso-emision-boleta-de-honorarios)).
No es obligatorio emitir antes de percibir; pero percibido el anticipo, la obligación ya nació
([Círculo Verde](https://www.circuloverde.cl/cual-es-el-tratamiento-de-boletas-de-honorarios-emitidas-anticipadamente-al-pago-de-la-remuneracion/)).

Aplicado al flujo de tatupay tal como está hoy (abono se liquida "al tiro" a la cuenta del artista):

| Momento | Hecho tributario | Obligación formal |
|---|---|---|
| Cliente paga abono (30–50%) | Renta **percibida** por el artista | BHE por el monto del abono, a esa fecha |
| Sesión: cliente paga saldo | Renta percibida | Segunda BHE por el saldo |
| No-show y el artista retiene el abono | Ingreso igualmente tributable (compensación, no honorario) | Zona gris: en rigor no es remuneración por servicio; en la práctica se suele boletear igual |

**Conclusión sobre "zafar por reserva":** no hay atajo. Si el abono entra a la cuenta del artista,
es renta percibida ese día, se llame reserva, garantía o abono. Un "abono que solo reserva la hora"
sería defendible únicamente si fuera un **depósito en garantía restituible que el artista no puede
tocar** — y en el diseño actual sí lo toca (se liquida al tiro y se imputa al precio).

## 3. La realidad: informalidad y por qué ya no es sostenible

Es efectivo que gran parte del gremio no ha iniciado actividades ni boletea. Dos cambios recientes
hacen que ese equilibrio se esté acabando:

1. **Ley 21.713 ("ley de las 50 transferencias")**, vigente desde enero 2025: los bancos informan
   al SII las cuentas que reciben **50+ abonos de personas distintas en un día/semana/mes, o 100+
   en un semestre** (montos agregados, primer reporte julio 2025). Apunta exactamente al perfil
   "recibo todas mis reservas por transferencia"
   ([SII](https://www.sii.cl/destacados/ley_cumplimiento_obligaciones_tributarias/transferencias_bancarias.html),
   [Gob.cl](https://www.gob.cl/noticias/transferencias-bancarias-ley-cumplimiento-tributario-funcionamiento-combatir-informalidad/)).
2. **Los procesadores de tarjetas informan al SII** las ventas de sus comercios (Mercado Pago
   incluido). Cobrar con tarjeta vía tatupay deja huella tributaria desde el pago uno — cosa que
   el tatuador debe saber al subirse.

Implicancia honesta para el producto: **tatupay formaliza los ingresos del artista sí o sí**. Eso es
fricción para el informal… y también el mejor argumento de venta hacia el artista que ya entendió
que la informalidad se está cerrando (Ley 21.713) y prefiere ordenarse con datos, agenda y respaldo.

## 4. Opciones de diseño (de menor a mayor fricción tributaria para el artista)

**A. Liberación diferida del abono (recomendada a evaluar en Fase 1).**
Si el abono queda retenido (p. ej. en el flujo marketplace de Mercado Pago con liberación
programada) y **se libera al artista el día de la sesión**, la percepción ocurre recién en la
liberación → **una sola BHE por el total, el día de la sesión**. Ventajas: una boleta en vez de
dos, coincide con el momento en que el artista "siente" el ingreso, y además le da a tatupay una
palanca real anti-fraude/reembolsos. Costos: hay que verificarlo con MP (split/release diferido) y
redactarlo bien en los términos (el dinero no está "a disposición" del artista antes de la sesión);
si tatupay custodiara fondos por cuenta propia entraría en terreno de la Ley Fintec 21.521 —
mantenerse dentro del rail de MP evita ese problema. Ojo: esto contradice el copy actual
"la plata llega al tiro" — sería un trade-off de marketing.

**B. Flujo actual (liquidación inmediata) + ayuda para boletear.**
El artista debe emitir BHE por cada abono percibido. La fricción se ataca con producto: recordatorio
post-pago ("emite tu boleta por $45.000 — te toma 1 minuto, link directo a sii.cl"), monto y fecha
pre-calculados, y una guía "formalízate en 30 minutos" en el onboarding. La BHE es gratis y rápida;
la fricción real es psicológica y de desconocimiento, no operativa.

**C. No hacerse cargo.**
Dejar la obligación 100% en el artista sin mencionarla. Legalmente la obligación es del artista, no
de tatupay; pero un onboarding que calla esto genera artistas sorprendidos en abril (PPM +
cotizaciones) y churn con rabia. Descartada como postura de marca ("gente del oficio" no deja a los
suyos pisar un rastrillo).

**Lo que NO hay que hacer:** estructurar el producto para ocultar la percepción del ingreso
(p. ej. llamarlo "reserva" mientras el dinero llega igual a la cuenta del artista). Eso no resiste
fiscalización, expone al artista (no a tatupay) y contradice el punto 3.

## 5. Nota sobre tatupay mismo

- La **comisión de tatupay (3,9% + IVA)** es un servicio de plataforma **afecto a IVA**: tatupay
  (SpA) debe facturar con IVA al artista. El "+ IVA" del pricing ya está bien planteado.
- Al operar sobre Mercado Pago (el dinero del cliente nunca pasa por cuentas de tatupay), tatupay
  no custodia fondos y se mantiene fuera del perímetro más pesado de la Ley Fintec; conviene
  mantener ese diseño y documentarlo en los términos.

## 6. Recomendaciones accionables

1. **Fase 0 (ya):** agregar al guion de entrevistas 2 preguntas: "¿tienes inicio de actividades?"
   y "¿emites boleta por tus abonos?" — dimensiona la fricción real del segmento antes de decidir.
2. **Fase 1:** cotizar con Mercado Pago la liberación diferida (opción A). Si es viable sin costo
   relevante, resuelve la duplicidad de boletas y da control anti no-show.
3. **Producto:** recordatorio de BHE post-liquidación + guía de formalización en el onboarding
   (es un feature barato y diferenciador; ningún competidor local lo hace bien).
4. **Legal:** validar este memo con un tributarista antes del piloto (1–2 horas de consulta), en
   particular el tratamiento del abono retenido por no-show y la redacción de términos para la
   liberación diferida.

### Fuentes

- [SII — IVA en la prestación de servicios (Ley 21.420)](https://www.sii.cl/destacados/iva_prestacion_servicios/)
- [SII — ¿Quiénes deben emitir boletas de honorarios?](https://www.sii.cl/preguntas_frecuentes/declaracion_renta/001_140_1176.htm)
- [SII — Emisor de boleta de honorarios (momento de emisión)](https://www.sii.cl/servicios_online/1040-1287.html)
- [SII — Transferencias bancarias, Ley 21.713](https://www.sii.cl/destacados/ley_cumplimiento_obligaciones_tributarias/transferencias_bancarias.html)
- [SII — Estrategia de fiscalización sobre 50+ transferencias](https://www.sii.cl/noticias/2024/071124noti01smn.htm)
- [Gob.cl — Qué dice la ley de transferencias bancarias](https://www.gob.cl/noticias/transferencias-bancarias-ley-cumplimiento-tributario-funcionamiento-combatir-informalidad/)
- [BCN — Texto Ley 21.713](https://www.bcn.cl/leychile/navegar?idNorma=1207746)
- [ChileAtiende — Inicio de actividades persona natural](https://www.chileatiende.gob.cl/fichas/3025-inicio-de-actividades-persona-natural)
- [ChileAtiende — Boleta de honorarios electrónica](https://www.chileatiende.gob.cl/fichas/3088-boleta-de-honorarios-electronica)
- [Círculo Verde — Boletas de honorarios emitidas anticipadamente](https://www.circuloverde.cl/cual-es-el-tratamiento-de-boletas-de-honorarios-emitidas-anticipadamente-al-pago-de-la-remuneracion/)
- [La Tercera — Retención de boletas de honorarios 2026 (15,25%)](https://www.latercera.com/lt-board/noticia/boletas-de-honorarios-que-cambia-en-2026-y-como-impacta-la-retencion/)
- [Oficina Virtual — Ley de las 50 transferencias (2026)](https://www.oficinavirtual.cl/blog/2026/5/1/ley-de-las-50-transferencias-que-es-como-te-afecta-y-como-formalizar-tu-negocio-en-chile-2026)
