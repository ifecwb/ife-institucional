'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import CTAButton from '../common/CTAButton';

/**
 * Seção CTA "Participe Conosco"
 * Bloco com fundo colorido + chamada para ação
 */
export default function CTASection() {
  return (
    <Section
      bgcolor="secondary.main"
      py={8}
      sx={{
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Faça Parte Dessa Transformação
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 400,
              opacity: 0.95,
              fontSize: { xs: '1.125rem', md: '1.25rem' },
            }}
          >
            Junte-se a nós e ajude a construir um futuro melhor para crianças e jovens
            da nossa comunidade. Seja voluntário e faça a diferença!
          </Typography>

          <CTAButton
            href="/seja-voluntario"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'secondary.main',
              px: 5,
              py: 2,
              fontSize: '1.125rem',
              '&:hover': {
                bgcolor: 'grey.100',
                transform: 'scale(1.05)',
              },
            }}
          >
            Seja Voluntário
          </CTAButton>
        </Box>
      </Container>
    </Section>
  );
}
