'use client'

import { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
  MenuItem,
} from '@mui/material'
import { Send } from '@mui/icons-material'
import { siteConfig, gerarLinkWhatsApp } from '@/app/data/site.config'

interface PartnershipFormProps {
  readonly onSuccess?: () => void
}

export default function PartnershipForm({ onSuccess }: Readonly<PartnershipFormProps>) {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    nomeContato: '',
    cargo: '',
    email: '',
    telefone: '',
    tipoEmpresa: '',
    tipoParceria: '',
    mensagem: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const tiposEmpresa = [
    'Empresa Privada',
    'Organização do Terceiro Setor',
    'Órgão Público',
    'Instituição de Ensino',
    'Pessoa Física',
    'Outro',
  ]

  const tiposParceria = [
    'Patrocínio',
    'Apoio Institucional',
    'Doação de Materiais/Equipamentos',
    'Voluntariado Corporativo',
    'Parceria Técnica',
    'Outro',
  ]

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
    if (!formData.nomeEmpresa || !formData.nomeContato || !formData.email || !formData.telefone) {
      setError('Por favor, preencha todos os campos obrigatórios.')
      setLoading(false)
      return
    }

    try {
      // Gera mensagem do WhatsApp usando o template
      const mensagem = siteConfig.whatsappTemplates.parceria(formData)
      const linkWhatsApp = gerarLinkWhatsApp(mensagem)

      // Abre o WhatsApp em nova aba
      window.open(linkWhatsApp, '_blank', 'noopener,noreferrer')

      // Callback de sucesso
      if (onSuccess) {
        onSuccess()
      }

      // Limpa o formulário
      setFormData({
        nomeEmpresa: '',
        nomeContato: '',
        cargo: '',
        email: '',
        telefone: '',
        tipoEmpresa: '',
        tipoParceria: '',
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
        label="Nome da Empresa/Organização"
        name="nomeEmpresa"
        value={formData.nomeEmpresa}
        onChange={handleChange}
        disabled={loading}
      />

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          required
          fullWidth
          label="Nome do Contato"
          name="nomeContato"
          value={formData.nomeContato}
          onChange={handleChange}
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          disabled={loading}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
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
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          select
          fullWidth
          label="Tipo de Empresa/Organização"
          name="tipoEmpresa"
          value={formData.tipoEmpresa}
          onChange={handleChange}
          disabled={loading}
        >
          {tiposEmpresa.map((tipo) => (
            <MenuItem key={tipo} value={tipo}>
              {tipo}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          fullWidth
          label="Tipo de Parceria"
          name="tipoParceria"
          value={formData.tipoParceria}
          onChange={handleChange}
          disabled={loading}
        >
          {tiposParceria.map((tipo) => (
            <MenuItem key={tipo} value={tipo}>
              {tipo}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Mensagem (opcional)"
        name="mensagem"
        placeholder="Conte-nos mais sobre a proposta de parceria..."
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
