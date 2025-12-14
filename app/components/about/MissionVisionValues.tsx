'use client';

import * as React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Section from '@/app/components/common/Section';
import PageTitle from '@/app/components/common/PageTitle';

const values = [
  {
    id: 'missao',
    icon: <FavoriteBorderIcon sx={{ fontSize: 48 }} />,
    title: 'Missão',
    description: 'Promover o desenvolvimento integral de crianças, adolescentes e jovens, por meio de atividades educacionais, esportivas e culturais, contribuindo para a formação de cidadãos conscientes e preparados para os desafios da vida.',
    color: '#467FF7',
  },
  {
    id: 'visao',
    icon: <VisibilityIcon sx={{ fontSize: 48 }} />,
    title: 'Visão',
    description: 'Ser referência em transformação social, reconhecidos pelo impacto positivo na vida de jovens e comunidades.',
    color: '#36A099',
  },
  {
    id: 'valores',
    icon: <StarBorderIcon sx={{ fontSize: 48 }} />,
    title: 'Valores',
    description: 'Compromisso Social, Transparência, Respeito, Trabalho em Equipe, Inovação.',
    color: '#8F539B',
  },
];

export default function MissionVisionValues() {
  return (
    <Section bgcolor="background.paper" py={10}>
      <Container maxWidth="lg">
        <PageTitle variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Missão, Visão e Valores
        </PageTitle>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {values.map((item, index) => (
            <Box
              key={item.id}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      bgcolor: `${item.color}15`,
                      color: item.color,
                      mb: 3,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: item.color,
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
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
