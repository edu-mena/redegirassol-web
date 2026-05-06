import { Tv, Radio, Newspaper, Briefcase, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ITEMS = [
  { icon: Tv, title: "TV Girassol", desc: "Canal 20 ZAP · 54 TVCABO · 508 DStv", to: "/tv", tag: "Televisão" },
  { icon: Radio, title: "Girassol FM", desc: "102.7 FM · Streaming · Lives", to: "/fm", tag: "Rádio" },
  { icon: Newspaper, title: "Giranotícias", desc: "Desporto · Política · Economia", to: "/noticias", tag: "Digital" },
  { icon: Briefcase, title: "Giranegócios", desc: "Publicidade · Media Kit · Eventos", to: "/negocios", tag: "B2B" },
];

export const Platforms = () => (
  <section id="plataformas" className="bg-surface-warm">
    <div className="container-x py-24 md:py-[100px]">
      <div className="mb-14 reveal max-w-3xl">
        <span className="pill bg-white text-foreground/70 mb-5 border border-border">
          As Nossas Plataformas
        </span>
        <h2
          className="font-display font-bold text-foreground"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
        >
          Quatro frentes. <span className="text-gradient">Uma só voz.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: 28 }}>
        {ITEMS.map((it, i) => (
          <Link
            key={it.title}
            to={it.to}
            data-delay={i * 80}
            className="reveal group relative bg-card p-8 transition-all overflow-hidden flex flex-col"
            style={{
              borderRadius: 20,
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
              {it.tag}
            </div>
            <it.icon className="mt-6 text-foreground" size={36} strokeWidth={1.5} />
            <h3 className="mt-6 font-display font-bold text-2xl text-foreground">{it.title}</h3>
            <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{it.desc}</p>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
              Explorar <ArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
