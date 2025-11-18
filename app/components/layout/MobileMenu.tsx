'use client';

import * as React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  Divider,
  Button,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Readonly<MobileMenuProps>) {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = React.useState<number | null>(null);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '80%', sm: 320 },
          maxWidth: '100%',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header do Drawer */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Menu
          </Typography>
          <IconButton
            onClick={onClose}
            aria-label="fechar menu"
            sx={{ color: 'text.primary' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Lista de Navegação */}
        <List sx={{ flexGrow: 1, pt: 2 }}>
          {navItems.map((item, index) => {
            const isActive = item.href === '/' 
              ? pathname === '/' 
              : pathname.startsWith(item.href) || (item.submenu && item.submenu.some(sub => pathname.startsWith(sub.href)));
            
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            
            return (
              <React.Fragment key={item.href}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={hasSubmenu ? 'div' : Link}
                    href={hasSubmenu ? undefined : item.href}
                    onClick={hasSubmenu ? () => handleSubmenuToggle(index) : onClose}
                    selected={isActive && !hasSubmenu}
                    sx={{
                      py: 1.5,
                      px: 3,
                      '&.Mui-selected': {
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                        },
                      },
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          fontWeight: isActive ? 600 : 500,
                        },
                      }}
                    />
                    {hasSubmenu && (
                      openSubmenu === index ? <ExpandLess /> : <ExpandMore />
                    )}
                  </ListItemButton>
                </ListItem>
                
                {hasSubmenu && (
                  <Collapse in={openSubmenu === index} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.submenu.map((subItem) => {
                        const isSubActive = pathname.startsWith(subItem.href);
                        return (
                          <ListItem key={subItem.href} disablePadding>
                            <ListItemButton
                              component={Link}
                              href={subItem.href}
                              onClick={onClose}
                              selected={isSubActive}
                              sx={{
                                py: 1.5,
                                pl: 5,
                                pr: 3,
                                '&.Mui-selected': {
                                  bgcolor: 'primary.light',
                                  color: 'primary.main',
                                  fontWeight: 600,
                                  '&:hover': {
                                    bgcolor: 'primary.light',
                                  },
                                },
                                '&:hover': {
                                  bgcolor: 'action.hover',
                                },
                              }}
                            >
                              <ListItemText
                                primary={subItem.label}
                                slotProps={{
                                  primary: {
                                    fontWeight: isSubActive ? 600 : 500,
                                    fontSize: '0.9rem',
                                  },
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>

        <Divider />

        {/* CTA Doar no Mobile */}
        <Box sx={{ p: 2 }}>
          <Button
            component={Link}
            href="/doar"
            variant="contained"
            color="primary"
            fullWidth
            onClick={onClose}
            sx={{
              py: 1.5,
              fontWeight: 600,
              fontSize: '1rem',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: '0 2px 8px rgba(70, 127, 247, 0.25)',
              },
            }}
          >
            Doar Agora
          </Button>
        </Box>

        {/* Informações de Contato */}
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            📍 Rua David Tows 201 - Xaxim
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
            📧 Fale conosco
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
