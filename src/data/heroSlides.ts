export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    id: "tv",
    image: "/images/hero/GirassolTV.jfif",
    title: "Girassol TV",
    subtitle: "Televisão angolana para o mundo. Entretenimento, informação e cultura ao vivo.",
    cta: { label: "Assistir TV", href: "/tv" },
  },
  {
    id: "fm",
    image: "/images/hero/GirassolFM.jfif",
    title: "Girassol FM",
    subtitle: "A rádio que faz Angola vibrar. Música, notícias e programas 24 horas por dia.",
    cta: { label: "Ouvir Rádio", href: "/fm" },
  },
  {
    id: "veza",
    image: "/images/hero/weza.jfif",
    title: "Veza",
    subtitle: "A assistente virtual da Rede Girassol. Explica as notícias de forma simples e acessível.",
    cta: { label: "Conhecer a Veza", href: "/app" },
  },
];
