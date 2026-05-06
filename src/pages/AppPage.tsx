import { PageShell } from "@/components/site/PageShell";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { features, explainLevels, girassolLeEpisodes } from "@/data/app";
import { Play, Headphones, Mic, Bot, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const AppPage = () => {
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <PageShell title="App Girassol">

      {/* ── Hero ── */}
      <section className="relative min-h-[100svh] bg-surface-darker text-white overflow-hidden flex items-center pt-20">
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="absolute inset-0 grain opacity-25" />
        <div className="container-x relative grid lg:grid-cols-2 gap-16 items-center py-20">
          <div className="animate-fade-up">
            <span className="pill bg-white/10 border border-white/15 mb-6">📱 Disponível Agora</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95]">
              Informação.<br />Debate.<br />
              <span className="text-gradient">Clareza.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-lg">
              O app que te explica o mundo ao teu nível — com especialistas, IA e áudio. Feito para quem quer entender Angola e o mundo, não apenas consumir notícias.
            </p>
            <div className="mt-10">
              <a
                href="https://girassol-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Try Out <ExternalLink size={15} />
              </a>
            </div>
          </div>
          <div className="flex justify-center"><PhoneMockup /></div>
        </div>
      </section>

      {/* ── Funcionalidades ── */}
      <section className="container-x py-24">
        <div className="max-w-xl mb-14">
          <span className="font-mono-accent text-xs uppercase tracking-wider text-primary">O que o app faz</span>
          <h2 className="reveal mt-3 font-display font-bold text-4xl md:text-5xl">
            Mais do que notícias.<br /><span className="text-gradient">Compreensão.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.title} data-delay={i * 70} className="reveal card-lift rounded-2xl p-7 border border-border bg-card">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-5 font-display font-bold text-xl">{f.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Níveis de explicação ── */}
      <section className="bg-surface-darker text-white py-24">
        <div className="container-x">
          <div className="max-w-xl mb-12">
            <span className="font-mono-accent text-xs uppercase tracking-wider text-primary-glow">Níveis de explicação</span>
            <h2 className="reveal mt-3 font-display font-bold text-4xl md:text-5xl">
              A mesma notícia,<br /><span className="text-gradient">ao teu ritmo.</span>
            </h2>
            <p className="reveal mt-4 text-white/70 text-lg">
              Escolhe como queres receber a informação. Do resumo simples à análise técnica — sem jargão desnecessário.
            </p>
          </div>

          <div className="flex gap-2 mb-8 flex-wrap">
            {explainLevels.map((l, i) => (
              <button
                key={l.label}
                onClick={() => setActiveLevel(i)}
                className={`pill border transition-all ${activeLevel === i ? "bg-foreground text-background border-foreground" : "border-white/20 text-white/70 hover:border-white/50"}`}
              >
                {l.label} <span className="opacity-60 ml-1 text-[10px]">{l.sublabel}</span>
              </button>
            ))}
          </div>

          <div className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-8 max-w-2xl transition-all">
            <div className={`inline-flex px-3 py-1 rounded-full text-xs font-mono-accent uppercase tracking-wider text-white mb-5 bg-gradient-to-r ${explainLevels[activeLevel].color}`}>
              {explainLevels[activeLevel].label}
            </div>
            <p className="text-white/90 text-lg leading-relaxed font-display">
              "{explainLevels[activeLevel].preview}"
            </p>
          </div>
        </div>
      </section>

      {/* ── Termos-chave & IA ── */}
      <section className="container-x py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="font-mono-accent text-xs uppercase tracking-wider text-primary">Termos-Chave & IA</span>
          <h2 className="reveal mt-3 font-display font-bold text-4xl md:text-5xl leading-[1.05]">
            Clica. Percebe.<br /><span className="text-gradient">Pergunta.</span>
          </h2>
          <p className="reveal mt-5 text-muted-foreground text-lg leading-relaxed">
            Palavras difíceis ficam sublinhadas no texto. Clica para ver a definição sem sair da leitura. Ainda precisas de mais? A <strong>IA Girassol</strong> responde às tuas perguntas com contexto e fontes.
          </p>
          <div className="reveal mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0"><Bot size={15} /></span>
              <span>Perguntas em linguagem natural sobre qualquer notícia</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0"><ChevronRight size={15} /></span>
              <span>Respostas com fontes verificadas pela redacção Girassol</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0"><Mic size={15} /></span>
              <span>Modo voz — pergunta em áudio, recebe resposta em áudio</span>
            </div>
          </div>
        </div>

        {/* Mock artigo com termos clicáveis */}
        <div className="reveal rounded-2xl border border-border bg-card p-7 font-display text-base leading-relaxed">
          <div className="font-mono-accent text-[10px] uppercase text-primary mb-3">Exemplo — artigo interactivo</div>
          <p className="text-foreground/90">
            O <span className="underline decoration-primary decoration-2 cursor-pointer text-primary font-semibold">Banco Nacional de Angola</span> anunciou uma subida da{" "}
            <span className="underline decoration-primary decoration-2 cursor-pointer text-primary font-semibold">taxa BNA</span> para 19,5%, visando conter a{" "}
            <span className="underline decoration-primary decoration-2 cursor-pointer text-primary font-semibold">inflação</span> que se situa actualmente em 23,4%.
          </p>
          <div className="mt-5 rounded-xl bg-primary/10 border border-primary/20 p-4 text-sm">
            <div className="font-mono-accent text-[10px] uppercase text-primary mb-1">Taxa BNA</div>
            <p className="text-muted-foreground">
              A taxa de juro de referência definida pelo Banco Nacional de Angola. Quando sobe, os créditos ficam mais caros e o consumo abranda — o que ajuda a reduzir a inflação.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Bot size={13} className="text-primary" />
            <span>Perguntar à IA Girassol sobre este artigo…</span>
          </div>
        </div>
      </section>

      {/* ── Debates ── */}
      <section className="bg-surface-darker text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-20" />
        <div className="container-x relative grid md:grid-cols-2 gap-14 items-center">
          {/* Mock debate */}
          <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="font-mono-accent text-[10px] uppercase text-primary-glow mb-2">Debate · Economia</div>
              <h4 className="font-display font-bold text-lg">A subida dos combustíveis é inevitável ou há alternativas?</h4>
              <div className="mt-3 flex gap-4 text-xs text-white/50">
                <span>247 participantes</span>
                <span>3 especialistas</span>
                <span>Ao vivo</span>
              </div>
            </div>
            {[
              { role: "Economista", name: "Dr. Fonseca", arg: "A dessubsidiação é necessária para equilibrar as contas públicas a longo prazo.", side: "A favor" },
              { role: "Cidadão", name: "Maria João", arg: "O salário mínimo não acompanhou a inflação. Este aumento afecta desproporcionalmente os mais pobres.", side: "Contra" },
            ].map((c) => (
              <div key={c.name} className="p-5 border-b border-white/5 flex gap-4">
                <div className="w-9 h-9 rounded-full bg-gradient-primary shrink-0" />
                <div>
                  <div className="flex items-center gap-2 text-xs mb-1">
                    <span className="font-bold text-white">{c.name}</span>
                    <span className="text-white/40">{c.role}</span>
                    <span className={`pill text-[9px] ${c.side === "A favor" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>{c.side}</span>
                  </div>
                  <p className="text-sm text-white/70">{c.arg}</p>
                </div>
              </div>
            ))}
            <div className="p-4 text-center text-xs text-white/40">+ 245 comentários</div>
          </div>

          <div>
            <span className="font-mono-accent text-xs uppercase tracking-wider text-primary-glow">Debates</span>
            <h2 className="reveal mt-3 font-display font-bold text-4xl md:text-5xl">
              A tua voz<br /><span className="text-gradient">importa.</span>
            </h2>
            <p className="reveal mt-5 text-white/70 text-lg leading-relaxed">
              Cada notícia abre um espaço de debate. Especialistas e cidadãos lado a lado, com argumentos estruturados. Não é uma rede social — é uma ágora.
            </p>
            <ul className="reveal mt-6 space-y-3 text-sm text-white/70">
              {["Debates moderados pela redacção Girassol", "Especialistas verificados com selo de autenticidade", "Argumentos classificados por relevância, não por likes"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-glow shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Girassol Lê ── */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono-accent text-xs uppercase tracking-wider text-primary">Girassol Lê</span>
            <h2 className="reveal mt-3 font-display font-bold text-4xl md:text-5xl">
              Ouve o mundo<br /><span className="text-gradient">enquanto vives.</span>
            </h2>
            <p className="reveal mt-4 text-muted-foreground text-lg max-w-lg">
              Três episódios por semana. Artigos e análises narrados em áudio, com voz humana. Ideal para o trânsito, o ginásio ou o intervalo.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
            <Headphones size={16} className="text-primary" />
            <span>Novos episódios: Seg · Qua · Sex</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {girassolLeEpisodes.map((ep, i) => (
            <div key={ep.title} data-delay={i * 70} className="reveal card-lift rounded-2xl border border-border bg-card overflow-hidden group cursor-pointer">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40">
                {ep.image
                  ? <img src={ep.image} alt={ep.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  : <div className="w-full h-full flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={22} className="text-white ml-1" />
                      </div>
                    </div>
                }
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono-accent text-[10px] uppercase text-primary">{ep.category}</span>
                  <span className="text-muted-foreground text-[10px]">·</span>
                  <span className="font-mono-accent text-[10px] text-muted-foreground">{ep.duration}</span>
                </div>
                <h3 className="font-display font-bold text-base leading-snug">{ep.title}</h3>
                <p className="mt-2 font-mono-accent text-[10px] uppercase text-muted-foreground">{ep.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-gradient-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <h2 className="reveal font-display font-bold text-4xl md:text-6xl leading-[0.95]">
            Experimenta<br />agora.
          </h2>
          <p className="reveal mt-5 text-white/85 text-lg">
            Debates, artigos com níveis de explicação, termos-chave e IA. Grátis, sem instalação.
          </p>
          <div className="reveal mt-10 flex justify-center">
            <a
              href="https://girassol-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-8 py-4 font-display font-bold text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              Try Out <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

    </PageShell>
  );
};
export default AppPage;
