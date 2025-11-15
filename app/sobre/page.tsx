import MainLayout from '../components/layout/MainLayout';
import PageHero from '../components/common/PageHero';
import { Box, Container, Typography } from '@mui/material';
import Section from '../components/common/Section';
import TimelineSection from '../components/about/TimelineSection';
import MissionVisionValues from '../components/about/MissionVisionValues';
import TeamSection from '../components/about/TeamSection';
import PartnersSection from '../components/about/PartnersSection';
import CTAButton from '../components/common/CTAButton';

export default function SobrePage() {
  return (
    <MainLayout>
      <PageHero
        title="Sobre o IFE"
        subtitle="Transformando vidas através da educação, esporte e cultura"
        imageSrc="/images/emprego.jpeg"
      />

      {/* Introdução */}
      <Section py={10}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 4,
              color: 'primary.main',
            }}
          >
            Quem Somos
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              textAlign: 'center',
              color: 'text.secondary',
              mb: 3,
            }}
          >
            O Instituto Futuro de Excelência (IFE) é uma organização sem fins lucrativos
            dedicada a transformar vidas através da educação, do esporte e da cultura.
            Fundado em 2015, atuamos na comunidade de Xaxim, em Curitiba, oferecendo
            oportunidades e desenvolvendo o potencial de crianças e jovens.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Acreditamos que cada jovem tem um talento único e merece oportunidades para
            desenvolvê-lo. Nossos programas são cuidadosamente desenhados para promover
            o crescimento integral, combinando aprendizado acadêmico, desenvolvimento
            físico e expressão cultural.
          </Typography>
        </Container>
      </Section>

      {/* Linha do Tempo */}
      <TimelineSection />

      {/* Missão, Visão e Valores */}
      <MissionVisionValues />

      {/* Equipe */}
      <TeamSection />

      {/* Parceiros */}
      <PartnersSection />

      {/* CTA Final */}
      <Section
        bgcolor="primary.main"
        py={8}
        sx={{ color: 'white', textAlign: 'center' }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Faça Parte Dessa História
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
            Junte-se a nós e ajude a transformar vidas. Seja voluntário ou parceiro do IFE!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTAButton
              href="/seja-voluntario"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              Seja Voluntário
            </CTAButton>
            <CTAButton
              href="/doar"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Apoie o IFE
            </CTAButton>
          </Box>
        </Container>
      </Section>
    </MainLayout>
  );
}
