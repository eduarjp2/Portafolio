
import { projects } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Trabajo seleccionado"
          title="Proyectos que convierten ideas en software."
          description="Una selección de proyectos personales, académicos y experiencias relacionadas con el desarrollo de software."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tag-list">
                {project.stack.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-bottom">
                <span className="card-description">{project.status}</span>

                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver repositorio de ${project.name}`}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
