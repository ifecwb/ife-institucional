import type { Metadata } from 'next';
import { siteConfig } from '@/app/data/site.config';
import ProjetosClient from './ProjetosClient';

export const metadata: Metadata = {
  title: 'Projetos e Oficinas | Instituto Futuro de Excelência',
  description:
    'Conheça nossos projetos gratuitos de educação, esporte e cultura. Oferecemos judô, futebol, ballet, reforço escolar e muito mais para crianças e adolescentes.',
  keywords: [
    'projetos',
    'oficinas',
    'cursos',
    'atividades',
    'judô',
    'futebol',
    'ballet',
    'reforço escolar',
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
    title: 'Projetos e Oficinas Gratuitas - IFE',
    description:
      'Educação, esporte e cultura gratuitos! Conheça nossas oficinas de judô, futebol, ballet, reforço escolar e mais.',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/turma3.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - Projetos e Oficinas',
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
