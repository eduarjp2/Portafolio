import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Eduardo Jiménez | Desarrollador de Software";
const description =
  "Portafolio profesional de Eduardo Jiménez. Desarrollo de software, aplicaciones web, proyectos y tecnologías.";

export const metadata: Metadata = {
  // Reemplazar por el dominio real cuando se publique el sitio.
  metadataBase: new URL("https://tu-dominio.example"),
  title: { default: title, template: "%s | Eduardo Jiménez" },
  description,
  applicationName: "Portafolio de Eduardo Jiménez",
  authors: [{ name: "Eduardo Jiménez" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description:
      "Explora mis proyectos, habilidades técnicas y experiencia en desarrollo de software.",
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "Eduardo Jiménez",
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Aplica el tema guardado antes de pintar, para evitar parpadeo. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}',
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
