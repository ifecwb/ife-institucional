'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header onMenuClick={handleMenuOpen} />
      <MobileMenu open={mobileMenuOpen} onClose={handleMenuClose} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
      
      <Footer />
      <FloatingWhatsApp />
    </Box>
  );
}
