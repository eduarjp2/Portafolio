"use client";

import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Habilidades", id: "habilidades" },
  { label: "Experiencia", id: "experiencia" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Educación", id: "educacion" },
  { label: "Contacto", id: "contacto" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = links
      .map((link) => document.getElementById(link.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight text-primary"
          onClick={() => setIsOpen(false)}
        >
          Eduardo Jiménez
        </a>

        <div className="flex items-center gap-2">
        <ul
          id="navigation-links"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-16 flex-col border-b bg-background/95 px-4 pb-4 backdrop-blur-md md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {links.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active ? "location" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`block border-b border-border/60 py-3 text-base transition-colors hover:text-primary md:rounded-md md:border-0 md:px-3 md:py-2 md:text-sm ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
          <ThemeToggle />
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
          aria-expanded={isOpen}
          aria-controls="navigation-links"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
        </div>
      </nav>
    </header>
  );
}
