import { PhoneMockup } from "../site/PhoneMockup";

export const AppTeaser = () => (
  <section className="bg-[hsl(0_0%_7%)] text-white">
    <div className="container-x py-24 md:py-[100px] grid lg:grid-cols-2 gap-16 items-center">
      <div className="reveal">
        <span className="pill bg-white/10 text-white/80 mb-6">📱 Vem Aí</span>
        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
        >
          O App Girassol está a <span className="text-gradient">chegar.</span>
        </h2>
        <p className="mt-6 text-[18px] md:text-xl text-[#AAAAAA] max-w-xl leading-relaxed">
          Toda a Rede Girassol na palma da sua mão. TV, rádio, notícias e muito mais —
          numa só aplicação.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {["App Store — Brevemente", "Google Play — Brevemente"].map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-white/30 text-white/85 px-4 py-2 text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="reveal flex justify-center">
        <PhoneMockup />
      </div>
    </div>
  </section>
);
