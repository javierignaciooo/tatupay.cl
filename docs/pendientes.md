# Pendientes

Lista viva de tareas acordadas que aún no se ejecutan. Sacar de aquí lo que se complete.

- **Constituir tatupay SpA** (26-oct-2026): dos accionistas, Javier y Ámbar, 50/50; Franco no será
  accionista. Ejecutar en una sesión nueva con `docs/legal/handoff-constitucion-spa.md`. Antes de
  redactar: confirmar si Ámbar sigue en Corfo (Ruta B de PLAN §1.1 si sigue).

## Contexto relacionado (ya resuelto, para referencia)

- ✅ Encuesta como requisito + cupos limitados (17-jul-2026): los socios fijaron
  **30 cupos**. Implementado: la inscripción reserva el cupo, la encuesta lo confirma
  y los cupos sin encuesta se liberan; contador live de cupos restantes en la landing
  (hero y formulario, vía `spots_left` de `GET /api/waitlist`) y cupos restantes al
  momento del envío en el correo de bienvenida. Regla de honestidad: si el grupo se
  llena, hay que ejecutar de verdad la liberación de cupos sin encuesta (revisión
  manual del CSV contra las respuestas del Forms).

- Mensajes de contacto en frío: enfoque simplificado — invitan solo a inscribirse en
  tatupay.cl; la condición de la encuesta se revela en la landing y al inscribirse.
  Ver `docs/entrevistas/mensajes-cold-outreach.md`.
