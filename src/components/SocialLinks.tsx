import { Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";

type SocialLink = {
  label: string;
  href: string;
  external: boolean;
  icon: React.ReactNode;
};

export function getSocialLinks(): SocialLink[] {
  return [
    {
      label: "LinkedIn",
      href: personalInfo.linkedin,
      external: true,
      icon: <LinkedinIcon />,
    },
    { label: "GitHub", href: personalInfo.github, external: true, icon: <GithubIcon /> },
    {
      label: "Correo electrónico",
      href: `mailto:${personalInfo.email}`,
      external: false,
      icon: <Mail className="size-5" aria-hidden="true" />,
    },
  ];
}

export default function SocialLinks() {
  return (
    <ul className="flex items-center justify-center gap-3">
      {getSocialLinks().map(({ label, href, external, icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="flex size-11 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
