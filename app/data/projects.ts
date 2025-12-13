export interface Workshop {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
  schedule: string;
  instructor: string;
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
    id: 'sports',
    title: 'Oficinas Esportivas',
    description:
      'Desenvolvemos habilidades físicas e valores como disciplina, trabalho em equipe e superação através do judô, futsal e vôlei.',
    icon: 'sports_soccer',
  },
  {
    id: 'culture',
    title: 'Atividades Culturais',
    description:
      'Expressão artística e desenvolvimento sociocultural através de dança de salão, ballet e danças urbanas.',
    icon: 'theater_comedy',
  },
  {
    id: 'courses',
    title: 'Mundo do Trabalho',
    description:
      'Preparação para o mercado de trabalho através de tecnologia da informação, desenvolvimento socioemocional, orientação profissional e cidadania.',
    icon: 'school',
  },
  {
    id: 'senai',
    title: 'Trilha SENAI/IFE',
    description:
      'Cursos profissionalizantes em parceria com SENAI: Assistente Administrativo, Operador de Computador, Atendimento ao Cliente e Auxiliar de Logística.',
    icon: 'workspace_premium',
  },
];

export const workshops: Workshop[] = [
  // Esportes
  {
    id: 'judo',
    title: 'Judô',
    description:
      'Disciplina, respeito e autocontrole. O judô desenvolve não apenas o corpo, mas também a mente e o caráter dos nossos alunos.',
    ageGroup: '6 a 17 anos',
    schedule: 'Ter e Qui, 14h às 16h',
    instructor: 'Sensei Carlos Silva',
    image: 'https://picsum.photos/800/600?random=30',
    icon: 'sports_martial_arts',
  },
  {
    id: 'futsal',
    title: 'Futsal',
    description:
      'Trabalho em equipe, estratégia e coordenação motora. O futsal é mais que um esporte, é uma escola de vida.',
    ageGroup: '8 a 16 anos',
    schedule: 'Seg e Qua, 16h às 18h',
    instructor: 'Prof. Roberto Lima',
    image: 'https://picsum.photos/800/600?random=32',
    icon: 'sports_soccer',
  },
  {
    id: 'volei',
    title: 'Vôlei',
    description:
      'Coordenação, agilidade e espírito de equipe. O vôlei promove o desenvolvimento integral através do esporte coletivo.',
    ageGroup: '10 a 17 anos',
    schedule: 'Qua e Sex, 14h às 16h',
    instructor: 'Prof. Marcos Oliveira',
    image:'/images/volei1.jpeg',
    icon: 'sports_volleyball',
  },
  // Cultura
  {
    id: 'danca-salao',
    title: 'Dança de Salão',
    description:
      'Expressão corporal, ritmo e socialização. A dança de salão desenvolve a coordenação motora e o relacionamento interpessoal.',
    ageGroup: '12 a 17 anos',
    schedule: 'Ter e Qui, 15h às 17h',
    instructor: 'Profª Juliana Costa',
    image: 'https://picsum.photos/800/600?random=34',
    icon: 'music_note',
  },
  {
    id: 'ballet',
    title: 'Ballet',
    description:
      'Postura, disciplina e expressão artística. O ballet clássico promove o desenvolvimento físico e emocional.',
    ageGroup: '5 a 14 anos',
    schedule: 'Seg e Qua, 14h às 15h30',
    instructor: 'Profª Marina Santos',
    image: 'https://picsum.photos/800/600?random=35',
    icon: 'self_improvement',
  },
  {
    id: 'dancas-urbanas',
    title: 'Danças Urbanas',
    description:
      'Criatividade, autoexpressão e cultura urbana. As danças urbanas conectam os jovens com a cultura contemporânea.',
    ageGroup: '10 a 17 anos',
    schedule: 'Sex, 16h às 18h',
    instructor: 'Prof. Diego Ferreira',
    image: 'https://picsum.photos/800/600?random=36',
    icon: 'music_note',
  },
  // Mundo do Trabalho
  {
    id: 'tecnologia-informacao',
    title: 'Tecnologia da Informação',
    description:
      'Informática básica, internet e ferramentas digitais. Preparação para o mundo digital e oportunidades profissionais.',
    ageGroup: '14 a 17 anos',
    schedule: 'Ter e Qui, 9h às 11h',
    instructor: 'Prof. André Martins',
    image: 'https://picsum.photos/800/600?random=37',
    icon: 'computer',
  },
  {
    id: 'desenvolvimento-socioemocional',
    title: 'Desenvolvimento Socioemocional',
    description:
      'Inteligência emocional, relacionamentos e autoconhecimento. Desenvolvimento de habilidades essenciais para a vida.',
    ageGroup: '14 a 17 anos',
    schedule: 'Qua, 14h às 16h',
    instructor: 'Psicóloga Laura Mendes',
    image: 'https://picsum.photos/800/600?random=38',
    icon: 'psychology',
  },
  {
    id: 'mundo-trabalho',
    title: 'Orientação para o Mundo do Trabalho',
    description:
      'Orientação profissional, elaboração de currículo e preparação para entrevistas. Ponte para o primeiro emprego.',
    ageGroup: '14 a 17 anos',
    schedule: 'Sex, 14h às 16h',
    instructor: 'Profª Carolina Souza',
    image: 'https://picsum.photos/800/600?random=39',
    icon: 'work',
  },
  {
    id: 'cidadania-convivencia',
    title: 'Cidadania e Convivência',
    description:
      'Valores, direitos e deveres, participação social. Formação de cidadãos conscientes e atuantes na sociedade.',
    ageGroup: '12 a 17 anos',
    schedule: 'Seg, 15h às 17h',
    instructor: 'Prof. Ricardo Alves',
    image: 'https://picsum.photos/800/600?random=40',
    icon: 'groups',
  },
  // Trilha SENAI/IFE
  {
    id: 'assistente-administrativo',
    title: 'Assistente Administrativo (SENAI)',
    description:
      'Curso profissionalizante em parceria com SENAI. Formação completa para atuar na área administrativa.',
    ageGroup: '16 a 17 anos',
    schedule: 'Seg a Sex, 8h às 12h',
    instructor: 'SENAI Paraná',
    image: 'https://picsum.photos/800/600?random=41',
    icon: 'business_center',
  },
  {
    id: 'operador-computador',
    title: 'Operador de Computador (SENAI)',
    description:
      'Curso profissionalizante em parceria com SENAI. Capacitação técnica em informática e sistemas.',
    ageGroup: '16 a 17 anos',
    schedule: 'Seg a Sex, 13h às 17h',
    instructor: 'SENAI Paraná',
    image: 'https://picsum.photos/800/600?random=42',
    icon: 'computer',
  },
  {
    id: 'atendimento-cliente',
    title: 'Atendimento ao Cliente (SENAI)',
    description:
      'Curso profissionalizante em parceria com SENAI. Técnicas de comunicação e excelência no atendimento.',
    ageGroup: '16 a 17 anos',
    schedule: 'Seg a Sex, 8h às 12h',
    instructor: 'SENAI Paraná',
    image: 'https://picsum.photos/800/600?random=43',
    icon: 'support_agent',
  },
  {
    id: 'auxiliar-logistica',
    title: 'Auxiliar de Logística (SENAI)',
    description:
      'Curso profissionalizante em parceria com SENAI. Formação em processos logísticos e gestão de estoques.',
    ageGroup: '16 a 17 anos',
    schedule: 'Seg a Sex, 13h às 17h',
    instructor: 'SENAI Paraná',
    image: 'https://picsum.photos/800/600?random=44',
    icon: 'local_shipping',
  },
  {
    id: 'volleyball',
    title: 'Vôlei',
    description:
      'Desenvolvemos agilidade, reflexos e espírito de equipe através do vôlei, sempre com foco no desenvolvimento integral.',
    ageGroup: '10 a 17 anos',
    schedule: 'Ter e Qui, 16h às 18h',
    instructor: 'Profª Juliana Costa',
    image: '/images/volei1.jpeg',
    icon: 'sports_volleyball',
  },
  {
    id: 'informatics',
    title: 'Informática',
    description:
      'Inclusão digital e preparação profissional. Ensinamos desde o básico até habilidades avançadas em tecnologia.',
    ageGroup: '12 a 17 anos',
    schedule: 'Ter e Qui, 13h às 15h',
    instructor: 'Prof. Fernando Oliveira',
    image: 'https://picsum.photos/800/600?random=35',
    icon: 'computer',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/aula1.jpeg',
    alt: 'Aula de Judô',
    category: 'Esportes',
  },
  {
    id: '2',
    src: '/images/aula2.jpeg',
    alt: 'Oficina de Empreendedorismo',
    category: 'Cursos',
  },
  {
    id: '3',
    src: '/images/aula3.jpeg',
    alt: 'Treino de Futsal',
    category: 'Esportes',
  },
  {
    id: '4',
    src: '/images/biblioteca.jpeg',
    alt: 'Aula de Ballet',
    category: 'Cultura',
  },
  {
    id: '5',
    src: '/images/certificado.jpeg',
    alt: 'Curso de Informática',
    category: 'Cursos',
  },
  {
    id: '6',
    src: '/images/doacao.jpeg',
    alt: 'Campeonato de Vôlei',
    category: 'Esportes',
  },
  {
    id: '7',
    src: '/images/emprego.jpeg',
    alt: 'Apresentação Cultural',
    category: 'Cultura',
  },
  {
    id: '8',
    src: '/images/turma.jpeg',
    alt: 'Projeto Empreendedor',
    category: 'Cursos',
  },
  {
    id: '9',
    src: '/images/turma2.jpeg',
    alt: 'Evento Esportivo',
    category: 'Esportes',
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
      'Atendemos crianças e adolescentes de 5 a 17 anos, com turmas organizadas por idade e nível de desenvolvimento em cada atividade.',
  },
  {
    id: 'faq-4',
    question: 'É necessário ter experiência prévia nas atividades?',
    answer:
      'Não! Aceitamos alunos de todos os níveis, desde iniciantes até aqueles com experiência prévia. Nossos instrutores adaptam as aulas às necessidades de cada turma.',
  },
  {
    id: 'faq-5',
    question: 'Posso fazer mais de uma atividade?',
    answer:
      'Sim! Incentivamos os alunos a experimentarem diferentes atividades. Basta verificar a compatibilidade de horários e fazer a inscrição em cada modalidade desejada.',
  },
];
