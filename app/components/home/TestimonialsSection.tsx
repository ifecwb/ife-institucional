'use client';

import * as React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar } from '@mui/material';
import Slider from 'react-slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Section from '../common/Section';
import PageTitle from '../common/PageTitle';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Mãe de aluno',
    content: 'O IFE mudou a vida do meu filho. Ele encontrou no judô não apenas um esporte, mas valores que o acompanharão para sempre.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'João Santos',
    role: 'Voluntário',
    content: 'Ser voluntário no IFE é uma experiência transformadora. Ver o sorriso das crianças e seu desenvolvimento me motiva todos os dias.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'Ana Paula',
    role: 'Ex-aluna',
    content: 'Cresci no IFE e hoje sou profissional de TI graças às aulas de informática que recebi. O instituto abriu portas que eu nem sabia que existiam.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    role: 'Pai de aluna',
    content: 'A dedicação dos professores e o ambiente acolhedor fazem toda a diferença. Minha filha ama as aulas de balé!',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

/**
 * Seção Depoimentos da página inicial
 * Carrossel com testimonials usando react-slick
 */
export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    // Make sure mobile always shows a single item — add multiple breakpoints
    responsive: [
      {
        // small phones
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        // tablets / small screens
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      }
    ],
  };

  return (
    <Section py={10}>
      <Container maxWidth="lg">
        <PageTitle
          variant="h2"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Parcerias
        </PageTitle>

        <Box sx={{ px: { xs: 0, md: 2 } }}>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} sx={{ px: 2 }}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {/* <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 24,
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 2,
                    }}
                  >
                    <FormatQuoteIcon sx={{ color: 'white', fontSize: 28 }} />
                  </Box> */}

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      pt: 3,
                      pb: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        flexGrow: 1,
                        mb: 3,
                        fontStyle: 'italic',
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 56,
                          height: 56,
                          border: '2px solid',
                          borderColor: 'primary.light',
                        }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Section>
  );
}
