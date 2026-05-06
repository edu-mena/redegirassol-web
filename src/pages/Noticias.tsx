import { EmailCapture } from "@/components/site/EmailCapture";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { newsArticles } from "@/data/newsArticles";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const TABS = ["Tudo", "Política", "Economia", "Sociedade", "Desporto", "Cultura", "Mundo", "África"];

const Noticias = () => {
  const [tab, setTab] = useState("Tudo");
  const filtered = tab === "Tudo" ? newsArticles : newsArticles.filter((a) => a.category === tab);

  // Re-apply reveal when tab changes — PageShell's observer only runs once on mount,
  // so newly rendered grid items after a tab switch never receive is-visible.
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el, i) => {
      el.style.transitionDelay = `${Number(el.dataset.delay ?? i * 80)}ms`;
      el.classList.add("is-visible");
    });
  }, [tab]);
  const lead = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a !== lead);

  return (
    <PageShell title="Giranotícias">
      <PageHero
        eyebrow="Giranotícias"
        title={<>As notícias <span className="text-gradient">que importam.</span></>}
        subtitle="Jornalismo independente. Cobertura nacional e africana. Atualizado ao minuto."
      />

      <section className="container-x py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pill border transition-all ${
                tab === t
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-foreground/70 hover:border-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Lead article */}
        {lead && (
          <a
            href={lead.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid lg:grid-cols-2 gap-8 mb-10 group"
          >
            <div className="aspect-[16/10] rounded-2xl relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40">
              {lead.image && (
                <img
                  src={lead.image}
                  alt={lead.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <span className="absolute top-4 left-4 pill bg-black/60 text-white">{lead.category}</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-mono-accent text-xs uppercase tracking-wider text-muted-foreground">
                {lead.dateLabel}
              </div>
              <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-[0.95]">
                {lead.title}
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Reportagem completa disponível no portal Giranotícias. Análise, contexto e bastidores das principais notícias.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all w-fit">
                Ler reportagem <ArrowRight size={16} />
              </span>
            </div>
          </a>
        )}

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((a, i) => (
            <a
              key={a.id}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              data-delay={i * 60}
              className="reveal card-lift flex gap-5 p-5 rounded-2xl border border-border bg-card group"
            >
              <div className="w-32 h-32 shrink-0 rounded-xl relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40">
                {a.image && (
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-mono-accent text-[10px] uppercase text-primary">{a.category}</span>
                <h3 className="mt-1 font-display font-bold text-lg leading-tight">{a.title}</h3>
                <span className="mt-auto font-mono-accent text-[10px] uppercase text-muted-foreground">
                  {a.dateLabel}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-primary text-white py-20 relative overflow-hidden">
        <div className="container-x relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl">"O Girassol"</h2>
            <p className="reveal mt-3 text-lg text-white/90">A nossa newsletter semanal. Tudo o que importa, sem ruído.</p>
          </div>
          <div className="reveal"><EmailCapture cta="Subscrever" dark /></div>
        </div>
      </section>

      {/* Portal link */}
      <section className="container-x py-16 text-center">
        <p className="font-display text-2xl">
          Visite o portal completo:{" "}
          <a
            href="https://www.giranoticias.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient font-bold hover:opacity-80"
          >
            giranoticias.com →
          </a>
        </p>
      </section>
    </PageShell>
  );
};

export default Noticias;
