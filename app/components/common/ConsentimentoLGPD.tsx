'use client'

import { Box, Checkbox, FormControlLabel, Link as MuiLink, Typography } from '@mui/material'
import Link from 'next/link'
import { siteConfig } from '@/app/data/site.config'

interface ConsentimentoLGPDProps {
  readonly checked: boolean
  readonly onChange: (checked: boolean) => void
  readonly disabled?: boolean
  /** Descreve a finalidade específica do tratamento neste formulário */
  readonly finalidade: string
}

export default function ConsentimentoLGPD({
  checked,
  onChange,
  disabled,
  finalidade,
}: Readonly<ConsentimentoLGPDProps>) {
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            required
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            sx={{ alignSelf: 'flex-start', pt: 0.5 }}
          />
        }
        sx={{ alignItems: 'flex-start', ml: 0 }}
        // O asterisco padrão do MUI quebraria em uma linha solta abaixo do texto.
        required={false}
        label={
          <Typography variant="body2" color="text.secondary">
            <Box component="span" aria-hidden sx={{ color: 'error.main', mr: 0.5 }}>
              *
            </Box>
            Autorizo o {siteConfig.nome} a usar meus dados para {finalidade} e declaro estar ciente
            da{' '}
            <MuiLink component={Link} href={siteConfig.privacidade.paginaPolitica}>
              Política de Privacidade
            </MuiLink>
            . Posso revogar este consentimento a qualquer momento pelo e-mail{' '}
            {siteConfig.privacidade.emailEncarregado}.
          </Typography>
        }
      />
    </Box>
  )
}
