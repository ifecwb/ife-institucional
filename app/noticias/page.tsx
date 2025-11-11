'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../components/layout/MainLayout';
import { Box, Container, Typography, CircularProgress } from '@mui/material';

export default function NoticiasPage() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para o blog Nextra
    router.push('/noticias');
  }, [router]);

  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Box
          sx={{
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
          }}
        >
          <CircularProgress size={60} sx={{ mb: 3 }} />
          <Typography variant="h5" gutterBottom>
            Carregando notícias...
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Você está sendo redirecionado para o blog do IFE
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}
