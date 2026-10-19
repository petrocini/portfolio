export type Project = {
  title: string;
  description: string;
  tags: string[];
  visibility: 'public' | 'concept';
  url?: string;
  urlLabel?: string;
  preview: 'caiado' | 'pdv' | 'clara';
  domain: string;
};

export const projects: Project[] = [
  {
    title: 'Caiado FIFA',
    description:
      'Landing page para apresentar os serviços de EA FC do pro player Vinícius Caiado e facilitar o contato com clientes.',
    tags: ['Landing page', 'Design responsivo', 'Tailwind CSS'],
    visibility: 'public',
    url: 'https://www.caiadofifa.com.br',
    urlLabel: 'Acessar site',
    preview: 'caiado',
    domain: 'caiadofifa.com.br',
  },
  {
    title: 'PDV Fácil',
    description:
      'Sistema desktop para operação de balcão: pedidos, catálogo, relatórios, impressão térmica e funcionamento offline-first.',
    tags: ['Electron', 'React', 'SQLite'],
    visibility: 'public',
    url: '/pdv-facil/',
    urlLabel: 'Conhecer o PDV Fácil',
    preview: 'pdv',
    domain: 'Aplicativo para Windows',
  },
  {
    title: 'Clara Nutrição',
    description:
      'Projeto conceito de landing page para nutricionistas: uma apresentação acolhedora do atendimento, pensada para gerar conversas.',
    tags: ['Landing page', 'Nutrição', 'Projeto conceito'],
    visibility: 'concept',
    url: '/clara-nutricao/',
    urlLabel: 'Explorar o conceito',
    preview: 'clara',
    domain: 'clara-nutricao',
  },
];

export const skillGroups = [
  { title: 'Frontend', skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  {
    title: 'Backend & Dados',
    skills: ['Laravel', 'Node.js', 'Python', 'MySQL', 'SQLite', 'Redis'],
  },
  { title: 'Mobile', skills: ['Android', 'Kotlin', 'Offline-first'] },
  { title: 'Cloud & DevOps', skills: ['GCP', 'Vercel', 'Docker', 'GitHub'] },
];

export const experience = [
  {
    role: 'Desenvolvedor PHP Pleno',
    company: 'Spun Mídia',
    period: 'mai. 2026 — atual',
    description:
      'Desenvolvimento full stack com Laravel e Blade, integrações com Google Ad Manager e GCP, automações em Python e extensões JavaScript.',
    tags: ['Laravel', 'GCP', 'Python'],
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Codebit',
    period: 'nov. 2023 — atual',
    description:
      'Atuação da concepção ao deploy em microsserviços PHP e Node.js, infraestrutura serverless no GCP e processamento assíncrono.',
    tags: ['Node.js', 'Cloud Run', 'BigQuery'],
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Usina de Laticínios Jussara',
    period: 'set. 2021 — nov. 2023',
    description:
      'Construção de sistemas de produção, estoque e qualidade, incluindo integração RFID e sincronização offline-first para Android.',
    tags: ['Kotlin', 'RFID', 'SQLite'],
  },
];
