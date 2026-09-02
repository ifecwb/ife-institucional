'use client';

import { Fab, Tooltip, Zoom } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import { abrirPreferenciasCookies } from './CookieConsent';

export default function FloatingCookieSettings() {
  return (
    <Zoom in timeout={500}>
      <Tooltip title="Preferências de cookies" placement="right" arrow>
        <Fab
          size="medium"
          aria-label="Abrir preferências de cookies"
          onClick={abrirPreferenciasCookies}
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 24 },
            left: { xs: 16, md: 24 },
            bgcolor: 'background.paper',
            color: 'text.secondary',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'background.paper',
              color: 'primary.main',
              transform: 'scale(1.08)',
            },
          }}
        >
          <CookieIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}
