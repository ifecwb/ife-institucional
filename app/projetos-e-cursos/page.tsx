import type { Metadata } from 'next';
import { siteConfig } from '@/app/data/site.config';
import ProjetosClient from './ProjetosClient';

export const metadata: Metadata = {
  title: 'Esporte e Cultura | Instituto Futuro de Excelência',
  description:
    'Conheça nossos projetos gratuitos de esporte e cultura: futebol, vôlei, iniciação esportiva, judô, muay thai, balé, natação e hidroginástica em Curitiba.',
  keywords: [
    'projetos',
    'esporte',
    'cultura',
    'atividades',
    'futebol',
    'vôlei',
    'judô',
    'muay thai',
    'balé',
    'natação',
    'hidroginástica',
    'gratuito',
    'curitiba',
    'IFE',
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/projetos-e-cursos`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/projetos-e-cursos`,
    siteName: siteConfig.sigla,
    title: 'Esporte e Cultura que Transformam - IFE',
    description:
      'Atividades gratuitas de esporte e cultura: futebol, vôlei, iniciação esportiva, judô, muay thai, balé, natação e hidroginástica.',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/turma3.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - Esporte e Cultura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projetos e Oficinas Gratuitas - IFE',
    description: 'Conheça nossas oficinas gratuitas de educação, esporte e cultura.',
    images: [`${siteConfig.seo.urlSite}/images/turma3.jpeg`],
  },
};

export default function Page() {
  return <ProjetosClient />;
}
