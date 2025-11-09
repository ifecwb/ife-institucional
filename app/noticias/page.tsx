import MainLayout from '../components/layout/MainLayout';
import { Box, Container, Typography } from '@mui/material';

export default function NoticiasPage() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Box sx={{ py: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Notícias
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Blog em construção (Nextra será configurado em fase posterior)...
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}
