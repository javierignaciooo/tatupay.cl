# Handoff — Constitución de tatupay SpA (dos accionistas, 50/50)

*Encargo de Javier, 26-oct-2026. Destinatario: la sesión de Claude que ejecute la constitución.*

**Prompt para abrir la sesión** (copiar tal cual):

> Lee `docs/legal/handoff-constitucion-spa.md` y ejecútalo. Parte por las preguntas de la sección 3; no redactes nada antes de tener esas respuestas.

---

## 0. Antes de empezar

Lee, en este orden: `docs/PLAN.md` §1, §1.1, §1.2, §1.4, §6 y §10 (P1–P4); `docs/finanzas/fondos-corfo.md`;
`docs/legal/boletas-y-tributacion-tatuadores.md` §5. Ahí está todo el razonamiento previo sobre estructura
societaria, inhabilidad Corfo, DICOM y tributación de tatupay.

Javier es abogado (Fiscalía de CONAF). No le expliques lo básico ni le agregues advertencias genéricas. Toda
cita normativa debe verificarse contra el texto vigente (BCN, SII, Diario Oficial); lo que no hayas verificado,
márcalo como tal. Los documentos para firma van en tono legal chileno formal.

## 1. Encargo

Dejar lista para firmar y tramitar la constitución de la sociedad formal de tatupay, con **dos accionistas por
partes iguales: Javier y Ámbar**. Claude prepara todo (decisiones, estatutos, pacto, cesiones, checklist);
el trámite en el Registro de Empresas y Sociedades y la firma los hacen ellos con su Clave Única / firma
electrónica avanzada.

## 2. Qué cambia respecto del plan

El plan v4 asume tres socios. La decisión nueva tiene cuatro efectos que debes recoger:

**a) Franco (administrador público) no será accionista.** Se cae la recomendación E1 de §1.2, que lo ponía como
representante legal para aislar el DICOM de Javier frente a la banca. Quedan sin dueño sus roles (Operaciones /
Piloto y liderazgo de la vertical peluquería, §1 y §4). La landing todavía dice "tres socios" y lo nombra.

**b) 50/50 entre dos personas = riesgo estructural de empate.** El mecanismo de desempate no es opcional (§5.5).

**c) P4 (equity y vesting) se cierra en 50/50**; el vesting con cliff que pedía el plan sigue pendiente de decidir (§5.6).

**d) Ámbar, según el repo, es la ingeniera comercial funcionaria de Corfo** (PLAN §1 y §1.1; la landing la
presentó en jul-2026 como "Ámbar (ingeniera comercial)" y desde el 31-jul como "Amber (creativa)"). Si sigue en
Corfo, entrar con el 50% es la **Ruta B** de §1.1: la sociedad renuncia a instrumentos Corfo, incluido Semilla
Expande, que `fondos-corfo.md` fijó como fondo objetivo del año 2. El informe Corfo exige resolver esto **antes
de constituir**, porque la estructura que se inscriba es la que Corfo mirará después.

## 3. Gate: preguntas a Javier antes de redactar

No avances a §5 sin respuesta explícita a estas tres:

1. **¿Ámbar sigue trabajando en Corfo?** Si sí: confirmar que se opta conscientemente por la Ruta B (renuncia a
   fondos Corfo) y registrarlo como cierre de P1. Si ya salió: fecha de salida, y verificar si las bases del fondo
   objetivo inhabilitan a ex funcionarios por algún período.
2. **Nombre legal exacto de Ámbar según cédula** (el repo usa "Ámbar" y "Amber").
3. **Franco: ¿sale sin participación alguna?** ¿Hubo promesa de acciones, aportes en dinero o trabajo
   (entrevistas, onboarding) que haya que reconocer o cerrar por escrito?

Después pide los datos de §4.

## 4. Datos a recopilar

| Por accionista (Javier y Ámbar) | Sociedad |
|---|---|
| Nombre completo, RUT, nacionalidad, profesión | Razón social (propuesta: `tatupay SpA`) y nombre de fantasía (`tatupay`) |
| Estado civil y régimen patrimonial (relevante para comparecencia y para el pacto, §5.8) | Domicilio (comuna) |
| Domicilio y correo | Capital, número de acciones, plazo de entero y forma de pago (§5.3) |
| Medio de firma: FEA o firma ante notario vía RES | ¿Aportes en especie? (dominio, código, marca) o todo en dinero |
| Situación comercial: DICOM de Javier (P2, origen aún abierto); confirmar que Ámbar no tiene | Administración y representación (§5.4) |
| Rol operativo de cada uno (el plan asignaba Finanzas a la ingeniera comercial; la landing hoy dice "creativa") | Estado de la solicitud INAPI y titular del dominio `tatupay.cl` en NIC Chile |

