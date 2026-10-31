import { FolderOpen } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="proyectos" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon={FolderOpen}
          badge="Proyectos"
          title="Proyectos seleccionados"
          description="Proyectos personales, académicos y experiencias relacionadas con el desarrollo de software."
        />

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.number}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              delay={(index % 3) * 100}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Captura del proyecto ${project.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-br from-muted to-card p-5"
                    >
                      <span className="absolute -left-10 -top-10 size-48 rounded-full bg-primary/20 blur-3xl" />
                      <span className="relative text-xs font-medium uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <span className="relative text-3xl font-bold leading-tight tracking-tight text-foreground/90 [overflow-wrap:anywhere]">
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-medium text-primary">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground">{project.status}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.name}`}>
                    {project.stack.map((technology) => (
                      <li key={technology} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                        {technology}
                      </li>
                    ))}
                  </ul>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver GitHub de ${project.name} (se abre en una pestaña nueva)`}
                      className="mt-6 inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg border px-4 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <GithubIcon className="size-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
