import type { Metadata } from 'next'
import ImpostoRendaPage from '@/app/components/imposto-de-renda/ImpostoRendaPage'

// Versão de teste da página de IR com formulário por e-mail + continuidade no WhatsApp.
export const metadata: Metadata = {
  title: 'Destine seu Imposto de Renda (híbrido) | Instituto Futuro de Excelência (IFE)',
  description:
    'Versão da página de destinação de Imposto de Renda com registro por e-mail e atendimento pelo WhatsApp.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Page() {
  return <ImpostoRendaPage formVariant="hibrido" />
}
