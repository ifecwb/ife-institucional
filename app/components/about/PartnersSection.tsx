'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '@/app/components/common/Section';
import PageTitle from '@/app/components/common/PageTitle';
import { partners } from '@/app/data/about';

export default function PartnersSection() {
  return (
    <Section bgcolor="background.paper" py={10}>
      <Container maxWidth="lg">
        <PageTitle variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Nossos Parceiros
        </PageTitle>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Juntos somos mais fortes. Agradecemos a confiança e o apoio de nossos parceiros.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={partner.id}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              sx={{ height: '100%' }}
            >
              <Box
                component="a"
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  height: '100%',
                  minHeight: 180,
                  bgcolor: 'white',
                  borderRadius: 2,
                  p: 3,
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 2px 8px rgba(70, 127, 247, 0.12)',
                    transform: 'translateY(-2px)',
                    '& img': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: 80,
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.2s ease',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    lineHeight: 1.4,
                  }}
                >
                  {partner.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
