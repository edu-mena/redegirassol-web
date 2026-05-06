import { newsArticles } from "@/data/newsArticles";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featured = newsArticles.slice(0, 3);

export const LatestNews = () => (
  <section className="bg-background">
    <div className="container-x py-24 md:py-[100px]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
        <div>
          <span className="pill bg-surface-warm text-foreground/70 mb-5">Giranotícias</span>
          <h2
            className="font-display font-bold text-foreground"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            As notícias <span className="text-gradient">que importam.</span>
          </h2>
        </div>
        <Link
          to="/noticias"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Ver Todas <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3" style={{ gap: 28 }}>
        {featured.map((n, i) => (
          <a
            key={n.id}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            data-delay={i * 80}
            className="reveal card-lift bg-card overflow-hidden flex flex-col group"
            style={{ borderRadius: 20, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
          >
            <div className="p-3">
              <div
                className="aspect-[16/10] relative overflow-hidden"
                style={{
                  borderRadius: 16,
                  background: "linear-gradient(135deg, hsl(32 91% 55% / 0.18), hsl(22 91% 47% / 0.28))",
                }}
              >
                {n.image && (
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute top-4 left-4 pill bg-white text-foreground">{n.category}</span>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex flex-col flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {n.dateLabel}
              </div>
              <h3 className="mt-3 font-display font-bold text-xl leading-tight text-foreground">{n.title}</h3>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Ler mais <ArrowRight size={14} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
