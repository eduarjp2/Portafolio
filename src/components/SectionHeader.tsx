import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  icon: LucideIcon;
  badge: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ icon: Icon, badge, title, description }: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <Icon className="size-4" aria-hidden="true" />
        {badge}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
