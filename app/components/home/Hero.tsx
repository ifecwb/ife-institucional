'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CTAButton from '../common/CTAButton';
import siteConfig from '@/app/data/site.config';

/**
 * Seção Hero da página inicial
 * Imagem de fundo + título animado + CTAs
 */
export default function Hero() {
  const enderecoCompleto = `${siteConfig.endereco.rua} ${siteConfig.endereco.numero} - ${siteConfig.endereco.bairro}, ${siteConfig.endereco.cidade}`;

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://picsum.photos/1920/1080?random=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {siteConfig.nome}
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              mb: 2,
              fontWeight: 500,
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            💡 {siteConfig.slogan}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              mb: 5,
              fontWeight: 400,
              opacity: 0.95,
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            Mais que um instituto, uma família que transforma vidas.
            <br />
            📍 {enderecoCompleto}
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <CTAButton
            href="/sobre"
            variant="primary"
            size="large"
            sx={{
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Conheça o IFE
          </CTAButton>

          <CTAButton
            href="/doar"
            variant="secondary"
            size="large"
            sx={{
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'secondary.dark',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Doar Agora
          </CTAButton>
        </Box>
      </Container>
    </Box>
  );
}
