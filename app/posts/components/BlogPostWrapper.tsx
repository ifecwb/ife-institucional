'use client'

import { Box, Container, Typography, Chip, Divider, Button } from '@mui/material'
import { CalendarMonth, Person, ArrowBack, Label } from '@mui/icons-material'
import Link from 'next/link'

interface BlogPostWrapperProps {
  readonly toc: any
  readonly metadata: {
    title?: string
    date?: string
    author?: string
    tag?: string | string[]
    description?: string
  }
  readonly children: React.ReactNode
}

export default function BlogPostWrapper({ metadata, children }: Readonly<BlogPostWrapperProps>) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        {/* Botões de Navegação */}
        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            component={Link}
            href="/noticias"
            startIcon={<ArrowBack />}
            variant="outlined"
            size="small"
            sx={{ textTransform: 'none' }}
          >
            Todas as Notícias
          </Button>
          
          {metadata?.tag && (
            <>
              {Array.isArray(metadata.tag) ? (
                metadata.tag.map((tag) => (
                  <Button
                    key={tag}
                    component={Link}
                    href={`/tags/${tag}`}
                    startIcon={<Label />}
                    variant="outlined"
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    Ver mais em {tag}
                  </Button>
                ))
              ) : (
                <Button
                  component={Link}
                  href={`/tags/${metadata.tag}`}
                  startIcon={<Label />}
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: 'none' }}
                >
                  Ver mais em {metadata.tag}
                </Button>
              )}
            </>
          )}
        </Box>

        {/* Header do Post */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          {metadata?.tag && (
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap', mb: 2 }}>
              {Array.isArray(metadata.tag) ? (
                metadata.tag.map((tag) => (
                  <Chip 
                    key={tag}
                    label={tag} 
                    color="primary" 
                    size="small"
                  />
                ))
              ) : (
                <Chip 
                  label={metadata.tag} 
                  color="primary" 
                  size="small"
                />
              )}
            </Box>
          )}
          
          {metadata?.title && (
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 3
              }}
            >
              {metadata.title}
            </Typography>
          )}

          {metadata?.description && (
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                mb: 3,
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              {metadata.description}
            </Typography>
          )}

          <Box 
            sx={{ 
              display: 'flex', 
              gap: 3, 
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              mt: 2
            }}
          >
            {metadata?.author && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Person fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {metadata.author}
                </Typography>
              </Box>
            )}
            
            {metadata?.date && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarMonth fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {formatDate(metadata.date)}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Conteúdo MDX com estilos */}
        <Box
          sx={{
            '& h1:first-of-type': {
              display: 'none', // Oculta o primeiro H1 (título já está no header)
            },
            '& h1': {
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 3,
              mt: 5,
              color: 'text.primary',
            },
            '& h2': {
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 600,
              mb: 2,
              mt: 4,
              color: 'text.primary',
            },
            '& h3': {
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 600,
              mb: 2,
              mt: 3,
              color: 'text.primary',
            },
            '& h4': {
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 600,
              mb: 2,
              mt: 3,
              color: 'text.primary',
            },
            '& p': {
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              mb: 2.5,
              color: 'text.secondary',
              textAlign: 'justify',
            },
            '& img': {
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              my: 4,
              boxShadow: 2,
            },
            '& ul, & ol': {
              pl: { xs: 3, md: 4 },
              mb: 3,
            },
            '& li': {
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              mb: 1,
              color: 'text.secondary',
            },
            '& blockquote': {
              borderLeft: '4px solid',
              borderColor: 'primary.main',
              pl: 3,
              py: 2,
              my: 3,
              fontStyle: 'italic',
              backgroundColor: 'action.hover',
              borderRadius: 1,
              '& p': {
                mb: 0,
              }
            },
            '& code': {
              backgroundColor: 'action.hover',
              padding: '3px 8px',
              borderRadius: 1,
              fontSize: '0.9em',
              fontFamily: 'monospace',
            },
            '& pre': {
              backgroundColor: 'action.hover',
              p: 2.5,
              borderRadius: 2,
              overflow: 'auto',
              mb: 3,
              '& code': {
                backgroundColor: 'transparent',
                padding: 0,
              }
            },
            '& hr': {
              my: 5,
              borderColor: 'divider',
            },
            '& strong': {
              fontWeight: 600,
              color: 'text.primary',
            },
            '& a': {
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              }
            },
            '& table': {
              width: '100%',
              borderCollapse: 'collapse',
              mb: 3,
              '& th, & td': {
                border: '1px solid',
                borderColor: 'divider',
                padding: 2,
                textAlign: 'left',
              },
              '& th': {
                backgroundColor: 'action.hover',
                fontWeight: 600,
              }
            }
          }}
        >
          {children}
        </Box>

        <Divider sx={{ mt: 6, mb: 3 }} />
        
        {/* Footer do Post */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
