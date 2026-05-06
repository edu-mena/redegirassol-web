export interface AppFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ExplainLevel {
  label: string;
  sublabel: string;
  preview: string;
  color: string;
}

export interface GirassolLeEpisode {
  title: string;
  duration: string;
  date: string;
  category: string;
  image: string | null;
}

export const features: AppFeature[] = [
  {
    icon: "⚖️",
    title: "Debates com Propósito",
    description: "Entra em debates sobre as notícias do dia. Argumenta, reage e vê o que Angola pensa.",
  },
  {
    icon: "🎓",
    title: "Especialistas Comentam",
    description: "Economistas, juristas, médicos e outros profissionais explicam o contexto das notícias em primeira mão.",
  },
  {
    icon: "🧠",
    title: "Termos-Chave",
    description: "Palavras e conceitos difíceis ficam sublinhados no texto. Clica para ver a definição sem sair da leitura.",
  },
  {
    icon: "📊",
    title: "Níveis de Explicação",
    description: "Escolhe como queres receber a informação — do resumo directo à análise aprofundada.",
  },
  {
    icon: "🤖",
    title: "IA Girassol",
    description: "Faz perguntas sobre qualquer notícia. A IA responde com contexto, fontes e linguagem clara.",
  },
  {
    icon: "🎧",
    title: "Girassol Lê",
    description: "Artigos narrados em áudio, publicados três vezes por semana. Ouve enquanto viveres o teu dia.",
  },
];

export const explainLevels: ExplainLevel[] = [
  {
    label: "Básico",
    sublabel: "Para todos",
    preview: "O governo anunciou que os preços dos combustíveis vão subir a partir de Julho. Isso significa que vai pagar mais para abastecer o carro.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    label: "Intermédio",
    sublabel: "Com contexto",
    preview: "A revisão dos preços dos combustíveis enquadra-se na política de dessubsidiação gradual em curso desde 2023, alinhada com as recomendações do FMI para reduzir o défice orçamental.",
    color: "from-primary to-primary-glow",
  },
  {
    label: "Avançado",
    sublabel: "Para especialistas",
    preview: "O pass-through inflacionário estimado situa-se entre 1,2–1,8 p.p. sobre o IPC, pressionando o Banco Nacional de Angola a rever a taxa BNA no próximo trimestre para conter expectativas de inflação.",
    color: "from-violet-500 to-purple-700",
  },
];

export const girassolLeEpisodes: GirassolLeEpisode[] = [
  {
    title: "O que é o Orçamento Geral do Estado e como afecta a sua vida?",
    duration: "14 min",
    date: "06 MAI 2026",
    category: "Economia",
    image: null,
  },
  {
    title: "Angola e o FMI: uma relação necessária mas complicada",
    duration: "18 min",
    date: "03 MAI 2026",
    category: "Política",
    image: null,
  },
  {
    title: "O que está a acontecer no Sudão e porquê importa para África",
    duration: "11 min",
    date: "30 ABR 2026",
    category: "Mundo",
    image: null,
  },
];
