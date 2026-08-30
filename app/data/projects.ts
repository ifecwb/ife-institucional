export interface Workshop {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
  schedule: string;
  instructor: string;
  location: string;
  partners: string;
  participants?: string;
  image: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: 'esportes-coletivos',
    title: 'Esportes Coletivos',
    description:
      'Futebol, vôlei e iniciação esportiva trabalham disciplina, respeito, cooperação, coordenação motora e espírito de equipe entre crianças e adolescentes.',
    icon: 'sports_soccer',
  },
  {
    id: 'artes-marciais',
    title: 'Artes Marciais',
    description:
      'Judô e Muay Thai utilizam os princípios das artes marciais como ferramenta de desenvolvimento pessoal e social: disciplina, respeito, concentração e autocontrole.',
    icon: 'sports_martial_arts',
  },
  {
    id: 'cultura',
    title: 'Cultura e Dança',
    description:
      'O Balé utiliza a dança como ferramenta de desenvolvimento artístico, físico e social, trabalhando postura, musicalidade, expressão corporal e autoestima.',
    icon: 'theater_comedy',
  },
  {
    id: 'aquaticas',
    title: 'Atividades Aquáticas',
    description:
      'Natação e hidroginástica promovem saúde, condicionamento físico, mobilidade, autonomia no meio aquático e qualidade de vida para todas as idades.',
    icon: 'pool',
  },
];

export const workshops: Workshop[] = [
  {
    id: 'futebol',
    title: 'Futebol',
    description:
      'Projeto voltado ao desenvolvimento esportivo de crianças e adolescentes, trabalhando disciplina, respeito, responsabilidade, trabalho em equipe e espírito esportivo.',
    ageGroup: '11 a 17 anos',
    schedule: 'Terça-feira, 19h',
    instructor: 'Gerson Hudson Beithel',
    location: 'Ginásio Bairro Novo',
    partners: 'SMELJ',
    image: '/images/futebol.jpeg',
    icon: 'sports_soccer',
  },
  {
    id: 'volei',
    title: 'Vôlei',
    description:
      'Projeto de iniciação e desenvolvimento esportivo que trabalha fundamentos do vôlei, coordenação motora, disciplina, cooperação e trabalho em equipe.',
    ageGroup: '10 a 17 anos',
    schedule: 'Terça e quinta-feira, 14h',
    instructor: 'Profª Angeline Monteiro',
    location: 'Vila Tecnológica',
    partners: 'SMELJ e SMDH',
    image: '/images/volei1.jpeg',
    icon: 'sports_volleyball',
  },
  {
    id: 'iniciacao-esportiva',
    title: 'Iniciação Esportiva',
    description:
      'Atividade que proporciona às crianças e adolescentes contato com diferentes práticas esportivas, desenvolvendo coordenação motora, condicionamento físico, disciplina e convivência.',
    ageGroup: '10 a 17 anos',
    schedule: 'Quarta e sexta-feira, 9h às 11h',
    instructor: 'Prof. Daniel Nascimento',
    location: 'Vila Tecnológica',
    partners: 'SMELJ e SMDH',
    image: '/images/turma3.jpeg',
    icon: 'directions_run',
  },
  {
    id: 'judo',
    title: 'Judô',
    description:
      'O Judô trabalha disciplina, respeito, concentração, autocontrole, condicionamento físico e convivência, utilizando os princípios da arte marcial como ferramenta de desenvolvimento pessoal e social.',
    ageGroup: '6 a 17 anos',
    schedule: 'Terça-feira, 19h',
    instructor: 'Sensei Thiago Furtado',
    location: 'Clube da Gente — Bairro Novo',
    partners: 'Clube da Gente',
    image: '/images/medalha.jpeg',
    icon: 'sports_martial_arts',
  },
  {
    id: 'muay-thai',
    title: 'Muay Thai',
    description:
      'O Muay Thai utiliza o esporte como ferramenta de desenvolvimento físico e pessoal, trabalhando disciplina, concentração, respeito, autocontrole, condicionamento físico e autoconfiança.',
    ageGroup: '6 a 17 anos',
    schedule: 'Quinta-feira, 19h às 21h',
    instructor: 'Prof. Felipe Forte',
    location: 'Parque Iguaçu 1 — Ganchinho',
    partners: 'Instituto Futuro de Excelência',
    image: '/images/aula1.jpeg',
    icon: 'sports_mma',
  },
  {
    id: 'bale',
    title: 'Balé',
    description:
      'O projeto de Balé utiliza a dança como ferramenta de desenvolvimento artístico, físico e social, trabalhando postura, coordenação motora, disciplina, musicalidade, expressão corporal e autoestima.',
    ageGroup: '6 a 17 anos',
    schedule: 'Quinta-feira, 19h',
    instructor: 'Prof.ª Drica',
    location: 'Vila Tecnológica — Sala de Ginástica',
    partners: 'Incanto e SMELJ',
    participants: '40 meninas em 2 turmas',
    image: '/images/aula2.jpeg',
    icon: 'theater_comedy',
  },
  {
    id: 'natacao',
    title: 'Natação',
    description:
      'A Natação promove saúde, condicionamento físico, coordenação motora, segurança e autonomia no meio aquático, contribuindo para qualidade de vida e bem-estar dos participantes.',
    ageGroup: '12 a 60 anos',
    schedule: 'Quarta-feira, 20h',
    instructor: 'Profª Angeline Monteiro',
    location: 'Clube da Gente',
    partners: 'SMELJ',
    image: '/images/aula3.jpeg',
    icon: 'pool',
  },
  {
    id: 'hidroginastica',
    title: 'Hidroginástica',
    description:
      'A Hidroginástica promove atividade física, saúde, mobilidade, bem-estar e qualidade de vida, especialmente para o público adulto e da terceira idade.',
    ageGroup: '60+',
    schedule: 'Quarta-feira, 10h30',
    instructor: 'Prof. Daniel',
    location: 'Clube da Gente',
    partners: 'SMELJ',
    image: '/images/turma2.jpeg',
    icon: 'pool',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/aula1.jpeg',
    alt: 'Treino de Muay Thai',
    category: 'Esportes',
  },
  {
    id: '2',
    src: '/images/aula2.jpeg',
    alt: 'Aula de Balé',
    category: 'Cultura',
  },
  {
    id: '3',
    src: '/images/futebol.jpeg',
    alt: 'Treino de Futebol',
    category: 'Esportes',
  },
  {
    id: '4',
    src: '/images/aula3.jpeg',
    alt: 'Aula de Natação',
    category: 'Esportes',
  },
  {
    id: '5',
    src: '/images/medalha.jpeg',
    alt: 'Competição de Judô',
    category: 'Esportes',
  },
  {
    id: '6',
    src: '/images/volei1.jpeg',
    alt: 'Treino de Vôlei',
    category: 'Esportes',
  },
  {
    id: '7',
    src: '/images/volei2.jpeg',
    alt: 'Turma de Vôlei na Vila Tecnológica',
    category: 'Esportes',
  },
  {
    id: '8',
    src: '/images/turma3.jpeg',
    alt: 'Iniciação Esportiva',
    category: 'Esportes',
  },
  {
    id: '9',
    src: '/images/turma2.jpeg',
    alt: 'Turma de Hidroginástica',
    category: 'Saúde e Bem-Estar',
  },
];

