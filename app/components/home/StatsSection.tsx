'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from '../common/CountUp';
import {
  School,
  People,
  VolunteerActivism,
  EmojiEvents,
} from '@mui/icons-material';

interface Stat {
  readonly id: number;
  readonly icon: React.ReactNode;
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly description: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: <School sx={{ fontSize: { xs: 40, md: 50 } }} />,
    value: 500,
    suffix: '+',
    label: 'Crianças Atendidas',
    description: 'Recebendo educação de qualidade',
  },
  {
    id: 2,
    icon: <People sx={{ fontSize: { xs: 40, md: 50 } }} />,
    value: 15,
    suffix: '+',
    label: 'Cursos e Atividades',
    description: 'Esporte, cultura e educação',
  },
  {
    id: 3,
    icon: <VolunteerActivism sx={{ fontSize: { xs: 40, md: 50 } }} />,
    value: 100,
    suffix: '+',
    label: 'Voluntários Ativos',
    description: 'Dedicando seu tempo à causa',
  },
  {
    id: 4,
    icon: <EmojiEvents sx={{ fontSize: { xs: 40, md: 50 } }} />,
    value: 10,
    suffix: '',
    label: 'Anos de História',
    description: 'Transformando vidas desde 2015',
  },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #467FF7 0%, #36A099 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              color: 'white',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
            }}
          >
            Nosso Impacto
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: { xs: 6, md: 8 },
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Números que representam vidas transformadas e sonhos realizados
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {stats.map((stat, index) => (
            <Grid key={stat.id} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                    p: { xs: 2, md: 3 },
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      opacity: 0.9,
                    }}
                  >
                    {stat.icon}
                  </Box>

                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 700,
                      mb: 1,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {stat.label}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      opacity: 0.85,
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
