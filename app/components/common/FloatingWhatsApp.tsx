'use client';

import { Fab, Tooltip, Zoom } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { gerarLinkWhatsApp } from '@/app/data/site.config';

interface FloatingWhatsAppProps {
  readonly message?: string;
}

export default function FloatingWhatsApp({
  message = 'Olá! Gostaria de saber mais sobre o Instituto Futuro de Excelência.',
}: Readonly<FloatingWhatsAppProps>) {
  const handleClick = () => {
    const whatsappUrl = gerarLinkWhatsApp(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Zoom in timeout={500}>
      <Tooltip title="Fale conosco no WhatsApp" placement="left" arrow>
        <Fab
          color="success"
          aria-label="WhatsApp"
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            backgroundColor: '#25D366',
            color: 'white',
            boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1)',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
            },
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
              },
              '50%': {
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.7), 0 0 0 10px rgba(37, 211, 102, 0)',
              },
              '100%': {
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
              },
            },
          }}
        >
          <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}
