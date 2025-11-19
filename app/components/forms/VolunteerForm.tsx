'use client'

import { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material'
import { Send } from '@mui/icons-material'
import { siteConfig, gerarLinkWhatsApp } from '@/config/site.config'

interface VolunteerFormProps {
  readonly onSuccess?: () => void
}

export default function VolunteerForm({ onSuccess }: Readonly<VolunteerFormProps>) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone) {
      setError('Por favor, preencha todos os campos obrigatórios.')
      setLoading(false)
      return
    }

    try {
      // Gera mensagem do WhatsApp usando o template
      const mensagem = siteConfig.whatsappTemplates.voluntario(formData)
      const linkWhatsApp = gerarLinkWhatsApp(mensagem)

      // Abre o WhatsApp em nova aba
      window.open(linkWhatsApp, '_blank', 'noopener,noreferrer')

      // Callback de sucesso
      if (onSuccess) {
        onSuccess()
      }

      // Limpa o formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
      })
    } catch (err) {
      setError('Erro ao processar formulário. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {error && (
        <Alert severity="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <TextField
        required
        fullWidth
        label="Nome Completo"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        disabled={loading}
      />

      <TextField
        required
        fullWidth
        type="email"
        label="E-mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={loading}
      />

      <TextField
        required
        fullWidth
        label="Telefone/WhatsApp"
        name="telefone"
        placeholder="(00) 00000-0000"
        value={formData.telefone}
        onChange={handleChange}
        disabled={loading}
      />

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Mensagem (opcional)"
        name="mensagem"
        placeholder="Conte-nos um pouco sobre você e por que quer ser voluntário..."
        value={formData.mensagem}
        onChange={handleChange}
        disabled={loading}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={loading ? <CircularProgress size={20} /> : <Send />}
        disabled={loading}
        sx={{ alignSelf: 'flex-start' }}
      >
        {loading ? 'Processando...' : 'Enviar via WhatsApp'}
      </Button>

      <Alert severity="info">
        Ao clicar em "Enviar", você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
      </Alert>
    </Box>
  )
}
