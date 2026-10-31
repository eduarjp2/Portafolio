import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experiencia" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          icon={Briefcase}
          badge="Experiencia"
          title="Experiencia profesional"
          description="Responsabilidades y aprendizajes en un entorno real de desarrollo."
        />

        <div className="space-y-6">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`}>
              <article className="rounded-xl border border-primary/40 bg-gradient-to-br from-card to-primary/5 p-6 shadow-lg shadow-primary/5 sm:p-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold sm:text-3xl">{item.role}</h3>
                    <p className="mt-1 text-lg font-semibold text-primary">{item.company}</p>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground md:text-right">
                    <li className="flex items-center gap-2 md:justify-end">
                      <Calendar className="size-4 text-primary" aria-hidden="true" />
                      <span>{item.period}</span>
                    </li>
                    <li className="flex items-center gap-2 md:justify-end">
                      <MapPin className="size-4 text-primary" aria-hidden="true" />
                      <span>{item.location}</span>
                    </li>
                  </ul>
                </div>

                <p className="mt-6 text-muted-foreground">{item.description}</p>

                <ul className="mt-6 space-y-3">
                  {item.activities.map((activity) => (
                    <li key={activity} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                  {item.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
