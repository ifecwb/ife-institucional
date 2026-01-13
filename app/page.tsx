import type { Metadata } from 'next';
import { siteConfig } from '@/app/data/site.config';
import HomeClient from './page-client';

export const metadata: Metadata = {
  title: 'Instituto Futuro de Excelência - Educação, Esporte e Cultura em Curitiba',
  description:
    'O IFE transforma vidas através de educação, esporte e cultura. Oferecemos atividades gratuitas para crianças e adolescentes em Curitiba. Conheça nossos projetos!',
  keywords: [
    'instituto',
    'IFE',
    'educação',
    'esporte',
    'cultura',
    'curitiba',
    'crianças',
    'adolescentes',
    'atividades gratuitas',
    'judô',
    'futebol',
    'ballet',
    'reforço escolar',
  ],
  alternates: {
    canonical: siteConfig.seo.urlSite,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.seo.urlSite,
    siteName: siteConfig.sigla,
    title: 'Instituto Futuro de Excelência - Transformando Vidas',
    description:
      'Educação, esporte e cultura gratuitos para crianças e adolescentes em Curitiba. Conheça o IFE e faça parte dessa transformação!',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/turma.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - Turma de alunos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Futuro de Excelência - Transformando Vidas',
    description: 'Educação, esporte e cultura gratuitos para crianças e adolescentes em Curitiba.',
    images: [`${siteConfig.seo.urlSite}/images/turma.jpeg`],
  },
};

export default function Page() {
  return <HomeClient />;
}

