
import { skillGroups } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="habilidades" className="section section-muted">
      <div className="container">
        <SectionTitle
          eyebrow="Stack tecnológico"
          title="Herramientas para construir soluciones."
          description="Tecnologías y herramientas con las que trabajo y continúo desarrollando mis habilidades."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="card-index">
                {String(index + 1).padStart(2, "0")} / 04
              </span>

              <h3>{group.title}</h3>
              <p className="card-description">{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div
                      className="skill-track"
                      role="progressbar"
                      aria-label={`Nivel de referencia en ${skill.name}`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    >
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
