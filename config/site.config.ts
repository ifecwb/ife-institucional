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
  slogan: 'Transformando gerações através do conhecimento',
  
  // ==================== CONTATO ====================
  contato: {
    telefone: '(41) 99999-9999',
    telefoneWhatsApp: '5541999999999', // Formato: código país + DDD + número (sem espaços, hífens ou parênteses)
    email: 'contato@ifecuritiba.org.br',
    emailVoluntarios: 'voluntarios@ifecuritiba.org.br',
    emailDoacoes: 'doacoes@ifecuritiba.org.br',
  },

  // ==================== ENDEREÇO ====================
  endereco: {
    rua: 'Rua Exemplo',
    numero: '1234',
    complemento: '',
    bairro: 'Centro',
    cidade: 'Curitiba',
    estado: 'PR',
    cep: '80000-000',
    googleMapsUrl: 'https://maps.google.com/?q=IFE+Curitiba',
  },

  // ==================== REDES SOCIAIS ====================
  social: {
    facebook: 'https://facebook.com/ifecuritiba',
    instagram: 'https://instagram.com/ifecuritiba',
    youtube: 'https://youtube.com/@ifecuritiba',
    linkedin: 'https://linkedin.com/company/ifecuritiba',
    twitter: 'https://twitter.com/ifecuritiba',
  },

  // ==================== DADOS BANCÁRIOS ====================
  dadosBancarios: {
    pix: {
      tipo: 'CNPJ',
      chave: '00.000.000/0001-00',
      beneficiario: 'Instituto Futuro de Excelência',
    },
    contaCorrente: {
      banco: 'Banco do Brasil',
      codigoBanco: '001',
      agencia: '1234-5',
      conta: '12345-6',
      tipoConta: 'Conta Corrente',
      titular: 'Instituto Futuro de Excelência',
      cnpj: '00.000.000/0001-00',
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
    cnpj: '00.000.000/0001-00',
    dataFundacao: '2015-01-15',
    razaoSocial: 'Instituto Futuro de Excelência',
    inscricaoMunicipal: '000.000.000-0',
    inscricaoEstadual: 'ISENTO',
    utilidadePublica: {
      municipal: {
        numero: 'Lei Municipal nº 0000/2016',
        data: '2016-03-20',
      },
      estadual: {
        numero: 'Lei Estadual nº 0000/2017',
        data: '2017-05-15',
      },
      federal: {
        numero: 'Portaria nº 0000/2018',
        data: '2018-08-10',
      },
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
    criancasAtendidas: 500,
    cursosAtivos: 15,
    voluntariosAtivos: 100,
    anosDeHistoria: 10,
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
