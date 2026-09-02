'use client'

import { useState } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'
import { Alert, Box, Button } from '@mui/material'
import { WhatsApp } from '@mui/icons-material'
import ConsentimentoLGPD from '@/app/components/common/ConsentimentoLGPD'
import ImpostoRendaFields from './ImpostoRendaFields'
import { siteConfig, gerarLinkWhatsApp } from '@/app/data/site.config'

interface ImpostoRendaWhatsAppFormProps {
  readonly onSuccess?: () => void
}

export default function ImpostoRendaWhatsAppForm({
  onSuccess,
}: Readonly<ImpostoRendaWhatsAppFormProps>) {
  const { register, handleSubmit, reset } = useForm()
  const [consentimento, setConsentimento] = useState(false)

  const onSubmit = (data: FieldValues) => {
    const mensagem = siteConfig.whatsappTemplates.impostoRenda(
      data as Parameters<typeof siteConfig.whatsappTemplates.impostoRenda>[0]
    )
    window.open(gerarLinkWhatsApp(mensagem), '_blank', 'noopener,noreferrer')

    reset()
    setConsentimento(false)
    onSuccess?.()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <ImpostoRendaFields register={register} />

      <ConsentimentoLGPD
        checked={consentimento}
        onChange={setConsentimento}
        finalidade="entrar em contato pelo WhatsApp e me orientar sobre a destinação do Imposto de Renda"
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={<WhatsApp />}
        disabled={!consentimento}
        sx={{ alignSelf: 'flex-start' }}
      >
        Falar com a equipe no WhatsApp
      </Button>

      <Alert severity="info">
        Ao clicar em enviar, você será redirecionado para o WhatsApp do IFE com a mensagem já
        preenchida. Os dados não são armazenados pelo site.
      </Alert>
    </Box>
  )
}
