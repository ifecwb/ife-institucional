import MainLayout from '@/app/components/layout/MainLayout';
import PageHero from '@/app/components/common/PageHero';
import { Box, Container, Typography, Card, CardContent, CardMedia, Chip } from '@mui/material';
import Section from '@/app/components/common/Section';
import PageTitle from '@/app/components/common/PageTitle';
import CTAButton from '@/app/components/common/CTAButton';
import { CalendarToday, AccessTime } from '@mui/icons-material';

// Simulação de posts do blog (em produção viriam do Nextra)
const blogPosts = [
  {
    id: '2025-11-10-inauguracao-nova-quadra',
    title: 'IFE Inaugura Nova Quadra Poliesportiva',
    description: 'Com a nova quadra, ampliamos as oportunidades para mais de 200 crianças praticarem esportes em um espaço adequado e seguro.',
    date: '2025-11-10',
    tag: 'Infraestrutura',
    author: 'Equipe IFE',
    image: 'https://picsum.photos/800/400?random=50',
    readTime: '5 min',
  },
  {
    id: '2025-10-28-apresentacao-ballet',
    title: 'Emocionante Apresentação de Ballet no Teatro Municipal',
    description: 'Nossas alunas encantaram o público com uma apresentação impecável, demonstrando todo o talento desenvolvido nas aulas de ballet.',
    date: '2025-10-28',
    tag: 'Cultura',
    author: 'Maria Fernanda',
    image: 'https://picsum.photos/800/400?random=51',
    readTime: '4 min',
  },
  {
    id: '2025-10-15-campanha-doacao-livros',
    title: 'Campanha de Doação de Livros Arrecada Mais de 500 Exemplares',
    description: 'Nossa biblioteca comunitária está sendo renovada graças à generosidade dos doadores. Agora temos mais opções para incentivar a leitura.',
    date: '2025-10-15',
    tag: 'Educação',
    author: 'Equipe IFE',
    image: 'https://picsum.photos/800/400?random=53',
    readTime: '6 min',
  },
  {
    id: '2025-09-20-torneio-judo',
    title: 'Alunos do IFE Conquistam Medalhas em Torneio de Judô',
    description: 'Nossa equipe de judô trouxe para casa 8 medalhas do Campeonato Regional de Artes Marciais, demonstrando técnica, disciplina e dedicação.',
    date: '2025-09-20',
    tag: 'Esportes',
    author: 'Carlos Silva',
    image: 'https://picsum.photos/800/400?random=55',
    readTime: '7 min',
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function NoticiasListPage() {
  return (
    <MainLayout>
      <PageHero
        title="Notícias e Atualizações"
        subtitle="Acompanhe as últimas novidades, projetos e histórias de transformação"
        imageSrc="https://picsum.photos/1920/600?random=24"
      />

      <Section py={10}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <PageTitle variant="h4" gutterBottom>
              Últimas Publicações
            </PageTitle>
            <Typography variant="body1" color="text.secondary">
              Fique por dentro de tudo que acontece no IFE
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                  <CardMedia
                    component="img"
                    height="240"
                    image={post.image}
                    alt={post.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={post.tag}
                        size="small"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {post.description}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        mb: 2,
                        color: 'text.secondary',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday fontSize="small" />
                        <Typography variant="caption">
                          {formatDate(post.date)}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTime fontSize="small" />
                        <Typography variant="caption">{post.readTime}</Typography>
                      </Box>
                    </Box>

                    <CTAButton
                      href={`/noticias/${post.id}`}
                      variant="outlined"
                      size="small"
                    >
                      Ler Mais
                    </CTAButton>
                  </CardContent>
                </Card>
            ))}
          </Box>
        </Container>
      </Section>

      {/* CTA */}
      <Section bgcolor="grey.50" py={8}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
              Fique Sempre Atualizado
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Siga nossas redes sociais para não perder nenhuma novidade do IFE
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <CTAButton
                href="https://instagram.com/ifecwb"
                external
                variant="primary"
                size="large"
              >
                Seguir no Instagram
              </CTAButton>
              <CTAButton
                href="https://wa.me/5541999999999"
                external
                variant="outlined"
                size="large"
              >
                WhatsApp
              </CTAButton>
            </Box>
          </Box>
        </Container>
      </Section>
    </MainLayout>
  );
}
