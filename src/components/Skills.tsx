import { Code2, Database, Server, Wrench, Monitor, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import LevelBar from "./LevelBar";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons: Record<string, LucideIcon> = {
  Backend: Server,
  Frontend: Monitor,
  "Bases de datos": Database,
  Herramientas: Wrench,
};

export default function Skills() {
  return (
    <section id="habilidades" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon={Code2}
          badge="Habilidades"
          title="Tecnologías con las que trabajo"
          description="Niveles de referencia de las herramientas que uso y sigo desarrollando."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.title] ?? Code2;
            return (
              <Reveal key={group.title} delay={(index % 2) * 100}>
                <article className="h-full rounded-xl border bg-card p-8 transition-colors hover:border-primary/50">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{group.title}</h3>
                      <p className="text-sm text-muted-foreground">{group.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <LevelBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
