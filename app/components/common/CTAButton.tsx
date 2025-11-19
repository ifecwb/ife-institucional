'use client';

import * as React from 'react';
import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

interface CTAButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  external?: boolean;
}

/**
 * Componente CTAButton reutilizável
 * Botão de Call-to-Action com estilos consistentes
 */
export default function CTAButton({
  children,
  href,
  variant = 'primary',
  external = false,
  sx = {},
  ...props
}: Readonly<CTAButtonProps>) {
  const variantMap = {
    primary: 'contained' as const,
    secondary: 'contained' as const,
    outlined: 'outlined' as const,
  };

  const colorMap = {
    primary: 'primary' as const,
    secondary: 'secondary' as const,
    outlined: 'primary' as const,
  };

  const baseStyles = {
    px: 4,
    py: 1.5,
    fontSize: '1rem',
    fontWeight: 600,
    ...sx,
  };

  if (href) {
    if (external) {
      return (
        <Button
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant={variantMap[variant]}
          color={colorMap[variant]}
          sx={baseStyles}
          {...props}
        >
          {children}
        </Button>
      );
    }

    return (
      <Button
        component={Link}
        href={href}
        variant={variantMap[variant]}
        color={colorMap[variant]}
        sx={baseStyles}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={variantMap[variant]}
      color={colorMap[variant]}
      sx={baseStyles}
      {...props}
    >
      {children}
    </Button>
  );
}
