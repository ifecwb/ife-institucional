'use client';

import MainLayout from '@/app/components/layout/MainLayout';
import { Box, Container, Typography, Chip, Divider } from '@mui/material';
import { CalendarToday, AccessTime, Person } from '@mui/icons-material';

export default function PostPage() {
  return (
    <MainLayout>
      <Container maxWidth="md">
        <Box sx={{ py: 8 }}>
          {/* Header do Post */}
          <Box sx={{ mb: 4 }}>
            <Chip
              label="Infraestrutura"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              IFE Inaugura Nova Quadra Poliesportiva
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                mb: 4,
                color: 'text.secondary',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Person fontSize="small" />
                <Typography variant="body2">Equipe IFE</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarToday fontSize="small" />
                <Typography variant="body2">10 de novembro de 2025</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTime fontSize="small" />
                <Typography variant="body2">5 min de leitura</Typography>
              </Box>
            </Box>
          </Box>

          {/* Imagem Principal */}
          <Box
            sx={{
              width: '100%',
              height: 400,
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              mb: 4,
            }}
          >
            <Box
              component="img"
              src="https://picsum.photos/1200/600?random=50"
              alt="Inauguração da quadra"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Conteúdo */}
          <Box sx={{ '& > *': { mb: 3 } }}>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Com muito orgulho, anunciamos a inauguração da nossa nova quadra poliesportiva!
              Este é um marco histórico para o IFE e representa o compromisso com o
              desenvolvimento integral das nossas crianças e adolescentes.
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 3 }}>
              Um Sonho Realizado
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              A construção da quadra foi possível graças ao apoio de nossos parceiros,
              doadores e voluntários que acreditam na transformação através do esporte.
              Durante os últimos seis meses, acompanhamos cada etapa da obra com grande
              expectativa.
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 3 }}>
              Novas Oportunidades
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Com a nova estrutura, poderemos:
            </Typography>

            <Box component="ul" sx={{ pl: 4, '& li': { mb: 1.5 } }}>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                  Ampliar o número de vagas nas oficinas de <strong>Futsal e Vôlei</strong>
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                  Realizar <strong>torneios internos</strong> e eventos esportivos
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                  Oferecer espaço coberto para atividades durante todo o ano
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                  Desenvolver novos projetos esportivos
                </Typography>
              </li>
            </Box>

            <Box
              sx={{
                bgcolor: 'grey.50',
                p: 3,
                borderLeft: 4,
                borderColor: 'primary.main',
                my: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  lineHeight: 1.8,
                }}
              >
                "Esta quadra representa muito mais que um espaço físico. É o símbolo da
                esperança e das oportunidades que oferecemos para transformar vidas através
                do esporte."
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 2, fontWeight: 600, color: 'text.secondary' }}
              >
                — Carlos Silva, Coordenador de Esportes
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 5 }} />

          {/* Voltar */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="a"
              href="/noticias-lista"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              ← Voltar para Notícias
            </Typography>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
}