export const projectsFAQ: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como posso inscrever meu filho nas atividades?',
    answer:
      'As inscrições são realizadas presencialmente em nossa sede ou através do WhatsApp (41) 99999-9999. Traga documento de identidade da criança, comprovante de residência e certidão de nascimento.',
  },
  {
    id: 'faq-2',
    question: 'As atividades são gratuitas?',
    answer:
      'Sim! Todas as nossas atividades são 100% gratuitas. O IFE é mantido por doações e parcerias, garantindo acesso gratuito a todas as crianças e adolescentes.',
  },
  {
    id: 'faq-3',
    question: 'Qual é a faixa etária atendida?',
    answer:
      'Nossas atividades atendem diferentes faixas etárias, a partir dos 6 anos. Os projetos esportivos e culturais são voltados a crianças e adolescentes, enquanto a natação atende até 60 anos e a hidroginástica é dedicada ao público 60+.',
  },
  {
    id: 'faq-4',
    question: 'É necessário ter experiência prévia nas atividades?',
    answer:
      'Não! Aceitamos alunos de todos os níveis, desde iniciantes até aqueles com experiência prévia. Nossos professores adaptam as aulas às necessidades de cada turma.',
  },
  {
    id: 'faq-5',
    question: 'Posso fazer mais de uma atividade?',
    answer:
      'Sim! Incentivamos os alunos a experimentarem diferentes atividades. Basta verificar a compatibilidade de horários e locais e fazer a inscrição em cada modalidade desejada.',
  },
  {
    id: 'faq-6',
    question: 'Onde as atividades acontecem?',
    answer:
      'Os projetos são realizados em diferentes espaços da cidade: Ginásio Bairro Novo, Vila Tecnológica, Clube da Gente e Parque Iguaçu 1 (Ganchinho). Cada oficina indica o local, o dia e o horário de suas aulas.',
  },
  {
    id: 'faq-7',
    question: 'Quem são os parceiros dos projetos?',
    answer:
      'As atividades são realizadas em parceria com SMELJ, SMDH, Clube da Gente e Incanto, além de profissionais e instituições que acreditam no poder do esporte e da cultura para gerar oportunidades.',
  },
];
