import type { Metadata } from 'next'
import { siteConfig } from '@/app/data/site.config'
import ImpostoRendaPage from '@/app/components/imposto-de-renda/ImpostoRendaPage'

const title = 'Destine seu Imposto de Renda | Instituto Futuro de Excelência (IFE)'
const description =
  'Destine até 6% do seu Imposto de Renda ao Fundo Municipal da Criança e do Adolescente de Curitiba e apoie os projetos do IFE. Veja o passo a passo, simule o valor e fale com a nossa equipe.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'imposto de renda',
    'destinação de imposto de renda',
    'IRPF',
    'FMCA',
    'FIA',
    'COMTIBA',
    'doação incentivada',
    'Curitiba',
    'IFE',
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/imposto-de-renda`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/imposto-de-renda`,
    siteName: siteConfig.sigla,
    title,
    description,
    images: [
      {
        url: siteConfig.seo.urlImagem,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) – Destine seu Imposto de Renda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [siteConfig.seo.urlImagem],
  },
}

export default function Page() {
  return <ImpostoRendaPage formVariant="web3forms" />
}
