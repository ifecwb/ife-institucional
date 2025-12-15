'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
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
import siteConfig, {gerarLinkWhatsApp} from '@/app/data/site.config';

/**
 * Seção Contato da página inicial
 * Integrado com Web3Forms para envio de formulário
 */
export default function ContactSection() {
  const { register, handleSubmit, setValue } = useForm();
  const [result, setResult] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);

  const onHCaptchaChange = (token: string) => {
    setValue('h-captcha-response', token);
  };

  const onSubmit = async (data: any) => {
    setResult('Enviando...');
    setLoading(true);
    
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    formData.append('access_key', '2ce8774d-0464-46a4-942b-8a1d8fba8571');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      
      if (responseData.success) {
        setResult('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        // Limpar mensagem após 5 segundos
        setTimeout(() => setResult(''), 5000);
      } else {
        setResult('Erro ao enviar mensagem. Por favor, tente novamente.');
        setTimeout(() => setResult(''), 5000);
      }
    } catch (error) {
      setResult('Erro ao conectar. Por favor, tente novamente.');
      setTimeout(() => setResult(''), 5000);
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
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
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              label="Nome"
              {...register('name', { required: true })}
              variant="outlined"
              disabled={loading}
            />

            <TextField
              fullWidth
              label="E-mail"
              type="email"
              {...register('email', { required: true })}
              variant="outlined"
              disabled={loading}
            />

            <TextField
              fullWidth
              label="Mensagem"
              {...register('message', { required: true })}
              multiline
              rows={5}
              variant="outlined"
              disabled={loading}
            />

            {result && (
              <Alert 
                severity={result.includes('sucesso') ? 'success' : 'error'}
              >
                {result}
              </Alert>
            )}

            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              onVerify={onHCaptchaChange}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              disabled={loading}
              sx={{
                py: 1.5,
                alignSelf: 'center',
                minWidth: 200,
              }}
            >
              {result === 'Enviando...' ? 'Enviando...' : 'Enviar Mensagem'}
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
              📧 {siteConfig.contato.email}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📱 <a href={gerarLinkWhatsApp(siteConfig.contato.telefoneWhatsApp)}>{} (WhatsApp)</a>
            </Typography>
            <Typography variant="body2">
              📍  {siteConfig.endereco.rua} - {siteConfig.endereco.numero}<br />
                  {siteConfig.endereco.bairro}, {siteConfig.endereco.cidade} - {siteConfig.endereco.estado}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
