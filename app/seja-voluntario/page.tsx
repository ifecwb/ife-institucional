'use client';

import MainLayout from '../components/layout/MainLayout';
import PageHero from '../components/common/PageHero';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
} from '@mui/material';
import {
  Favorite,
  TrendingUp,
  WorkspacePremium,
  Schedule,
  FormatQuote,
} from '@mui/icons-material';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import FAQAccordion from '../components/common/FAQAccordion';
import { motion } from 'framer-motion';
import { benefits, steps, testimonials, volunteerFAQ } from '../data/volunteer';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const iconMap: Record<string, any> = {
  favorite: Favorite,
  trending_up: TrendingUp,
  workspace_premium: WorkspacePremium,
  schedule: Schedule,
};

export default function SejaVoluntarioPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio
    console.log('Form submitted:', formData);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <MainLayout>
      <PageHero
        title="Seja Voluntário"
        subtitle="Transforme vidas e faça a diferença na comunidade"
        imageSrc="https://picsum.photos/1920/600?random=22"
      />

      {/* Mini-herói / Introdução */}
      <Section py={10}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 3,
              color: 'primary.main',
            }}
          >
            Por que ser voluntário no IFE?
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
            Quando você se torna voluntário do IFE, não está apenas doando seu tempo - está
            investindo no futuro de crianças e jovens, compartilhando conhecimento e
            construindo uma sociedade mais justa. Cada hora dedicada gera impacto real e
            transforma vidas.
          </Typography>
        </Container>
      </Section>

      {/* Benefícios */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Benefícios de Ser Voluntário
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
            {benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: benefits.indexOf(benefit) * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 2 }}>
                    <CardContent>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          bgcolor: 'secondary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 32, color: 'white' }} />
                      </Box>

                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                        {benefit.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Section>

      {/* Passos */}
      <Section py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Como Se Tornar Voluntário
          </PageTitle>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: steps.indexOf(step) * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    {step.number}
                  </Box>

                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                    {step.title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {step.description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Section>

      {/* Depoimentos */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            O Que Nossos Voluntários Dizem
          </PageTitle>

          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} sx={{ px: 2 }}>
                <Card sx={{ height: 300, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <FormatQuote
                    sx={{ fontSize: 48, color: 'secondary.main', opacity: 0.3, mb: 2 }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      flexGrow: 1,
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                      color: 'text.secondary',
                      mb: 3,
                    }}
                  >
                    {testimonial.quote}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </Section>

      {/* Formulário */}
      <Section py={10}>
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 2 }}>
            Cadastre-se Como Voluntário
          </PageTitle>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6 }}
          >
            Preencha o formulário abaixo e entraremos em contato
          </Typography>

          <Card sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Nome Completo"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="E-mail"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Telefone/WhatsApp"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Por que você quer ser voluntário? Em qual área gostaria de atuar?"
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ py: 1.5, fontWeight: 700 }}
              >
                Enviar Cadastro
              </Button>
            </Box>
          </Card>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Perguntas Frequentes
          </PageTitle>

          <FAQAccordion items={volunteerFAQ} />
        </Container>
      </Section>
    </MainLayout>
  );
}

