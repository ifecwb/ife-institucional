'use client';

import type { AppProps } from 'next/app'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../app/theme'
import MainLayout from '../app/components/layout/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
