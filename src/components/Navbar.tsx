
"use client";

import { useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Navegación principal">
        <a
          href="#inicio"
          className="brand"
          aria-label="Eduardo Jiménez, inicio"
          onClick={() => setIsOpen(false)}
        >
          EJ<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="navigation-links"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Cerrar" : "Menú"}
        </button>

        <div
          id="navigation-links"
          className={`nav-links${isOpen ? " is-open" : ""}`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
