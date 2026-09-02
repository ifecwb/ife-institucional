export interface NavigationItem {
  label: string
  href: string
  submenu?: {
    label: string
    href: string
  }[]
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Início', href: '/' },
  { 
    label: 'Quem Somos', 
    href: '/sobre',
    submenu: [
      { label: 'Sobre o IFE', href: '/sobre' },
      { label: 'Transparência', href: '/transparencia' },
    ]
  },
  { label: 'Projetos e Oficinas', href: '/projetos-e-cursos' },
  {
    label: 'Imposto de Renda',
    href: '/imposto-de-renda',
    submenu: [
      { label: 'Destinação (padrão)', href: '/imposto-de-renda' },
      { label: 'Versão híbrida', href: '/imposto-de-renda-hibrido' },
      { label: 'Versão WhatsApp', href: '/imposto-de-renda-whatsapp' },
    ],
  },
  { label: 'Seja Voluntário', href: '/seja-voluntario' },
  { label: 'Notícias', href: '/noticias' },
]

export const footerNavigation: NavigationItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Projetos e Oficinas', href: '/projetos-e-cursos' },
  { label: 'Seja Voluntário', href: '/seja-voluntario' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Doar', href: '/doar' },
  { label: 'Imposto de Renda', href: '/imposto-de-renda' },
  { label: 'Perguntas Frequentes', href: '/faq' },
  { label: 'Transparência', href: '/transparencia' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
]

export const ctaButton = {
  label: 'Doar',
  href: '/doar',
}
