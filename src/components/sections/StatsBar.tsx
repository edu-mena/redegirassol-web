import { CountUp } from "../site/CountUp";

const STATS = [
  { value: 10, suffix: "+", label: "Anos no Ar" },
  { value: 102.7, suffix: " FM", label: "Luanda", float: true },
  { value: 500, suffix: "K+", label: "Seguidores" },
  { value: 3, suffix: "", label: "Plataformas Ativas" },
];

export const StatsBar = () => (
  <section className="bg-surface-warm">
    <div className="container-x py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
      {STATS.map((s) => (
        <div key={s.label} className="reveal text-center md:text-left">
          <div className="font-display font-bold text-4xl md:text-5xl text-foreground">
            {s.float ? (
              <span>
                {s.value}
                {s.suffix}
              </span>
            ) : (
              <CountUp end={s.value} suffix={s.suffix} />
            )}
          </div>
          <div className="mt-3 text-[15px] text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);
