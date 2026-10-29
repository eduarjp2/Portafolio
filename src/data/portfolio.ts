
export const personalInfo = {
  name: "Eduardo Jiménez",
  role: "Desarrollador de Software",
  location: "Colombia",
  description:
    "Construyo soluciones de software combinando desarrollo web, lógica de negocio y buenas prácticas de ingeniería. Siempre aprendiendo y creando proyectos que resuelvan problemas reales.",
  email: "tu-correo@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://www.linkedin.com/",
};

export const skillGroups = [
  {
    title: "Backend",
    description: "Lógica, APIs y servicios",
    skills: [
      { name: "Python", level: 65 },
      { name: "Java", level: 35 },
      { name: "PHP", level: 60 },
      { name: "C#", level: 30 },
      { name: "Django", level: 45 },
      { name: "Node.js", level: 30 },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces y experiencia de usuario",
    skills: [
      { name: "HTML5", level: 75 },
      { name: "CSS3", level: 65 },
      { name: "JavaScript", level: 55 },
      { name: "TypeScript", level: 25 },
      { name: "React", level: 30 },
      { name: "Next.js", level: 30 },
    ],
  },
  {
    title: "Bases de datos",
    description: "Persistencia y gestión de datos",
    skills: [
      { name: "PostgreSQL", level: 40 },
      { name: "MySQL", level: 60 },
      { name: "SQL", level: 55 },
      { name: "SQLite", level: 35 },
    ],
  },
  {
    title: "Herramientas",
    description: "Desarrollo y despliegue",
    skills: [
      { name: "Git", level: 60 },
      { name: "GitHub", level: 60 },
      { name: "Docker", level: 25 },
      { name: "Linux", level: 40 },
      { name: "REST APIs", level: 45 },
    ],
  },
];

export const projects = [
  {
    number: "01",
    name: "Milka Cake Shop",
    category: "E-commerce",
    description:
      "Plataforma para una pastelería con catálogo de productos, categorías, precios y una experiencia de compra enfocada en el cliente.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "En desarrollo",
    github: "https://github.com/tu-usuario",
  },
  {
    number: "02",
    name: "SoftNaturA",
    category: "Tienda virtual",
    description:
      "Proyecto de comercio electrónico para productos naturistas, con gestión de usuarios, catálogo y una arquitectura preparada para evolucionar.",
    stack: ["Python", "Django", "PostgreSQL"],
    status: "Proyecto académico",
    github: "https://github.com/tu-usuario",
  },
  {
    number: "03",
    name: "Gestión de información",
    category: "Desarrollo de software",
    description:
      "Experiencia de apoyo en validación, seguimiento y documentación de incidencias en un sistema de información del sector salud.",
    stack: ["PHP", "JavaScript", "MySQL"],
    status: "Experiencia formativa",
    github: "",
  },
];

export const experience = [
  {
    period: "2026",
    role: "Aprendiz de desarrollo de software",
    company: "Tecnologías Sinergia SAS",
    location: "Ibagué, Colombia",
    description:
      "Apoyo al área de Calidad en validación, seguimiento y documentación de tickets e incidencias de SIHOS.",
    activities: [
      "Validación y seguimiento de incidencias.",
      "Documentación de tickets y pruebas funcionales.",
      "Familiarización con módulos de inventarios, presupuesto e historia clínica.",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Git"],
  },
];

export const education = [
  {
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    institution: "SENA",
    detail: "Actualiza este campo con tu estado real de certificación.",
  },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "En aprendizaje" },
];
