'use client';

import * as React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface SectionProps {
  children: React.ReactNode;
  bgcolor?: string;
  py?: number;
  sx?: SxProps<Theme>;
  component?: React.ElementType;
  id?: string;
}

/**
 * Componente Section reutilizável
 * Container padrão para seções da página com padding vertical e background customizável
 */
export default function Section({
  children,
  bgcolor = 'transparent',
  py = 8,
  sx = {},
  component = 'section',
  id,
}: Readonly<SectionProps>) {
  return (
    <Box
      component={component}
      id={id}
      sx={{
        bgcolor,
        py,
        width: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
