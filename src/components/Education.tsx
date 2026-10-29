
import { education, languages } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="formacion" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Aprendizaje continuo"
          title="Formación y crecimiento."
          description="Mi preparación académica y el desarrollo continuo de competencias técnicas y comunicativas."
        />

        <div className="education-grid">
          <article className="info-card">
            <span className="card-index">01 / EDUCACIÓN</span>
            {education.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <p>{item.detail}</p>
              </div>
            ))}
          </article>

          <article className="info-card">
            <span className="card-index">02 / IDIOMAS</span>
            <h3>Comunicación</h3>
            <div className="language-list">
              {languages.map((language) => (
                <div className="language-item" key={language.name}>
                  <span>{language.name}</span>
                  <span>{language.level}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
