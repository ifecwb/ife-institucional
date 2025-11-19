'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward, NavigateBefore, NavigateNext } from '@mui/icons-material';
import Link from 'next/link';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Transformando Vidas',
    subtitle: 'Através da Educação e Cultura',
    description: 'Há mais de 10 anos levando oportunidades para crianças e adolescentes em situação de vulnerabilidade social.',
    ctaText: 'Conheça Nossos Projetos',
    ctaLink: '/projetos-e-cursos',
    image: '/images/aula1.jpeg',
  },
  {
    id: 2,
    title: 'Seja um Voluntário',
    subtitle: 'Faça Parte Dessa Transformação',
    description: 'Dedique algumas horas do seu tempo e ajude a construir um futuro melhor para nossa comunidade.',
    ctaText: 'Quero Ser Voluntário',
    ctaLink: '/seja-voluntario',
    image: '/images/aula2.jpeg',
  },
  {
    id: 3,
    title: '500+ Crianças Atendidas',
    subtitle: 'Educação, Esporte e Cultura',
    description: 'Oferecemos workshops gratuitos de judô, ballet, música, teatro e muito mais.',
    ctaText: 'Veja Nossos Cursos',
    ctaLink: '/projetos-e-cursos',
    image: '/images/aula3.jpeg',
  },
  {
    id: 4,
    title: 'Sua Doação Transforma',
    subtitle: 'Cada Contribuição Faz a Diferença',
    description: 'Ajude-nos a continuar oferecendo educação de qualidade e esperança para quem mais precisa.',
    ctaText: 'Fazer Doação',
    ctaLink: '/doar',
    image: '/images/biblioteca.jpeg',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Troca a cada 6 segundos

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '70vh', md: '85vh' },
        overflow: 'hidden',
        backgroundColor: 'primary.main',
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
            }}
          />

          {/* Overlay for readability */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(135deg, rgba(70, 127, 247, 0.85) 0%, rgba(54, 160, 153, 0.75) 100%)`,
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              zIndex: 2,
              py: { xs: 8, md: 0 },
            }}
          >
            <Box sx={{ maxWidth: '700px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 2,
                    display: 'block',
                  }}
                >
                  {slides[currentSlide].subtitle}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    mb: 3,
                  }}
                >
                  {slides[currentSlide].title}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  {slides[currentSlide].description}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button
                  component={Link}
                  href={slides[currentSlide].ctaLink}
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {slides[currentSlide].ctaText}
                </Button>
              </motion.div>
            </Box>
          </Container>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on mobile */}
      <IconButton
        onClick={handlePrev}
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          left: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          },
        }}
      >
        <NavigateBefore fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          right: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          },
        }}
      >
        <NavigateNext fontSize="large" />
      </IconButton>

      {/* Dots Navigation */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 24, md: 40 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          gap: 1.5,
        }}
      >
        {slides.map((slide) => (
          <Box
            key={slide.id}
            onClick={() => handleDotClick(slide.id - 1)}
            sx={{
              width: currentSlide === slide.id - 1 ? 32 : 12,
              height: 12,
              borderRadius: 6,
              backgroundColor:
                currentSlide === slide.id - 1
                  ? 'white'
                  : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor:
                  currentSlide === slide.id - 1
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.6)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
