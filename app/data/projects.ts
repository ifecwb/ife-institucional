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
      'Desenvolvemos habilidades físicas e valores como disciplina, trabalho em equipe e superação através do judô, futsal, vôlei e ballet.',
    icon: 'sports_soccer',
  },
  {
    id: 'courses',
    title: 'Cursos de Capacitação',
    description:
      'Oferecemos cursos de informática e empreendedorismo criativo para preparar jovens para o mercado de trabalho e desenvolver autonomia.',
    icon: 'school',
  },
];

export const workshops: Workshop[] = [
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
    id: 'entrepreneurship',
    title: 'Empreendedorismo Criativo',
    description:
      'Desenvolvemos a criatividade e o espírito empreendedor dos jovens através de projetos práticos e mentoria.',
    ageGroup: '14 a 17 anos',
    schedule: 'Qua e Sex, 15h às 17h',
    instructor: 'Profª Ana Santos',
    image: 'https://picsum.photos/800/600?random=31',
    icon: 'lightbulb',
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
    id: 'volleyball',
    title: 'Vôlei',
    description:
      'Desenvolvemos agilidade, reflexos e espírito de equipe através do vôlei, sempre com foco no desenvolvimento integral.',
    ageGroup: '10 a 17 anos',
    schedule: 'Ter e Qui, 16h às 18h',
    instructor: 'Profª Juliana Costa',
    image: 'https://picsum.photos/800/600?random=33',
    icon: 'sports_volleyball',
  },
  {
    id: 'ballet',
    title: 'Ballet',
    description:
      'Graça, postura e expressão artística. O ballet desenvolve coordenação, concentração e autoestima através da dança.',
    ageGroup: '5 a 15 anos',
    schedule: 'Seg, Qua e Sex, 14h às 15h30',
    instructor: 'Profª Maria Fernanda',
    image: 'https://picsum.photos/800/600?random=34',
    icon: 'theater_comedy',
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
    src: 'https://picsum.photos/800/600?random=40',
    alt: 'Aula de Judô',
    category: 'Esportes',
  },
  {
    id: '2',
    src: 'https://picsum.photos/800/600?random=41',
    alt: 'Oficina de Empreendedorismo',
    category: 'Cursos',
  },
  {
    id: '3',
    src: 'https://picsum.photos/800/600?random=42',
    alt: 'Treino de Futsal',
    category: 'Esportes',
  },
  {
    id: '4',
    src: 'https://picsum.photos/800/600?random=43',
    alt: 'Aula de Ballet',
    category: 'Cultura',
  },
  {
    id: '5',
    src: 'https://picsum.photos/800/600?random=44',
    alt: 'Curso de Informática',
    category: 'Cursos',
  },
  {
    id: '6',
    src: 'https://picsum.photos/800/600?random=45',
    alt: 'Campeonato de Vôlei',
    category: 'Esportes',
  },
  {
    id: '7',
    src: 'https://picsum.photos/800/600?random=46',
    alt: 'Apresentação Cultural',
    category: 'Cultura',
  },
  {
    id: '8',
    src: 'https://picsum.photos/800/600?random=47',
    alt: 'Projeto Empreendedor',
    category: 'Cursos',
  },
  {
    id: '9',
    src: 'https://picsum.photos/800/600?random=48',
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
