'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';

interface Photo {
  readonly id: number;
  readonly src: string;
  readonly alt: string;
  readonly title: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: 'https://picsum.photos/800/600?random=1',
    alt: 'Aula de judô com crianças',
    title: 'Aula de Judô',
  },
  {
    id: 2,
    src: 'https://picsum.photos/800/600?random=2',
    alt: 'Apresentação de ballet',
    title: 'Ballet Clássico',
  },
  {
    id: 3,
    src: 'https://picsum.photos/800/600?random=3',
    alt: 'Oficina de música',
    title: 'Oficina de Música',
  },
  {
    id: 4,
    src: 'https://picsum.photos/800/600?random=4',
    alt: 'Teatro infantil',
    title: 'Teatro Infantil',
  },
  {
    id: 5,
    src: 'https://picsum.photos/800/600?random=5',
    alt: 'Atividade de leitura',
    title: 'Biblioteca Comunitária',
  },
  {
    id: 6,
    src: 'https://picsum.photos/800/600?random=6',
    alt: 'Torneio esportivo',
    title: 'Torneio Esportivo',
  },
  {
    id: 7,
    src: 'https://picsum.photos/800/600?random=7',
    alt: 'Aula de artes',
    title: 'Artes Visuais',
  },
  {
    id: 8,
    src: 'https://picsum.photos/800/600?random=8',
    alt: 'Evento comunitário',
    title: 'Evento Comunitário',
  },
];

export default function PhotoGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') handleClose();
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
            }}
          >
            Galeria de Momentos
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{
              mb: { xs: 6, md: 8 },
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Acompanhe as atividades e conquistas dos nossos alunos
          </Typography>
        </motion.div>

        <ImageList
          variant="masonry"
          cols={isMobile ? 2 : 4}
          gap={16}
        >
          {photos.map((photo, index) => (
            <ImageListItem key={photo.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Box
                  onClick={() => handleOpen(index)}
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                      '& .overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                      }}
                    >
                      {photo.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </ImageListItem>
          ))}
        </ImageList>

        {/* Lightbox Modal */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={false}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                boxShadow: 'none',
                m: 0,
                maxWidth: '100vw',
                maxHeight: '100vh',
              },
            },
          }}
          onKeyDown={handleKeyDown}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <Close />
              </IconButton>

              {/* Previous Button */}
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: { xs: 8, md: 24 },
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <NavigateBefore fontSize="large" />
              </IconButton>

              {/* Image */}
              <Box
                sx={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    mt: 2,
                    textAlign: 'center',
                  }}
                >
                  {photos[currentIndex].title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mt: 1,
                  }}
                >
                  {currentIndex + 1} / {photos.length}
                </Typography>
              </Box>

              {/* Next Button */}
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: { xs: 8, md: 24 },
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <NavigateNext fontSize="large" />
              </IconButton>
            </motion.div>
          </AnimatePresence>
        </Dialog>
      </Container>
    </Box>
  );
}
