/**
 * Conteúdo da página "Destine seu Imposto de Renda"
 *
 * O IFE é inscrito no COMTIBA/CMDCA, então a destinação de IRPF chega ao
 * Instituto através do Fundo Municipal da Criança e do Adolescente (FMCA) de Curitiba.
 */

import { siteConfig } from './site.config'

export interface TutorialStep {
  id: string
  number: number
  title: string
  description: string
  /** Screenshot do programa da Receita. Se o arquivo não existir, a UI mostra um placeholder. */
  image: string
  imageAlt: string
}

export interface DestinationRoute {
  id: string
  title: string
  who: string
  limit: string
  deadline: string
  description: string
  highlight: boolean
}

export interface IRHighlight {
  id: string
  value: string
  label: string
  description: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const impostoRendaConfig = {
  /** Fundo que recebe a destinação e repassa aos projetos aprovados no COMTIBA */
  fundo: {
    nome: 'Fundo Municipal da Criança e do Adolescente de Curitiba (FMCA)',
    sigla: 'FMCA',
    conselho: 'COMTIBA - Conselho Municipal dos Direitos da Criança e do Adolescente de Curitiba',
    inscricaoIFE: siteConfig.institucional.reconhecimentos.comtiba.descricao,
  },
  /** CNPJ do IFE, o mesmo informado na página de doação */
  cnpj: siteConfig.institucional.cnpj,
  /** Prazos — revisar a cada ano-calendário */
  prazos: {
    declaracao: 'De março a maio, durante o preenchimento da declaração anual',
    duranteAno: 'Até 30 de dezembro, por meio de DARF gerado no programa da Receita',
  },
  limites: {
    pessoaFisica: '6%',
    pessoaFisicaNaDeclaracao: '3%',
    pessoaJuridica: '1%',
  },
  emailComprovante: 'contato@ifecwb.org.br',
} as const
export const irHighlights: IRHighlight[] = [
  {
    id: 'custo-zero',
    value: 'R$ 0',
    label: 'de custo para você',
    description:
      'A destinação não é uma despesa extra: o valor sai do imposto que você já pagaria à Receita Federal.',
  },
  {
    id: 'limite',
    value: 'até 6%',
    label: 'do seu imposto devido',
    description:
      'Pessoas físicas que declaram pelo modelo completo podem destinar até 6% do imposto devido a fundos incentivados.',
  },
  {
    id: 'destino',
    value: '100%',
    label: 'aplicado em Curitiba',
    description:
      'O recurso vai ao FMCA e é repassado a projetos aprovados pelo COMTIBA, executados aqui na cidade.',
  },
]

export const destinationRoutes: DestinationRoute[] = [
  {
    id: 'na-declaracao',
    title: 'Direto na declaração',
    who: 'Pessoa física que declara pelo modelo completo (deduções legais)',
    limit: `Até ${impostoRendaConfig.limites.pessoaFisicaNaDeclaracao} do imposto devido`,
    deadline: impostoRendaConfig.prazos.declaracao,
    description:
      'O caminho mais simples. Ao finalizar a declaração, você usa a ficha "Doações Diretamente na Declaração", escolhe o fundo, gera o DARF e paga junto com a entrega.',
    highlight: true,
  },
  {
    id: 'durante-o-ano',
    title: 'Durante o ano-calendário',
    who: 'Pessoa física que planeja a destinação com antecedência',
    limit: `Até ${impostoRendaConfig.limites.pessoaFisica} do imposto devido`,
    deadline: impostoRendaConfig.prazos.duranteAno,
    description:
      'Doando ao fundo ao longo do ano você amplia o limite de 3% para 6% e ainda pode parcelar o valor em várias contribuições.',
    highlight: false,
  },
  {
    id: 'pessoa-juridica',
    title: 'Empresas (Lucro Real)',
    who: 'Pessoa jurídica tributada pelo Lucro Real',
    limit: `Até ${impostoRendaConfig.limites.pessoaJuridica} do imposto devido`,
    deadline: impostoRendaConfig.prazos.duranteAno,
    description:
      'Sua empresa destina até 1% do IRPJ devido ao FMCA e associa a marca a um projeto social auditado e com prestação de contas pública.',
    highlight: false,
  },
]

export const tutorialSteps: TutorialStep[] = [
  {
    id: 'passo-1',
    number: 1,
    title: 'Use o modelo completo',
    description:
      'No programa da Receita Federal, confira em "Resumo da Declaração" se a opção "Por Deduções Legais" (modelo completo) está selecionada. Quem declara pelo modelo simplificado não consegue destinar.',
    image: '/images/imposto-de-renda/passo-1.png',
    imageAlt: 'Tela do programa do IRPF com a opção "Por Deduções Legais" selecionada',
  },
  {
    id: 'passo-2',
    number: 2,
    title: 'Abra "Doações Diretamente na Declaração"',
    description:
      'Na lista de fichas da declaração, selecione "Doações Diretamente na Declaração", escolha o "Estatuto da Criança e do Adolescente" e clique em "Novo".',
    image: '/images/imposto-de-renda/passo-2.png',
    imageAlt: 'Ficha "Doações Diretamente na Declaração" aberta no programa do IRPF',
  },
  {
    id: 'passo-3',
    number: 3,
    title: 'Escolha o fundo de Curitiba',
    description:
      'Selecione o tipo de fundo "Municipal", UF "Paraná" e município "Curitiba". O programa mostra automaticamente o valor máximo disponível para destinação. Informe esse valor e confirme em "OK".',
    image: '/images/imposto-de-renda/passo-3.png',
    imageAlt: 'Seleção do fundo municipal de Curitiba e do valor da destinação',
  },
  {
    id: 'passo-4',
    number: 4,
    title: 'Gere e pague o DARF',
    description:
      'Na aba "Imprimir", selecione o DARF de "Doações Diretamente na Declaração - ECA" e salve o arquivo. O pagamento precisa ser feito até a data de vencimento impressa no documento — DARF pago em atraso não gera o benefício fiscal.',
    image: '/images/imposto-de-renda/passo-4.png',
    imageAlt: 'Aba de impressão do DARF da doação ao ECA',
  },
  {
    id: 'passo-5',
    number: 5,
    title: 'Envie o comprovante para o IFE',
    description: `Este passo é o que direciona o recurso para os nossos projetos. Envie o DARF, o comprovante de pagamento e uma autorização informando que a destinação é para o Instituto Futuro de Excelência para ${impostoRendaConfig.emailComprovante} ou pelo WhatsApp.`,
    image: '/images/imposto-de-renda/passo-5.png',
    imageAlt: 'Envio do DARF e do comprovante de pagamento para o IFE',
  },
]

export const impostoRendaFAQ: FAQItem[] = [
  {
    id: 'ir-faq-1',
    question: 'Quem pode destinar parte do Imposto de Renda?',
    answer:
      'Pessoas físicas que declaram pelo modelo completo (por deduções legais) e empresas tributadas pelo Lucro Real. Quem usa o modelo simplificado, infelizmente, não consegue fazer a destinação.',
  },
  {
    id: 'ir-faq-2',
    question: 'Destinar meu imposto vai me custar dinheiro?',
    answer:
      'Não. O valor destinado é abatido do imposto que você já teria de pagar. Se você tem imposto a pagar, a quantia diminui; se tem imposto a restituir, o valor é somado à sua restituição.',
  },
  {
    id: 'ir-faq-3',
    question: 'Qual o limite que posso destinar?',
    answer:
      'Pessoa física pode destinar até 6% do imposto devido a fundos incentivados. Fazendo a doação diretamente na declaração, o limite é de 3% para o Fundo da Criança e do Adolescente. Empresas no Lucro Real podem destinar até 1% do IRPJ devido.',
  },
  {
    id: 'ir-faq-4',
    question: 'Corro risco de cair na malha fina?',
    answer:
      'Não. A destinação é prevista em lei (Estatuto da Criança e do Adolescente) e o próprio programa da Receita Federal calcula e limita o valor permitido. Basta guardar o DARF e o comprovante de pagamento.',
  },
  {
    id: 'ir-faq-5',
    question: 'Como sei que o recurso chegou ao IFE?',
    answer: `A destinação é feita ao ${impostoRendaConfig.fundo.nome}, que repassa os recursos a projetos aprovados pelo ${impostoRendaConfig.fundo.conselho}. Por isso é essencial enviar o comprovante e a autorização para nós: é assim que indicamos ao conselho que o valor deve apoiar os projetos do IFE. Depois, você acompanha a aplicação na nossa página de Transparência.`,
  },
  {
    id: 'ir-faq-6',
    question: 'A destinação substitui outras deduções, como saúde e educação?',
    answer:
      'Não. A destinação a fundos incentivados é calculada sobre o imposto devido e tem limite próprio, sem concorrer com as deduções de despesas médicas, educação ou dependentes.',
  },
  {
    id: 'ir-faq-7',
    question: 'Posso parcelar o valor?',
    answer:
      'Sim, quando a doação é feita ao fundo durante o ano-calendário. Nesse caso você distribui o valor em várias contribuições, desde que tudo seja pago até 30 de dezembro. Na doação feita dentro da declaração, o DARF é único.',
  },
  {
    id: 'ir-faq-8',
    question: 'Preciso guardar algum documento?',
    answer:
      'Sim. Guarde o DARF e o comprovante de pagamento por pelo menos cinco anos, junto com os demais documentos da sua declaração.',
  },
]

export const impactExamples = [
  {
    id: 'impacto-100',
    valor: 'R$ 100',
    descricao: 'Material esportivo e pedagógico para uma turma de oficina durante um mês.',
  },
  {
    id: 'impacto-500',
    valor: 'R$ 500',
    descricao: 'Uniformes e kits de atividades para um grupo de crianças ao longo do semestre.',
  },
  {
    id: 'impacto-1000',
    valor: 'R$ 1.000',
    descricao: 'Manutenção de uma oficina completa de esporte, cultura ou reforço escolar.',
  },
]
