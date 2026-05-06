import team from "../../../public/images/about/about1.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => (
  <section className="bg-background">
    <div className="container-x py-24 md:py-[100px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="overflow-hidden" style={{ borderRadius: 20, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <img
              loading="lazy"
              src={team}
              alt="Edifício Girassol"
              className="aspect-[3/4] w-full object-cover"
              width={1280}
              height={1600}
            />
          </div>
        </div>
        <div className="reveal">
          <span className="pill bg-surface-warm text-foreground/70 mb-6">Quem Somos</span>
          <h2
            className="font-display font-bold text-foreground"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Mais do que <span className="text-gradient">Media.</span>
          </h2>
          <p className="mt-6 text-[18px] text-muted-foreground leading-relaxed">
            A Rede Girassol é o grupo de media mais completo de Angola. Operamos em televisão,
            rádio, jornalismo digital e plataformas do futuro — sempre com inovação, rigor e
            uma visão multiplataforma única.
          </p>
          <p className="mt-4 text-[18px] text-muted-foreground leading-relaxed">
            Acreditamos que o conteúdo de qualidade é o motor de transformação. Por isso,
            investimos em pessoas, tecnologia e em vozes que fazem África vibrar.
          </p>
          <Link to="/multiplataformas" className="btn-primary mt-10">
            Conheça a Rede <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
