import type { CSSProperties } from "react";

export function levelLabel(level: number): string {
  if (level < 40) return "Básico";
  if (level < 65) return "Intermedio";
  return "Avanzado";
}

type LevelBarProps = {
  name: string;
  level: number;
  /** Texto a la derecha; por defecto, la etiqueta calculada del nivel. */
  label?: string;
};

/** Barra de nivel. Se anima dentro de un contenedor .reveal (ver globals.css). */
export default function LevelBar({ name, level, label }: LevelBarProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{label ?? levelLabel(level)}</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-primary/20"
        role="progressbar"
        aria-label={`Nivel de referencia en ${name}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
        aria-valuetext={label ?? levelLabel(level)}
      >
        <div
          className="bar-fill h-full rounded-full bg-primary"
          style={{ "--level": `${level}%` } as CSSProperties}
        />
      </div>
    </div>
  );
}
