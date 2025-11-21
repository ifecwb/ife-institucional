import Link from 'next/link'
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material'

interface PostCardProps {
  post: {
    route: string
    name: string
    frontMatter?: {
      title?: string
      description?: string
      image?: string
      date?: string
      author?: string
      tag?: string | string[]
    }
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

export default function PostCard({ post }: PostCardProps) {
  return (
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
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            {post.frontMatter?.tag && (
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {Array.isArray(post.frontMatter.tag) ? (
                  post.frontMatter.tag.map((tag: string, i: number) => (
                    <Chip 
                      key={i}
                      label={tag} 
                      size="small" 
                      color="primary"
                    />
                  ))
                ) : (
                  <Chip 
                    label={post.frontMatter.tag} 
                    size="small" 
                    color="primary"
                  />
                )}
              </Box>
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
  )
}
