'use client';

import * as React from 'react';
import { Typography, TypographyProps, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface PageTitleProps extends Omit<TypographyProps, 'variant'> {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  animate?: boolean;
}

/**
 * Componente PageTitle com animação opcional
 * Títulos consistentes para seções da página
 */
export default function PageTitle({
  children,
  variant = 'h2',
  animate = true,
  sx = {},
  ...props
}: Readonly<PageTitleProps>) {
  const baseStyles = {
    fontWeight: 700,
    mb: 3,
    ...sx,
  };

  if (!animate) {
    return (
      <Typography
        variant={variant}
        sx={baseStyles}
        {...props}
      >
        {children}
      </Typography>
    );
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Typography
        variant={variant}
        sx={baseStyles}
        {...props}
      >
        {children}
      </Typography>
    </Box>
  );
}
