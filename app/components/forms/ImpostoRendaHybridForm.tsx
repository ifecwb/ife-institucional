'use client'

import { useRef, useState } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Alert, AlertTitle, Box, Button, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import { Send, WhatsApp } from '@mui/icons-material'
import { useWeb3FormsSubmit } from '@/app/hooks/useWeb3FormsSubmit'
import ConsentimentoLGPD from '@/app/components/common/ConsentimentoLGPD'
import ImpostoRendaFields from './ImpostoRendaFields'
import { registroConsentimento } from './consentimento'
import { siteConfig, gerarLinkWhatsApp } from '@/app/data/site.config'

type ImpostoRendaDados = Parameters<typeof siteConfig.whatsappTemplates.impostoRenda>[0]

interface ImpostoRendaHybridFormProps {
  readonly onSuccess?: () => void
}

/**
 * Registra o contato por e-mail (Web3Forms) e, em seguida, oferece a continuidade
 * imediata pelo WhatsApp. O link é aberto por clique do usuário para não ser
 * bloqueado como pop-up.
 */
export default function ImpostoRendaHybridForm({
  onSuccess,
}: Readonly<ImpostoRendaHybridFormProps>) {
  const { register, handleSubmit, reset } = useForm()
  const [consentimento, setConsentimento] = useState(false)
  const [dadosEnviados, setDadosEnviados] = useState<ImpostoRendaDados | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const { state, isLoading, isSuccess, submit, clearMessage, setHCaptchaToken, hCaptchaSiteKey } =
    useWeb3FormsSubmit({
      subject: 'Destinação de Imposto de Renda — Site IFE',
      clearMessageAfter: 0,
      successMessage: 'Recebemos seus dados! Nossa equipe entrará em contato em breve.',
      onSuccess: () => {
        reset()
        setConsentimento(false)
        captchaRef.current?.resetCaptcha()
        onSuccess?.()
      },
    })

  const onSubmit = (data: FieldValues) => {
    setDadosEnviados(data as ImpostoRendaDados)
    return submit({ ...data, ...registroConsentimento() })
  }

  const abrirWhatsApp = () => {
    if (!dadosEnviados) return
    const mensagem = siteConfig.whatsappTemplates.impostoRenda(dadosEnviados)
    window.open(gerarLinkWhatsApp(mensagem), '_blank', 'noopener,noreferrer')
  }

  if (isSuccess && dadosEnviados) {
    return (
      <Stack spacing={3}>
        <Alert severity="success">
          <AlertTitle>Contato registrado</AlertTitle>
          {state.message}
        </Alert>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Não quer esperar?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Continue agora pelo WhatsApp com a sua mensagem já preenchida e fale direto com a
            equipe.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<WhatsApp />}
            onClick={abrirWhatsApp}
          >
            Continuar no WhatsApp
          </Button>
        </Box>

        <Button
          variant="text"
          onClick={() => {
            setDadosEnviados(null)
            clearMessage()
          }}
          sx={{ alignSelf: 'flex-start' }}
        >
          Enviar outra solicitação
        </Button>
      </Stack>
    )
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      {state.message && state.status === 'error' && (
        <Alert severity="error" onClose={clearMessage}>
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
        finalidade="entrar em contato por e-mail ou WhatsApp e me orientar sobre a destinação do Imposto de Renda"
      />

      <HCaptcha
        ref={captchaRef}
        sitekey={hCaptchaSiteKey}
        reCaptchaCompat={false}
        onVerify={setHCaptchaToken}
        onExpire={() => setHCaptchaToken('')}
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={isLoading ? <CircularProgress size={20} /> : <Send />}
          disabled={isLoading || !consentimento}
        >
          {isLoading ? 'Enviando...' : 'Quero destinar meu IR'}
        </Button>

        <Button
          variant="outlined"
          color="success"
          size="large"
          startIcon={<WhatsApp />}
          href={gerarLinkWhatsApp(
            'Olá! Gostaria de receber orientação para destinar parte do meu Imposto de Renda ao IFE.'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prefiro falar agora
        </Button>
      </Stack>
    </Box>
  )
}
