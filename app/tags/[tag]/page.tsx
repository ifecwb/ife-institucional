import Link from 'next/link'
import { Container, Typography, Box } from '@mui/material'
import MainLayout from '../../components/layout/MainLayout'
import PageHero from '../../components/common/PageHero'
import Section from '../../components/common/Section'
import TagPostsList from '../../components/posts/TagPostsList'
import { getPosts, getTags } from '../../noticias/get-posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const allTags = await getTags()
  return [...new Set(allTags)].map(tag => ({ tag: encodeURIComponent(tag) }))
}

export async function generateMetadata(props: any) {
    const params = await props.params
    return {
        title: `Posts com tag "${decodeURIComponent(params.tag)}" - IFE`,
        description: `Veja todos os posts relacionados a ${decodeURIComponent(params.tag)}`
    }
}

export default async function TagPage(props: any) {
  const params = await props.params
  const posts = await getPosts()
  const decodedTag = decodeURIComponent(params.tag)
  const filteredPosts = posts.filter((post: any) => 
    post.frontMatter?.tag.includes(decodedTag)
  )

  if (filteredPosts.length === 0) {
    notFound()
  }

  return (
    <MainLayout>
      <PageHero
        title={`Tag: ${decodedTag}`}
        subtitle={`${filteredPosts.length} ${filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}`}
        imageSrc="https://picsum.photos/1920/400?random=20"
      />
      
      <Section>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Link href="/noticias" style={{ textDecoration: 'none' }}>
              <Typography 
                variant="body1" 
                color="primary"
                sx={{ 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                ← Voltar para todas as notícias
              </Typography>
            </Link>
          </Box>

          <TagPostsList posts={filteredPosts} postsPerPage={8} />
        </Container>
      </Section>
    </MainLayout>
  )
}
