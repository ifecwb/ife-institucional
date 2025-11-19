export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const benefits: Benefit[] = [
  {
    id: 'impact',
    title: 'Impacto Real',
    description:
      'Veja de perto a transformação na vida das crianças e jovens. Seu trabalho voluntário gera mudanças concretas e duradouras na comunidade.',
    icon: 'favorite',
  },
  {
    id: 'development',
    title: 'Desenvolvimento Pessoal',
    description:
      'Desenvolva novas habilidades, ganhe experiência em diferentes áreas e amplie sua rede de contatos com pessoas engajadas em causas sociais.',
    icon: 'trending_up',
  },
  {
    id: 'certificate',
    title: 'Certificado',
    description:
      'Receba certificado de horas voluntárias que pode ser usado em processos seletivos, universidades e programas de bolsas de estudo.',
    icon: 'workspace_premium',
  },
  {
    id: 'flexibility',
    title: 'Flexibilidade',
    description:
      'Escolha atividades e horários que se encaixem na sua rotina. Trabalhamos juntos para encontrar a melhor forma de você contribuir.',
    icon: 'schedule',
  },
];

export const steps: Step[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Preencha o Formulário',
    description:
      'Conte-nos sobre você, suas habilidades e áreas de interesse. Queremos conhecer suas motivações e como podemos trabalhar juntos.',
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Entrevista e Orientação',
    description:
      'Realizamos uma conversa para alinhar expectativas e apresentar o IFE, nossas atividades e o impacto que você pode gerar.',
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Comece a Voluntariar',
    description:
      'Após a orientação, você está pronto para fazer a diferença! Escolha sua área de atuação e junte-se à nossa equipe.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Marina Alves',
    role: 'Voluntária há 2 anos',
    quote:
      'Ser voluntária no IFE transformou minha vida. Ver o sorriso das crianças e saber que estou contribuindo para o futuro delas não tem preço. É uma experiência única!',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'testimonial-2',
    name: 'Pedro Santos',
    role: 'Voluntário há 1 ano',
    quote:
      'O IFE me deu a oportunidade de usar minhas habilidades em tecnologia para fazer o bem. Ensinar informática para os jovens e vê-los evoluir é extremamente gratificante.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 'testimonial-3',
    name: 'Juliana Costa',
    role: 'Voluntária há 3 anos',
    quote:
      'Comecei como voluntária e hoje sou instrutora de ballet. O IFE acredita no potencial de cada pessoa e oferece oportunidades reais de crescimento. Sou muito grata!',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 'testimonial-4',
    name: 'Carlos Eduardo',
    role: 'Voluntário há 6 meses',
    quote:
      'Trabalho voluntário no IFE me ajudou a desenvolver habilidades de liderança e trabalho em equipe. Além disso, conheci pessoas incríveis que compartilham dos mesmos valores.',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

export const volunteerFAQ: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso ter experiência prévia para ser voluntário?',
    answer:
      'Não! Aceitamos voluntários de todos os níveis de experiência. O mais importante é ter vontade de contribuir e aprender. Oferecemos orientação e suporte para todas as atividades.',
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo preciso dedicar como voluntário?',
    answer:
      'A carga horária é flexível e pode ser ajustada conforme sua disponibilidade. Temos voluntários que contribuem desde 2 horas por semana até aqueles com dedicação mais intensiva.',
  },
  {
    id: 'faq-3',
    question: 'Em quais áreas posso atuar como voluntário?',
    answer:
      'Temos oportunidades em diversas áreas: ensino (reforço escolar, oficinas), esportes (assistência em treinos), administração, comunicação, eventos, captação de recursos, entre outras.',
  },
  {
    id: 'faq-4',
    question: 'Preciso morar em Curitiba para ser voluntário?',
    answer:
      'Para atividades presenciais, é necessário poder comparecer à nossa sede em Xaxim, Curitiba. Porém, também temos oportunidades remotas em áreas como comunicação e design.',
  },
  {
    id: 'faq-5',
    question: 'Vou receber certificado de horas voluntárias?',
    answer:
      'Sim! Fornecemos certificado com comprovação de horas voluntárias para todos os voluntários ativos. O certificado é emitido periodicamente ou sob demanda.',
  },
];
