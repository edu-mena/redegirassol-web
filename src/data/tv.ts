export interface TvOperator {
  name: string;
  channel: string;
  color: string;
}

export interface TvShow {
  title: string;
  schedule: string;
  category: string;
  image: string | null;
}

export interface TvSlot {
  time: string;
  title: string;
  image: string | null;
}

export const operators: TvOperator[] = [
  { name: "ZAP",     channel: "Canal 20",  color: "from-orange-500 to-red-600" },
  { name: "TVCABO", channel: "Canal 54",  color: "from-blue-400 to-blue-800" },
  { name: "DStv",   channel: "Canal 508", color: "from-blue-900 to-indigo-900" },
];

export const shows: TvShow[] = [
  { 
    title: "Giranotícias", 
    schedule: "Diário · 20h00", 
    category: "Jornalismo", 
    image: "/images/shows/Giranotícias.jfif" 
  },
  { 
    title: "Tudo Passa Aqui", 
    schedule: "Seg–Sex · 16h00", 
    category: "Variedades", 
    image: "/images/shows/Tudo Passa Aqui.jfif" 
  },
  { 
    title: "Conversas com Mell", 
    schedule: "Ter/Qui · 21h00", 
    category: "Talk Show", 
    image: "/images/shows/Conversas com Mell.jfif" 
  },
  { 
    title: "Giranegócios", 
    schedule: "Qua · 21h00", 
    category: "Economia", 
    image: "/images/shows/Giranegócios.png" 
  },
];

export const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export const schedule: TvSlot[][] = [
  // Segunda
  [
    { time: "07:00", title: "Giramanchã", image: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=200&h=120&fit=crop" },
    { time: "13:00", title: "Giranotícias 1ª Edição", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=200&h=120&fit=crop" },
    { time: "16:00", title: "Tudo Passa Aqui", image: "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?w=200&h=120&fit=crop" },
    { time: "20:00", title: "Giranotícias", image: "https://images.unsplash.com/photo-1585829365234-782a50442647?w=200&h=120&fit=crop" },
    { time: "21:30", title: "Conexão", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=120&fit=crop" },
  ],
  // Terça
  [
    { time: "07:00", title: "Giramanchã", image: null },
    { time: "13:00", title: "Giranotícias 1ª Edição", image: null },
    { time: "16:00", title: "Tudo Passa Aqui", image: null },
    { time: "20:00", title: "Giranotícias", image: null },
    { time: "21:00", title: "Conversas com Mell", image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=200&h=120&fit=crop" },
  ],
  // Quarta
  [
    { time: "07:00", title: "Giramanchã", image: null },
    { time: "13:00", title: "Giranotícias 1ª Edição", image: null },
    { time: "16:00", title: "Tudo Passa Aqui", image: null },
    { time: "20:00", title: "Giranotícias", image: null },
    { time: "21:00", title: "Giranegócios", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=120&fit=crop" },
  ],
  // Quinta
  [
    { time: "07:00", title: "Giramanchã", image: null },
    { time: "13:00", title: "Giranotícias 1ª Edição", image: null },
    { time: "16:00", title: "Tudo Passa Aqui", image: null },
    { time: "20:00", title: "Giranotícias", image: null },
    { time: "21:00", title: "Conversas com Mell", image: null },
  ],
  // Sexta
  [
    { time: "07:00", title: "Giramanchã", image: null },
    { time: "13:00", title: "Giranotícias 1ª Edição", image: null },
    { time: "16:00", title: "Tudo Passa Aqui", image: null },
    { time: "20:00", title: "Giranotícias", image: null },
    { time: "22:00", title: "Zwela Meu Povo", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140e2b8?w=200&h=120&fit=crop" },
  ],
  // Sábado
  [
    { time: "10:00", title: "Gira Kids", image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=200&h=120&fit=crop" },
    { time: "13:00", title: "Resumo da Semana", image: null },
    { time: "18:00", title: "Especial Música", image: null },
    { time: "20:00", title: "Giranotícias FDS", image: null },
    { time: "21:00", title: "Nossa História (Doc)", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=200&h=120&fit=crop" },
  ],
  // Domingo
  [
    { time: "09:00", title: "Fé e Esperança", image: null },
    { time: "12:00", title: "Gira Desporto", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=200&h=120&fit=crop" },
    { time: "15:00", title: "Grande Filme", image: null },
    { time: "20:00", title: "Giranotícias FDS", image: null },
    { time: "21:00", title: "Debate Semanal", image: null },
  ],
];