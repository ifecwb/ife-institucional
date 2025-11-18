/**
 * Configurações Globais do Site IFE
 * 
 * Centralize todas as informações de contato, redes sociais,
 * dados bancários e outras configurações do site aqui.
 */

export const siteConfig = {
  // ==================== INFORMAÇÕES BÁSICAS ====================
  nome: 'Instituto Futuro de Excelência',
  sigla: 'IFE',
  slogan: 'Formar, Inspirar e Transformar',
  
  // ==================== CONTATO ====================
  contato: {
    telefone: '(41) 99683-2685',
    telefoneWhatsApp: '554196832685', // Formato: código país + DDD + número (sem espaços, hífens ou parênteses)
    email: 'contato@ifecwb.org.br',
    emailVoluntarios: 'voluntarios@ifecwb.org.br',
    emailDoacoes: 'doacoes@ifecwb.org.br',
  },

  // ==================== ENDEREÇO ====================
  endereco: {
    // rua: 'Rua David Tows',
    // numero: '201',
    // complemento: '',
    // bairro: 'Xaxim',
    // cidade: 'Curitiba',
    // estado: 'PR',
    // cep: '81830-270',

    rua: 'Av. Vicente Machado',
    numero: '2996',
    complemento: '',
    bairro: 'Campina do Siqueira',
    cidade: 'Curitiba',
    estado: 'PR',
    cep: '81830-270',

    googleMapsUrl: 'https://share.google/f8Uy5bIOvIrtPoF4z',
  },

  // ==================== REDES SOCIAIS ====================
  social: {
    facebook: 'https://facebook.com/ifecuritiba',
    instagram: 'https://www.instagram.com/ife.cwb/',
    youtube: 'https://youtube.com/@ifecuritiba',
    linkedin: 'https://linkedin.com/company/ifecuritiba',
    twitter: 'https://twitter.com/ifecuritiba',
  },

  // ==================== DADOS BANCÁRIOS ====================
  dadosBancarios: {
    pix: {
      tipo: 'CNPJ',
      chave: '00020126360014br.gov.bcb.pix0114376958270001775204000053039865802BR5925INSTITUTO FUTURO DE EXCEL6008CURITIBA622605222FckK8BY3bcZCYlxlRvdwi6304CC89',
      beneficiario: 'Instituto Futuro de Excelência',
    },
    contaCorrente: {
      banco: '403 - Cora SCFI',
      codigoBanco: '403',
      agencia: '0001',
      conta: '5881639-2',
      tipoConta: 'Conta Corrente',
      titular: 'Instituto Futuro de Excelência',
      cnpj: '37.695.827/0001-77',
    },
    mercadoPago: {
      ativo: true,
      linkDoacao: 'https://mpago.la/exemplo-ife',
    },
    paypal: {
      ativo: false,
      email: 'doacoes@ifecuritiba.org.br',
    },
  },

  // ==================== INFORMAÇÕES INSTITUCIONAIS ====================
  institucional: {
    cnpj: '37.695.827/0001-77',
    dataFundacao: '2020-01-01',
    razaoSocial: 'Instituto Futuro de Excelência',
    presidente: 'Emerson Rafael Baptista dos Anjos',
    vigenciaDiretoria: '2023-2027',
    inscricaoMunicipal: '000.000.000-0',
    inscricaoEstadual: 'ISENTO',
    reconhecimentos: {
      comtiba: {
        nome: 'COMTIBA - Conselho Municipal dos Direitos da Criança e do Adolescente',
        descricao: 'Inscrição ativa no Conselho Municipal dos Direitos da Criança e do Adolescente de Curitiba',
        ativo: true,
      },
      cme: {
        nome: 'CME - Conselho Municipal do Esporte',
        descricao: 'Inscrição ativa no Conselho Municipal do Esporte conforme Resolução 03/2025',
        ativo: true,
      },
      lei13019: {
        nome: 'Lei 13.019/2014',
        descricao: 'Conformidade com o Marco Regulatório das Organizações da Sociedade Civil',
        ativo: true,
      },
    },
    parcerias: {
      termosAtivos: 4,
      recursosCaptados: 98472.04,
      convenios: [
        {
          numero: '6984/2024',
          concedente: 'FMCA',
          vigenciaAte: '12/11/2025',
          valor: 30000.00,
        },
        {
          numero: '26729/2025',
          concedente: 'FMCA',
          vigenciaAte: '12/08/2026',
          valor: 20000.00,
        },
        {
          numero: '26939/2025',
          concedente: 'PM Curitiba',
          vigenciaAte: '18/09/2026',
          valor: 28472.04,
        },
        {
          numero: '27071/2025',
          concedente: 'FMCA',
          vigenciaAte: '03/11/2026',
          valor: 20000.00,
        },
      ],
    },
  },

  // ==================== HORÁRIO DE FUNCIONAMENTO ====================
  horarioFuncionamento: {
    segundaASexta: '8h às 18h',
    sabado: '8h às 12h',
    domingo: 'Fechado',
  },

  // ==================== ESTATÍSTICAS ====================
  estatisticas: {
    criancasAtendidas: 150,
    frequenciaSemanal: 90,
    engajamentoFamiliar: 85,
    anosDeHistoria: 5,
    eixosAtuacao: 3,
    termosFomento: 4,
  },

  // ==================== MENSAGENS WHATSAPP (Templates) ====================
  whatsappTemplates: {
    voluntario: (dados: { nome: string; email: string; telefone: string; mensagem: string }) => 
      `*Novo Interesse em Voluntariado - Site IFE*\n\n` +
      `*Nome:* ${dados.nome}\n` +
      `*Email:* ${dados.email}\n` +
      `*Telefone:* ${dados.telefone}\n\n` +
      `*Mensagem:*\n${dados.mensagem}`,
    
    contato: (dados: { nome: string; email: string; assunto: string; mensagem: string }) => 
      `*Nova Mensagem de Contato - Site IFE*\n\n` +
      `*Nome:* ${dados.nome}\n` +
      `*Email:* ${dados.email}\n` +
      `*Assunto:* ${dados.assunto}\n\n` +
      `*Mensagem:*\n${dados.mensagem}`,
    
    doacao: (dados: { nome: string; telefone?: string; valor?: string; tipo?: string }) => 
      `*Interesse em Doar - Site IFE*\n\n` +
      `*Nome:* ${dados.nome}\n` +
      (dados.telefone ? `*Telefone:* ${dados.telefone}\n` : '') +
      (dados.valor ? `*Valor:* R$ ${dados.valor}\n` : '') +
      (dados.tipo ? `*Tipo de Doação:* ${dados.tipo}\n` : '') +
      `\nGostaria de mais informações sobre como fazer uma doação.`,
  },

  // ==================== SEO ====================
  seo: {
    titulo: 'Instituto Futuro de Excelência - Transformando Vidas',
    descricao: 'O IFE é uma organização sem fins lucrativos que promove educação, esporte e cultura para crianças e adolescentes em Curitiba.',
    palavrasChave: 'instituto, educação, esporte, cultura, voluntariado, doação, curitiba, crianças, adolescentes',
    urlSite: 'https://ifecuritiba.org.br',
    urlImagem: 'https://ifecuritiba.org.br/og-image.jpg',
  },

  // ==================== FEATURES (ativar/desativar funcionalidades) ====================
  features: {
    blogAtivo: true,
    doacoesAtivas: true,
    voluntariadoAtivo: true,
    contatoAtivo: true,
    newsletterAtivo: false,
    eventosAtivos: false,
  },
}

// ==================== HELPER FUNCTIONS ====================

/**
 * Gera link do WhatsApp com mensagem pré-preenchida
 */
export function gerarLinkWhatsApp(mensagem: string): string {
  const telefone = siteConfig.contato.telefoneWhatsApp
  const mensagemEncoded = encodeURIComponent(mensagem)
  return `https://wa.me/${telefone}?text=${mensagemEncoded}`
}

/**
 * Formata telefone para exibição
 */
export function formatarTelefone(telefone: string): string {
  return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

/**
 * Formata email para link
 */
export function gerarLinkEmail(email: string): string {
  return `mailto:${email}`
}

/**
 * Formata CNPJ para exibição
 */
export function formatarCNPJ(cnpj: string): string {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

/**
 * Retorna anos desde a fundação
 */
export function getAnosDeHistoria(): number {
  const fundacao = new Date(siteConfig.institucional.dataFundacao)
  const hoje = new Date()
  return hoje.getFullYear() - fundacao.getFullYear()
}

export default siteConfig
