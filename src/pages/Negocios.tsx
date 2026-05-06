import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { CountUp } from "@/components/site/CountUp";
import { Tv, Radio, Globe, Sparkles, Megaphone, Download } from "lucide-react";
import { useState } from "react";

const FORMATS = [
  { i: Tv, t: "TV Spots", d: "Comerciais 15s, 30s e 45s" },
  { i: Radio, t: "Rádio", d: "Spots e patrocínios 102.7" },
  { i: Globe, t: "Digital", d: "Display, social, takeovers" },
  { i: Sparkles, t: "Branded Content", d: "Storytelling original" },
  { i: Megaphone, t: "Eventos", d: "Ativações e patrocínios" },
];

const Negocios = () => {
  const [budget, setBudget] = useState("100k–500k AOA");
  return (
    <PageShell title="Giranegócios">
      <PageHero eyebrow="💼 Giranegócios" title={<>O seu anúncio.<br/><span className="text-gradient">A nossa audiência.</span></>}
        subtitle="Conecte a sua marca a milhões de angolanos — em TV, rádio, digital e eventos." />

      <section className="bg-surface-darker text-white py-16">
        <div className="container-x grid grid-cols-3 divide-x divide-white/10">
          {[
            { v: 2, s: "M+", l: "Espectadores TV/Mês" },
            { v: 800, s: "K", l: "Ouvintes 102.7 FM" },
            { v: 1.2, s: "M", l: "Visitas Digitais", float: true },
          ].map((s) => (
            <div key={s.l} className="px-6 text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-gradient">
                {s.float ? <span>{s.v}{s.s}</span> : <CountUp end={s.v} suffix={s.s}/>}
              </div>
              <div className="mt-2 font-mono-accent text-[10px] uppercase tracking-wider text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-10">Formatos de anúncio</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {FORMATS.map((f, i) => (
            <div key={f.t} data-delay={i*60} className="reveal card-lift rounded-2xl p-6 border border-border bg-card">
              <f.i className="text-primary-glow" size={28} strokeWidth={1.5}/>
              <h3 className="mt-5 font-display font-bold">{f.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grain"/>
        <div className="container-x relative text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Media Kit 2026</h2>
          <p className="mt-3 text-lg text-white/90">Audiências, formatos, tabela de preços e estudos de caso.</p>
          <button className="btn-cta mt-8 mx-auto"><Download size={16}/> Descarregar Media Kit</button>
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-10">Marcas parceiras</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-[5/3] rounded-xl bg-secondary border border-border grid place-items-center font-display font-bold text-foreground/40">
              MARCA {i+1}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-darker text-white py-20">
        <div className="container-x max-w-3xl">
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl mb-10">Pedir <span className="text-gradient">proposta</span></h2>
          <form className="grid md:grid-cols-2 gap-4">
            {["Nome", "Empresa", "Email", "Telefone"].map((p) => (
              <input key={p} placeholder={p} className="rounded-pill bg-white/[0.04] border border-white/15 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-primary-glow"/>
            ))}
            <select value={budget} onChange={(e)=>setBudget(e.target.value)} className="md:col-span-2 rounded-pill bg-white/[0.04] border border-white/15 px-5 py-3 text-sm focus:outline-none focus:border-primary-glow">
              {["< 100k AOA", "100k–500k AOA", "500k–2M AOA", "2M+ AOA"].map((b) => <option key={b}>{b}</option>)}
            </select>
            <textarea placeholder="Mensagem" rows={4} className="md:col-span-2 rounded-2xl bg-white/[0.04] border border-white/15 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-primary-glow"/>
            <button type="submit" className="btn-primary md:col-span-2 !py-4">Enviar pedido</button>
          </form>
        </div>
      </section>
    </PageShell>
  );
};
export default Negocios;
