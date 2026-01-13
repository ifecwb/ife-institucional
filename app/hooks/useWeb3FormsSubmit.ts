'use client'

import { useState, useCallback } from 'react'
import siteConfig from '@/app/data/site.config'

export interface Web3FormsState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export interface UseWeb3FormsSubmitOptions {
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

const defaultOptions: UseWeb3FormsSubmitOptions = {
  clearMessageAfter: 5000,
  successMessage: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
  errorMessage: 'Erro ao enviar formulário. Por favor, tente novamente.',
}

/**
 * Hook para envio de formulários via Web3Forms
 * Centraliza a lógica de envio, estados e mensagens
 * 
 * @example
 * ```tsx
 * const { state, submit, clearMessage, setHCaptchaToken } = useWeb3FormsSubmit({
 *   onSuccess: () => reset(),
 * })
 * 
 * // No form
 * <form onSubmit={handleSubmit(submit)}>
 *   <HCaptcha onVerify={setHCaptchaToken} sitekey={siteConfig.integracoes.hcaptcha.siteKey} />
 * </form>
 * ```
 */
export function useWeb3FormsSubmit(options: UseWeb3FormsSubmitOptions = {}) {
  const opts = { ...defaultOptions, ...options }
  
  const [state, setState] = useState<Web3FormsState>({
    status: 'idle',
    message: '',
  })
  
  const [hCaptchaToken, setHCaptchaToken] = useState<string>('')

  const clearMessage = useCallback(() => {
    setState(prev => ({ ...prev, message: '' }))
  }, [])

  const submit = useCallback(async (data: Record<string, unknown>) => {
    setState({ status: 'loading', message: 'Enviando...' })

    const formData = new FormData()
    
    // Adicionar todos os campos do formulário
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return
      }
      if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value))
      } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        formData.append(key, String(value))
      }
    })
    
    // Adicionar chave de acesso e token do hCaptcha
    formData.append('access_key', siteConfig.integracoes.web3forms.accessKey)
    if (hCaptchaToken) {
      formData.append('h-captcha-response', hCaptchaToken)
    }

    try {
      const response = await fetch(siteConfig.integracoes.web3forms.endpoint, {
        method: 'POST',
        body: formData,
      })

      const responseData = await response.json()

      if (responseData.success) {
        setState({ status: 'success', message: opts.successMessage! })
        opts.onSuccess?.()
        
        if (opts.clearMessageAfter && opts.clearMessageAfter > 0) {
          setTimeout(clearMessage, opts.clearMessageAfter)
        }
      } else {
        throw new Error(responseData.message || opts.errorMessage)
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : opts.errorMessage!
      setState({ status: 'error', message: errorMsg })
      opts.onError?.(error instanceof Error ? error : new Error(errorMsg))
      
      if (opts.clearMessageAfter && opts.clearMessageAfter > 0) {
        setTimeout(clearMessage, opts.clearMessageAfter)
      }
      
      console.error('Erro ao enviar formulário:', error)
    }
  }, [hCaptchaToken, opts, clearMessage])

  return {
    /** Estado atual do envio */
    state,
    /** Indica se está carregando */
    isLoading: state.status === 'loading',
    /** Indica se houve sucesso */
    isSuccess: state.status === 'success',
    /** Indica se houve erro */
    isError: state.status === 'error',
    /** Função para enviar o formulário */
    submit,
    /** Função para limpar a mensagem */
    clearMessage,
    /** Função para setar o token do hCaptcha (passar no onVerify) */
    setHCaptchaToken,
    /** Sitekey do hCaptcha (da config centralizada) */
    hCaptchaSiteKey: siteConfig.integracoes.hcaptcha.siteKey,
  }
}

export default useWeb3FormsSubmit
