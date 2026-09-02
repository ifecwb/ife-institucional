import { siteConfig } from '@/app/data/site.config'

/**
 * Registro do consentimento enviado junto com o formulário, como prova
 * do aceite exigido pelo Art. 8º, §1º da LGPD.
 */
export function registroConsentimento() {
  return {
    consentimento: `Aceito em ${new Date().toLocaleString('pt-BR')}`,
    politica_versao: siteConfig.privacidade.versaoPolitica,
  }
}
