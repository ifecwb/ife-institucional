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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Projetos e Cursos', href: '/projetos-e-cursos' },
  { label: 'Seja Voluntário', href: '/seja-voluntario' },
  { label: 'Notícias', href: '/noticias' },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Readonly<MobileMenuProps>) {
  const pathname = usePathname();

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
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={onClose}
                  selected={isActive}
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
                </ListItemButton>
              </ListItem>
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
