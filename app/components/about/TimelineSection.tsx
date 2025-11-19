'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '@/app/components/common/Section';
import PageTitle from '@/app/components/common/PageTitle';
import { timeline } from '@/app/data/about';

export default function TimelineSection() {
  return (
    <Section py={10}>
      <Container maxWidth="md">
        <PageTitle variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Nossa História
        </PageTitle>

        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: 3,
              bgcolor: 'primary.main',
              transform: { xs: 'none', md: 'translateX(-50%)' },
            },
          }}
        >
          {timeline.map((item, index) => (
            <Box
              key={item.id}
              component={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                position: 'relative',
                mb: 6,
                pl: { xs: 8, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: { xs: 'block', md: 'grid' },
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: 4,
                  alignItems: 'center',
                }}
              >
                {/* Desktop - conteúdo à esquerda para items pares */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                    order: index % 2 === 0 ? 1 : 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>

                {/* Marcador central */}
                <Box
                  sx={{
                    position: { xs: 'absolute', md: 'relative' },
                    left: { xs: 0, md: 'auto' },
                    top: { xs: 0, md: 'auto' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    order: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      boxShadow: '0 0 0 4px white, 0 0 0 6px',
                      boxShadowColor: 'primary.light',
                      zIndex: 1,
                    }}
                  >
                    {item.year}
                  </Box>
                </Box>

                {/* Desktop - espaço vazio no lado oposto */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    order: index % 2 === 0 ? 3 : 1,
                  }}
                />

                {/* Mobile - conteúdo sempre à direita */}
                <Box
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
