
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {personalInfo.name}
        </span>
        <span>Diseñado con intención y construido con Next.js.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
