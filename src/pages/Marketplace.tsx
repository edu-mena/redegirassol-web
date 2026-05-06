import { PageShell } from "@/components/site/PageShell";
import { SoonBadge } from "@/components/site/SoonBadge";
import { Sparkles, Zap, Users, BadgeCheck, Store } from "lucide-react";

const BENS = [
  { i: Zap, t: "Fácil de usar" },
  { i: Users, t: "Grande alcance" },
  { i: BadgeCheck, t: "Suporte Girassol" },
  { i: Sparkles, t: "Sem comissão inicial" },
];

const Marketplace = () => (
  <PageShell title="Giraplace">
    <section className="grid lg:grid-cols-2 min-h-[80vh] pt-16">
      <div className="bg-background p-12 md:p-20 flex flex-col justify-center relative">
        <div className="absolute top-24 right-8 lg:top-28"><SoonBadge /></div>
        <span className="pill bg-secondary mb-6">🛒 Giraplace</span>
        <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95]">A montra digital para o <span className="text-gradient">seu negócio.</span></h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg">Giraplace é o marketplace da Rede Girassol — uma plataforma criada para empreendedores angolanos que querem crescer online com confiança.</p>
      </div>
      <div className="bg-gradient-primary text-white p-12 md:p-20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grain"/>
        <Store size={240} strokeWidth={0.7} className="opacity-90 relative float-slow"/>
      </div>
    </section>

    <section className="container-x py-24">
      <h2 className="reveal font-display font-bold text-3xl md:text-4xl mb-10">Porquê Giraplace?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {BENS.map((b, i) => (
          <div key={b.t} data-delay={i*60} className="reveal card-lift rounded-2xl p-7 border border-border bg-card">
            <b.i className="text-primary-glow" size={28} strokeWidth={1.5}/>
            <h3 className="mt-5 font-display font-bold text-xl">{b.t}</h3>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-surface-darker text-white py-20">
      <div className="container-x max-w-2xl">
        <h2 className="reveal font-display font-bold text-4xl md:text-5xl mb-8">Seja <span className="text-gradient">parceiro.</span></h2>
        <form className="grid gap-4">
          {["Nome do negócio", "Categoria", "Email", "Telefone"].map((p) => (
            <input key={p} placeholder={p} className="rounded-pill bg-white/[0.04] border border-white/15 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-primary-glow"/>
          ))}
          <button className="btn-primary !py-4">Registar interesse</button>
        </form>
      </div>
    </section>
  </PageShell>
);
export default Marketplace;
