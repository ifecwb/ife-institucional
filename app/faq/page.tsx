'use client'

import MainLayout from '../components/layout/MainLayout'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import { Container, Box, Typography, Button } from '@mui/material'
import { siteConfig, gerarLinkWhatsApp } from '@/config/site.config'
import VolunteerFAQ from '../components/faq/VolunteerFAQ'
import DonationFAQ from '../components/faq/DonationFAQ'

export default function FAQPage() {
  const linkWhatsApp = gerarLinkWhatsApp('Olá! Tenho uma dúvida sobre o IFE.')

  return (
    <MainLayout>
      <PageHero
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas sobre como você pode contribuir com o IFE"
        imageSrc="/images/turma3.jpeg"
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
              mb: 3,
              color: 'primary.main',
            }}
          >
            Estamos aqui para ajudar
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
            Reunimos aqui as principais dúvidas sobre nossos programas de voluntariado e
            as diferentes formas de contribuir através de doações. Se sua pergunta não
            estiver listada, entre em contato conosco!
          </Typography>
        </Container>
      </Section>

      {/* FAQ de Voluntariado */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="md">
          <VolunteerFAQ />
        </Container>
      </Section>

      {/* FAQ de Doações */}
      <Section py={10}>
        <Container maxWidth="md">
          <DonationFAQ />
        </Container>
      </Section>

      {/* CTA Final */}
      <Section bgcolor="primary.main" py={8} sx={{ color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Ainda tem dúvidas?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.95,
            }}
          >
            Nossa equipe está pronta para ajudar! Entre em contato através do WhatsApp,
            e-mail ou pelas nossas redes sociais.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Typography variant="body1">
              📧 {siteConfig.contato.email}
            </Typography>
            <Typography variant="body1">
              📱 {siteConfig.contato.telefone}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            Falar no WhatsApp
          </Button>
        </Container>
      </Section>
    </MainLayout>
  )
}
