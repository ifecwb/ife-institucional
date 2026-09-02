'use client'

import * as React from 'react'
import {
  Box,
  Button,
  Container,
  Link as MuiLink,
  Paper,
  Slide,
  Stack,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { GoogleAnalytics } from '@next/third-parties/google'
import { siteConfig } from '@/app/data/site.config'

type Decisao = 'aceito' | 'rejeitado'

interface RegistroConsentimento {
  decisao: Decisao
  data: string
  versao: number
  versaoPolitica: string
}

const { chaveArmazenamento, versao } = siteConfig.privacidade.cookies

export const EVENTO_ABRIR_PREFERENCIAS = 'ife:abrir-preferencias-cookies'

/** Reabre o banner para o titular revogar ou alterar a decisão (Art. 8º, §5º da LGPD). */
export function abrirPreferenciasCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR_PREFERENCIAS))
}

function lerRegistro(): RegistroConsentimento | null {
  try {
    const bruto = window.localStorage.getItem(chaveArmazenamento)
    if (!bruto) return null

    const registro = JSON.parse(bruto) as RegistroConsentimento
    // Mudança de versão invalida o aceite anterior e pede consentimento de novo.
    return registro.versao === versao ? registro : null
  } catch {
    return null
  }
}

export default function CookieConsent() {
  const [registro, setRegistro] = React.useState<RegistroConsentimento | null>(null)
  const [visivel, setVisivel] = React.useState(false)

  React.useEffect(() => {
    const salvo = lerRegistro()
    setRegistro(salvo)
    setVisivel(!salvo)

    const abrir = () => setVisivel(true)
    window.addEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir)
    return () => window.removeEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir)
  }, [])

  const decidir = (decisao: Decisao) => {
    const novo: RegistroConsentimento = {
      decisao,
      data: new Date().toISOString(),
      versao,
      versaoPolitica: siteConfig.privacidade.versaoPolitica,
    }

    try {
      window.localStorage.setItem(chaveArmazenamento, JSON.stringify(novo))
    } catch {
      // Navegador sem armazenamento disponível: a decisão vale só para esta sessão.
    }

    setRegistro(novo)
    setVisivel(false)
  }

  return (
    <>
      {registro?.decisao === 'aceito' && (
        <GoogleAnalytics gaId={siteConfig.integracoes.googleAnalytics.id} />
      )}

      <Slide direction="up" in={visivel} mountOnEnter unmountOnExit>
        <Paper
          elevation={8}
          role="dialog"
          aria-live="polite"
          aria-label="Aviso sobre cookies"
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1400,
            borderRadius: 0,
            borderTop: '1px solid',
            borderColor: 'divider',
            py: 2.5,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2.5}
              alignItems={{ xs: 'stretch', md: 'center' }}
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Sobre os cookies deste site
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Usamos cookies do Google Analytics apenas para entender, de forma agregada, como
                  o site é utilizado. Eles só são ativados se você aceitar. Os cookies necessários
                  ao funcionamento continuam ativos. Saiba mais na{' '}
                  <MuiLink component={Link} href={siteConfig.privacidade.paginaPolitica}>
                    Política de Privacidade
                  </MuiLink>
                  .
                </Typography>
              </Box>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{ flexShrink: 0 }}
              >
                <Button variant="outlined" onClick={() => decidir('rejeitado')}>
                  Rejeitar
                </Button>
                <Button variant="contained" onClick={() => decidir('aceito')}>
                  Aceitar
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Paper>
      </Slide>
    </>
  )
}
