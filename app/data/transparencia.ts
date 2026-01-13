/**
 * Catálogo de Documentos de Transparência
 * 
 * Para adicionar um novo documento:
 * 1. Coloque o PDF em public/documentos/[categoria]/[arquivo].pdf
 * 2. Adicione a entrada aqui no catálogo
 * 
 * Para adicionar um novo ano:
 * 1. Crie a pasta public/documentos/prestacao-contas/[ano]/
 * 2. Adicione o ano no array `anosDisponiveis`
 * 3. Adicione os documentos em `documentosAnuais`
 */

export type CategoriaDocumento = 
  | 'estatuto' 
  | 'financeiro' 
  | 'atas' 
  | 'relatorios' 
  | 'certidoes'
  | 'convenios'

export interface Documento {
  id: string
  titulo: string
  descricao?: string
  categoria: CategoriaDocumento
  arquivo: string          // caminho relativo a /public
  atualizadoEm?: string    // data ISO (YYYY-MM-DD)
  tamanhoKB?: number       // opcional, para exibir tamanho
}

// ==================== DOCUMENTOS INSTITUCIONAIS (PERENES) ====================
export const documentosInstitucionais: Documento[] = [
  {
    id: 'estatuto',
    titulo: 'Estatuto Social',
    descricao: 'Estatuto atualizado e vigente da instituição',
    categoria: 'estatuto',
    arquivo: '/documentos/institucional/Estatuto Social.pdf',
    atualizadoEm: '2025-01-05',
  },
  {
    id: 'cnpj',
    titulo: 'Cartão CNPJ',
    descricao: 'Comprovante de inscrição e situação cadastral',
    categoria: 'certidoes',
    arquivo: '/documentos/institucional/Cartao_CNPJ.pdf',
    atualizadoEm: '2025-01-05',
  },
  {
    id: 'utilidade-publica',
    titulo: 'Certidão de Utilidade Pública',
    descricao: 'Declaração de utilidade pública municipal/estadual',
    categoria: 'certidoes',
    arquivo: '/documentos/institucional/Certidão Utilidade Pública.pdf',
    atualizadoEm: '2025-01-05',
  },
  {
    id: 'inscricao-conselho',
    titulo: 'Inscrição no Conselho',
    descricao: 'Registro no Conselho Municipal de Assistência Social',
    categoria: 'certidoes',
    arquivo: '/documentos/institucional/Inscricao_Conselho.pdf',
    atualizadoEm: '2025-01-05',
  },
]

// ==================== ANOS DISPONÍVEIS ====================
// Mantenha o ano mais recente primeiro
export const anosDisponiveis = [2025, 2023] as const
export type AnoDisponivel = typeof anosDisponiveis[number]

// ==================== DOCUMENTOS ANUAIS (POR ANO) ====================
export const documentosAnuais: Record<AnoDisponivel, Documento[]> = {
  2025: [
    {
      id: 'cnd-federal-2025',
      titulo: 'Certidão Negativa Federal',
      descricao: 'Certidão de débitos relativos a tributos federais',
      categoria: 'certidoes',
      arquivo: '/documentos/prestacao-contas/2025/CND_Federal.pdf',
    },
    {
      id: 'cnd-estadual-2025',
      titulo: 'Certidão Negativa Estadual',
      descricao: 'Certidão de débitos relativos a tributos estaduais',
      categoria: 'certidoes',
      arquivo: '/documentos/prestacao-contas/2025/CND_Estadual.pdf',
    },
    {
      id: 'cnd-municipal-2025',
      titulo: 'Certidão Negativa Municipal',
      descricao: 'Certidão de débitos relativos a tributos municipais',
      categoria: 'certidoes',
      arquivo: '/documentos/prestacao-contas/2025/CND_Municipal.pdf',
    },
    {
      id: 'cnd-trabalhista-2025',
      titulo: 'Certidão Negativa Trabalhista',
      descricao: 'Certidão de débitos trabalhistas (CNDT)',
      categoria: 'certidoes',
      arquivo: '/documentos/prestacao-contas/2025/CND_Trabalhista.pdf',
    },
  ],

  2023: [
    {
      id: 'ata-eleicao-2023',
      titulo: 'Ata de Eleição da Diretoria',
      descricao: 'Ata da assembleia de eleição da diretoria',
      categoria: 'atas',
      arquivo: '/documentos/prestacao-contas/2023/Ata_Eleicao.pdf',
    },
    {
      id: 'diario-oficial-2023',
      titulo: 'Publicação no Diário Oficial',
      descricao: 'Publicação da utilidade pública no Diário Oficial',
      categoria: 'certidoes',
      arquivo: '/documentos/prestacao-contas/2023/Utilidade Púbica Diário Oficial.pdf',
    },
  ],
}

// ==================== HELPERS ====================

/** Retorna documentos de um ano específico */
export function getDocumentosDoAno(ano: AnoDisponivel): Documento[] {
  return documentosAnuais[ano] || []
}

/** Retorna o ano mais recente disponível */
export function getAnoMaisRecente(): AnoDisponivel {
  return anosDisponiveis[0]
}

/** Agrupa documentos por categoria */
export function agruparPorCategoria(docs: Documento[]): Partial<Record<CategoriaDocumento, Documento[]>> {
  return docs.reduce((acc, doc) => {
    acc[doc.categoria] ??= []
    acc[doc.categoria]!.push(doc)
    return acc
  }, {} as Partial<Record<CategoriaDocumento, Documento[]>>)
}

/** Labels amigáveis para categorias */
export const categoriasLabels: Record<CategoriaDocumento, string> = {
  estatuto: 'Documentos Constitutivos',
  financeiro: 'Demonstrativos Financeiros',
  atas: 'Atas de Assembleias',
  relatorios: 'Relatórios de Atividades',
  certidoes: 'Certidões e Registros',
  convenios: 'Convênios e Parcerias',
}

/** Ícones sugeridos para cada categoria (nomes do MUI Icons) */
export const categoriasIcones: Record<CategoriaDocumento, string> = {
  estatuto: 'Description',
  financeiro: 'AccountBalance',
  atas: 'Gavel',
  relatorios: 'Assessment',
  certidoes: 'Verified',
  convenios: 'Handshake',
}
