
"use client";

import { useState, type FormEvent } from "react";
import { personalInfo } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const validEmail = personalInfo.email !== "tu-correo@ejemplo.com";
  const validGithub = personalInfo.github !== "https://github.com/tu-usuario";

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

  return (
    <section id="contacto" className="section section-muted">
      <div className="container">
        <SectionTitle
          eyebrow="Contacto"
          title="¿Construimos algo interesante?"
          description="Estoy interesado en seguir aprendiendo, compartir ideas y participar en proyectos de software."
        />

        <div className="contact-grid">
          <div className="contact-copy">
            <h3>Conectemos.</h3>
            <p>
              Puedes escribirme por correo o encontrarme en mis redes
              profesionales.
            </p>

            <div className="contact-links">
              {validEmail && (
                <a className="contact-link" href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email} ↗
                </a>
              )}

              {validGithub && (
                <a
                  className="contact-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              <a
                className="contact-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <span className="eyebrow">Disponible para conectar</span>
            <h3>Envíame un mensaje.</h3>
            <p className="contact-note">
              Cuéntame sobre tu idea, proyecto u oportunidad profesional.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  required
                  disabled={status === "sending"}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Correo electrónico</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  disabled={status === "sending"}
                  placeholder="tu@correo.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Asunto</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  minLength={3}
                  maxLength={150}
                  required
                  disabled={status === "sending"}
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  minLength={10}
                  maxLength={5000}
                  required
                  disabled={status === "sending"}
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="contact-website">Deja este campo vacío</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                className="button button-primary"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje ↗"}
              </button>

              <p className="contact-note" role="status" aria-live="polite">
                {status === "success" && "¡Mensaje enviado correctamente!"}
                {status === "error" &&
                  "No se pudo enviar el mensaje. Revisa la configuración e inténtalo de nuevo."}
                {status === "sending" && "Enviando tu mensaje..."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
