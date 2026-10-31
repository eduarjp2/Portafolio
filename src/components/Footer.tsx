import { cacheLife } from "next/cache";
import { personalInfo, siteRepo, skillGroups } from "@/data/portfolio";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const mainTechnologies = skillGroups
  .flatMap((group) => group.skills)
  .toSorted((a, b) => b.level - a.level)
  .slice(0, 6)
  .map((skill) => skill.name);

export default function Footer() {
  return (
    <footer className="border-t px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div>
          <p className="text-lg font-bold text-primary">{personalInfo.name}</p>
          <p className="text-sm text-muted-foreground">{personalInfo.role}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-2" aria-label="Tecnologías principales">
          {mainTechnologies.map((name) => (
            <li key={name} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
              {name}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>
            © <CurrentYear /> {personalInfo.name}
          </span>
          <a
            href={siteRepo}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Código del sitio
          </a>
        </div>
      </div>
    </footer>
  );
}
