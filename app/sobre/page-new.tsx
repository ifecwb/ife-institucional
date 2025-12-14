import type { Metadata } from 'next';
import { siteConfig } from '@/app/data/site.config';
import SobreClient from './SobreClient';

export const metadata: Metadata = {
  title: 'Sobre o IFE | Instituto Futuro de Excelência',
  description:
    'Conheça a história, missão, visão e valores do Instituto Futuro de Excelência. Desde 2020 transformando vidas através da educação, esporte e cultura em Curitiba.',
  keywords: [
    'sobre IFE',
    'história',
    'missão',
    'visão',
    'valores',
    'equipe',
    'parceiros',
    'instituto',
    'curitiba',
    'organização sem fins lucrativos',
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/sobre`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/sobre`,
    siteName: siteConfig.sigla,
    title: 'Sobre o Instituto Futuro de Excelência',
    description:
      'Conheça nossa história, missão, equipe e parceiros. O IFE atua desde 2020 transformando vidas em Curitiba.',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/emprego.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - Nossa equipe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre o Instituto Futuro de Excelência',
    description: 'Conheça nossa história, missão e equipe. Transformando vidas desde 2020.',
    images: [`${siteConfig.seo.urlSite}/images/emprego.jpeg`],
  },
};

export default function Page() {
  return <SobreClient />;
}
