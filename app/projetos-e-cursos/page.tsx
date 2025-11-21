'use client';

import MainLayout from '../components/layout/MainLayout';
import PageHero from '../components/common/PageHero';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { School, SportsSoccer } from '@mui/icons-material';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import WorkshopCard from '../components/projects/WorkshopCard';
import FAQAccordion from '../components/common/FAQAccordion';
import CTAButton from '../components/common/CTAButton';
import { services, workshops, galleryImages, projectsFAQ } from '../data/projects';
import { motion } from 'framer-motion';
import { gerarLinkWhatsApp } from '@/config/site.config';

export default function ProjetosPage() {
  return (
    <MainLayout>
      <PageHero
        title="Projetos e Oficinas"
        subtitle="Educação, esporte e cultura transformando vidas"
        imageSrc="/images/turma3.jpeg"
      />

      {/* Introdução */}
      <Section py={10}>
        <Container maxWidth="md">
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Oferecemos uma variedade de atividades gratuitas que promovem o desenvolvimento
            integral de crianças e adolescentes. Nossos programas combinam educação, esporte
            e cultura para formar cidadãos preparados para os desafios do futuro.
          </Typography>
        </Container>
      </Section>

      {/* Serviços */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Nossas Áreas de Atuação
          </PageTitle>

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
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: services.indexOf(service) * 0.2 }}
              >
                <Card sx={{ height: '100%', p: 2 }}>
                  <CardContent>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      {service.icon === 'sports_soccer' ? (
                        <SportsSoccer sx={{ fontSize: 32, color: 'white' }} />
                      ) : (
                        <School sx={{ fontSize: 32, color: 'white' }} />
                      )}
                    </Box>

                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                      {service.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Section>

      {/* Oficinas e Cursos */}
      <Section py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 2 }}>
            Nossas Oficinas e Cursos
          </PageTitle>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            Atividades gratuitas para crianças e adolescentes de 5 a 17 anos
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {workshops.map((workshop, index) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
            ))}
          </Box>
        </Container>
      </Section>

      {/* Galeria */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Galeria de Momentos
          </PageTitle>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: galleryImages.indexOf(image) * 0.05 }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </Container>
      </Section>

      {/* FAQ */}
      <Section py={10}>
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Perguntas Frequentes
          </PageTitle>

          <FAQAccordion items={projectsFAQ} />
        </Container>
      </Section>

      {/* CTA */}
      <Section bgcolor="secondary.main" py={8} sx={{ color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Inscreva-se Agora!
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
            Garanta uma vaga nas nossas atividades. As turmas são limitadas!
          </Typography>
          <CTAButton
            href={gerarLinkWhatsApp('Olá! Gostaria de me inscrever nas atividades do IFE.')}
            size="large"
            external
            sx={{
              bgcolor: 'white',
              color: 'secondary.main',
              '&:hover': { bgcolor: 'grey.100' },
            }}
          >
            Falar no WhatsApp
          </CTAButton>
        </Container>
      </Section>
    </MainLayout>
  );
}

