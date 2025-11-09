'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import Section from '../common/Section';
import PageTitle from '../common/PageTitle';

/**
 * Seção Contato da página inicial
 * Formulário simples (será integrado com react-hook-form em fase posterior)
 */
export default function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio (será implementado com react-hook-form + integração real)
    console.log('Form data:', formData);
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <Section bgcolor="background.paper" py={10}>
      <Container maxWidth="md">
        <PageTitle
          variant="h2"
          sx={{ textAlign: 'center', mb: 2 }}
        >
          Entre em Contato
        </PageTitle>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
          }}
        >
          Tem alguma dúvida ou quer saber mais sobre nosso trabalho? <br />
          Envie sua mensagem e retornaremos em breve!
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Mensagem"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={5}
              variant="outlined"
            />

            {status === 'success' && (
              <Alert severity="success">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </Alert>
            )}

            {status === 'error' && (
              <Alert severity="error">
                Erro ao enviar mensagem. Por favor, tente novamente.
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                py: 1.5,
                alignSelf: 'center',
                minWidth: 200,
              }}
            >
              Enviar Mensagem
            </Button>
          </Box>

          {/* Informações adicionais */}
          <Box
            sx={{
              mt: 6,
              p: 4,
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Outras Formas de Contato
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📧 contato@ife.org.br
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📱 (41) 99999-9999 (WhatsApp)
            </Typography>
            <Typography variant="body2">
              📍 Rua David Tows 201 - Xaxim, Curitiba - PR
            </Typography>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
