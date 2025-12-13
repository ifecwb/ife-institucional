'use client'

import { Container, Typography, Box, Card, CardContent } from '@mui/material'
import { Lightbulb, Visibility, EmojiEvents } from '@mui/icons-material'
import Section from '../common/Section'
import { motion } from 'framer-motion'

const missionItems = [
  {
    id: 'missao',
    icon: Lightbulb,
    title: 'Missão',
    description:
      'Promover o desenvolvimento integral de crianças, adolescentes e jovens, por meio de atividades educacionais, esportivas e culturais, contribuindo para a formação de cidadãos conscientes e preparados para os desafios da vida.',
    color: '#1976d2',
  },
  {
    id: 'visao',
    icon: Visibility,
    title: 'Visão',
    description:
      'Ser referência em transformação social, reconhecidos pelo impacto positivo na vida de jovens e comunidades.',
    color: '#2e7d32',
  },
  {
    id: 'valores',
    icon: EmojiEvents,
    title: 'Valores',
    description:
      'Compromisso Social, Transparência, Respeito, Trabalho em Equipe, Inovação.',
    color: '#ed6c02',
  },
]

export default function MissionSection() {
  return (
    <Section bgcolor="grey.50" py={10}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'primary.main',
          }}
        >
          Nossa Missão
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
        >
          Transformamos vidas através da educação, esporte e cultura
        </Typography>

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
          {missionItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 40, color: 'white' }} />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </Box>
      </Container>
    </Section>
  )
}
