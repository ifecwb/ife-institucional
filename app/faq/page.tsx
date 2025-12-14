import type { Metadata } from 'next';
import { siteConfig } from '@/app/data/site.config';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Instituto Futuro de Excelência',
  description:
    'Tire suas dúvidas sobre voluntariado, doações e atividades do IFE. Encontre respostas para as perguntas mais frequentes sobre como contribuir.',
  keywords: [
    'faq',
    'perguntas frequentes',
    'dúvidas',
    'voluntariado',
    'doações',
    'como doar',
    'como ser voluntário',
    'IFE',
    'curitiba',
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/faq`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/faq`,
    siteName: siteConfig.sigla,
    title: 'Perguntas Frequentes - IFE',
    description:
      'Tire suas dúvidas sobre voluntariado, doações e atividades do Instituto Futuro de Excelência.',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/turma3.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perguntas Frequentes - IFE',
    description: 'Tire suas dúvidas sobre voluntariado, doações e atividades do IFE.',
    images: [`${siteConfig.seo.urlSite}/images/turma3.jpeg`],
  },
};

export default function Page() {
  return <FAQClient />;
}