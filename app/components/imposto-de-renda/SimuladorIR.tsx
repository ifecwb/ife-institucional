'use client'

import * as React from 'react'
import {
  Box,
  Card,
  CardContent,
  Divider,
  InputAdornment,
  Link as MuiLink,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { impostoRendaConfig } from '@/app/data/imposto-de-renda'

const formatarMoeda = (valor: number) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

/** Converte a digitação livre do usuário ("1.234,56") em número. */
function parseValor(entrada: string): number {
  const digitos = entrada.replace(/\D/g, '')
  if (!digitos) return 0
  return Number(digitos) / 100
}

type Situacao = 'pagar' | 'restituir'

export default function SimuladorIR() {
  const [entrada, setEntrada] = React.useState('')
  const [situacao, setSituacao] = React.useState<Situacao>('pagar')

  const impostoDevido = parseValor(entrada)
  const potencialDeclaracao = impostoDevido * 0.03
  const potencialAnual = impostoDevido * 0.06

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseValor(e.target.value)
    setEntrada(valor ? valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '')
  }

  return (
    <Card sx={{ p: { xs: 2, md: 3 } }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Simule o seu potencial de destinação
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pegue o recibo de entrega da sua última declaração e informe abaixo o valor da linha
            <strong> Imposto Devido</strong>.
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Imposto devido"
          value={entrada}
          onChange={handleChange}
          inputMode="numeric"
          placeholder="0,00"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            },
          }}
        />

        <ToggleButtonGroup
          exclusive
          fullWidth
          color="primary"
          value={situacao}
          onChange={(_, valor: Situacao | null) => valor && setSituacao(valor)}
        >
          <ToggleButton value="pagar">Tenho imposto a pagar</ToggleButton>
          <ToggleButton value="restituir">Tenho imposto a restituir</ToggleButton>
        </ToggleButtonGroup>

        <Divider />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box
            sx={{
              flex: 1,
              p: 2.5,
              borderRadius: 2,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Direto na declaração ({impostoRendaConfig.limites.pessoaFisicaNaDeclaracao})
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {formatarMoeda(potencialDeclaracao)}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 2.5,
              borderRadius: 2,
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Doando durante o ano ({impostoRendaConfig.limites.pessoaFisica})
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {formatarMoeda(potencialAnual)}
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: 'grey.100' }}>
          <Typography variant="body1">
            {situacao === 'pagar' ? (
              <>
                Destinando {formatarMoeda(potencialDeclaracao)} na declaração, o seu imposto a
                pagar cai para{' '}
                <strong>{formatarMoeda(Math.max(impostoDevido - potencialDeclaracao, 0))}</strong>.
              </>
            ) : (
              <>
                Destinando {formatarMoeda(potencialDeclaracao)} na declaração, esse valor é somado
                à sua restituição, corrigido pela taxa Selic.
              </>
            )}
          </Typography>
        </Box>

        <Typography variant="caption" color="text.secondary">
          Simulação aproximada, apenas para orientação. Se a sua renda mudou em relação ao ano
          anterior, use o{' '}
          <MuiLink
            href="https://www27.receita.fazenda.gov.br/simulador-irpf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            simulador oficial da Receita Federal
          </MuiLink>
          . O valor exato de destinação é sempre calculado pelo programa do IRPF.
        </Typography>
      </CardContent>
    </Card>
  )
}
