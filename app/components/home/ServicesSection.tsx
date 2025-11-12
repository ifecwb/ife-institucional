'use client';

import * as React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import SportsIcon from '@mui/icons-material/Sports';
import PaletteIcon from '@mui/icons-material/Palette';
import Section from '../common/Section';
import PageTitle from '../common/PageTitle';

const services = [
  {
    id: 'educacao',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Educação',
    description: 'Cursos e oficinas que ampliam oportunidades e desenvolvem habilidades essenciais para o futuro.',
    color: '#467FF7',
  },
  {
    id: 'esporte',
    icon: <SportsIcon sx={{ fontSize: 48 }} />,
    title: 'Esporte',
    description: 'Atividades esportivas que promovem desenvolvimento físico, disciplina e trabalho em equipe.',
    color: '#36A099',
  },
  {
    id: 'cultura',
    icon: <PaletteIcon sx={{ fontSize: 48 }} />,
    title: 'Cultura',
    description: 'Expressão artística e cidadania através de atividades culturais que inspiram e transformam.',
    color: '#8F539B',
  },
];

/**
 * Seção Serviços da página inicial
 * 3 colunas: Educação, Esporte, Cultura
 */
export default function ServicesSection() {
  return (
    <Section bgcolor="background.paper" py={10}>
      <Container maxWidth="lg">
        <PageTitle
          variant="h2"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Nossos Projetos e Cursos
        </PageTitle>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.id}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${service.color}30`,
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      color: service.color,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: `${service.color}15`,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: service.color,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
