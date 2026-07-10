# tatupay.cl — Plan maestro v3: agendamiento + cobro con tarjeta para tatuadores en Chile

## Contexto

tatupay.cl es una plataforma de agendamiento y cobro con tarjeta para tatuadores independientes en Chile (referentes: Neatpagos como modelo de cobro agregador, Encuadrado como modelo de agenda). Decisiones fijas: agregador sobre pasarela licenciada (sin licencia CMF propia), comisión por transacción sin mensualidad, presupuesto medio, 3–6 meses a MVP con tatuadores reales. Repo `javierignaciooo/tatupay.cl` vacío; rama `claude/tatupay-platform-design-js476x`.

**v2 incorporó**: equipo de 3 socios (abogado fundador — legal in-house; ingeniera comercial en Corfo; administrador público), hosting en Cloudflare, acceso directo a ~7 tatuadores, costos iniciales explícitos (dominio ya pagado: $10.000), evaluación del proyecto hermano peluquería/barbería con modelo ClassPass, y checkpoints explícitos de cuándo volver a Fable/Opus.

**v3 incorpora**: los 3 socios mantienen sus dayjobs (proyecto 100% part-time ⇒ timeline realista de 6 meses y cadencia de trabajo definida en §5), la socia NO deja Corfo (se elimina esa opción del análisis de inhabilidad), y el DICOM del fundador como hecho relevante para financiamiento, banca y estructura patrimonial — incluida la evaluación de la figura de la cónyuge como accionista (§1.2).

Al aprobar: se commitea este documento como `docs/PLAN.md` y se pushea. No se construye producto aún.

---

## 1. Equipo y roles (nuevo)

| Socio | Rol operativo | Responsabilidades en el plan |
|---|---|---|
| **Fundador (abogado)** | CEO / Legal / Producto | SpA, pacto de socios, T&C y mandato de cobranza, análisis Ley 21.521, INAPI, relación con la pasarela; dirección de producto con Claude |
| **Ingeniera comercial (Corfo)** | Finanzas / Levantamiento | Modelo financiero, postulaciones a fondos, pricing, métricas del piloto |
| **Administrador público** | Operaciones / Piloto | Onboarding y soporte de tatuadores, logística del piloto, procesos internos; lidera exploración vertical peluquería |

Impacto en el plan: **el costo legal externo baja a ~$0** (antes $1,0–1,8M) — solo queda una consulta puntual de contraste con un especialista fintech si tú lo estimas (recomendada igual: una segunda opinión escrita sobre el modelo split cuesta poco y vale mucho frente a inversionistas). Nadie del equipo programa: el desarrollo sigue siendo fundador + Claude Code, con Fable como arquitecto/revisor y Sonnet/Haiku como ejecutores.

**Dedicación: los 3 socios mantienen sus dayjobs.** Consecuencias que el plan asume desde ya:
- **Timeline oficial: 6 meses a piloto operando** (el extremo largo del rango original). Fase 0 pasa de 5 a 8 semanas; el MVP se construye en los meses 3–6.
- **Cadencia de trabajo part-time**: mínimo viable ~8–10 h/semana por socio, con una reunión semanal fija de socios (1 h, decisiones y desbloqueos) y trabajo asíncrono el resto. La ventaja estructural del modelo AI-driven es que Claude trabaja entre sesiones: el fundador deja tareas especificadas y revisa resultados, no programa línea a línea. Las entrevistas de Fase 0 se agendan en tardes/fines de semana (2–3 por semana es sostenible ⇒ 15–20 entrevistas caben justo en las 8 semanas).
- El pacto de socios debe fijar expectativas de horas y qué pasa si un socio no las cumple sostenidamente (gatillo de dilución o salida) — con dayjobs esto no es teórico.
- El vesting protege exactamente este escenario: si un dayjob se come a un socio, sus acciones no devengadas quedan en la sociedad.

