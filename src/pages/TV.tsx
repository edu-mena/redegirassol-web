import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { operators, shows, schedule, DAYS } from "@/data/tv";
import { Play, Tv } from "lucide-react";
import { useState } from "react";

const TV = () => {
  const [day, setDay] = useState(0);
  return (
    <PageShell title="TV Girassol">
      <PageHero eyebrow="📺 TV Girassol" title={<>Entretenimento. Informação.<br/><span className="text-gradient">Cultura.</span></>}
        subtitle="O canal que pulsa ao ritmo de Angola. 24 horas de programação original."
      >
        <a href="#assistir" className="btn-primary"><Play size={14}/> Assistir Online</a>
      </PageHero>

      {/* Onde assistir */}
      <section className="container-x py-20">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-10">Onde assistir</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {operators.map((o, i) => (
            <div key={o.name} data-delay={i * 80} className="reveal card-lift rounded-2xl p-8 border border-border bg-card relative overflow-hidden">
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${o.color} opacity-20`} />
              <Tv className="text-primary-glow" size={28} strokeWidth={1.5} />
              <div className="mt-6 font-display font-bold text-2xl">{o.name}</div>
              <div className="font-mono-accent text-xs uppercase tracking-wider text-muted-foreground mt-1">{o.channel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programas em destaque */}
      <section className="bg-surface-darker text-white py-20">
        <div className="container-x">
          <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-10">Programas em destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {shows.map((s, i) => (
              <div key={s.title} data-delay={i * 60} className="reveal card-lift rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10">
                <div className="aspect-[3/4] relative overflow-hidden">
                  {s.image
                    ? <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    : <div className="w-full h-full bg-gradient-to-br from-primary to-primary-glow grain" />
                  }
                </div>
                <div className="p-5">
                  <div className="font-mono-accent text-[10px] uppercase text-primary-glow">{s.category}</div>
                  <h3 className="mt-2 font-display font-bold text-lg">{s.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{s.schedule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grelha semanal */}
      <section id="grelha" className="container-x py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl">Grelha semanal</h2>
          <div className="flex gap-1 bg-secondary rounded-pill p-1 overflow-x-auto">
            {DAYS.map((d, i) => (
              <button key={d} onClick={() => setDay(i)}
                className={`px-4 py-2 rounded-pill font-mono-accent text-xs uppercase tracking-wider transition-all ${day === i ? "bg-foreground text-background" : "text-foreground/70"}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden">
          {schedule[day].map((slot, i) => (
            <div key={i} className={`flex items-center gap-4 px-6 py-4 ${i % 2 ? "bg-secondary/40" : "bg-card"}`}>
              <span className="font-mono-accent text-xs text-primary-glow w-14 shrink-0">{slot.time}</span>
              {slot.image && (
                <img src={slot.image} alt={slot.title} className="w-10 h-10 rounded-lg object-cover shrink-0" />
              )}
              <span className="font-display font-semibold">{slot.title}</span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};
export default TV;
