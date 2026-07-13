// Conteúdo extraído do material de identidade visual (PDF de branding)
// e do perfil oficial do Instagram @cassialobao.estudiocriativo.
// Nenhum texto aqui é genérico de template — tudo vem da voz real da marca.
//
// Estrutura organizada em torno de 7 dobras, cada uma respondendo a
// uma única pergunta do visitante (ver auditoria de arquitetura):
// Impacto → Quem é a Cássia → Conexão emocional → Trabalhos reais →
// Processo → Confiança → Convite.

export const brand = {
  name: "Cássia Lobão",
  studio: "Estúdio Criativo",
  tagline: "O poder das flores.",
  bio: "Decoração criativa e autêntica",
  categories: "Casamentos · Eventos · Corporativo",
  instagram: "https://www.instagram.com/cassialobao.estudiocriativo/",
  instagramHandle: "@cassialobao.estudiocriativo",
  location: "Praia Grande, SP",
  // Número real, formato internacional exigido pelo wa.me (55 + DDD + número).
  whatsapp: "5511952159221",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de conversar sobre um projeto floral.",
  email: "douglas.romano.morales@gmail.com",
};

export const nav = [
  { label: "Estúdio", href: "#estudio" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Processo", href: "#processo" },
  { label: "Instagram", href: "#trabalhos" },
  { label: "Contato", href: "#convite" },
];

// ---------- 1. IMPACTO (Hero) ----------
// Pergunta do visitante: "Onde eu caí?"
// O Hero é construído a partir de um registro real do ateliê — sem produção,
// sem encenação. O diferencial da marca não são as flores: é o gesto.
export const impacto = {
  eyebrow: brand.categories,
  headline: ["Reconhecimento", "à primeira vista."],
  sub: "O gesto, o cuidado, o processo — antes de qualquer flor pronta.",
  videoCaption: "Registro real do ateliê. Sem produção. Sem encenação.",
};

// ---------- 2. QUEM É A CÁSSIA ----------
// Pergunta do visitante: "Quem está por trás disso?"
export const quemEha = {
  eyebrow: "Estúdio",
  title: "Criar é um exercício de sensibilidade.",
  lead: "Cássia Lobão.",
  body: "O Estúdio Criativo nasce da escuta — do espaço, da história, do momento. Mais do que montar cenários, buscamos criar atmosferas que permanecem.",
};

// ---------- 3. CONEXÃO EMOCIONAL ----------
// Pergunta do visitante: "Por que isso é diferente?"
export const conexao = {
  lines: ["antes da forma,", "existe a intenção."],
  closing: "A beleza não está no excesso — está na intenção presente em cada composição.",
};

// ---------- 4. TRABALHOS REAIS (Portfólio + Instagram) ----------
// Pergunta do visitante: "O que ela já fez?"
export const trabalhos = {
  eyebrow: "Trabalhos reais",
  title: "O que já vivemos.",
  sub: "Direto do ateliê — sem produção de estúdio, sem encenação.",
};

export const portfolio = [
  {
    title: "Buquês & Noivas",
    description: "Orquídeas e flores brancas, luz natural difusa.",
    image: "/images/orchid-detail.jpg",
  },
  {
    title: "Cerimônias",
    description: "Do buquê ao último gesto antes do altar.",
    image: "/images/bridal-bouquet.jpg",
  },
  {
    title: "Composições Autorais",
    description: "Tons vibrantes, texturas sobrepostas, olhar editorial.",
    image: "/images/florals-vibrant.jpg",
  },
  {
    title: "Still Life",
    description: "Flores como extensão do gesto.",
    image: "/images/hero-portrait.jpg",
  },
];

export type InstagramPost = {
  id: string;
  type: "reel" | "post";
  url: string;
  caption?: string;
  tags?: string[];
  color: "sage" | "blush" | "cream" | "dark";
};

// Links reais e verificados do perfil @cassialobao.estudiocriativo
export const instagramPosts: InstagramPost[] = [
  {
    id: "DZfp2V0xYKP",
    type: "post",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/p/DZfp2V0xYKP/",
    caption: "Nenhum amor é igual ao outro, e nenhum buquê deveria ser também.",
    tags: ["#BuquêPersonalizado", "#Noivas"],
    color: "sage",
  },
  {
    id: "DZfjNf-R762",
    type: "post",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/p/DZfjNf-R762/",
    caption: "Por trás de cada composição existe paixão, criatividade e um olhar atento aos detalhes.",
    tags: ["#DecoraçãoFloral", "#ArteFloral"],
    color: "blush",
  },
  {
    id: "DZfc8R5RJ58",
    type: "post",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/p/DZfc8R5RJ58/",
    caption: "O poder das flores, em cada detalhe do grande dia.",
    tags: ["#Casamentos", "#DesignFloral"],
    color: "dark",
  },
  {
    id: "DZ-n8d7xq-I",
    type: "reel",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/reel/DZ-n8d7xq-I/",
    color: "cream",
  },
  {
    id: "DZ0IS_6Sdrk",
    type: "reel",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/reel/DZ0IS_6Sdrk/",
    color: "sage",
  },
  {
    id: "DZxoFkblT2t",
    type: "reel",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/reel/DZxoFkblT2t/",
    color: "blush",
  },
  {
    id: "DZvCgXZRP6E",
    type: "reel",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/reel/DZvCgXZRP6E/",
    color: "dark",
  },
  {
    id: "DZsdsE9R9UM",
    type: "reel",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/reel/DZsdsE9R9UM/",
    color: "cream",
  },
  {
    id: "DZhkDA0RJUU",
    type: "reel",
    url: "https://www.instagram.com/cassialobao.estudiocriativo/reel/DZhkDA0RJUU/",
    color: "sage",
  },
];

// ---------- 5. PROCESSO ----------
// Pergunta do visitante: "Como ela trabalha?"
export const processo = {
  eyebrow: "Processo",
  title: "Como cada projeto nasce.",
  steps: [
    {
      index: "01",
      title: "Escuta",
      description: "A conversa inicial — a história, o espaço, o que precisa ser sentido.",
    },
    {
      index: "02",
      title: "Intenção",
      description: "Cada elemento é escolhido por propósito, não por catálogo.",
    },
    {
      index: "03",
      title: "Composição",
      description: "Luz, textura e forma ganham lugar — do esboço ao arranjo final.",
    },
    {
      index: "04",
      title: "Presença",
      description: "No dia, cada detalhe é ajustado até o último gesto antes do início.",
    },
  ],
};

// ---------- 6. CONFIANÇA ----------
// Pergunta do visitante: "Posso confiar nela?"
// Só existe uma citação real da fundadora e um comentário real do Instagram —
// tratado como prova social mínima e honesta, não como grid de depoimentos.
export const confianca = {
  quote:
    "Meu propósito é transformar flores em experiências que emocionam.",
  author: "Cássia Lobão",
  role: "Fundadora do Estúdio Criativo",
  socialProof: {
    quote: "Maravilhoso",
    author: "@kellycss2013",
    context: "comentário real no Instagram",
  },
};

// ---------- 7. CONVITE ----------
// Pergunta do visitante: "Como eu entro em contato?"
export const convite = {
  eyebrow: "Vamos conversar",
  title: "Sua história começa com uma conversa.",
  sub: "Conte sobre a sua celebração e deixe-nos transformar flores em experiências que permanecem.",
};

// Mantidos para compatibilidade de conteúdo/voz da marca (usados em meta/footer)
export const manifesto = {
  lead: "Antes da forma, existe a intenção.",
  closing:
    "A beleza, para nós, não está no excesso, mas na intenção presente em cada composição.",
};
