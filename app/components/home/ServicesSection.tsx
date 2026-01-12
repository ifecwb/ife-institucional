'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import SportsIcon from '@mui/icons-material/Sports';
import Section from '../common/Section';
import PageTitle from '../common/PageTitle';
import { Groups } from '@mui/icons-material';

const services = [
  {
    id: 'esporte',
    icon: <SportsIcon sx={{ fontSize: 48 }} />,
    title: 'Esporte e Convivência',
    description: 'Futebol, Judô e Vôlei com atividades semanais regulares, promovendo desenvolvimento socioemocional, fortalecimento de vínculos e valores como respeito, disciplina e trabalho em equipe.',
    color: '#467FF7',
  },
  {
    id: 'socioeducacao',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Socioeducação',
    description: 'Oficinas para todas as idades focadas em convivência, cidadania, fortalecimento de vínculos familiares e comunitários, desenvolvimento da comunicação e promoção de direitos.',
    color: '#36A099',
  },
  {
    id: 'trabalho',
    icon: <Groups sx={{ fontSize: 48 }} />,
    title: 'Integração ao Mundo do Trabalho',
    description: 'Exclusivo para maiores de 14 anos. Oficinas de sensibilização, orientação, desenvolvimento de habilidades organizacionais, comunicação e projeto de vida.',
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
          Nossos Eixos de Atuação
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
                  bgcolor: 'white',
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
