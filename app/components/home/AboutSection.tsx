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
              sx={{ mb: 3, fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}
            >
              Organização da sociedade civil fundada em 2020, focada no desenvolvimento integral
              de crianças e adolescentes através do esporte, cultura e socioeducação.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}
            >
              Atendemos anualmente entre 110 e 150 crianças e adolescentes de 5 a 17 anos
              em Xaxim, Bairro Novo, Ganchinho e Sítio Cercado, com atendimento aberto a toda Curitiba.
              Nossos eixos de atuação incluem Esporte e Convivência (Futebol, Judô e Vôlei),
              Socioeducação, e Integração ao Mundo do Trabalho para maiores de 14 anos.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}
            >
              Possuímos inscrições ativas no COMTIBA e Conselho Municipal do Esporte (CME),
              além de quatro termos de fomento vigentes com FMCA e Prefeitura Municipal de Curitiba.
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
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <Box
              component="img"
              src="/images/certificado.jpeg"
              alt="Instituto Futuro de Excelência"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                background: 'rgba(0,0,0,0)'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
