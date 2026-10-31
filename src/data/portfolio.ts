
export type PersonalInfo = {
  name: string;
  role: string;
  location: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: readonly Skill[];
};

export type Skill = {
  name: string;
  /** Nivel de referencia de 0 a 100. */
  level: number;
};

export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: readonly string[];
  status: string;
  github: string;
  /** Ruta dentro de /public, por ejemplo "/projects/milka.webp". */
  image?: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  activities: readonly string[];
  stack: readonly string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
};

export type Language = {
  name: string;
  /** Etiqueta visible, por ejemplo "Nativo". */
  level: string;
  /** Nivel de referencia de 0 a 100 para la barra. */
  value: number;
};

export type Certification = {
  title: string;
  issuer: string;
  /** Fecha legible, por ejemplo "Octubre 2026". */
  date?: string;
  credentialId?: string;
  detail?: string;
  /** Tarjeta destacada (ocupa 2 columnas en pantallas grandes). */
  featured?: boolean;
  /** Ruta dentro de /public, por ejemplo "/certificados/curso.pdf". */
  pdf?: string;
  tags?: readonly string[];
};

export type AboutText = { focus: string; goal: string };

export const about: AboutText = {
  focus:
    "Me especializo en desarrollo backend y web, trabajando con tecnologías modernas, lógica de negocio e integración de soluciones de inteligencia artificial.",
  goal: "Busco integrarme a equipos de desarrollo donde pueda aportar en la construcción de soluciones de software, asumir retos técnicos y ampliar mis conocimientos en tecnologías y tendencias del desarrollo de software.",
};

export const siteRepo = "https://github.com/eduarjp2/Portafolio";

export const personalInfo: PersonalInfo = {
  name: "Eduardo Jiménez",
  role: "Desarrollador de Software",
  location: "Colombia",
  description:
    "Desarrollo software combinando ingeniería sólida con inteligencia artificial para construir productos más rápido y con mejor calidad. Siempre aprendiendo y creando proyectos que resuelvan problemas reales.",
  email: "eduarjp2502@gmail.com",
  github: "https://github.com/eduarjp2",
  linkedin: "https://www.linkedin.com/in/eduardo-jimenez-b088b7371/",
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Backend",
    description: "Lógica, APIs y servicios",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "PHP", level: 70 },
      { name: "Django", level: 90 },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces y experiencia de usuario",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "React", level: 60 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    title: "Bases de datos",
    description: "Persistencia y gestión de datos",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 90 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Herramientas",
    description: "Desarrollo y despliegue",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 70 },
      { name: "REST APIs", level: 80 },
    ],
  },
];

export const projects: readonly Project[] = [
  {
    number: "01",
    name: "Milka Cake Shop",
    category: "E-commerce",
    description:
      "Plataforma para una pastelería con catálogo de productos, categorías, precios y una experiencia de compra enfocada en el cliente.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "En desarrollo",
    github: "https://github.com/eduarjp2",
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    period: "2026",
    role: "Aprendiz de desarrollo de software",
    company: "Tecnologías Sinergia SAS",
    location: "Ibagué, Colombia",
    description:
       "Prácticas profesionales en el equipo de desarrollo, participando en el ciclo de vida del software: análisis, desarrollo, pruebas y despliegues a producción.",
    activities: [
      "Desarrollo y mejora de funcionalidades en backend.",
      "Detección y solución de bugs, pruebas funcionales y control de calidad.",
      "Gestión de tareas con Scrum, tickets y control de versiones con Git.",
      "Revisión de código, despliegues a producción y documentación técnica junto a desarrolladores senior."
    ],
    stack: ["PHP", "Jquery", "MySQL", "Git"],
  },
];

export const education: readonly EducationItem[] = [
  {
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    institution: "SENA",
    detail: "Actualiza este campo con tu estado real de certificación.",
  },
];

export const languages: readonly Language[] = [
  { name: "Español", level: "Nativo", value: 100 },
  { name: "Portugués", level: "Avanzado", value: 75 },
  { name: "Inglés", level: "En aprendizaje", value: 30 },
];

/** Los PDF van en public/certificados/. Mientras esté vacío, el bloque no se muestra. */
export const certifications: readonly Certification[] = [
  {
    title: "Claude Code — Edición especial",
    issuer: "GameCode Academy",
    date: "Octubre 2026",
    credentialId: "GC-CLAUDECODE-2026-000044",
    pdf: "/certificados/claude-code-edicion-especial.pdf",
    detail: "90 lecciones + curso personalizado en vivo de 8 horas",
    tags: ["Claude Code", "IA", "Desarrollo asistido"],
    featured: true,
  },
  {
    title: "Prompt Engineering",
    issuer: "GameCode Academy",
    date: "Octubre 2026",
    credentialId: "GC-PROMPTENGINEERING-2026-000020",
    pdf: "/certificados/prompt-engineering.pdf",
    detail: "44 lecciones y 7 exámenes aprobados",
    tags: ["Prompts", "IA"],
  },
  {
    title: "JavaScript",
    issuer: "GameCode Academy",
    date: "Septiembre 2026",
    credentialId: "GC-JAVASCRIPT-2026-000018",
    pdf: "/certificados/javascript.pdf",
    detail: "93 lecciones",
    tags: ["JavaScript"],
  },
  {
    title: "Lógica de programación",
    issuer: "GameCode Academy",
    date: "Agosto 2026",
    credentialId: "GC-LOGICAPROGRAMACION-2026-000012",
    pdf: "/certificados/logica-programacion.pdf",
    detail: "76 lecciones",
    tags: ["Algoritmos", "Lógica"],
  },
  {
    title: "Fundamentos de programación",
    issuer: "GameCode Academy",
    date: "Abril 2026",
    credentialId: "GC-FUND-2026-000008",
    pdf: "/certificados/fundamentos-programacion.pdf",
    detail: "32 lecciones y exámenes prácticos",
    tags: ["Fundamentos"],
  },
];
