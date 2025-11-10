export interface DonationBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DonationStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const donationBenefits: DonationBenefit[] = [
  {
    id: 'impact',
    title: 'Impacto Direto',
    description:
      'Sua doação vai diretamente para as crianças e jovens atendidos, financiando materiais, equipamentos e infraestrutura das oficinas.',
    icon: 'favorite',
  },
  {
    id: 'transparency',
    title: 'Transparência Total',
    description:
      'Publicamos relatórios periódicos mostrando como cada centavo é investido e os resultados alcançados com as doações recebidas.',
    icon: 'visibility',
  },
  {
    id: 'tax-deduction',
    title: 'Dedução no IR',
    description:
      'Empresas e pessoas físicas podem deduzir suas doações no Imposto de Renda, conforme legislação vigente para organizações do terceiro setor.',
    icon: 'receipt',
  },
  {
    id: 'certificate',
    title: 'Certificado de Doação',
    description:
      'Emitimos certificado e recibo para todas as doações, documentando sua contribuição para fins legais e comprovação.',
    icon: 'workspace_premium',
  },
];

export const donationSteps: DonationStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Escolha Como Doar',
    description:
      'Você pode doar via PIX (CNPJ), transferência bancária ou mensalmente através de débito automático. Escolha a opção mais conveniente.',
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Realize a Doação',
    description:
      'Faça sua doação usando os dados bancários fornecidos. Para PIX, você pode escanear o QR Code ou usar a chave CNPJ diretamente.',
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Receba Comprovante',
    description:
      'Envie o comprovante para nosso WhatsApp ou e-mail e receberemos seu certificado de doação em até 48 horas úteis.',
  },
];

export const donationFAQ: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Qual o valor mínimo para doação?',
    answer:
      'Não há valor mínimo! Toda contribuição é bem-vinda e faz diferença. Desde pequenas doações mensais até contribuições maiores, tudo ajuda a manter nossas atividades.',
  },
  {
    id: 'faq-2',
    question: 'Como posso ter certeza que minha doação está sendo bem utilizada?',
    answer:
      'Publicamos relatórios trimestrais em nosso site e redes sociais com prestação de contas detalhada. Além disso, doadores recorrentes recebem newsletters com atualizações sobre projetos e resultados.',
  },
  {
    id: 'faq-3',
    question: 'Posso deduzir a doação no Imposto de Renda?',
    answer:
      'Sim! Somos uma organização habilitada e suas doações podem ser deduzidas do IR, tanto para pessoa física quanto jurídica. Fornecemos toda documentação necessária.',
  },
  {
    id: 'faq-4',
    question: 'Posso fazer doações mensais recorrentes?',
    answer:
      'Sim! Oferecemos a opção de débito automático mensal. Entre em contato conosco pelo WhatsApp para configurar sua doação recorrente.',
  },
  {
    id: 'faq-5',
    question: 'Aceitam doações de materiais e equipamentos?',
    answer:
      'Sim! Aceitamos doações de materiais esportivos, equipamentos de informática, livros, materiais de escritório e outros itens. Entre em contato para verificar nossas necessidades atuais.',
  },
  {
    id: 'faq-6',
    question: 'Como recebo o certificado de doação?',
    answer:
      'Após identificarmos sua doação, enviaremos o certificado por e-mail em até 48 horas úteis. Para isso, é importante nos enviar o comprovante com seus dados completos.',
  },
];

export const bankingInfo = {
  bankName: 'Banco do Brasil',
  agency: '1234-5',
  account: '12345-6',
  accountType: 'Conta Corrente',
  cnpj: '12.345.678/0001-90',
  pixKey: '12.345.678/0001-90',
  favored: 'Instituto Futuro de Excelência - IFE',
};
