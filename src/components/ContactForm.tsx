"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors hover:border-primary/50 focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-primary/40 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
const labelClass = "mb-1.5 block text-sm font-medium";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const disabled = status === "sending";

  return (
    <form className="relative mt-6 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="contact-name">Nombre</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
          disabled={disabled}
          placeholder="Tu nombre"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-email">Correo electrónico</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          disabled={disabled}
          placeholder="tu@correo.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-subject">Asunto</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          minLength={3}
          maxLength={150}
          required
          disabled={disabled}
          placeholder="¿De qué quieres hablar?"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          minLength={10}
          maxLength={5000}
          required
          disabled={disabled}
          placeholder="Escribe tu mensaje..."
          className={`${inputClass} min-h-32 resize-y`}
        />
      </div>

      <div aria-hidden="true" className="honeypot">
        <label htmlFor="contact-website">Deja este campo vacío</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-wait disabled:opacity-70"
      >
        <Send className="size-4" aria-hidden="true" />
        {disabled ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="min-h-6 text-sm text-muted-foreground" role="status" aria-live="polite">
        {status === "success" && "Mensaje enviado correctamente."}
        {status === "error" &&
          "No se pudo enviar el mensaje. Revisa la configuración e inténtalo de nuevo."}
        {status === "sending" && "Enviando tu mensaje..."}
      </p>
    </form>
  );
}
