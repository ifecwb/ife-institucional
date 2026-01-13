'use client';

import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import Section from '../common/Section';
import PageTitle from '../common/PageTitle';
import siteConfig, { gerarLinkWhatsApp } from '@/app/data/site.config';
import { useWeb3FormsSubmit } from '@/app/hooks/useWeb3FormsSubmit';

/**
 * Seção Contato da página inicial
 * Integrado com Web3Forms para envio de formulário
 */
export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm();
  const {
    state,
    isLoading,
    submit,
    clearMessage,
    setHCaptchaToken,
    hCaptchaSiteKey,
  } = useWeb3FormsSubmit({
    onSuccess: () => reset(),
    successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
  });

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
            onSubmit={handleSubmit(submit)}
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
              disabled={isLoading}
            />

            <TextField
              fullWidth
              label="E-mail"
              type="email"
              {...register('email', { required: true })}
              variant="outlined"
              disabled={isLoading}
            />

            <TextField
              fullWidth
              label="Mensagem"
              {...register('message', { required: true })}
              multiline
              rows={5}
              variant="outlined"
              disabled={isLoading}
            />

            {state.message && (
              <Alert 
                severity={state.status === 'success' ? 'success' : 'error'}
                onClose={clearMessage}
              >
                {state.message}
              </Alert>
            )}

            <HCaptcha
              sitekey={hCaptchaSiteKey}
              onVerify={setHCaptchaToken}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={isLoading ? <CircularProgress size={20} /> : <SendIcon />}
              disabled={isLoading}
              sx={{
                py: 1.5,
                alignSelf: 'center',
                minWidth: 200,
              }}
            >
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
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
              📱 <a href={gerarLinkWhatsApp('Olá! Vim pelo site e gostaria de mais informações.')} style={{ color: 'inherit' }}>
                {siteConfig.contato.telefone} (WhatsApp)
              </a>
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
