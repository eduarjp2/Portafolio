
import { experience } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experiencia" className="section section-muted">
      <div className="container">
        <SectionTitle
          eyebrow="Trayectoria"
          title="Experiencia construyendo y mejorando software."
          description="Aprendizajes y responsabilidades adquiridos en entornos de desarrollo."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div className="timeline-period">{item.period}</div>

              <div className="info-card">
                <h3>{item.role}</h3>
                <p>
                  <span className="gold">{item.company}</span>
                  {" · "}
                  {item.location}
                </p>

                <p>{item.description}</p>

                <ul>
                  {item.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>

                <div className="tag-list">
                  {item.stack.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