**Datos personales fuera del repo.** RUT, domicilios y estado civil no se commitean: en el repo van placeholders
(`[RUT_JAVIER]`, `[DOMICILIO_AMBAR]`); la versión completa para firma se entrega directo a Javier.

## 5. Decisiones de diseño: proponer con recomendación, Javier aprueba

**5.1 Vehículo y vía.** SpA (Código de Comercio art. 424 y siguientes; supletoriamente, normas de S.A. cerradas;
verificar). Es el vehículo que admite series de acciones, vesting e inversionistas futuros. Vía recomendada:
Registro de Empresas y Sociedades (Ley 20.659), gratuito (§6 del plan estima $0–20.000). Verifica qué campos del
formulario SpA vigente admiten texto libre: lo que no quepa en estatutos va al pacto de accionistas. Alternativa
si el formulario restringe demasiado: escritura pública + extracto inscrito y publicado.

**5.2 Objeto.** Amplio, que cubra: plataforma tecnológica de agendamiento y reservas; gestión de cobros por cuenta
de terceros **a través de proveedores de pago autorizados, sin captar ni custodiar fondos** (coherente con PLAN §2
y la Ley 21.521); desarrollo y licenciamiento de software; publicidad y marketing digital; y otras verticales de
servicios (para que la vertical peluquería del §4 quede dentro de la sociedad). Más la fórmula residual de
cualquier actividad lícita que acuerden los accionistas.

**5.3 Capital.** Propuesta de partida: capital moderado y simétrico (p. ej. $1.000.000 en 1.000 acciones, 500 por
accionista), pagado en dinero, con plazo de entero definido (verificar regla supletoria si los estatutos callan).
La caja del plan (§6, ~$2–4M) se financia con aportes iguales vía aumentos de capital o préstamos de socios
documentados. Aportes asimétricos rompen el 50/50: el pacto debe decir qué pasa si uno aporta y el otro no.

**5.4 Administración y representación.** Sin Franco, E1 no existe. Opciones: (a) Ámbar representante legal
(mejor para banca si su boletín está limpio, pero aumenta su exposición si sigue en Corfo); (b) Javier
representante legal y banca temprana vía cuenta Mercado Pago empresa, como ya preveía §1.2; (c) ambos
administradores, con facultades separadas para el giro ordinario bajo un umbral en UF y conjuntas sobre el umbral
y para disponer, endeudar, garantizar y contratar con partes relacionadas. Recomendación por defecto: (c), con
cuenta MP empresa hasta resolver P2.

**5.5 Empate.** Materias reservadas a unanimidad (aumentos de capital, entrada de inversionistas, venta de
activos relevantes, endeudamiento sobre umbral, cambio de giro o pasarela). Empate persistente: reunión de
escalamiento → mediación con plazo → arbitraje (definir institución, p. ej. CAM Santiago, y si el árbitro es
de derecho o arbitrador) → como última salida, cláusula de compra-venta forzada (shotgun o similar). Explicita el
trade-off: el shotgun favorece al socio con más liquidez.

**5.6 Vesting.** El plan pide 4 años con cliff de 1 año. Implementación chilena habitual: reverse vesting mediante
opción de compra sobre las acciones no devengadas a valor nominal ante la salida de un socio, con distinción good
leaver / bad leaver y aceleración ante venta de la sociedad. Verifica si la SpA puede adquirir acciones propias;
si no, la opción es a favor del otro accionista. Javier decide si aplica entre dos fundadores 50/50 desde el día 1.

**5.7 Dedicación.** El plan fija mínimo 8–10 h/semana por socio con dayjobs (§1). El pacto debe tener el gatillo
por incumplimiento sostenido (dilución o salida), conectado al vesting.

**5.8 Transferencia de acciones.** Derecho de adquisición preferente, prohibición de gravar sin consentimiento,
tag-along / drag-along (pensando en la ronda post-piloto), y opciones de compra ante muerte, interdicción o
liquidación del régimen patrimonial de un accionista (divorcio, sociedad conyugal).

