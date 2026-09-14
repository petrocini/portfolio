export type ProjectVisibility = 'public' | 'demonstrative' | 'private';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  visibility: ProjectVisibility;
  url?: string;
  urlLabel?: string;
  accent: 'petroleum' | 'sky' | 'sand' | 'clay';
};

export const projects: Project[] = [
  {
    title: 'Caiado FIFA',
    description:
      'Landing page para atleta profissional de EA FC, com uma narrativa visual voltada a carreira, performance e oportunidades de parceria.',
    tags: ['Landing page', 'Design responsivo', 'Tailwind CSS'],
    visibility: 'public',
    url: 'https://www.caiadofifa.com.br',
    urlLabel: 'Visitar projeto',
    accent: 'sky',
  },
  {
    title: 'PDV Fácil',
    description:
      'Sistema desktop para operação de balcão: pedidos, catálogo, relatórios, impressão térmica e funcionamento offline-first.',
    tags: ['Electron', 'React', 'SQLite', 'Prisma'],
    visibility: 'public',
    url: 'https://github.com/petrocini/pdv-facil',
    urlLabel: 'Ver no GitHub',
    accent: 'petroleum',
  },
  {
    title: 'Clínica médica',
    description:
      'Projeto demonstrativo de landing page para uma clínica, pensado para apresentar especialidades e facilitar pedidos de agendamento.',
    tags: ['Projeto demonstrativo', 'UX para serviços', 'Agendamento'],
    visibility: 'demonstrative',
    accent: 'sand',
  },
  {
    title: 'Sistemas sob medida',
    description:
      'Interfaces e sistemas internos para organizar operações, centralizar informações e tornar rotinas do negócio mais claras.',
    tags: ['Dashboards', 'Fluxos internos', 'Integrações'],
    visibility: 'private',
    accent: 'clay',
  },
];

export const services = [
  {
    title: 'Landing pages com direção',
    description:
      'Páginas que apresentam a oferta com clareza, dão contexto ao cliente e conduzem a uma próxima conversa.',
  },
  {
    title: 'Sistemas que organizam o trabalho',
    description:
      'Ferramentas para pedidos, processos internos, painéis e operações que não cabem mais em planilhas.',
  },
  {
    title: 'Produtos digitais bem resolvidos',
    description:
      'Interfaces rápidas e sustentáveis, conectando experiência de uso, regras de negócio e infraestrutura.',
  },
];

export const processSteps = [
  [
    '01',
    'Entender o contexto',
    'Alinhamos objetivo, público e o que precisa mudar no negócio.',
  ],
  [
    '02',
    'Definir a direção',
    'Organizo a jornada, o escopo e as decisões que dão clareza ao projeto.',
  ],
  [
    '03',
    'Construir com critério',
    'Transformo a direção em uma experiência rápida, responsiva e bem estruturada.',
  ],
  [
    '04',
    'Publicar e evoluir',
    'Colocamos no ar com uma base que permite medir, ajustar e crescer.',
  ],
] as const;

export const experience = [
  {
    role: 'Desenvolvedor PHP Pleno',
    company: 'Spun Mídia',
    period: 'mai. 2026 — atual',
    description:
      'Desenvolvimento full stack com Laravel e Blade, integrações com Google Ad Manager e GCP, automações em Python e extensões JavaScript.',
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Codebit',
    period: 'nov. 2023 — atual',
    description:
      'Atuação da concepção ao deploy em microsserviços PHP e Node.js, infraestrutura serverless no GCP e processamento assíncrono.',
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Usina de Laticínios Jussara',
    period: 'set. 2021 — nov. 2023',
    description:
      'Construção de sistemas de produção, estoque e qualidade, incluindo integração RFID e sincronização offline-first para Android.',
  },
];

export const skillGroups = [
  ['Web', ['React', 'TypeScript', 'Laravel', 'Node.js']],
  ['Dados', ['MySQL', 'SQLite', 'Redis', 'BigQuery']],
  ['Infraestrutura', ['GCP', 'Vercel', 'Docker', 'GitHub']],
] as const;
