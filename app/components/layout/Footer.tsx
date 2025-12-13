'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import siteConfig, { gerarLinkEmail, gerarLinkWhatsApp } from '@/app/data/site.config';
import { footerNavigation } from '@/app/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'grey.100',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Coluna 1: Sobre o IFE */}
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.light',
                mb: 2,
              }}
            >
              {siteConfig.nome}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'grey.300' }}>
              Transformando gerações através do conhecimento — Esportes, Cultura e Educação.
            </Typography>
            
            {/* Redes Sociais */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton
                component="a"
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  color: 'grey.100',
                  '&:hover': {
                    color: 'primary.light',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href={gerarLinkWhatsApp('Olá!')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{
                  color: 'grey.100',
                  '&:hover': {
                    color: 'success.light',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Coluna 2: Links Rápidos */}
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.light',
                mb: 2,
              }}
            >
              Links Rápidos
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: { xs: 'center', md: 'flex-start' } }}>
              {footerNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'grey.300',
                      '&:hover': {
                        color: 'primary.light',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>

          {/* Coluna 3: Contato */}
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.light',
                mb: 2,
              }}
            >
              Contato
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOnIcon />
                <MuiLink variant="body2" sx={{ color: 'grey.300' }} href={siteConfig.endereco.googleMapsUrl}>
                  {siteConfig.endereco.rua} - {siteConfig.endereco.numero}<br />
                  {siteConfig.endereco.bairro}, {siteConfig.endereco.cidade} - {siteConfig.endereco.estado}
                </MuiLink>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <EmailIcon />
                <MuiLink
                  href={gerarLinkEmail(siteConfig.contato.email)}
                  sx={{
                    color: 'grey.300',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.light',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {siteConfig.contato.email}
                </MuiLink>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <WhatsAppIcon />
                <MuiLink
                  href={gerarLinkWhatsApp("Olá!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'grey.300',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'success.light',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {siteConfig.contato.telefoneWhatsApp}
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'grey.800' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400', textAlign: 'center' }}>
            © {currentYear} {siteConfig.nome}. Todos os direitos reservados.
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.500', textAlign: 'center' }}>
            Desenvolvido com 💙 para transformar vidas
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
