'use client'

import { Box, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material'
import {
  AssignmentTurnedIn,
  CalendarMonth,
  Groups,
  VolunteerActivism,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

import MainLayout from '@/app/components/layout/MainLayout'
import PageHero from '@/app/components/common/PageHero'
import PageTitle from '@/app/components/common/PageTitle'
import Section from '@/app/components/common/Section'
import FAQAccordion from '@/app/components/common/FAQAccordion'
import CTAButton from '@/app/components/common/CTAButton'
import SimuladorIR from './SimuladorIR'
import TutorialSteps from './TutorialSteps'
import ImpostoRendaForm from '@/app/components/forms/ImpostoRendaForm'
import ImpostoRendaWhatsAppForm from '@/app/components/forms/ImpostoRendaWhatsAppForm'
import ImpostoRendaHybridForm from '@/app/components/forms/ImpostoRendaHybridForm'
import { siteConfig } from '@/app/data/site.config'
import {
  destinationRoutes,
  impactExamples,
  impostoRendaConfig,
  impostoRendaFAQ,
  irHighlights,
  tutorialSteps,
} from '@/app/data/imposto-de-renda'

interface ImpostoRendaPageProps {
  /** Define para onde o formulário de contato envia os dados. */
  readonly formVariant: 'web3forms' | 'whatsapp' | 'hibrido'
}

const gridSx = {
  display: 'grid',
  gap: 3,
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
}

const formSubtitles: Record<ImpostoRendaPageProps['formVariant'], string> = {
  web3forms:
    'Preencha os dados e a nossa equipe entra em contato para acompanhar você em cada passo.',
  whatsapp: 'Preencha os dados e continue a conversa com a nossa equipe direto no WhatsApp.',
  hibrido:
    'Preencha os dados para a nossa equipe acompanhar você e, se preferir, continue a conversa na hora pelo WhatsApp.',
}

function FormularioDaVariante({
  variant,
}: Readonly<{ variant: ImpostoRendaPageProps['formVariant'] }>) {
  if (variant === 'whatsapp') return <ImpostoRendaWhatsAppForm />
  if (variant === 'hibrido') return <ImpostoRendaHybridForm />
  return <ImpostoRendaForm />
}

export default function ImpostoRendaPage({ formVariant }: Readonly<ImpostoRendaPageProps>) {
  return (
    <MainLayout>
      <PageHero
        title="Destine seu Imposto de Renda"
        subtitle="Transforme parte do imposto que você já paga em oportunidade para crianças e adolescentes de Curitiba"
        imageSrc="/images/turma.jpeg"
      />

      {/* Introdução */}
      <Section py={10}>
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center">
            Não é uma despesa a mais. É uma escolha.
          </PageTitle>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 5 }}>
            A legislação brasileira permite que você direcione uma parte do imposto que já seria
            pago à Receita Federal para fundos que financiam projetos sociais. Em vez de o valor ir
            para o caixa geral da União, ele fica em Curitiba, apoiando as oficinas de esporte,
            cultura e educação do {siteConfig.nome}.
          </Typography>

          <Box sx={gridSx}>
            {irHighlights.map((item, index) => (
              <Box
                key={item.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="h3" color="primary.main" sx={{ fontWeight: 700 }}>
                      {item.value}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Section>

      {/* Simulador */}
      <Section bgcolor="grey.50" py={10} id="simulador">
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center">
            Quanto eu posso destinar?
          </PageTitle>
          <SimuladorIR />
        </Container>
      </Section>

      {/* Formas de destinar */}
      <Section py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center">
            Escolha o caminho da sua destinação
          </PageTitle>

          <Box sx={gridSx}>
            {destinationRoutes.map((rota, index) => (
              <Box
                key={rota.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderColor: rota.highlight ? 'primary.main' : undefined,
                    borderWidth: rota.highlight ? 2 : undefined,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {rota.title}
                      </Typography>
                      {rota.highlight && (
                        <Chip label="Mais simples" color="primary" size="small" />
                      )}
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {rota.description}
                    </Typography>

                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <Groups fontSize="small" color="primary" />
                        <Typography variant="body2">{rota.who}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <VolunteerActivism fontSize="small" color="primary" />
                        <Typography variant="body2">{rota.limit}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <CalendarMonth fontSize="small" color="primary" />
                        <Typography variant="body2">{rota.deadline}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Section>

      {/* Passo a passo */}
      <Section bgcolor="grey.50" py={10} id="passo-a-passo">
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center">
            Passo a passo no programa da Receita
          </PageTitle>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: 720, mx: 'auto' }}
          >
            São cinco passos dentro do próprio programa do IRPF. Leva menos de dez minutos e não
            exige nenhum pagamento além do imposto que você já deve.
          </Typography>

          <TutorialSteps steps={tutorialSteps} />

          <Card sx={{ mt: 5, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <AssignmentTurnedIn />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Por que o comprovante é indispensável
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.95 }}>
                    A destinação é feita ao {impostoRendaConfig.fundo.nome}, e não diretamente ao
                    IFE. Ao enviar o DARF, o comprovante de pagamento e a sua autorização para{' '}
                    {impostoRendaConfig.emailComprovante}, indicamos ao{' '}
                    {impostoRendaConfig.fundo.conselho} que o recurso deve apoiar os projetos do
                    Instituto.
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, mt: 1.5 }}>
                    Na autorização, informe o {siteConfig.nome}, CNPJ {impostoRendaConfig.cnpj} —{' '}
                    {impostoRendaConfig.fundo.inscricaoIFE}.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Impacto */}
      <Section py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center">
            O que a sua destinação constrói
          </PageTitle>

          <Box sx={gridSx}>
            {impactExamples.map((item, index) => (
              <Box
                key={item.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 700, mb: 1 }}>
                      {item.valor}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.descricao}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          <Stack alignItems="center" sx={{ mt: 5 }}>
            <CTAButton href="/transparencia" variant="outlined">
              Ver prestação de contas
            </CTAButton>
          </Stack>
        </Container>
      </Section>

      {/* Formulário */}
      <Section bgcolor="grey.50" py={10} id="quero-destinar">
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center">
            Quer ajuda para destinar?
          </PageTitle>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 5 }}
          >
            {formSubtitles[formVariant]}
          </Typography>

          <Card>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <FormularioDaVariante variant={formVariant} />
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* FAQ */}
      <Section py={10} id="faq">
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center">
            Perguntas frequentes
          </PageTitle>
          <FAQAccordion items={impostoRendaFAQ} />
        </Container>
      </Section>
    </MainLayout>
  )
}
