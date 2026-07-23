// Correo de bienvenida al grupo fundador. Se envía vía Resend (https://resend.com)
// al momento del registro en la waitlist. Sin RESEND_API_KEY configurada es un no-op:
// el registro funciona igual y solo se omite el correo.
//
// Setup (una vez, ver README): dominio tatupay.cl verificado en Resend (DNS en
// Cloudflare) + secreto RESEND_API_KEY en el Worker. Respuestas del artista llegan
// a hola@tatupay.cl (Cloudflare Email Routing la reenvía al correo de los socios).

const FROM = 'tatupay <hola@tatupay.cl>';
const REPLY_TO = 'hola@tatupay.cl';
const SUBJECT = 'Estás dentro: grupo fundador de tatupay';
// Encuesta de Fase 0 (Google Forms). Responderla es lo que confirma la tarifa
// fundadora: estamos en etapa de validación, sin plataforma aún, así que lo único
// que se ofrece hoy es la tarifa — nunca prometer páginas ni fechas de producto.
const SURVEY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScEiq2j467AwSxW0fihbqIDxgSxyTEwfoo-cFt6hNls_QoTPA/viewform';

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Solo el primer nombre/palabra para el saludo; el nombre completo ya quedó en KV.
const firstName = (name) => String(name).trim().split(/\s+/)[0];

// Frase de cupos según los restantes al momento del envío. Sin el dato
// (spotsLeft no numérico) cae a una versión genérica pero igual de honesta.
function spotsLine(spotsLeft) {
  if (!Number.isFinite(spotsLeft)) {
    return 'Los cupos del grupo fundador son limitados: los reservados que no completan la encuesta se liberan.';
  }
  if (spotsLeft <= 0) {
    return 'Los 30 cupos del grupo fundador están reservados por ahora — respondiendo la encuesta quedas primero en la fila: los cupos que no la completan se liberan.';
  }
  return `El grupo fundador tiene 30 cupos y quedan ${spotsLeft}: los cupos reservados que no completan la encuesta se liberan.`;
}

export function welcomeEmailText(name, spotsLeft) {
  const n = firstName(name);
  return `Hola ${n} — reservaste tu cupo.

Quedaste inscrito en la lista del grupo fundador de tatupay. El beneficio es
la tarifa fundadora: 3,9% + IVA por cobro exitoso, de por vida (la tarifa
general será 4,9%). Sin mensualidad: si un mes no cobras, no pagas nada.

EL REQUISITO PARA ASEGURARLA
Tu inscripción reserva el cupo; la tarifa fundadora queda asegurada SOLO al
responder nuestra encuesta — 5 a 7 minutos, desde el teléfono:

${SURVEY_URL}

${spotsLine(spotsLeft)}

¿Por qué? tatupay está en etapa de diseño: todavía no hay plataforma que
mostrar, y el grupo fundador es exactamente eso — los artistas cuyas
respuestas definen qué construimos y cómo. Si prefieres conversar en vez de
llenar un formulario, responde este correo y coordinamos una llamada corta:
también confirma tu tarifa.

QUÉ VIENE DESPUÉS
1. Con las respuestas del grupo fundador terminamos de diseñar la herramienta.
2. Te avisamos cuando el piloto esté listo para partir.
3. Tú decides si te sumas — estar en la lista no te compromete a nada ni
   tiene costo.

— el equipo de tatupay
tatupay.cl · hecho en Chile para tatuadores independientes

Recibiste este correo porque te inscribiste en la lista fundadora en tatupay.cl.
¿No fuiste tú? Responde este correo y te sacamos altiro.`;
}

