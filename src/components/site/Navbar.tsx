import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Menu, X, Radio } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/multiplataformas", label: "Rede" },
  { to: "/tv", label: "TV" },
  { to: "/fm", label: "Rádio" },
  { to: "/noticias", label: "Notícias" },
  { to: "/negocios", label: "Negócios" },
  { to: "/giraplay", label: "Giraplay" },
  { to: "/marketplace", label: "Giraplace" },
  { to: "/app", label: "App" },
  { to: "/contactos", label: "Contactos" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background" style={{ boxShadow: "0 1px 0 #EBEBEB" }}>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-foreground" : "text-foreground/75 hover:text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/fm" className="btn-primary !py-2.5 !px-5 !text-xs">
            <Radio size={14} /> Ao Vivo
          </Link>
        </div>
        <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer — light, no dark overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/20" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-background p-8 pt-24 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
          style={{ boxShadow: "-1px 0 0 #EBEBEB" }}
        >
          <nav className="flex flex-col gap-5">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `font-display text-2xl font-semibold ${isActive ? "text-primary" : "text-foreground"}`}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/fm" className="btn-primary mt-6 w-fit !py-2.5 !px-5 !text-xs">
              <Radio size={14} /> Ao Vivo
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
};
