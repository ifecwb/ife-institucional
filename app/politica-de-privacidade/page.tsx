import type { Metadata } from 'next'
import { siteConfig } from '@/app/data/site.config'
import PoliticaPrivacidadeClient from './PoliticaPrivacidadeClient'

const title = 'Política de Privacidade | Instituto Futuro de Excelência (IFE)'
const description =
  'Como o Instituto Futuro de Excelência coleta, usa, compartilha e protege dados pessoais, conforme a Lei Geral de Proteção de Dados (LGPD).'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/politica-de-privacidade`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/politica-de-privacidade`,
    siteName: siteConfig.sigla,
    title,
    description,
  },
}

export default function Page() {
  return <PoliticaPrivacidadeClient />
}
