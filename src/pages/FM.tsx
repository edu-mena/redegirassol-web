import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Play, MessageCircle, Mail } from "lucide-react";

const TOP = [
  { t: "Kuduro Forever", a: "Anselmo Ralph" },
  { t: "Luanda by Night", a: "Bonga" },
  { t: "Semba Eterno", a: "Yola Semedo" },
  { t: "Africa Move", a: "Mayra Andrade" },
  { t: "Domingo", a: "Pérola" },
];

const TEAM = [
  { n: "DJ Kanda", show: "Manhã Solar · 06h–10h" },
  { n: "Marta Lúcia", show: "Café com Música · 10h–13h" },
  { n: "Beto Andrade", show: "Drive Girassol · 17h–20h" },
  { n: "DJ Nyx", show: "Noites 102 · 22h–02h" },
];

const FM = () => (
  <PageShell title="Girassol FM">
    <PageHero eyebrow="🎙 Girassol FM" title={<><span className="text-gradient">102.7 FM</span><br/>Luanda</>}
      subtitle="A trilha sonora de Angola. Música, conversa e cultura — 24 horas por dia."
    >
      <button className="btn-primary"><Play size={14}/> Ouvir Ao Vivo</button>
    </PageHero>

    <section className="bg-surface-darker text-white py-16">
      <div className="container-x flex flex-col items-center">
        <div className="flex items-end gap-1.5 h-24 mb-8">
          {Array.from({ length: 32 }).map((_, i) => (
            <span key={i} className="w-1.5 bg-gradient-primary rounded-full wave-bar"
              style={{ height: `${20 + Math.random()*70}%`, animationDelay: `${i*0.04}s` }} />
          ))}
        </div>
        <div className="font-mono-accent text-xs uppercase tracking-[0.3em] text-primary-glow">Em direto agora</div>
        <div className="font-display font-bold text-3xl md:text-4xl mt-2">Drive Girassol · Beto Andrade</div>
      </div>
    </section>

    <section id="top" className="container-x py-20">
      <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-10">Top Músicas <span className="text-gradient">da Semana</span></h2>
      <div className="rounded-2xl border border-border overflow-hidden bg-card">
        {TOP.map((m, i) => (
          <div key={m.t} className={`flex items-center gap-6 px-6 py-5 ${i % 2 ? "bg-secondary/40" : ""}`}>
            <span className="font-display font-bold text-3xl text-gradient w-12">{String(i+1).padStart(2,"0")}</span>
            <div className="h-12 w-12 rounded-lg bg-gradient-primary" />
            <div className="flex-1">
              <div className="font-display font-bold">{m.t}</div>
              <div className="text-sm text-muted-foreground">{m.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="equipa" className="bg-surface-darker text-white py-20 overflow-hidden">
      <div className="container-x">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-10">A nossa equipa</h2>
        <div className="overflow-x-auto -mx-6 px-6 pb-4">
          <div className="flex gap-5 min-w-max">
            {TEAM.map((p, i) => (
              <div key={p.n} data-delay={i*60} className="reveal w-64 shrink-0">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="font-display font-bold text-xl">{p.n}</div>
                    <div className="font-mono-accent text-[10px] uppercase tracking-wider opacity-80">{p.show}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="container-x py-20 grid md:grid-cols-2 gap-6">
      <div className="reveal rounded-2xl p-10 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 grain"/>
        <div className="relative">
          <div className="font-mono-accent text-xs uppercase tracking-wider mb-3">Promoção da Semana</div>
          <h3 className="font-display font-bold text-3xl">Ganhe 2 bilhetes para o Festival.</h3>
          <p className="mt-3 text-white/90">Ouça o programa Drive Girassol e participe.</p>
          <div className="mt-6 flex gap-3 font-mono-accent text-sm">
            {["02D", "14H", "37M"].map((x) => <span key={x} className="px-3 py-2 bg-black/20 rounded-lg">{x}</span>)}
          </div>
        </div>
      </div>
      <div className="reveal rounded-2xl p-10 bg-card border border-border">
        <h3 className="font-display font-bold text-2xl">Fale connosco</h3>
        <a href="#" className="mt-6 flex items-center gap-3 rounded-xl bg-secondary p-4 hover:bg-secondary/70"><MessageCircle className="text-primary-glow"/> WhatsApp 102.7</a>
        <a href="#" className="mt-3 flex items-center gap-3 rounded-xl bg-secondary p-4 hover:bg-secondary/70"><Mail className="text-primary-glow"/> comercial@girassolfm.ao</a>
      </div>
    </section>
  </PageShell>
);
export default FM;
