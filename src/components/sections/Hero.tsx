import { heroSlides } from "@/data/heroSlides";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      5000,
    );
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (idx: number) => { setCurrent(idx); resetTimer(); };
  const prev = () => go((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => go((current + 1) % heroSlides.length);

  return (
    <section className="relative bg-background pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: text + orange accent bar */}
        <div className="lg:col-span-7 relative pl-6 md:pl-8">
          <div className="absolute left-0 top-2 bottom-6 w-2 rounded-full bg-gradient-primary" />
          <span className="pill bg-surface-warm text-foreground/70 mb-6">
            Grupo de Media · Angola
          </span>
          <h1
            className="font-display font-bold text-foreground"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Angola's Voice.
            <br />
            <span className="text-gradient">Africa's Stage.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] md:text-xl text-muted-foreground leading-relaxed">
            Televisão · Rádio · Notícias · Digital. Uma rede multiplataforma que liga Angola ao mundo.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/multiplataformas" className="btn-primary">
              Descobrir <ArrowRight size={16} />
            </Link>
            <Link to="/tv" className="btn-ghost">
              <Play size={14} /> Assistir TV
            </Link>
          </div>
        </div>

        {/* Right: editorial slider */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: 24,
              boxShadow: "0 20px 50px -15px rgba(0,0,0,0.18)",
              aspectRatio: "4/5",
            }}
          >
            {/* Stacked slides with fade transition */}
            {heroSlides.map((slide, i) => (
              <div
                key={slide.id}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.82) 38%, rgba(0,0,0,0.10) 62%, transparent 100%)",
                  }}
                />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2
                    className="font-display font-bold text-white"
                    style={{ fontSize: "clamp(20px, 2.8vw, 30px)", lineHeight: 1.1 }}
                  >
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-white/75 text-sm leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Link to={slide.cta.href} className="btn-primary mt-5">
                    {slide.cta.label} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Slide anterior"
              className="absolute left-3 top-1/3 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full text-white transition-all"
              style={{ background: "rgba(0,0,0,0.32)", backdropFilter: "blur(6px)" }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Próximo slide"
              className="absolute right-3 top-1/3 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full text-white transition-all"
              style={{ background: "rgba(0,0,0,0.32)", backdropFilter: "blur(6px)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 999,
                  background:
                    i === current
                      ? "var(--gradient-primary)"
                      : "hsl(var(--border))",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
