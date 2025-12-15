'use client'

import { useState } from 'react'
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

interface VolunteerFormProps {
  readonly onSuccess?: () => void
}

export default function VolunteerForm({ onSuccess }: Readonly<VolunteerFormProps>) {
  const { register, handleSubmit, setValue } = useForm()
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const onHCaptchaChange = (token: string) => {
    setValue('h-captcha-response', token)
  }

  const onSubmit = async (data: any) => {
    setResult('Enviando...')
    setLoading(true)

    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(key, data[key]))
    formData.append('access_key', 'e8f7e662-b90d-48a4-9176-a563bcc0ba65')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const responseData = await response.json()
      
      if (responseData.success) {
        setResult('Formulário enviado com sucesso! Entraremos em contato em breve.')
        
        // Callback de sucesso
        if (onSuccess) {
          onSuccess()
        }
        
        // Limpar mensagem após 5 segundos
        setTimeout(() => setResult(''), 5000)
      } else {
        setResult('Erro ao enviar formulário. Por favor, tente novamente.')
        setTimeout(() => setResult(''), 5000)
      }
    } catch (err) {
      setResult('Erro ao conectar. Por favor, tente novamente.')
      setTimeout(() => setResult(''), 5000)
      console.error('Erro:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {result && (
        <Alert 
          severity={result.includes('sucesso') ? 'success' : 'error'}
          onClose={() => setResult('')}
        >
          {result}
        </Alert>
      )}

      <TextField
        required
        fullWidth
        label="Nome Completo"
        {...register('nome', { required: true })}
        disabled={loading}
      />

      <TextField
        required
        fullWidth
        type="email"
        label="E-mail"
        {...register('email', { required: true })}
        disabled={loading}
      />

      <TextField
        required
        fullWidth
        label="Telefone/WhatsApp"
        placeholder="(00) 00000-0000"
        {...register('telefone', { required: true })}
        disabled={loading}
      />

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Mensagem (opcional)"
        placeholder="Conte-nos um pouco sobre você e por que quer ser voluntário..."
        {...register('mensagem')}
        disabled={loading}
      />

      <HCaptcha
        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        reCaptchaCompat={false}
        onVerify={onHCaptchaChange}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={loading ? <CircularProgress size={20} /> : <Send />}
        disabled={loading}
        sx={{ alignSelf: 'flex-start' }}
      >
        {loading ? 'Enviando...' : 'Enviar Formulário'}
      </Button>

      <Alert severity="info">
        Seu formulário de voluntariado será enviado para nossa equipe e entraremos em contato em breve.
      </Alert>
    </Box>
  )
}
