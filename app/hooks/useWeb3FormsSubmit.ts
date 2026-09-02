'use client'

import { useState, useCallback, useMemo } from 'react'
import siteConfig from '@/app/data/site.config'

export interface Web3FormsState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export interface UseWeb3FormsSubmitOptions {
  /** Assunto do e-mail que chega para a equipe */
  subject?: string
  /** Callback chamado após envio bem-sucedido */
  onSuccess?: () => void
  /** Callback chamado após erro */
  onError?: (error: Error) => void
  /** Tempo em ms para limpar a mensagem (0 = não limpar) */
  clearMessageAfter?: number
  /** Mensagem de sucesso personalizada */
  successMessage?: string
  /** Mensagem de erro personalizada */
  errorMessage?: string
}

const defaultOptions: Required<Pick<UseWeb3FormsSubmitOptions, 'clearMessageAfter' | 'successMessage' | 'errorMessage'>> = {
  clearMessageAfter: 8000,
  successMessage: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
  errorMessage: 'Erro ao enviar formulário. Por favor, tente novamente.',
}

/**
 * Envio de formulários via Web3Forms (o site é estático, não há back-end próprio).
 * Anti-spam em duas camadas: honeypot nativo (`botcheck`) e hCaptcha.
 */
export function useWeb3FormsSubmit(options: UseWeb3FormsSubmitOptions = {}) {
  const {
    subject,
    onSuccess,
    onError,
    clearMessageAfter = defaultOptions.clearMessageAfter,
    successMessage = defaultOptions.successMessage,
    errorMessage = defaultOptions.errorMessage,
  } = options

  const opts = useMemo(
    () => ({ subject, onSuccess, onError, clearMessageAfter, successMessage, errorMessage }),
    [subject, onSuccess, onError, clearMessageAfter, successMessage, errorMessage]
  )

  const [state, setState] = useState<Web3FormsState>({
    status: 'idle',
    message: '',
  })

  const [hCaptchaToken, setHCaptchaToken] = useState('')

  const clearMessage = useCallback(() => {
    setState(prev => ({ ...prev, message: '' }))
  }, [])

  const submit = useCallback(
    async (data: Record<string, unknown>) => {
      // Honeypot preenchido = bot, encerra silenciosamente.
      if (data.botcheck) {
        return
      }

      if (!hCaptchaToken) {
        setState({
          status: 'error',
          message: 'Confirme que você não é um robô antes de enviar.',
        })
        return
      }

      setState({ status: 'loading', message: '' })

      const formData = new FormData()

      Object.entries(data).forEach(([key, value]) => {
        if (value === undefined || value === null || value === '' || key === 'botcheck') {
          return
        }
        if (typeof value === 'object') {
          formData.append(key, JSON.stringify(value))
        } else {
          formData.append(key, String(value))
        }
      })

      formData.append('access_key', siteConfig.integracoes.web3forms.accessKey)
      formData.append('from_name', siteConfig.nome)
      formData.append('h-captcha-response', hCaptchaToken)
      if (opts.subject) {
        formData.append('subject', opts.subject)
      }

      try {
        const response = await fetch(siteConfig.integracoes.web3forms.endpoint, {
          method: 'POST',
          body: formData,
        })

        const responseData = await response.json()

        if (!responseData.success) {
          throw new Error(responseData.message || opts.errorMessage)
        }

        setState({ status: 'success', message: opts.successMessage })
        setHCaptchaToken('')
        opts.onSuccess?.()
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : opts.errorMessage
        setState({ status: 'error', message: errorMsg })
        opts.onError?.(error instanceof Error ? error : new Error(errorMsg))
      } finally {
        if (opts.clearMessageAfter > 0) {
          setTimeout(clearMessage, opts.clearMessageAfter)
        }
      }
    },
    [hCaptchaToken, opts, clearMessage]
  )

  return {
    state,
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
    submit,
    clearMessage,
    setHCaptchaToken,
    hCaptchaSiteKey: siteConfig.integracoes.hcaptcha.siteKey,
  }
}

export default useWeb3FormsSubmit
