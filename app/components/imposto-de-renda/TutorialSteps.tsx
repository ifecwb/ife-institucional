'use client'

import * as React from 'react'
import { Avatar, Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { ImageOutlined } from '@mui/icons-material'
import { motion } from 'framer-motion'
import type { TutorialStep } from '@/app/data/imposto-de-renda'

interface TutorialStepsProps {
  readonly steps: TutorialStep[]
}

function StepImage({ src, alt }: Readonly<{ src: string; alt: string }>) {
  const [falhou, setFalhou] = React.useState(false)

  if (falhou) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          minHeight: 220,
          borderRadius: 2,
          border: '2px dashed',
          borderColor: 'divider',
          bgcolor: 'grey.50',
          color: 'text.secondary',
          p: 3,
          textAlign: 'center',
        }}
      >
        <ImageOutlined fontSize="large" />
        <Typography variant="caption">{alt}</Typography>
      </Box>
    )
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFalhou(true)}
      sx={{
        width: '100%',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        display: 'block',
      }}
    />
  )
}

export default function TutorialSteps({ steps }: Readonly<TutorialStepsProps>) {
  return (
    <Stack spacing={4}>
      {steps.map((step, index) => (
        <Box
          key={step.id}
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <Card>
            <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
              <Stack
                direction={{ xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                spacing={{ xs: 3, md: 5 }}
                alignItems="center"
              >
                <Box sx={{ flex: 1, width: '100%' }}>
                  <StepImage src={step.image} alt={step.imageAlt} />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', fontWeight: 700 }}>
                      {step.number}
                    </Avatar>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                      {step.title}
                    </Typography>
                  </Stack>

                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Stack>
  )
}
