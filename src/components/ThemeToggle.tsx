"use client";

import { Lightbulb } from "lucide-react";
import { useSyncExternalStore } from "react";

// El tema vive en el atributo data-theme de <html> (lo pone un script en el head).
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const isLight = () => document.documentElement.dataset.theme === "light";

export default function ThemeToggle() {
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  function toggle() {
    const root = document.documentElement;
    const next = light ? "dark" : "light";

    const apply = () => {
      if (next === "light") root.dataset.theme = "light";
      else delete root.dataset.theme;
    };

    // Mientras cambia el tema, ningún elemento anima por su cuenta.
    root.classList.add("theme-switching");
    const done = () => root.classList.remove("theme-switching");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof document.startViewTransition === "function" && !reduceMotion) {
      document.startViewTransition(apply).finished.then(done, done);
    } else {
      apply();
      requestAnimationFrame(() => requestAnimationFrame(done));
    }

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sin almacenamiento disponible: el tema solo dura esta visita.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={light}
      aria-label={light ? "Cambiar a tema oscuro" : "Cambiar a tema claro"}
      className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Lightbulb
        className={`size-5 ${light ? "text-primary" : ""}`}
        fill={light ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}
