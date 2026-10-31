import { Award, ExternalLink, GraduationCap, Languages } from "lucide-react";
import { certifications, education, languages } from "@/data/portfolio";
import LevelBar from "./LevelBar";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="educacion" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon={GraduationCap}
          badge="Educación"
          title="Formación y certificados"
          description="Mi preparación académica y el desarrollo continuo de competencias."
        />

        <div className="flex flex-wrap justify-center gap-6">
          {education.map((item) => (
            <Reveal key={item.title} className="w-full max-w-xl md:w-[calc(50%-12px)]">
              <article className="h-full rounded-xl border bg-card p-8 transition-colors hover:border-primary/50">
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 font-medium text-primary">{item.institution}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
              <Award className="size-5 text-primary" aria-hidden="true" />
              Certificados
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert) => (
                <Reveal
                  key={cert.credentialId ?? cert.title}
                  className="w-full md:w-[calc(50%-12px)]"
                >
                  <article
                    className={`flex h-full flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary/60 ${
                      cert.featured
                        ? "border-primary/50 bg-gradient-to-br from-card to-primary/5"
                        : ""
                    }`}
                  >
                    <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Award className="size-5" aria-hidden="true" />
                    </div>
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>
                    {cert.date && <p className="mt-0.5 text-sm text-muted-foreground">{cert.date}</p>}
                    {cert.detail && <p className="mt-3 text-sm text-muted-foreground">{cert.detail}</p>}
                    {cert.credentialId && (
                      <p className="mt-3 font-mono text-xs text-muted-foreground/80 [overflow-wrap:anywhere]">
                        ID: {cert.credentialId}
                      </p>
                    )}
                    {cert.tags && cert.tags.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Temas">
                        {cert.tags.map((tag) => (
                          <li key={tag} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    {cert.pdf && (
                      <div className="mt-auto pt-6">
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver certificado: ${cert.title} (se abre en una pestaña nueva)`}
                        className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg border px-4 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                      >
                        <ExternalLink className="size-4" aria-hidden="true" />
                        Ver certificado
                      </a>
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-xl border bg-card p-8">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
              <Languages className="size-5 text-primary" aria-hidden="true" />
              Idiomas
            </h3>
            <div className="space-y-6">
              {languages.map((language) => (
                <LevelBar key={language.name} name={language.name} level={language.value} label={language.level} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
