'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  EmojiEvents,
  People,
  School,
  Favorite,
} from '@mui/icons-material';

interface Badge {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const badges: Badge[] = [
  {
    id: 1,
    icon: <People sx={{ fontSize: 40 }} />,
    value: '500+',
    label: 'Crianças Atendidas',
    color: '#467FF7',
  },
  {
    id: 2,
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    value: '10',
    label: 'Anos de História',
    color: '#36A099',
  },
  {
    id: 3,
    icon: <School sx={{ fontSize: 40 }} />,
    value: '15+',
    label: 'Cursos Oferecidos',
    color: '#5A51A0',
  },
  {
    id: 4,
    icon: <Favorite sx={{ fontSize: 40 }} />,
    value: '100+',
    label: 'Voluntários Ativos',
    color: '#FF6B6B',
  },
];

export default function AchievementBadges() {
  return (
    <Box
      sx={{
        position: 'relative',
        mt: { xs: -6, md: -8 },
        zIndex: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 60, md: 70 },
                    height: { xs: 60, md: 70 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    mb: 2,
                    backgroundColor: `${badge.color}15`,
                    color: badge.color,
                  }}
                >
                  {badge.icon}
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 700,
                    color: badge.color,
                    mb: 0.5,
                  }}
                >
                  {badge.value}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.875rem', md: '0.95rem' },
                    fontWeight: 500,
                  }}
                >
                  {badge.label}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
