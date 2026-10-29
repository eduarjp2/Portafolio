
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="inicio" className="container hero">
      <div className="hero-copy">
        <span className="eyebrow">Portafolio profesional</span>

        <h1>
          Hola, soy
          <span>{personalInfo.name.split(" ")[0]}.</span>
        </h1>

        <p className="gold">{personalInfo.role}</p>
        <p>{personalInfo.description}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#proyectos">
            Explorar proyectos <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href="#contacto">
            Hablemos
          </a>
        </div>

        <div className="hero-meta">
          <span>{personalInfo.location}</span>
          <span>Desarrollo web</span>
        </div>
      </div>

      <div
        className="portrait-frame"
        role="img"
        aria-label={`Espacio reservado para la fotografía de ${personalInfo.name}`}
      >
        <div className="portrait-placeholder" aria-hidden="true">
          EJ
        </div>
        <span className="portrait-caption">Software · Technology · Growth</span>
      </div>
    </section>
  );
}
