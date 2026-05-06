import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { teamMembers } from "@/data/team";
import { Users, Eye, Heart, ArrowRight } from "lucide-react";

const PILLARS = [
  { icon: Eye, title: "Missão", text: "Levar conteúdo de qualidade a cada angolano, em qualquer plataforma." },
  { icon: Heart, title: "Visão", text: "Ser referência de media em África, pela inovação e relevância." },
  { icon: Users, title: "Valores", text: "Pessoas no centro. Excelência editorial. Coragem criativa." },
];

const TIMELINE = [
  { y: "2014", t: "Nasce a Rede Girassol" },
  { y: "2016", t: "Girassol FM 102.7 vai ao ar" },
  { y: "2019", t: "TV Girassol em ZAP, TVCABO e DStv" },
  { y: "2022", t: "Giranotícias chega ao digital" },
  { y: "2025", t: "Giranegócios consolida B2B" },
  { y: "2026", t: "Lançamento Giraplay & Giraplace" },
];


const Multiplataformas = () => (
  <PageShell title="Multiplataformas">
    <PageHero eyebrow="A Rede" title={<>Uma Rede.<br/><span className="text-gradient">Múltiplas Vozes.</span></>}
      subtitle="O ecossistema de media mais completo de Angola — pensado para informar, entreter e inspirar uma nova geração." />

    <section className="container-x py-24">
      <div className="grid md:grid-cols-3 gap-6">
        {PILLARS.map((p, i) => (
          <div key={p.title} data-delay={i * 80} className="reveal card-lift rounded-2xl p-8 border border-border bg-card">
            <p.icon className="text-primary-glow" size={32} strokeWidth={1.5} />
            <h3 className="mt-6 font-display font-bold text-2xl">{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-surface-darker text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-25" />
      <div className="container-x relative">
        <h2 className="reveal font-display font-bold text-4xl md:text-5xl mb-12">A nossa <span className="text-gradient">jornada.</span></h2>
        <div className="overflow-x-auto pb-6 -mx-6 px-6">
          <div className="flex gap-6 min-w-max">
            {TIMELINE.map((m, i) => (
              <div key={m.y} data-delay={i * 60} className="reveal w-72 shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <div className="font-mono-accent text-xs text-primary-glow">{m.y}</div>
                <div className="mt-3 font-display text-xl font-bold">{m.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="talentos" className="container-x py-24">
      <h2 className="reveal font-display font-bold text-4xl md:text-5xl mb-12">Talentos & <span className="text-gradient">Formação.</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {teamMembers.map((m, i) => (
          <a key={m.name} href={m.link} target="_blank" rel="noopener noreferrer" data-delay={i * 50} className="reveal group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-700">
            <img src={m.image} alt={m.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-mono-accent text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Equipa</div>
              <div className="font-display font-bold text-lg leading-tight">{m.name}</div>
            </div>
          </a>
        ))}
      </div>
    </section>

    <section className="bg-gradient-primary text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="container-x relative grid md:grid-cols-2 gap-10 items-center">
        <h2 className="reveal font-display font-bold text-4xl md:text-6xl leading-[0.95]">Trabalhe<br/>connosco.</h2>
        <div className="reveal">
          <p className="text-lg text-white/90 max-w-md">Procuramos pessoas curiosas, criativas e com paixão por contar histórias. Junte-se à Rede Girassol.</p>
          <a href="/contactos" className="mt-8 inline-flex items-center gap-2 rounded-pill bg-white text-foreground px-7 py-3 font-display font-bold text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors">
            Candidatar <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  </PageShell>
);
export default Multiplataformas;
