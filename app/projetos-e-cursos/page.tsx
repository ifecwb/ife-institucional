import MainLayout from '../components/layout/MainLayout';
import { Box, Container, Typography } from '@mui/material';

export default function ProjetosECursosPage() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Box sx={{ py: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Projetos e Cursos
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Conteúdo em construção...
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}
