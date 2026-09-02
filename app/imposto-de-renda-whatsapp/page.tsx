import type { Metadata } from 'next'
import ImpostoRendaPage from '@/app/components/imposto-de-renda/ImpostoRendaPage'

// Versão de teste da página de IR com o formulário enviando via WhatsApp.
export const metadata: Metadata = {
  title: 'Destine seu Imposto de Renda (WhatsApp) | Instituto Futuro de Excelência (IFE)',
  description:
    'Versão da página de destinação de Imposto de Renda com atendimento pelo WhatsApp.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Page() {
  return <ImpostoRendaPage formVariant="whatsapp" />
}
