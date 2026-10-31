import { Compass, Target, User } from "lucide-react";
import { about, certifications, experience, projects, skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const cards = [
  { title: "Mi enfoque", text: about.focus, Icon: Compass },
  { title: "Qué busco", text: about.goal, Icon: Target },
] as const;

export default function About() {
  const technologies = skillGroups.reduce((total, group) => total + group.skills.length, 0);
  const stats = [
    { value: projects.length, label: "Proyectos" },
    { value: technologies, label: "Tecnologías" },
    { value: experience.length, label: "Experiencia profesional" },
    { value: certifications.length, label: "Certificaciones" },
  ];

  return (
    <section id="sobre-mi" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon={User}
          badge="Sobre mí"
          title="Quién está detrás del código"
          description="Desarrollador de software en Colombia, aprendiz del SENA y en constante formación."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map(({ title, text, Icon }, index) => (
            <Reveal key={title} delay={index * 100}>
              <article className="h-full rounded-xl border bg-card p-8">
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <dl className="grid grid-cols-1 gap-8 rounded-xl border bg-card p-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</dd>
                <dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