**5.9 Propiedad intelectual y activos previos.** Cesión a la SpA de todo lo creado hasta ahora: este repo y el
código, landing, manual de marca, contenido de Instagram, dominio `tatupay.cl` (transferencia en NIC Chile), cuentas
Cloudflare / Resend / Instagram / correo, y la base de la lista fundadora. La marca INAPI (clases 36 y 42, PLAN §6)
debe quedar a nombre de la SpA: verifica si ya se presentó y a nombre de quién. Si Franco aportó trabajo, su cesión
va en el documento de cierre (§6, E5).

**5.10 Confidencialidad, no competencia y oportunidades.** Incluir expresamente que la vertical peluquería/barbería
y la capa tipo ClassPass (PLAN §4) pertenecen a la sociedad.

**5.11 Régimen tributario al iniciar actividades.** Comparar ProPyme General (art. 14 D N°3 LIR) y ProPyme
Transparente (art. 14 D N°8) para dos dueños personas naturales sin ventas aún, con recomendación. La comisión de
tatupay está afecta a IVA y se factura al tatuador (memo tributario §5).

**5.12 Probidad de ambos.** Ámbar (si sigue en Corfo): verificar si es sujeta obligada de declaración de intereses
y patrimonio (Ley 20.880) y la normativa interna de Corfo sobre actividades particulares y conflictos de interés;
recordar que no debe intervenir en postulaciones a su servicio (PLAN §1.1). Javier: verificar si su contrato o el
reglamento interno de CONAF exige informar participación en sociedades o actividades externas. Sin figuras de
interposición (cónyuge, hermano): PLAN §1.2 y §1.4 ya las descartaron.

## 6. Entregables

| # | Entregable | Formato |
|---|---|---|
| E1 | Ficha de decisiones (§5) con recomendación por punto, para aprobación de Javier **antes** de redactar lo demás | Markdown en el repo, 1–2 páginas |
| E2 | Estatutos completos + mapeo campo por campo al formulario SpA del Registro de Empresas y Sociedades | Markdown (placeholders) + .docx |
| E3 | Pacto de accionistas (§5.4–5.10) | .docx (skill `docx`) |
| E4 | Contrato de cesión de PI y activos a la SpA | .docx |
| E5 | Acuerdo de cierre con Franco (solo si Javier lo confirma en §3) | .docx |
| E6 | Checklist post-firma con responsable y plazo: constitución en el Registro → RUT e inicio de actividades (verificar si se hace en el mismo portal) → régimen tributario → facturación electrónica SII → cuenta MP empresa / banco → transferencia de dominio NIC Chile → INAPI → declaración de beneficiarios finales (verificar obligación vigente) → contador (§6 del plan) | Markdown |
| E7 | Actualización del repo (ver §7) | Commits |

Los .docx con datos personales se entregan a Javier y **no** se commitean. Carpeta sugerida en el repo:
`docs/legal/sociedad/`.

## 7. Actualizaciones del repo al cerrar

`docs/PLAN.md` → v5: dos socios, roles redefinidos, cierre de P1 (ruta elegida) y P4 (50/50), reemplazo de E1 de
§1.2, riesgos de §8 actualizados (empate 50/50; operaciones sin dueño tras la salida de Franco), caja de §6 "entre
2 socios". `docs/finanzas/fondos-corfo.md`: si es Ruta B, dejar constancia de que Semilla Expande e instrumentos
Corfo quedan descartados y qué alternativas no-Corfo siguen abiertas. `docs/pendientes.md` y `README.md` al día.

Páginas públicas, **solo con OK de Javier**: copy de "tres socios" en `landing/index.html` y
`landing/img/README.md`; identificar a la SpA como responsable en `landing/privacidad.html` y `landing/terminos.html`
(considerar la Ley 21.719 de datos personales, cuya entrada en vigencia está prevista para el 1-dic-2026;
verificar).

## 8. Referencia rápida (estado al 26-oct-2026, según el repo)

tatupay: agenda pública + cobro del abono de reserva con tarjeta para tatuadores independientes, sobre Mercado
Pago Split; tatupay cobra comisión (4,9% + IVA; 3,9% + IVA de por vida para el piloto) y nunca custodia fondos.
Etapa: Fase 0 de validación; landing y lista fundadora (30 cupos) operando en Cloudflare; sin ventas, sin
sociedad, sin inicio de actividades. Financiamiento: bolsillo de los socios (~$2–4M hasta piloto), sin postular a
fondos este año (§1.4). Abiertos que tocan la constitución: P1 (Corfo) y P2 (origen del DICOM de Javier).
