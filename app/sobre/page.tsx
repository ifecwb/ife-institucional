import MainLayout from '../components/layout/MainLayout';
import { Box, Container, Typography } from '@mui/material';

export default function SobrePage() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Box sx={{ py: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Sobre o IFE
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Conteúdo em construção...
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}
