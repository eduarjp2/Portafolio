import { Mail, MapPin, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Row = { label: string; value: string; href?: string; icon: React.ReactNode };

export default function Contact() {
  const rows: Row[] = [
    {
      label: "Correo",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="size-5" aria-hidden="true" />,
    },
    {
      label: "Ubicación",
      value: personalInfo.location,
      icon: <MapPin className="size-5" aria-hidden="true" />,
    },
    {
      label: "LinkedIn",
      value: "Eduardo Jiménez",
      href: personalInfo.linkedin,
      icon: <LinkedinIcon />,
    },
    {
      label: "GitHub",
      value: personalInfo.github.replace("https://github.com/", "@"),
      href: personalInfo.github,
      icon: <GithubIcon />,
    },
  ];

  return (
    <section id="contacto" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon={MessageSquare}
          badge="Contacto"
          title="¿Construimos algo juntos?"
          description="Escríbeme sobre una idea, un proyecto o una oportunidad profesional."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-xl border bg-card p-8">
              <h3 className="text-xl font-semibold">Información de contacto</h3>
              <ul className="mt-6 space-y-5">
                {rows.map((row) => {
                  const external = row.href?.startsWith("http");
                  const content = (
                    <>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {row.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                          {row.label}
                        </span>
                        <span className="block font-medium [overflow-wrap:anywhere]">{row.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a
                          href={row.href}
                          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                          className="flex items-center gap-4 transition-colors hover:text-primary"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={100}>
            <div className="h-full rounded-xl border bg-card p-8">
              <h3 className="text-xl font-semibold">Envíame un mensaje</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
