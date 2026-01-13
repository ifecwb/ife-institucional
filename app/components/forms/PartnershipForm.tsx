'use client'

import { useForm } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
  MenuItem,
} from '@mui/material'
import { Send } from '@mui/icons-material'
import { useWeb3FormsSubmit } from '@/app/hooks/useWeb3FormsSubmit'

interface PartnershipFormProps {
  readonly onSuccess?: () => void
}

export default function PartnershipForm({ onSuccess }: Readonly<PartnershipFormProps>) {
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
        label="Nome da Empresa/Organização"
        {...register('nomeEmpresa', { required: true })}
        disabled={isLoading}
      />

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          required
          fullWidth
          label="Nome do Contato"
          {...register('nomeContato', { required: true })}
          disabled={isLoading}
        />

        <TextField
          fullWidth
          label="Cargo"
          {...register('cargo')}
          disabled={isLoading}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
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
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          select
          fullWidth
          label="Tipo de Empresa/Organização"
          {...register('tipoEmpresa')}
          disabled={isLoading}
          defaultValue=""
        >
          <MenuItem value="">Selecione...</MenuItem>
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
          {...register('tipoParceria')}
          disabled={isLoading}
          defaultValue=""
        >
          <MenuItem value="">Selecione...</MenuItem>
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
        {...register('mensagem')}
        placeholder="Conte-nos mais sobre a proposta de parceria..."
        disabled={isLoading}
      />

      <HCaptcha
        sitekey={hCaptchaSiteKey}
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
    </Box>
  )
}
