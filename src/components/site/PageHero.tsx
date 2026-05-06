import { ReactNode } from "react";

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) => (
  <section className="relative bg-background pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
    <div className="container-x relative">
      <div className="relative pl-6 md:pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-2 rounded-full bg-gradient-primary" />
        {eyebrow && (
          <span className="pill bg-surface-warm text-foreground/70 mb-6">{eyebrow}</span>
        )}
        <h1
          className="font-display font-bold text-foreground max-w-5xl"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-[18px] md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </div>
  </section>
);
