import type { Metadata } from 'next'
import { siteConfig } from '@/app/data/site.config'
import Link from 'next/link'
import { Typography, Chip, Box } from '@mui/material'
import MainLayout from '../components/layout/MainLayout'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import NoticiasClient from '../components/posts/NoticiasClient'
import { getPosts, getTags } from './get-posts'
 
export const metadata: Metadata = {
  title: 'Notícias | Instituto Futuro de Excelência',
  description:
    'Acompanhe as últimas notícias, projetos, eventos e histórias de transformação do IFE. Fique por dentro das atividades e conquistas da nossa comunidade.',
  keywords: [
    'notícias',
    'blog',
    'eventos',
    'atividades',
    'conquistas',
    'histórias',
    'IFE',
    'curitiba',
    'comunidade',
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/noticias`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/noticias`,
    siteName: siteConfig.sigla,
    title: 'Notícias e Eventos - Instituto Futuro de Excelência',
    description:
      'Acompanhe as últimas notícias, projetos e histórias de transformação do IFE.',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/biblioteca.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - Notícias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notícias e Eventos - IFE',
    description: 'Acompanhe as últimas notícias e histórias de transformação do IFE.',
    images: [`${siteConfig.seo.urlSite}/images/biblioteca.jpeg`],
  },
}
 
export default async function NoticiasPage() {
  const tags = await getTags()
  const posts = await getPosts()
 
  const tagsSection = tags.length > 0 ? (
    <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center', fontWeight: 600 }}>
        Tags:
      </Typography>
      {tags.map((tag, i) => (
        <Link key={i + tag} href={`/tags/${encodeURIComponent(tag)}`} style={{ textDecoration: 'none' }}>
          <Chip 
            label={tag} 
            clickable
            size="small"
            sx={{ cursor: 'pointer' }}
          />
        </Link>
      ))}
    </Box>
  ) : null

  return (
    <MainLayout>
      <PageHero
        title="Notícias"
        subtitle="Acompanhe nossas atividades, projetos e histórias de transformação"
        imageSrc="/images/biblioteca.jpeg"
      />
      
      <Section>
        <NoticiasClient 
          posts={posts} 
          searchField={null}
          tagsSection={tagsSection}
        />
      </Section>
    </MainLayout>
  )
}