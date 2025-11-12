import Link from 'next/link'
import { Container, Grid, Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material'
import MainLayout from '../../components/layout/MainLayout'
import PageHero from '../../components/common/PageHero'
import Section from '../../components/common/Section'
import { getPosts, getTags } from '../../noticias/get-posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    debugger
  const allTags = await getTags()
  return [...new Set(allTags)].map(tag => ({ tag }))
}

export async function generateMetadata(props: any) {
    const params = await props.params
    return {
        title: `Posts com tag "${decodeURIComponent(params.tag)}" - IFE`,
        description: `Veja todos os posts relacionados a ${decodeURIComponent(params.tag)}`
    }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export default async function TagPage(props: any) {
  const params = await props.params
  const posts = await getPosts()
  const decodedTag = decodeURIComponent(params.tag)
  const filteredPosts = posts.filter((post: any) => 
    post.frontMatter?.tag === decodedTag
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

          <Grid container spacing={4}>
            {filteredPosts.map((post: any) => (
              <Grid key={post.route} size={{ xs: 12, md: 6 }}>
                <Link href={post.route} style={{ textDecoration: 'none' }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      }
                    }}
                  >
                    {post.frontMatter?.image && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.frontMatter.image || 'https://picsum.photos/800/400?random=' + post.route}
                        alt={post.frontMatter?.title || 'Post'}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {post.frontMatter?.tag && (
                          <Chip 
                            label={post.frontMatter.tag} 
                            size="small" 
                            color="primary"
                          />
                        )}
                        {post.frontMatter?.date && (
                          <Typography variant="caption" color="text.secondary">
                            {formatDate(post.frontMatter.date)}
                          </Typography>
                        )}
                      </Box>
                      
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.frontMatter?.title || post.name}
                      </Typography>
                      
                      {post.frontMatter?.description && (
                        <Typography variant="body2" color="text.secondary">
                          {post.frontMatter.description}
                        </Typography>
                      )}
                      
                      {post.frontMatter?.author && (
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                          Por {post.frontMatter.author}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </MainLayout>
  )
}
