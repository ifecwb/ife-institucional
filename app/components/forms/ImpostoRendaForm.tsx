'use client'

import { useRef, useState } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Alert, Box, Button, CircularProgress } from '@mui/material'
import { Send } from '@mui/icons-material'
import { useWeb3FormsSubmit } from '@/app/hooks/useWeb3FormsSubmit'
import ConsentimentoLGPD from '@/app/components/common/ConsentimentoLGPD'
import ImpostoRendaFields from './ImpostoRendaFields'
import { registroConsentimento } from './consentimento'

interface ImpostoRendaFormProps {
  readonly onSuccess?: () => void
}

export default function ImpostoRendaForm({ onSuccess }: Readonly<ImpostoRendaFormProps>) {
  const { register, handleSubmit, reset } = useForm()
  const [consentimento, setConsentimento] = useState(false)
  const captchaRef = useRef<HCaptcha>(null)

  const { state, isLoading, submit, clearMessage, setHCaptchaToken, hCaptchaSiteKey } =
    useWeb3FormsSubmit({
      subject: 'Destinação de Imposto de Renda — Site IFE',
      successMessage:
        'Recebemos seus dados! Nossa equipe entrará em contato para orientar a sua destinação.',
      onSuccess: () => {
        reset()
        setConsentimento(false)
        captchaRef.current?.resetCaptcha()
        onSuccess?.()
      },
    })

  const onSubmit = (data: FieldValues) => submit({ ...data, ...registroConsentimento() })

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      {state.message && (
        <Alert severity={state.status === 'success' ? 'success' : 'error'} onClose={clearMessage}>
          {state.message}
        </Alert>
      )}

      <ImpostoRendaFields register={register} disabled={isLoading} />

      {/* Honeypot anti-spam do Web3Forms */}
      <input
        type="checkbox"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
        {...register('botcheck')}
      />

      <ConsentimentoLGPD
        checked={consentimento}
        onChange={setConsentimento}
        disabled={isLoading}
        finalidade="entrar em contato e me orientar sobre a destinação do Imposto de Renda"
      />

      <HCaptcha
        ref={captchaRef}
        sitekey={hCaptchaSiteKey}
        reCaptchaCompat={false}
        onVerify={setHCaptchaToken}
        onExpire={() => setHCaptchaToken('')}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={isLoading ? <CircularProgress size={20} /> : <Send />}
        disabled={isLoading || !consentimento}
        sx={{ alignSelf: 'flex-start' }}
      >
        {isLoading ? 'Enviando...' : 'Quero destinar meu IR'}
      </Button>
    </Box>
  )
}
