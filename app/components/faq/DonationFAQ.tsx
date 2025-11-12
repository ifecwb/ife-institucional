'use client'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Link,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { siteConfig } from '@/config/site.config'

export default function DonationFAQ() {
  const faqs = [
    {
      question: 'Como posso fazer uma doação?',
      answer:
        'Você pode fazer doações via PIX, transferência bancária, Mercado Pago ou PayPal. Todas as informações estão disponíveis na nossa página de doações. Também aceitamos doações de itens como alimentos, roupas, materiais escolares e livros.',
    },
    {
      question: 'As doações têm dedução no Imposto de Renda?',
      answer: `Sim! O IFE possui título de Utilidade Pública Federal desde ${siteConfig.institucional.utilidadePublica.federal.data}. Doações de pessoas físicas e jurídicas podem ser deduzidas do Imposto de Renda. Entre em contato conosco para receber o recibo de doação.`,
    },
    {
      question: 'Posso fazer doações mensais recorrentes?',
      answer:
        'Sim! Doações recorrentes são fundamentais para nosso planejamento. Você pode configurar débito automático, agendar transferências bancárias mensais ou usar plataformas de doação recorrente. Entre em contato para mais informações.',
    },
    {
      question: 'Qual o valor mínimo para doar?',
      answer:
        'Não há valor mínimo! Toda contribuição é bem-vinda e faz diferença. Mesmo valores pequenos, quando somados, nos ajudam a manter e expandir nossos projetos. O importante é a vontade de contribuir.',
    },
    {
      question: 'Como sei que minha doação chegou?',
      answer:
        'Você receberá uma confirmação por e-mail ou WhatsApp assim que identificarmos sua doação. Se preferir, pode nos enviar o comprovante através dos nossos canais de contato para confirmar mais rapidamente.',
    },
    {
      question: 'Posso direcionar minha doação para um projeto específico?',
      answer:
        'Sim! Ao fazer sua doação, você pode especificar se deseja direcioná-la para um projeto específico (educação, saúde, esporte, etc.) ou deixar que utilizemos onde houver maior necessidade no momento.',
    },
    {
      question: 'Que tipos de doações de itens vocês aceitam?',
      answer:
        'Aceitamos: alimentos não perecíveis, produtos de higiene e limpeza, roupas em bom estado, calçados, materiais escolares, livros, brinquedos, móveis e equipamentos. Entre em contato antes para verificar nossas necessidades atuais e horários de recebimento.',
    },
    {
      question: 'Como faço para doar itens usados?',
      answer:
        'Entre em contato conosco pelo WhatsApp ou e-mail para agendar a entrega. Pedimos que os itens estejam limpos e em bom estado de conservação. Podemos buscar doações grandes mediante disponibilidade.',
    },
    {
      question: 'Empresas podem fazer doações?',
      answer:
        'Sim! Oferecemos diferentes formas de parceria com empresas: doações financeiras, doações de produtos/serviços, voluntariado corporativo, patrocínio de eventos e projetos. Temos benefícios fiscais e de marketing social. Entre em contato para conhecer as oportunidades.',
    },
    {
      question: 'Posso fazer uma doação em memória de alguém?',
      answer:
        'Sim, é uma forma muito bonita de homenagear alguém especial. Podemos emitir um certificado especial e, se desejar, comunicar a família sobre a doação feita em memória/homenagem.',
    },
    {
      question: 'Como as doações são utilizadas?',
      answer:
        'Todas as doações são usadas diretamente em nossos projetos: alimentação, material escolar, atividades educacionais, culturais e esportivas, manutenção da estrutura física e equipamentos. Publicamos relatórios anuais de transparência com prestação de contas.',
    },
    {
      question: 'Vocês emitem recibo de doação?',
      answer:
        'Sim! Emitimos recibo oficial para todas as doações financeiras, necessário para dedução no Imposto de Renda. Para doações de itens, também podemos emitir declaração de recebimento.',
    },
    {
      question: 'Posso visitar a instituição antes de doar?',
      answer:
        'Sim! Ficamos felizes em receber visitantes. Agende sua visita pelos nossos canais de contato. Você poderá conhecer nossa estrutura, projetos e as crianças/adolescentes que atendemos.',
    },
    {
      question: 'Minha doação é segura?',
      answer:
        'Sim! Todas as nossas contas bancárias são oficiais da instituição. Sempre confira nossos dados oficiais no site ou entre em contato diretamente conosco antes de fazer transferências. Nunca solicitamos depósitos em contas pessoais.',
    },
  ]

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          mb: 3,
        }}
      >
        Doações
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 1,
            '&:before': {
              display: 'none',
            },
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'divider',
            '&:first-of-type': {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
            '&:last-of-type': {
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`donation-faq-${index}-content`}
            id={`donation-faq-${index}-header`}
            sx={{
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <Typography variant="body1" fontWeight={500}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
