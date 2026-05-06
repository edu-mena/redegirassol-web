import { SoonBadge } from "../site/SoonBadge";
import { EmailCapture } from "../site/EmailCapture";

export const GiraplayTeaser = () => (
  <section className="bg-surface-warm">
    <div className="container-x py-24 md:py-[100px] text-center max-w-3xl">
      <SoonBadge label="Em Breve" />
      <h2
        className="reveal mt-6 font-display font-bold text-foreground"
        style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
      >
        <span className="text-gradient">Giraplay</span> — entretenimento sem limites.
      </h2>
      <p className="reveal mt-6 text-[18px] md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        A sua grelha de entretenimento familiar. Filmes, novelas, conteúdo on demand —
        em qualquer ecrã, a qualquer hora.
      </p>
      <div className="reveal mt-10 flex justify-center">
        <EmailCapture placeholder="Seja o primeiro a saber" cta="Subscrever" />
      </div>
    </div>
  </section>
);