**Tarea legal nueva e ineludible (Fase 0): pacto de socios con vesting.** Tres socios sin vesting es el riesgo #1 de una startup temprana. Como abogado lo redactas tú: distribución accionaria, vesting 3–4 años con cliff de 1 año, dedicación esperada, qué pasa si alguien se baja, y cláusula sobre el proyecto peluquería (¿es de la misma sociedad o del socio? — dejarlo escrito ahora evita el conflicto después).

### 1.1 Financiamiento Corfo — oportunidad y advertencia (v3: la socia NO deja Corfo)

[Semilla Inicia](https://www.chileatiende.gob.cl/fichas/67002-semilla-inicia): subsidio no reembolsable de **hasta $15M CLP (75% del proyecto)**, o **$17M (85%) si el liderazgo es femenino**. Requisitos críticos que definen el **timing**: empresa con **menos de 18 meses** de inicio de actividades y **sin ventas** al mes anterior a la convocatoria ⇒ **hay que postular ANTES de que el piloto genere las primeras comisiones**. Esto ordena el calendario: postulación en Fase 0/inicio de Fase 1, no después.

⚠️ **Advertencia de probidad (revísala tú como abogado, primera semana)**: las bases de los instrumentos Corfo típicamente **inhabilitan a trabajadores de Corfo y sus personas relacionadas** para postular o participar en beneficiarias. Dado que ella permanece en Corfo (decisión fija v3), quedan **exactamente dos rutas** — decidir antes de constituir:

- **Ruta A — Corfo posible**: ella queda **fuera de la propiedad y de la administración** (asesora, con promesa/opción de equity condicionada a que desaparezca la inhabilidad — p. ej., cuando deje Corfo en el futuro), y la empresa postula a Semilla Inicia. Ojo: revisar en las bases el alcance de "personas relacionadas" — una opción de equity futura documentada también podría ser observable; tu dictamen decide si la promesa se firma ahora o se pacta de palabra + acuerdo moral con los otros dos socios.
- **Ruta B — Ella accionista desde el día 1**: se renuncia a fondos Corfo y el financiamiento es no-Corfo: bolsillo de los socios (la caja de §6 lo permite: ~$2–4M), crowdfunding (Broota), ángeles post-piloto, fondos municipales/regionales no Corfo (Sercotec Capital Semilla Emprende es SERCOTEC, no Corfo — verificar sus propias inhabilidades, suelen ser más laxas; monto típico $3,5M).

Recomendación: **Ruta A** — el tramo de $17M/85% con liderazgo femenino se pierde (ella no puede liderar la postulación siendo funcionaria), pero el subsidio base de $15M/75% postulándolo tú o el administrador público sigue siendo el mejor dinero disponible (no diluye, no se devuelve). Nota adicional: como funcionaria, ella tampoco debe participar informalmente en la preparación de una postulación a su propio servicio — su aporte queda en estrategia financiera general y pitch a privados, no en el expediente Corfo. **No constituir la SpA con su participación hasta resolver esto.**

### 1.2 DICOM del fundador — implicancias y estructura patrimonial (nuevo v3)

Hechos verificados sobre qué bloquea realmente cada cosa:
- **Fondos públicos (Corfo/Sercotec)**: lo que inhabilita para contratar con el Estado son las **deudas tributarias con SII/Tesorería** exigibles, no el DICOM comercial en sí ([FAQ Corfo](http://wapp4.corfo.cl/archivos/PreguntasFrecuentesINICIA.pdf)). ⇒ Primera tarea: identificar el **origen** de tu DICOM. Si es deuda comercial/bancaria privada, probablemente no inhabilita la postulación; si incluye deuda fiscal, CAE o —peor— un crédito Corfo impago, sí es un problema directo y hay que regularizar antes de postular.
- **Banca**: aquí sí pesa. Los bancos revisan el boletín comercial del **representante legal y los socios principales** al abrir cuenta corriente empresa. Mitigación estructural simple: **el representante legal de la SpA sea el administrador público** (verificar que él esté limpio), y las necesidades bancarias tempranas se cubren con una **cuenta Mercado Pago de la empresa** (MP no aplica el filtro DICOM de un banco tradicional, y en nuestro modelo tatupay solo recibe comisiones — el flujo grande nunca pasa por nuestras cuentas).
- **Inversionistas (ronda ángel, mes 6+)**: en due diligence el DICOM del fundador aparece y pesa más la *sorpresa* que el hecho. Plan: regularizar o al menos renegociar antes de la ronda, y si no se alcanza, disclosearlo proactivamente con su explicación.

**Sobre delegar tu participación en tu esposa "solo para efectos patrimoniales"** — lo evalúo como input para tu propio juicio profesional, que aquí manda:
1. **Régimen matrimonial primero**: si están casados en **sociedad conyugal**, las acciones que ella adquiera pueden ingresar al haber social administrado por el marido — el efecto patrimonial buscado se deshace solo. La figura solo opera limpio con **separación total de bienes** (o participación en los gananciales, con matices). Si hay sociedad conyugal, habría que pactar separación antes, lo que a su vez deja huella temporal evidente.
2. **Riesgo de acción pauliana / fraude a acreedores**: si el propósito de poner las acciones en su nombre es sustraerlas del alcance de tus acreedores actuales (los del DICOM), los actos son revocables vía acción pauliana y, en escenarios de insolvencia agravada, exponen a reproche penal (alzamiento de bienes). Tú conoces el estándar mejor que yo: la pregunta que un juez haría es *para qué* se hizo.
3. **Beneficiario final y fondos públicos**: el registro de beneficiarios finales y las declaraciones juradas de los instrumentos públicos apuntan a quien **controla de facto**. Si tú diriges la empresa y ella solo presta el nombre ante un fondo público, eso es simulación y arriesga el subsidio completo más consecuencias personales — no usar la figura en el expediente Corfo bajo ninguna circunstancia.

**Recomendación (escenario E1, el del plan)**: tú accionista a nombre propio + representante legal el administrador público + banca vía MP al inicio + regularización del DICOM calendarizada antes de la ronda (mes 4–6). Tu esposa como accionista **real** (aporta, participa de juntas, separación de bienes vigente) es un plan B jurídicamente legítimo si tu análisis de los puntos 1–2 lo permite — pero para el problema concreto (fondos y banca) E1 lo resuelve sin ella y sin zona gris. El DICOM, en sí, no impide ser accionista de una SpA ni dirigirla.

### 1.3 Colaboración del equipo: Claude, GitHub y costo $0 (nuevo v3)

No se necesita plan Enterprise (ni Team) para trabajar juntos:

- **El repo GitHub (privado, gratis) es el hub del proyecto** — no solo del código: `docs/PLAN.md`, actas de la reunión semanal, resultados de entrevistas, modelo financiero, manual de marca. GitHub gratis permite colaboradores ilimitados en repos privados.
- **Los socios no técnicos NO necesitan "aprender GitHub"** en serio: usan la interfaz web para leer documentos (el Markdown se renderiza como página), comentar en Issues y ver avances. Curva: una tarde. Nada de terminal, ramas ni comandos — eso queda del lado del fundador + Claude.
- **Claude es por cuenta individual**: las sesiones no se comparten entre cuentas personales (Team/Enterprise de claude.ai agregan proyectos compartidos, pero exigen mínimo de asientos y no se justifican para 3 part-time). Modelo práctico: **solo el fundador necesita Claude Code**; los otros dos, si quieren Claude para sus frentes (contenido de marketing, modelo financiero), les basta cuenta Pro individual (~US$20/mes) o la gratuita — y suben resultados al repo.
- **Contexto compartido sin cuenta compartida**: todo lo importante vive en el repo, así que cualquier sesión de Claude recupera el estado completo leyendo `docs/`. **El repo es la memoria compartida; Claude es el ejecutor que cada uno enchufa a esa memoria.**
- Complemento gratis para lo no-técnico: Google Docs para borradores en edición simultánea, cuyo resultado final se congela en el repo. Evitar herramientas de pago (Notion/Slack pagados) en esta etapa — WhatsApp de socios + reunión semanal + repo cubren todo.

---

## 2. Pasarela y comisión (sin cambios de fondo — resumen)

- **Mercado Pago Split de Pagos**: el dinero va directo del cliente a la cuenta MP del tatuador (OAuth); tatupay cobra vía `application_fee`. Sin custodia de fondos ⇒ fuera de las figuras de la Ley 21.521; KYC delegado en MP; contracargos viven en la cuenta del tatuador con evidencia aportada por tatupay. Costo base 2,89–3,19% + IVA. Plan B validado en Fase 0: Getnet marketplace. Fintoc (1% + IVA, transferencias) queda para fase 2 por su mínimo de 6,5 UF/mes de facturación.
- **Comisión al tatuador: 4,9% + IVA** todo incluido; **3,9% + IVA de por vida para el piloto**. Margen bruto ~1,7 pts del GMV. Pitch de elasticidad: $4.900 en un tatuaje de $100k contra perder al cliente de tarjeta; más barato que la ~1 UF/mes fija de Encuadrado para el tatuador típico. Se valida el número en las entrevistas antes de publicarlo en la landing.

## 3. Alcance MVP (sin cambios — resumen)

**100% web, mobile-first, panel del tatuador como PWA.** El cliente llega desde Instagram → link en bio → página pública → paga el **abono de reserva** (30–50% configurable) con tarjeta; el saldo se paga en el estudio. La hora se bloquea solo con abono pagado — eso mata el no-show y es el pitch contra "Mercado Pago + Google Calendar". Apps nativas: fase 3, con criterios (>300–500 tatuadores activos + necesidad de push demostrada + ronda cerrada).

---

## 4. Proyecto peluquería/barbería + modelo ClassPass: evaluación (nuevo)

**Recomendación: secuencial, no simultáneo — pero con arquitectura compartida decidida hoy.**

Análisis:
1. **El core es el mismo** (~70–80% del código: perfiles, servicios, disponibilidad, reservas, abonos, panel, pagos split). Sería un desperdicio no reutilizarlo. Pero **el mercado es opuesto**: peluquería/barbería en Chile está saturado de agendas (AgendaPro, Reservo, Encuadrado, Booksy), el ticket es bajo ($15–25k ⇒ la comisión porcentual rinde poco) y el rubro ya acepta tarjeta en el local. Tatuadores son un nicho desatendido con ticket alto — por eso tatupay va primero y solo.
2. **ClassPass es otro negocio, no una feature**: es un marketplace de demanda con créditos/suscripción que vende *inventario ocioso* de una *oferta ya densa*. Sin cientos de peluquerías afiliadas no hay qué venderle al suscriptor. Además barbería tiene alta lealtad al profesional (la gente repite con "su" barbero), lo que debilita el motor de descubrimiento que hace funcionar a ClassPass en fitness. Es una **capa 3**, construible solo sobre una vertical de agenda ya validada y densa — no un punto de partida.
3. **Riesgo real de hacerlos juntos**: tres socios sin desarrollador dividiendo foco entre dos validaciones de mercado distintas en 6 meses = ninguna bien hecha. La evidencia del rubro (Encuadrado mismo) es que se gana una vertical primero.

**Decisión operativa concreta**:
- El codebase se diseña **multi-vertical desde el día 1** (costo marginal bajo si se decide ahora): entidad `vertical` en la config, textos/categorías/campos parametrizados, marca desacoplada del core. Fable lo deja especificado en el modelo de datos.
- **Gate para abrir la vertical peluquería** (fase 3): tatupay con 100+ profesionales activos y churn mensual <5%, y el pacto de socios ya definió la titularidad del proyecto hermano. Se lanza como segunda marca sobre el mismo motor, liderada por el administrador público.
- **Gate para la capa ClassPass**: existencia previa de ≥200 prestadores activos en la vertical con inventario ocioso medible. Antes de eso, ni prototipo.
- Mientras tanto, el socio administra público capitaliza el interés: entrevistas exploratorias al rubro peluquería con el mismo guion de Fase 0 (costo ~0, aprendizaje directo).

---

## 5. Plan por fases (ajustado al equipo)

### Fase 0 — Validación y fundaciones (semanas 1–8, part-time)

| # | Entregable | Responsable | Nota |
|---|---|---|---|
| 0 | **Dictamen interno inhabilidad Corfo + estructura societaria** | Abogado | Bloquea la constitución; decide si la socia entra a la propiedad ahora |
| 1 | **Pacto de socios con vesting** + cláusula proyecto peluquería | Abogado | Antes de constituir |
| 2 | **SpA + inicio actividades SII + INAPI** (clases 36 y 42) | Abogado | "Tu Empresa en un Día" (gratis); INAPI autotramitada |
| 3 | **Entrevistas a 15–20 tatuadores** | Fundador + admin. público | Base: 7 alcanzables (2 directos + 3 indirectos + 1 de la socia) → cada entrevista termina pidiendo 2 referidos (bola de nieve). Meta: ≥60% valida el 4,9% y ≥8 comprometidos al piloto |
| 4 | **Landing + waitlist en tatupay.cl** (Cloudflare) | Claude (Sonnet) | Único código de Fase 0 |
| 5 | **Sandbox MP Split punta a punta** + contacto comercial MP; plan B Getnet si falla | Fundador + Claude | Go/no-go documentado |
| 6 | **Postulación Semilla Inicia** (solo en Ruta A de §1.1) | Fundador o admin. público | Antes de la primera venta; la socia NO participa del expediente (probidad); tramo base $15M/75% |
| 7 | Identidad de marca + IG activo | Claude (Sonnet) + equipo | Manual en `docs/brand/` |

### Fase 1 — MVP (meses 3–6)
Sin cambios de alcance: onboarding del tatuador (perfil, portafolio, servicios con % de abono, horarios), página pública `tatupay.cl/{artista}`, checkout del abono vía MP, panel PWA, notificaciones (correo + links `wa.me`), consentimiento anti-contracargo con timestamp/IP. Piloto guante-blanco con los ≥8 comprometidos; el administrador público es el dueño del onboarding y soporte. Fuera del MVP: boletas SII, paquetes, multi-artista, apps, cobro 100% online.

### Fase 2 — Escalamiento (meses 7+)
Prioridades candidatas según piloto: boletas SII automáticas (OpenFactura/SimpleAPI) → WhatsApp Business API → cobro de saldo online y paquetes → autoservicio + apertura pública + referidos → renegociación de tasas / Fintoc A2A → estudios multi-artista. Fase 3: vertical peluquería y, mucho después, capa ClassPass (gates de §4); apps nativas según criterios de §3.

---

## 6. Costos iniciales explícitos (nuevo — reemplaza la estimación gruesa)

Ya pagado: **dominio tatupay.cl — $10.000**.

### Desembolso Fase 0 (semanas 1–8)
| Ítem | Costo | Nota |
|---|---|---|
| Constitución SpA | **$0–20.000** | Registro de Empresas en un Día es gratuito; costo solo si se requiere firma electrónica avanzada/notaría |
| Marca INAPI, 2 clases (36 y 42) | **~$400.000–450.000** | ~3 UTM por clase entre presentación y registro; autotramitada por ti, sin honorarios. Clase 9 (apps) se posterga a fase 3 |
| Hosting Cloudflare | **$0** | Free tier (Pages/Workers) sobra para landing + waitlist |
| Correo @tatupay.cl | **$0** | Cloudflare Email Routing (recepción) + Resend free tier (3.000 envíos/mes) para transaccional. Google Workspace se posterga |
| Supabase (DB/auth) | **$0** | Free tier |
| Herramientas AI (Claude) | **$25.000–100.000/mes** | Según plan; es el "sueldo" del equipo de desarrollo |
| Marketing | **$0–100.000** | Orgánico: IG con contenido hecho por Claude; sin pauta aún |
| Legal externo (opcional) | **$0 (o ~$300.000)** | Solo si quieres segunda opinión fintech escrita |
| **Total Fase 0** | **~$450.000–700.000** | Dominado por INAPI |

### Run-rate mensual Fase 1 (meses 3–6)
| Ítem | Costo/mes | Nota |
|---|---|---|
| Cloudflare Workers Paid | **~$5.000** (US$5) | Necesario al desplegar el producto; R2 free tier para portafolios |
| Supabase Pro | **$0 → ~$24.000** (US$25) | Subir cuando el free tier quede corto (probablemente mes 3–4) |
| Resend / correo | **$0** | Free tier alcanza para el piloto |
| Contabilidad | **$80.000–150.000** | Desde inicio de actividades; ProPyme, pocos documentos |
| Marketing piloto | **$150.000–400.000** | Contenido + pauta IG chica dirigida a tatuadores + material impreso para estudios |
| Herramientas AI | **$50.000–150.000** | Sube con el desarrollo activo |
| Sentry, dominio extra, misc. | **$0–20.000** | Free tiers |
| **Total mensual** | **~$300.000–750.000** | |

**Caja total estimada hasta piloto operando (mes 6, timeline part-time): ~$2,0M–4,0M CLP.** Financiable de bolsillo entre 3 socios y/o cubierto con creces por Semilla Inicia ($15M por Ruta A de §1.1) si la postulación entra a tiempo. La ronda ángel se busca **después** del piloto, con tracción — y con el DICOM regularizado o discloseado (§1.2).

---

## 7. Roadmap técnico — stack ajustado a Cloudflare (cambiado)

- **Next.js 15 + TypeScript desplegado en Cloudflare Workers vía `@opennextjs/cloudflare`** (adaptador oficial OpenNext; sustituye a Vercel). La landing puede partir en Cloudflare Pages. Trade-off asumido: algo más de fricción de build que Vercel, a cambio de costo ~fijo de US$5/mes y todo el perímetro en un solo proveedor.
- **Supabase Postgres + Auth** se mantiene (los datos de dinero quieren Postgres relacional, no D1/SQLite; Cloudflare no ofrece Postgres gestionado). Conexión desde Workers vía driver HTTP de Supabase (`supabase-js`/postgres.js con Hyperdrive si hiciera falta).
- **Cloudflare R2** para imágenes de portafolio (egress gratis) + **Cloudflare Images** opcional para resize. **Turnstile** (CAPTCHA gratis de Cloudflare) en el formulario público de reservas — encaje perfecto contra spam de agendamiento.
- **Email Routing** (recepción @tatupay.cl, gratis) + **Resend** (envío transaccional). DNS, WAF y analytics: Cloudflare.
- Sin cambios: Tailwind + shadcn/ui dark-first, PWA, interfaz `PaymentProvider` que abstrae MP, webhooks con tabla `webhook_events` idempotente, máquina de estados `pending → paid → settled / refunded / disputed`, GitHub Actions para CI, Sentry.
- **Cambio por §4**: el modelo de datos incluye `vertical` desde el día 1 (tatuaje hoy; peluquería después sin refactor).

Orden de construcción igual que v1: esqueleto/auth/datos → onboarding → página pública + disponibilidad → checkout/webhooks → panel → notificaciones/consentimiento → hardening → piloto.

---

## 8. Riesgos (delta v2)

Se mantiene la tabla v1 (contracargos → abono + consentimiento con evidencia; regulatorio → split sin custodia + opinión escrita; dependencia MP → interfaz `PaymentProvider` + Getnet plan B; concentración early; fraude de cuentas; no-shows → el abono es el producto). Se agregan:

| Riesgo nuevo | Mitigación |
|---|---|
| **Inhabilidad Corfo por la socia** (pierde acceso al fondo principal) | Dictamen interno semana 1 antes de constituir; Ruta A (asesora fuera de la propiedad, Corfo posible) vs Ruta B (accionista, financiamiento no-Corfo) — §1.1 |
| **DICOM del fundador** (banca, fondos, due diligence) | Identificar origen de la deuda semana 1; rep legal = administrador público; banca temprana vía cuenta MP; regularizar antes de la ronda; NO usar interposición de la cónyuge ante fondos públicos — §1.2 |
| **Burn-out / abandono part-time** (3 dayjobs) | Cadencia mínima pactada (8–10 h/semana), reunión semanal fija, vesting con cliff, gatillos de dilución por incumplimiento sostenido en el pacto |
| **Conflicto societario por el proyecto peluquería** (¿de quién es la segunda vertical?) | Cláusula expresa en el pacto de socios, Fase 0 |
| **Equipo sin perfil técnico** (dependencia total de fundador+Claude para el producto) | Checkpoints Fable de §9 como control de calidad; presupuesto AI tratado como costo fijo; documentación del código como entregable obligatorio para eventual dev contratado post-ronda |
| **Ventas tempranas inhabilitan Semilla Inicia** | Postular antes de la primera comisión cobrada; si el piloto se adelanta, cobrar $0 de comisión hasta ingresada la postulación |

---

## 9. Checkpoints Fable/Opus: cuándo volver al modelo caro (nuevo — reemplaza la lista genérica)

**Regla permanente por tipo de cambio**: si el diff toca **dinero, auth o el motor de disponibilidad** (`lib/payments/**`, webhooks de MP, estados de pago, auth/permisos, cálculo de horas disponibles) → lo diseña y/o revisa Fable antes de mergear. Si es UI, contenido, CRUD simple, marketing o docs → Sonnet/Haiku solo, sin revisión adicional.

**Checkpoints calendarizados** (cada uno es una sesión de Fable con input concreto):

| # | Momento | Qué hace Fable | Input que debe llevar el equipo |
|---|---|---|---|
| C1 | Fin Fase 0 (semana ~8) | Revisa datos de entrevistas y decide: pricing definitivo de lanzamiento, go/no-go MP Split (o activar plan B Getnet), ajustes al alcance del MVP. Escribe la spec del modelo de datos y de la arquitectura de pagos | Notas de las 15–20 entrevistas, resultado del sandbox, respuesta comercial de MP, dictamen Corfo |
| C2 | Inicio Fase 1 (mes 3) | Diseña en detalle: máquina de estados de pago, idempotencia de webhooks, motor de disponibilidad (solapamientos, dobles reservas, zonas horarias), modelo de permisos. Deja specs que Sonnet implementa | Spec C1 aprobada |
| C3 | Continuo en Fase 1 | Code review de todo PR que toque las rutas de la regla permanente (los PRs de UI/CRUD no pasan por aquí) | Cada PR sensible |
| C4 | Pre-lanzamiento piloto (mes 5–6) | Security review completa (`/security-review`) + verificación end-to-end del flujo real de dinero en staging + revisión final de T&C y consentimiento contra el flujo implementado | Producto desplegado en staging con sandbox MP |
| C5 | Post-piloto (mes 6–7) | Re-corre unit economics con datos reales (GMV, contracargos, churn, CAC), fija pricing definitivo, prioriza Fase 2, evalúa gate de vertical peluquería | 4–8 semanas de métricas del piloto |
| C6 | Pre-ronda / pre-postulación grande | Revisión del deck, modelo financiero y narrativa regulatoria | Borrador del pitch |

### Niveles de esfuerzo recomendados para Sonnet 5 y Haiku (ejecución)

En Claude Code el costo se controla en dos ejes: el modelo (`/model`) y el presupuesto de razonamiento (thinking/extended thinking). Regla general: **el esfuerzo alto no compensa una spec ambigua** — si la tarea necesita "pensar mucho", la spec está incompleta y eso se arregla en Fable, no subiendo el thinking del ejecutor.

| Tipo de tarea | Modelo | Esfuerzo | Nota |
|---|---|---|---|
| Copy de marketing, plantillas de correo/WhatsApp, FAQ, actas, docs | **Haiku 4.5** | Bajo (sin thinking) | Volumen barato; un socio revisa tono antes de publicar |
| Componentes UI sueltos, estilos, tests boilerplate | **Haiku 4.5** | Bajo–medio | Solo con spec/diseño ya definido; si duda, escalar a Sonnet, no subir thinking |
| Páginas completas, CRUDs, formularios, panel, landing | **Sonnet 5** | Medio (default, sin extended thinking) | El caso de uso principal del proyecto; las specs de este plan bastan |
| Integración MP (checkout/webhooks), implementación del motor de disponibilidad, migraciones de datos | **Sonnet 5** | Alto (extended thinking) | Implementa contra la spec de C2 y **siempre** pasa por review Fable (C3) — el esfuerzo alto no sustituye la revisión |
| Arquitectura, seguridad, estados de dinero, contracargos, pricing, decisiones de plan | **Fable** | — | Checkpoints C1–C6; nunca delegar |

Heurística de escalamiento en el día a día: parte todo en Sonnet medio; baja a Haiku cuando notes que la tarea es repetitiva o puramente textual; sube a Sonnet alto **solo** cuando el diff va a tocar las rutas sensibles de la regla permanente (y entonces ya sabes que además viene review Fable). Si Sonnet alto se equivoca dos veces en la misma tarea, no insistas: es señal de spec incompleta → Fable.

**Triggers ad-hoc** (volver a Fable aunque no toque checkpoint): primer contracargo real recibido; cualquier propuesta de cambiar de pasarela o de tocar el flujo de liquidación; incidente donde un pago quedó en estado inconsistente; cambio normativo CMF/Ley Fintech; y cualquier decisión que contradiga una "decisión fija" de este plan.

---

## 10. Supuestos y preguntas abiertas (actualizado)

Resueltas en v2: equipo y roles (3 socios), hosting (Cloudflare), alcance de red inicial (7 tatuadores → bola de nieve), costos iniciales (§6), cadencia de revisión Fable (§9). Resueltas en v3: dedicación (part-time los tres ⇒ 6 meses), colaboración del equipo (§1.3, sin plan Enterprise).

Siguen abiertas para los socios:
- **P1 — Ruta A o B de Corfo** (semana 1, tu dictamen): ¿la socia queda fuera de la propiedad para habilitar Semilla Inicia (A), o entra como accionista y se financia sin Corfo (B)? Incluye definir el alcance de "personas relacionadas" en las bases vigentes.
- **P2 — Origen del DICOM** (semana 1): ¿deuda comercial privada, o incluye fiscal/CAE/crédito Corfo? Define si hay que regularizar antes de postular o solo antes de la ronda.
- **P3 — Régimen matrimonial** (solo si se considera el plan B de la cónyuge): ¿sociedad conyugal o separación de bienes? Con sociedad conyugal la figura no cumple su objetivo (§1.2).
- **P4 — Equity y vesting**: porcentajes entre los tres, gatillos por incumplimiento de horas, y titularidad del proyecto peluquería (pacto, Fase 0).
- **P5 — Validación de supuestos de mercado** (aceptación del 4,9%; flujo abono+saldo; tamaño 3.000–8.000 tatuadores) en las entrevistas de Fase 0.
- **P6 — Acento de marca** (verde neón vs naranja): A/B en la landing.

---

## 11. Verificación

- Fase 0: dictamen Corfo escrito; pacto firmado; SpA constituida; ≥60% de entrevistados valida precio y ≥8 comprometidos; split sandbox funcionando (o plan B activado); postulación Semilla ingresada antes de la primera venta.
- Fase 1: 10+ perfiles publicados; primera reserva pagada por un cliente desconocido; GMV piloto >$5M CLP/mes; contracargos <1%; los 6 checkpoints C1–C4 ejecutados y documentados en el repo.
- Fase 2: 100+ tatuadores activos; NPS >50; ninguno >20% del GMV; gate de peluquería evaluado en C5 con datos.

Primer paso al aprobar: commitear `docs/PLAN.md` a `claude/tatupay-platform-design-js476x` y pushear; luego arrancar entregables delegables de Fase 0 (landing + guion de entrevistas).
