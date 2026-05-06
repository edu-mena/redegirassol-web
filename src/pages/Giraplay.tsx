import { PageShell } from "@/components/site/PageShell";
import { Film, Tv2, Clapperboard, Baby, Trophy } from "lucide-react";
import { EmailCapture } from "@/components/site/EmailCapture";
import { SoonBadge } from "@/components/site/SoonBadge";

const FEAT = [
  { i: Film, t: "Filmes" },
  { i: Tv2, t: "Novelas" },
  { i: Clapperboard, t: "Séries" },
  { i: Baby, t: "Infantil" },
  { i: Trophy, t: "Desporto" },
];

const Giraplay = () => (
  <PageShell title="Giraplay">
    <section className="relative min-h-[100svh] bg-surface-darker text-white overflow-hidden grid place-items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-highlight/20 via-transparent to-primary-glow/30" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />
      <div className="absolute inset-0 grain opacity-30" />
      <div className="container-x relative text-center max-w-5xl py-16">
        <SoonBadge label="🚀 Em Breve" />
        <h1 className="mt-8 font-display font-bold text-[clamp(4rem,16vw,12rem)] leading-[0.85] text-gradient animate-fade-up">Giraplay</h1>
        <p className="mt-6 font-display text-2xl md:text-3xl text-white/85 animate-fade-up" style={{ animationDelay: "120ms" }}>Entretenimento familiar. Anytime. Anywhere.</p>

        <div className="mt-12 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "200ms" }}>
          {FEAT.map((f) => (
            <span key={f.t} className="pill bg-white/[0.06] border border-white/15"><f.i size={14}/> {f.t}</span>
          ))}
        </div>

        <div className="mt-14 inline-flex gap-3 font-mono-accent text-sm">
          {["--D", "--H", "--M", "--S"].map((x) => (
            <div key={x} className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 text-2xl font-bold text-gradient">{x}</div>
          ))}
        </div>

        <div className="mt-12 flex justify-center"><EmailCapture cta="Avise-me" dark /></div>
      </div>
    </section>
  </PageShell>
);
export default Giraplay;
