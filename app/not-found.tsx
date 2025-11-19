'use client';

import MainLayout from './components/layout/MainLayout';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 8,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '4rem', md: '6rem' },
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
            }}
          >
            404
          </Typography>
          
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: 'text.primary',
              mb: 2,
            }}
          >
            Página não encontrada
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: 500,
            }}
          >
            Desculpe, a página que você está procurando não existe ou foi movida.
          </Typography>
          
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
            }}
          >
            Voltar para a Página Inicial
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
}