export function welcomeEmailHtml(name, spotsLeft) {
  const n = escapeHtml(firstName(name));
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>${SUBJECT}</title>
</head>
<body style="margin:0;padding:0;background:#0E0E0E" bgcolor="#0E0E0E">
<!-- preheader oculto -->
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all">Tarifa fundadora 3,9% + IVA de por vida. Te contamos qué viene ahora.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
<!-- Cada td carga su propio bgcolor: Gmail y otros clientes eliminan el fondo del
     body, y todo lo que "herede" el fondo termina sobre el lienzo del cliente
     (blanco en varios). Nada de texto claro puede depender de un fondo heredado. -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#0E0E0E" style="background:#0E0E0E">
<tr><td align="center" bgcolor="#0E0E0E" style="background:#0E0E0E;padding:24px 12px">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">
  <!-- contenedor maestro oscuro: si el cliente muestra su propio margen alrededor,
       esto se ve como una tarjeta redondeada intencional, no como un fondo roto -->
  <tr><td bgcolor="#0E0E0E" style="background:#0E0E0E;border-radius:14px;padding:24px 20px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

    <!-- wordmark -->
    <tr><td bgcolor="#0E0E0E" style="background:#0E0E0E;padding:0 8px 20px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:26px;font-weight:800;letter-spacing:-.03em">
      <span style="color:#F4EFE6">tatu</span><span style="color:#00E676">pay</span>
    </td></tr>

    <!-- tarjeta principal -->
    <tr><td bgcolor="#171717" style="background:#171717;border:1px solid #262626;border-radius:12px;padding:32px 28px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">

      <h1 style="margin:0 0 16px;color:#F4EFE6;font-size:26px;font-weight:800;letter-spacing:-.03em;line-height:1.25">
        Hola ${n} — reservaste tu cupo.
      </h1>

      <p style="margin:0 0 20px;color:#B8AFA6;font-size:16px;line-height:1.6">
        Quedaste inscrito en la lista del <strong style="color:#F4EFE6">grupo fundador de tatupay</strong>. El beneficio es la tarifa fundadora:
      </p>

      <!-- bloque tarifa -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
        <td bgcolor="#0E0E0E" style="background:#0E0E0E;border:1px solid #262626;border-left:3px solid #00E676;border-radius:8px;padding:18px 20px">
          <p style="margin:0;color:#F4EFE6;font-size:22px;font-weight:800;letter-spacing:-.02em">3,9% + IVA <span style="color:#B8AFA6;font-size:14px;font-weight:400">por cobro exitoso · de por vida</span></p>
          <p style="margin:8px 0 0;color:#B8AFA6;font-size:14px;line-height:1.6">La tarifa general será 4,9%. Sin mensualidad: si un mes no cobras, no pagas nada.</p>
        </td>
      </tr></table>

      <h2 style="margin:28px 0 12px;color:#F4EFE6;font-size:16px;font-weight:800;letter-spacing:-.02em">El requisito para asegurarla</h2>

      <p style="margin:0 0 18px;color:#B8AFA6;font-size:15px;line-height:1.6">
        Tu inscripción reserva el cupo; la tarifa fundadora queda asegurada <strong style="color:#F4EFE6">solo al responder nuestra encuesta</strong> — 5 a 7 minutos, desde el teléfono:
      </p>

      <!-- botón encuesta -->
      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
        <td bgcolor="#00E676" style="background:#00E676;border-radius:10px">
          <a href="${SURVEY_URL}" style="display:inline-block;padding:13px 26px;color:#0E0E0E;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;font-weight:700;text-decoration:none">Responder la encuesta</a>
        </td>
      </tr></table>

      <p style="margin:16px 0 0;color:#F4EFE6;font-size:14px;line-height:1.6;font-weight:600">
        ${spotsLine(spotsLeft)}
      </p>

      <p style="margin:18px 0 0;color:#B8AFA6;font-size:14px;line-height:1.6">
        ¿Por qué? tatupay está en <strong style="color:#F4EFE6">etapa de diseño</strong>: todavía no hay plataforma que mostrar, y el grupo fundador es exactamente eso — los artistas cuyas respuestas definen qué construimos y cómo. Si prefieres conversar en vez de llenar un formulario, <strong style="color:#F4EFE6">responde este correo</strong> y coordinamos una llamada corta: también confirma tu tarifa.
      </p>

      <h2 style="margin:28px 0 12px;color:#F4EFE6;font-size:16px;font-weight:800;letter-spacing:-.02em">Qué viene después</h2>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top" style="padding:6px 12px 6px 0;color:#00E676;font-family:ui-monospace,Menlo,monospace;font-size:13px;white-space:nowrap">PASO 01</td>
          <td style="padding:6px 0;color:#B8AFA6;font-size:15px;line-height:1.6">Con las respuestas del grupo fundador terminamos de diseñar la herramienta.</td>
        </tr>
        <tr>
          <td valign="top" style="padding:6px 12px 6px 0;color:#00E676;font-family:ui-monospace,Menlo,monospace;font-size:13px;white-space:nowrap">PASO 02</td>
          <td style="padding:6px 0;color:#B8AFA6;font-size:15px;line-height:1.6">Te avisamos cuando el piloto esté listo para partir.</td>
        </tr>
        <tr>
          <td valign="top" style="padding:6px 12px 6px 0;color:#00E676;font-family:ui-monospace,Menlo,monospace;font-size:13px;white-space:nowrap">PASO 03</td>
          <td style="padding:6px 0;color:#B8AFA6;font-size:15px;line-height:1.6">Tú decides si te sumas — estar en la lista no te compromete a nada ni tiene costo.</td>
        </tr>
      </table>

      <p style="margin:24px 0 0;color:#F4EFE6;font-size:15px;line-height:1.6">— el equipo de tatupay</p>
    </td></tr>

    <!-- footer -->
    <tr><td bgcolor="#0E0E0E" style="background:#0E0E0E;padding:20px 8px 0;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
      <p style="margin:0;color:#8A847B;font-size:12px;line-height:1.6">
        <a href="https://tatupay.cl" style="color:#8A847B">tatupay.cl</a> · hecho en Chile 🇨🇱 para tatuadores independientes<br>
        Recibiste este correo porque te inscribiste en la lista fundadora en tatupay.cl.
        ¿No fuiste tú? Responde este correo y te sacamos altiro.
      </p>
    </td></tr>

  </table>
  </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

// Envía el correo de bienvenida. Nunca lanza: un fallo de correo no puede
// botar un registro que ya quedó guardado en KV.
export async function sendWelcomeEmail(env, entry, spotsLeft) {
  if (!env.RESEND_API_KEY) return { skipped: true };
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [entry.email],
        reply_to: REPLY_TO,
        subject: SUBJECT,
        html: welcomeEmailHtml(entry.name, spotsLeft),
        text: welcomeEmailText(entry.name, spotsLeft),
      }),
    });
    if (!res.ok) console.error('resend error', res.status, await res.text());
    return { ok: res.ok };
  } catch (err) {
    console.error('resend fetch failed', err);
    return { ok: false };
  }
}
