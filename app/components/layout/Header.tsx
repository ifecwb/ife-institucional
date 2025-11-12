'use client';

import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Readonly<HideOnScrollProps>) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Projetos e Cursos', href: '/projetos-e-cursos' },
  { label: 'Seja Voluntário', href: '/seja-voluntario' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Perguntas Frequentes', href: '/faq' },
];

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: Readonly<HeaderProps>) {
  const pathname = usePathname();

  return (
    // <HideOnScroll>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 80 },
              gap: 2,
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <Box
                component="img"
                src="/logo-ife.png"
                alt="IFE Logo"
                sx={{
                  height: { xs: 40, md: 48 },
                  width: 'auto',
                }}
                onError={(e) => {
                  // Fallback se a imagem não existir - mostra texto IFE
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    const textElement = parent.querySelector('div');
                    if (textElement) {
                      (textElement as HTMLElement).style.display = 'block';
                    }
                  }
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  whiteSpace: 'nowrap',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                IFE
              </Typography>
            </Link>

            {/* Espaçador */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Menu Desktop */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActive ? 'primary.main' : 'text.primary',
                      fontWeight: isActive ? 600 : 500,
                      px: 2,
                      py: 1,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActive ? '80%' : '0%',
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: '3px 3px 0 0',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}

              {/* Botão CTA Doar */}
              <Button
                component={Link}
                href="/doar"
                variant="contained"
                color="primary"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 2px 8px rgba(70, 127, 247, 0.25)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Doar
              </Button>
            </Box>

            {/* Menu Mobile */}
            <IconButton
              color="primary"
              aria-label="abrir menu"
              edge="end"
              onClick={onMenuClick}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    // </HideOnScroll>
  );
}
