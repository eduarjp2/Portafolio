
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Jiménez | Desarrollador de Software",
  description:
    "Portafolio profesional de Eduardo Jiménez. Desarrollo de software, aplicaciones web, proyectos y tecnologías.",
  applicationName: "Portafolio de Eduardo Jiménez",
  openGraph: {
    title: "Eduardo Jiménez | Desarrollador de Software",
    description:
      "Explora mis proyectos, habilidades técnicas y experiencia en desarrollo de software.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
