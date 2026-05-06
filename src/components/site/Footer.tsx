import { Logo } from "./Logo";
import { Instagram, Facebook, Linkedin, Youtube, MessageCircle, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

const COLS = [
  { title: "Rede Girassol", links: [["Sobre", "/multiplataformas"], ["Talentos", "/multiplataformas#talentos"], ["Carreiras", "/contactos"]] as [string, string][] },
  { title: "TV & Rádio", links: [["TV Girassol", "/tv"], ["Girassol FM", "/fm"], ["Programação", "/tv#grelha"]] as [string, string][] },
  { title: "Digital", links: [["Giranotícias", "/noticias"], ["Giraplay", "/giraplay"], ["Giraplace", "/marketplace"], ["App Girassol", "/app"]] as [string, string][] },
  { title: "Contactos", links: [["Comercial", "/negocios"], ["Geral", "/contactos"], ["Imprensa", "/contactos"]] as [string, string][] },
];

export const Footer = () => (
  <footer className="bg-[hsl(0_0%_7%)] text-white/80">
    <div className="container-x py-16">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 text-sm text-[#888888] max-w-xs leading-relaxed">
            Inovar. Informar. Inspirar.
          </p>
          <div className="flex gap-4 mt-6">
            {[Instagram, Facebook, MessageCircle, Linkedin, Youtube, Music2].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="text-white hover:text-primary transition-colors">
                <Icon size={24} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-white mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-[#AAAAAA] hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-[#222222]">
      <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-[#888888]">
        <span>© {new Date().getFullYear()} Rede Girassol. Todos os direitos reservados.</span>
        <Link to="/contactos" className="hover:text-white transition-colors">Privacidade</Link>
      </div>
    </div>
  </footer>
);
