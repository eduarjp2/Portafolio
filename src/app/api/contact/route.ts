
import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { error: "El servicio de contacto no está configurado." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, website } = body;

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      name.trim().length < 2 ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      subject.trim().length < 3 ||
      subject.length > 150 ||
      message.trim().length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Revisa los datos del formulario." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim());

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email.trim(),
      subject: `Nuevo contacto: ${subject.trim()}`,
      text: [
        `Nombre: ${name.trim()}`,
        `Correo: ${email.trim()}`,
        `Asunto: ${subject.trim()}`,
        "",
        "Mensaje:",
        message.trim(),
      ].join("\n"),
      html: `
        <div style="margin:0;padding:32px 12px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
          <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">
            <div style="padding:28px 32px;background:#171717;color:#ffffff;">
              <p style="margin:0 0 10px;color:#d4b46a;font-size:12px;font-weight:bold;letter-spacing:2px;">PORTAFOLIO PROFESIONAL</p>
              <h1 style="margin:0;font-size:24px;">Nuevo mensaje recibido</h1>
              <p style="margin:10px 0 0;color:#d1d5db;font-size:14px;">Alguien se ha puesto en contacto contigo.</p>
            </div>
            <div style="padding:28px 32px;">
              <p style="margin:0 0 6px;color:#6b7280;font-size:11px;font-weight:bold;letter-spacing:1px;">NOMBRE</p>
              <p style="margin:0 0 22px;font-size:16px;">${safeName}</p>
              <p style="margin:0 0 6px;color:#6b7280;font-size:11px;font-weight:bold;letter-spacing:1px;">CORREO ELECTRÓNICO</p>
              <p style="margin:0 0 22px;font-size:16px;"><a href="mailto:${safeEmail}" style="color:#8a6d2f;text-decoration:none;">${safeEmail}</a></p>
              <p style="margin:0 0 6px;color:#6b7280;font-size:11px;font-weight:bold;letter-spacing:1px;">ASUNTO</p>
              <p style="margin:0 0 22px;font-size:16px;">${safeSubject}</p>
              <p style="margin:0 0 10px;color:#6b7280;font-size:11px;font-weight:bold;letter-spacing:1px;">MENSAJE</p>
              <div style="padding:18px;background:#f9fafb;border-left:3px solid #d4b46a;border-radius:4px;font-size:15px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">${safeMessage}</div>
              <p style="margin:24px 0 0;font-size:13px;color:#6b7280;">Puedes responder a este correo para contactar directamente a la persona que te escribió.</p>
            </div>
            <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;">Mensaje enviado desde el formulario de contacto de tu portafolio.</div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtalo más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 400 }
    );
  }
}
