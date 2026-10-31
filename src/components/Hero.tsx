import { ChevronDown, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const [firstName, ...rest] = personalInfo.name.split(" ");

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 px-4 pb-20 pt-28 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 size-[640px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {personalInfo.role}
        </p>

        <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <span className="text-foreground">{firstName}</span>{" "}
          <span className="text-primary">{rest.join(" ")}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Desarrollo software combinando{" "}
          <strong className="font-semibold text-primary">ingeniería sólida</strong> con{" "}
          <strong className="font-semibold text-primary">inteligencia artificial</strong> para
          construir productos más rápido y con mejor calidad.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="#contacto"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contáctame
          </a>
          <a
            href="#sobre-mi"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-primary/50 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
          >
            Conoce más sobre mí
          </a>
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary motion-safe:animate-bounce"
      >
        <ChevronDown className="size-7" aria-hidden="true" />
      </a>
    </section>
  );
}
