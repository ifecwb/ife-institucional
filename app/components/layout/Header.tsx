'use client';

import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Container,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
  { 
    label: 'Quem Somos', 
    href: '/sobre',
    submenu: [
      { label: 'Sobre o IFE', href: '/sobre' },
      { label: 'Transparência', href: '/transparencia' },
    ]
  },
  { label: 'Projetos e Oficinas', href: '/projetos-e-cursos' },
  { label: 'Seja Voluntário', href: '/seja-voluntario' },
  { label: 'Notícias', href: '/noticias' },
];

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: Readonly<HeaderProps>) {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

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
                src="/favicon.png"
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
              <Box
                component="img"
                src="/texto-ife.png"
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
              {/* <Typography
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
              </Typography> */}
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
              {navItems.map((item, index) => {
                const isActive = item.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(item.href) || (item.submenu && item.submenu.some(sub => pathname.startsWith(sub.href)));
                
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                
                return (
                  <Box key={item.href} sx={{ position: 'relative' }}>
                    <Button
                      component={hasSubmenu ? 'button' : Link}
                      href={hasSubmenu ? undefined : item.href}
                      onMouseEnter={hasSubmenu ? (e: any) => handleMenuOpen(e, index) : undefined}
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
                      {hasSubmenu && <KeyboardArrowDownIcon sx={{ ml: 0.5, fontSize: 20 }} />}
                    </Button>
                    
                    {hasSubmenu && (
                      <Menu
                        anchorEl={anchorEl}
                        open={openMenuIndex === index}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleMenuClose,
                        }}
                        sx={{
                          '& .MuiPaper-root': {
                            mt: 1,
                            minWidth: 200,
                          },
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        {item.submenu.map((subItem) => (
                          <MenuItem
                            key={subItem.href}
                            component={Link}
                            href={subItem.href}
                            onClick={handleMenuClose}
                            selected={pathname.startsWith(subItem.href)}
                            sx={{
                              '&.Mui-selected': {
                                bgcolor: 'primary.light',
                                color: 'primary.main',
                                fontWeight: 600,
                              },
                            }}
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                  </Box>
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
