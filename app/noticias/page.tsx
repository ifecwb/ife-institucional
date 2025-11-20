import Link from 'next/link'
import { Typography, Chip, Box } from '@mui/material'
import MainLayout from '../components/layout/MainLayout'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import NoticiasClient from '../components/posts/NoticiasClient'
import { getPosts, getTags } from './get-posts'
 
export const metadata = {
  title: 'Notícias - Instituto Futuro de Excelência',
  description: 'Acompanhe as últimas notícias, projetos e histórias de transformação do IFE'
}
 
// TODO: adicionar paginação nos posts
// TODO: adicionar um exemplo com styled-components ou SCSS direto
// TODO: adicionar SEO em tags/notícias - site map automático
// TODO: múltiplas tags na seção de notícias
// TODO: configuração manual de Head/Scripts/Meta - individual e geral
// TODO: no cabeçalho, quando o menu estiver selecioando, utilizar cor com mais contraste
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