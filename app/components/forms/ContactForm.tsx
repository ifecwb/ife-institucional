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
import { siteConfig, gerarLinkWhatsApp } from '@/app/data/site.config'
import ConsentimentoLGPD from '@/app/components/common/ConsentimentoLGPD'

interface ContactFormProps {
  readonly onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: Readonly<ContactFormProps>) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })
  const [consentimento, setConsentimento] = useState(false)
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
    if (!formData.nome || !formData.email || !formData.assunto || !formData.mensagem) {
      setError('Por favor, preencha todos os campos.')
      setLoading(false)
      return
    }

    try {
      // Gera mensagem do WhatsApp usando o template
      const mensagem = siteConfig.whatsappTemplates.contato(formData)
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
        assunto: '',
        mensagem: '',
      })
      setConsentimento(false)
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
        label="Assunto"
        name="assunto"
        value={formData.assunto}
        onChange={handleChange}
        disabled={loading}
      />

      <TextField
        required
        fullWidth
        multiline
        rows={5}
        label="Mensagem"
        name="mensagem"
        placeholder="Digite sua mensagem..."
        value={formData.mensagem}
        onChange={handleChange}
        disabled={loading}
      />

      <ConsentimentoLGPD
        checked={consentimento}
        onChange={setConsentimento}
        disabled={loading}
        finalidade="responder à minha mensagem"
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={loading ? <CircularProgress size={20} /> : <Send />}
        disabled={loading || !consentimento}
        sx={{ alignSelf: 'flex-start' }}
      >
        {loading ? 'Processando...' : 'Enviar via WhatsApp'}
      </Button>

      <Alert severity="info">
        Ao clicar em enviar, você será redirecionado para o WhatsApp com sua mensagem
        pré-preenchida.
      </Alert>
    </Box>
  )
}
