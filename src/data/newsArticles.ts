export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  date: string;       // ISO: "2026-05-04"
  dateLabel: string;  // "04 MAI 2026"
  image: string | null;
  url: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "mundo-japao-australia",
    category: "Mundo",
    title: "Japão e Austrália fortalecem aliança estratégica",
    date: "2026-05-04",
    dateLabel: "04 MAI 2026",
    image: "https://www.giranoticias.com/_midias/jpg/2026/05/04/900x506/1_japanaustralia-417599.jpg",
    url: "https://www.giranoticias.com/mundo/2026/05/29251-japao-e-australia-fortalecem-alianca-estrategica.html",
    featured: true,
  },
  {
    id: "sociedade-corrida-agua",
    category: "Sociedade",
    title: "Corrida assinala Dia Mundial da Água",
    date: "2026-03-16",
    dateLabel: "16 MAR 2026",
    image: "https://www.giranoticias.com/_midias/jpg/2026/03/16/900x506/1_participantes_na_corrida_do_dia_mundial_da_agua-412846.jpg",
    url: "https://www.giranoticias.com/sociedade/2026/03/28381-corrida-assinala-dia-mundial-da-agua.html",
  },
  {
    id: "cultura-estilista-angola",
    category: "Cultura",
    title: "Estilista angolana conquista título na Nigéria",
    date: "2025-11-19",
    dateLabel: "19 NOV 2025",
    image: "https://www.giranoticias.com/_midias/jpg/2025/11/19/estilista_angolana_angelica_nvula-403056.jpeg",
    url: "https://www.giranoticias.com/cultura/2025/11/26453-estilista-angolana-conquista-titulo-na-nigeria.html",
  },  
  {
    id: "economia-gasoleo",
    category: "Economia",
    title: "Litro de gasóleo custa 400 kwanzas",
    date: "2025-07-04",
    dateLabel: "04 JUL 2025",
    image: "https://www.giranoticias.com/_midias/jpg/2021/10/01/480x461/1__posto_de_combustivel_mcajr_abr_1609210446-277881.jpg",
    url: "https://www.giranoticias.com/economia/2025/07/24210-litro-de-gasoleo-custa-400-kwanzas.html",
  },
  {
    id: "desporto-diogo-jota",
    category: "Desporto",
    title: "Futebolista Diogo Jota morre em acidente",
    date: "2025-07-03",
    dateLabel: "03 JUL 2025",
    image: "https://www.giranoticias.com/_midias/jpg/2025/07/03/900x506/1_morreu_diogo_jota-390703.jpeg",
    url: "https://www.giranoticias.com/desporto/2025/07/24193-futebolista-diogo-jota-morre-em-acidente.html",
  },
  {
    id: "africa-amazon-angola",
    category: "África",
    title: "Amazon projecta entrada no mercado angolano",
    date: "2025-06-25",
    dateLabel: "25 JUN 2025",
    image: "https://www.giranoticias.com/_midias/jpg/2025/06/25/900x506/1_amazon_angola-389915.jpg",
    url: "https://www.giranoticias.com/africa/2025/06/24066-amazon-projecta-entrada-no-mercado-angolano.html",
  },
  {
    id: "politica-consulado-canada",
    category: "Política",
    title: "Angola inaugura Consulado Geral no Canadá",
    date: "2025-06-15",
    dateLabel: "15 JUN 2025",
    image: "https://www.giranoticias.com/_midias/jpg/2025/06/15/900x506/1_canada_angola-388438.jpg",
    url: "https://www.giranoticias.com/politica/2025/06/23847-angola-inaugura-consulado-no-canada.html",
  },
];
