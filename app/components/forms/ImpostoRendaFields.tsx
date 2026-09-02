'use client'

import { Box, MenuItem, TextField } from '@mui/material'
import type { FieldValues, UseFormRegister } from 'react-hook-form'
import { origensContato, tiposContribuinte } from './imposto-renda-options'

interface ImpostoRendaFieldsProps {
  readonly register: UseFormRegister<FieldValues>
  readonly disabled?: boolean
}

export default function ImpostoRendaFields({
  register,
  disabled,
}: Readonly<ImpostoRendaFieldsProps>) {
  return (
    <>
      <TextField
        required
        fullWidth
        label="Nome Completo"
        {...register('nome', { required: true })}
        disabled={disabled}
      />

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          required
          fullWidth
          type="email"
          label="E-mail"
          {...register('email', { required: true })}
          disabled={disabled}
        />

        <TextField
          required
          fullWidth
          label="Telefone/WhatsApp"
          placeholder="(00) 00000-0000"
          {...register('telefone', { required: true })}
          disabled={disabled}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          select
          fullWidth
          defaultValue=""
          label="Tipo de contribuinte (opcional)"
          {...register('tipoContribuinte')}
          disabled={disabled}
        >
          {tiposContribuinte.map((tipo) => (
            <MenuItem key={tipo} value={tipo}>
              {tipo}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          label="Valor pretendido (opcional)"
          placeholder="R$ 0,00"
          {...register('valorDestinacao')}
          disabled={disabled}
        />
      </Box>

      <TextField
        select
        fullWidth
        defaultValue=""
        label="Como você chegou até esta página? (opcional)"
        {...register('comoConheceu')}
        disabled={disabled}
      >
        {origensContato.map((origem) => (
          <MenuItem key={origem} value={origem}>
            {origem}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Dúvidas ou observações (opcional)"
        placeholder="Conte em que ponto do processo você está e como podemos ajudar..."
        {...register('mensagem')}
        disabled={disabled}
      />
    </>
  )
}
