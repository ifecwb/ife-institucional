'use client'

import { useState } from 'react'
import { Box, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface SearchFieldProps {
  onSearchChange: (value: string) => void
}

export default function SearchField({ onSearchChange }: SearchFieldProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)
    onSearchChange(value)
  }

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        placeholder="Buscar por título ou descrição..."
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 600 }}
      />
    </Box>
  )
}
