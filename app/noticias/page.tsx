import Link from 'next/link'
import { Container, Grid, Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material'
import MainLayout from '../components/layout/MainLayout'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import { getPosts, getTags } from './get-posts'
 
export const metadata = {
  title: 'Notícias - Instituto Futuro de Excelência',
  description: 'Acompanhe as últimas notícias, projetos e histórias de transformação do IFE'
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
 
export default async function NoticiasPage() {
  const tags = await getTags()
  const posts = await getPosts()
 
  return (
    <MainLayout>
      <PageHero
        title="Notícias"
        subtitle="Acompanhe nossas atividades, projetos e histórias de transformação"
        imageSrc="/images/biblioteca.jpeg"
      />
      
      <Section>
        <Container maxWidth="lg">
          {tags.length > 0 && (
            <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center', fontWeight: 600 }}>
                Tags:
              </Typography>
              {tags.map((tag, i) => (
                <Link key={ i + tag} href={`/tags/${tag}`} style={{ textDecoration: 'none' }}>
                  <Chip 
                    label={tag} 
                    clickable
                    size="small"
                    sx={{ cursor: 'pointer' }}
                  />
                </Link>
              ))}
            </Box>
          )}
          
          <Grid container spacing={4}>
            {posts.map((post: any) => (
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