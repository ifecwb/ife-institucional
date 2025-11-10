'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  height?: string | { xs: string; md: string };
}

/**
 * Hero reutilizável para páginas internas
 */
export default function PageHero({
  title,
  subtitle,
  imageSrc = 'https://picsum.photos/1920/600?random=10',
  height = { xs: '40vh', md: '50vh' },
}: Readonly<PageHeroProps>) {
  return (
    <Box
      sx={{
        position: 'relative',
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: subtitle ? 2 : 0,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.125rem', md: '1.5rem' },
                fontWeight: 400,
                opacity: 0.95,
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
