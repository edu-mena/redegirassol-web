import { SoonBadge } from "../site/SoonBadge";
import { EmailCapture } from "../site/EmailCapture";

export const GiraplaceTeaser = () => (
  <section className="bg-background">
    <div className="container-x py-24 md:py-[100px]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <SoonBadge />
          <h2
            className="mt-6 font-display font-bold text-foreground"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            O seu negócio merece uma <span className="text-gradient">vitrine digital.</span>
          </h2>
          <p className="mt-6 text-[18px] text-muted-foreground max-w-lg leading-relaxed">
            Giraplace é o marketplace da Rede Girassol. Para empreendedores angolanos que querem
            vender mais, com o alcance e a confiança de uma marca nacional.
          </p>
          <div className="mt-8">
            <EmailCapture placeholder="O seu email" cta="Registar Interesse" />
          </div>
        </div>
        <div className="reveal grid grid-cols-2 gap-5">
          {[
            "Lojas online em minutos.",
            "Pagamentos integrados.",
            "Visibilidade nacional.",
            "Apoio dedicado.",
          ].map((t, i) => (
            <div
              key={t}
              className={`p-7 ${i % 3 === 0 ? "bg-surface-warm" : "bg-background border border-border"}`}
              style={{ borderRadius: 20 }}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                0{i + 1}
              </div>
              <p className="mt-3 font-display text-lg font-semibold leading-tight text-foreground">
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
