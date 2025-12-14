import type { Metadata } from 'next';
import { siteConfig } from '@/app/data/site.config';
import SejaVoluntarioClient from './SejaVoluntarioClient';

export const metadata: Metadata = {
  title: 'Seja Voluntário | Instituto Futuro de Excelência',
  description:
    'Transforme vidas sendo voluntário no IFE! Compartilhe seus conhecimentos, faça a diferença na comunidade e contribua para o futuro de crianças e jovens em Curitiba.',
  keywords: [
    'voluntário',
    'voluntariado',
    'ser voluntário',
    'trabalho voluntário',
    'IFE',
    'curitiba',
    'ajudar',
    'impacto social',
    'educação',
    'esporte',
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/seja-voluntario`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/seja-voluntario`,
    siteName: siteConfig.sigla,
    title: 'Seja Voluntário no IFE - Transforme Vidas',
    description:
      'Doe seu tempo e conhecimento! Torne-se voluntário do IFE e ajude a transformar o futuro de crianças e jovens.',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/aula2.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - Voluntariado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seja Voluntário no IFE - Transforme Vidas',
    description: 'Doe seu tempo e conhecimento! Torne-se voluntário do IFE.',
    images: [`${siteConfig.seo.urlSite}/images/aula2.jpeg`],
  },
};

export default function Page() {
  return <SejaVoluntarioClient />;
}
