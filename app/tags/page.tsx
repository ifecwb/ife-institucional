import Link from 'next/link'
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material'
import MainLayout from '../components/layout/MainLayout'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import { getPosts, getTags } from '../noticias/get-posts'
import { LocalOffer } from '@mui/icons-material'

export const metadata = {
  title: 'Tags - Instituto Futuro de Excelência',
  description: 'Explore posts por categoria'
}

export default async function TagsPage() {
  const tags = await getTags()
  const posts = await getPosts()
  
  // Conta quantos posts cada tag tem
  const tagCounts = tags.reduce((acc: Record<string, number>, tag: string) => {
    acc[tag] = posts.filter((post: any) => post.frontMatter?.tag === tag).length
    return acc
  }, {})

  return (
    <MainLayout>
      <PageHero
        title="Categorias"
        subtitle="Explore nossos posts por categoria"
        imageSrc="https://picsum.photos/1920/400?random=25"
      />
      
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {tags.map((tag: string) => (
              <Grid key={tag} size={{ xs: 12, sm: 6, md: 4 }}>
                <Link href={`/tags/${tag}`} style={{ textDecoration: 'none' }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocalOffer color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h5" component="h2">
                          {tag}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {tagCounts[tag]} {tagCounts[tag] === 1 ? 'post' : 'posts'}
                      </Typography>
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