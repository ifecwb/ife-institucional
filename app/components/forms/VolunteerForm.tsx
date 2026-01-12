'use client'

import { useForm } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material'
import { Send } from '@mui/icons-material'
import { useWeb3FormsSubmit } from '@/app/hooks/useWeb3FormsSubmit'

interface VolunteerFormProps {
  readonly onSuccess?: () => void
}

export default function VolunteerForm({ onSuccess }: Readonly<VolunteerFormProps>) {
  const { register, handleSubmit, reset } = useForm()
  const { 
    state, 
    isLoading, 
    submit, 
    clearMessage, 
    setHCaptchaToken, 
    hCaptchaSiteKey 
  } = useWeb3FormsSubmit({
    onSuccess: () => {
      reset()
      onSuccess?.()
    },
    successMessage: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
  })

  return (
    <Box component="form" onSubmit={handleSubmit(submit)} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {state.message && (
        <Alert 
          severity={state.status === 'success' ? 'success' : 'error'}
          onClose={clearMessage}
        >
          {state.message}
        </Alert>
      )}

      <TextField
        required
        fullWidth
        label="Nome Completo"
        {...register('nome', { required: true })}
        disabled={isLoading}
      />

      <TextField
        required
        fullWidth
        type="email"
        label="E-mail"
        {...register('email', { required: true })}
        disabled={isLoading}
      />

      <TextField
        required
        fullWidth
        label="Telefone/WhatsApp"
        placeholder="(00) 00000-0000"
        {...register('telefone', { required: true })}
        disabled={isLoading}
      />

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Mensagem (opcional)"
        placeholder="Conte-nos um pouco sobre você e por que quer ser voluntário..."
        {...register('mensagem')}
        disabled={isLoading}
      />

      <HCaptcha
        sitekey={hCaptchaSiteKey}
        reCaptchaCompat={false}
        onVerify={setHCaptchaToken}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={isLoading ? <CircularProgress size={20} /> : <Send />}
        disabled={isLoading}
        sx={{ alignSelf: 'flex-start' }}
      >
        {isLoading ? 'Enviando...' : 'Enviar Formulário'}
      </Button>

      <Alert severity="info">
        Seu formulário de voluntariado será enviado para nossa equipe e entraremos em contato em breve.
      </Alert>
    </Box>
  )
}
