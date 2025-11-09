'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import PageTitle from '../common/PageTitle';
import CTAButton from '../common/CTAButton';

/**
 * Seção About (preview) da página inicial
 * Duas colunas: texto à esquerda, imagem à direita
 */
export default function AboutSection() {
  return (
    <Section py={10}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Coluna Texto */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PageTitle variant="h2" animate={false}>
              Sobre o Instituto
            </PageTitle>

            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: '1.125rem', lineHeight: 1.8 }}
            >
              O Instituto Futuro de Excelência (IFE) é uma organização dedicada a transformar
              vidas através da educação, esporte e cultura. Atuando na comunidade de Xaxim,
              em Curitiba, oferecemos oportunidades para crianças e jovens desenvolverem
              seu potencial máximo.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, fontSize: '1.125rem', lineHeight: 1.8 }}
            >
              Nossos programas incluem oficinas de judô, futsal, vôlei, balé, empreendedorismo
              criativo e informática, proporcionando um ambiente seguro e acolhedor para o
              crescimento integral de cada participante.
            </Typography>

            <CTAButton href="/sobre" variant="outlined">
              Saiba Mais
            </CTAButton>
          </Box>

          {/* Coluna Imagem */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              position: 'relative',
              height: { xs: 300, md: 400 },
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            }}
          >
            <Box
              component="img"
              src="https://picsum.photos/600/400?random=2"
              alt="Instituto Futuro de Excelência"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
