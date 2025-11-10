'use client';

import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { AccessTime, Groups, Person } from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { Workshop } from '@/app/data/projects';

interface WorkshopCardProps {
  readonly workshop: Workshop;
  readonly index: number;
}

export default function WorkshopCard({ workshop, index }: WorkshopCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={workshop.image}
          alt={workshop.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
            {workshop.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.7 }}
          >
            {workshop.description}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Groups fontSize="small" color="primary" />
              <Typography variant="body2" color="text.secondary">
                <strong>Faixa etária:</strong> {workshop.ageGroup}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTime fontSize="small" color="primary" />
              <Typography variant="body2" color="text.secondary">
                <strong>Horário:</strong> {workshop.schedule}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Person fontSize="small" color="primary" />
              <Typography variant="body2" color="text.secondary">
                <strong>Instrutor(a):</strong> {workshop.instructor}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
