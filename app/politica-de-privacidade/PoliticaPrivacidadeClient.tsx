'use client'

import { Box, Button, Container, Divider, Link as MuiLink, Stack, Typography } from '@mui/material'
import MainLayout from '@/app/components/layout/MainLayout'
import PageHero from '@/app/components/common/PageHero'
import Section from '@/app/components/common/Section'
import { abrirPreferenciasCookies } from '@/app/components/common/CookieConsent'
import { siteConfig, formatarCNPJ } from '@/app/data/site.config'

interface PolicySection {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

const { privacidade, contato, endereco, institucional, nome } = siteConfig

const enderecoCompleto = `${endereco.rua}, ${endereco.numero} - ${endereco.bairro}, ${endereco.cidade}/${endereco.estado}, CEP ${endereco.cep}`

const sections: PolicySection[] = [
  {
    id: 'controlador',
    title: '1. Quem é o controlador dos seus dados',
    paragraphs: [
      `O ${nome} (${institucional.razaoSocial}), CNPJ ${institucional.cnpj}, com sede em ${enderecoCompleto}, é o controlador dos dados pessoais tratados neste site, nos termos da Lei nº 13.709/2018 (LGPD).`,
      `Dúvidas, solicitações ou revogação de consentimento devem ser enviadas ao nosso encarregado pelo tratamento de dados, pelo e-mail ${privacidade.emailEncarregado}.`,
    ],
  },
  {
    id: 'dados',
    title: '2. Quais dados coletamos',
    paragraphs: [
      'Coletamos apenas o mínimo necessário para responder ao seu contato. Nenhum campo é obrigatório além do essencial, e não pedimos CPF, CNPJ, dados bancários ou qualquer dado sensível nos formulários do site.',
    ],
    bullets: [
      'Dados que você informa nos formulários: nome, e-mail, telefone e, quando você escolhe preencher, tipo de contribuinte, valor pretendido de destinação, como chegou até a página e a sua mensagem.',
      'Registro do consentimento: data, hora e versão desta política aceitas no momento do envio.',
      'Dados de navegação coletados pelo Google Analytics de forma agregada, como páginas visitadas, origem do acesso, tipo de dispositivo e cidade aproximada.',
    ],
  },
  {
    id: 'finalidade',
    title: '3. Para que usamos',
    bullets: [
      'Responder à sua solicitação e orientar você sobre doação, voluntariado, parcerias ou destinação de Imposto de Renda.',
      'Registrar destinações de Imposto de Renda junto ao conselho municipal, quando você nos envia o comprovante.',
      'Prestar contas aos órgãos de controle e financiadores, quando exigido por lei.',
      'Entender de forma agregada como o site é utilizado, para melhorá-lo.',
    ],
  },
  {
    id: 'base-legal',
    title: '4. Com que base legal',
    bullets: [
      'Consentimento (Art. 7º, I da LGPD) para os dados enviados por formulário. Você marca a autorização antes do envio e pode revogá-la a qualquer momento.',
      'Cumprimento de obrigação legal ou regulatória (Art. 7º, II) para comprovantes e prestação de contas.',
      'Legítimo interesse (Art. 7º, IX) para as estatísticas agregadas de navegação, sempre sem identificar você individualmente.',
    ],
  },
  {
    id: 'compartilhamento',
    title: '5. Com quem compartilhamos',
    paragraphs: [
      'Não vendemos, alugamos nem cedemos seus dados. O compartilhamento acontece apenas com os prestadores necessários para o site funcionar:',
    ],
    bullets: [
      'Web3Forms: recebe os dados do formulário e os entrega por e-mail à equipe do IFE.',
      'Meta (WhatsApp): quando você opta por continuar a conversa pelo WhatsApp, a mensagem é tratada conforme as políticas da plataforma.',
      'Google (Analytics): estatísticas agregadas de navegação.',
      'Conselho Municipal dos Direitos da Criança e do Adolescente: apenas os dados necessários para registrar uma destinação de Imposto de Renda que você tenha efetuado.',
    ],
  },
  {
    id: 'internacional',
    title: '6. Transferência internacional',
    paragraphs: [
      'Os prestadores acima podem processar dados em servidores fora do Brasil. Nesses casos, a transferência ocorre nos termos do Art. 33 da LGPD e limitada às finalidades descritas nesta política.',
    ],
  },
  {
    id: 'retencao',
    title: '7. Por quanto tempo guardamos',
    paragraphs: [
      `Os dados de contato enviados por formulário são mantidos por até ${privacidade.prazoRetencao} após o seu último contato, e então eliminados. Documentos ligados a destinações de Imposto de Renda e à prestação de contas são guardados pelo prazo exigido pela legislação aplicável.`,
    ],
  },
  {
    id: 'direitos',
    title: '8. Seus direitos',
    paragraphs: [
      `Você pode exercer, a qualquer momento e sem custo, os direitos previstos no Art. 18 da LGPD, escrevendo para ${privacidade.emailEncarregado}. Responderemos em até 15 dias.`,
    ],
    bullets: [
      'Confirmar se tratamos dados seus e acessar esses dados.',
      'Corrigir dados incompletos, inexatos ou desatualizados.',
      'Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.',
      'Solicitar a portabilidade dos dados a outro fornecedor.',
      'Revogar o consentimento e pedir a eliminação dos dados tratados com base nele.',
      'Ser informado sobre com quem compartilhamos seus dados.',
      'Peticionar perante a Autoridade Nacional de Proteção de Dados (ANPD).',
    ],
  },
  {
    id: 'cookies',
    title: '9. Cookies',
    paragraphs: [
      'Os cookies estritamente necessários ao funcionamento do site são sempre utilizados. Os cookies de estatística, do Google Analytics, só são ativados se você aceitar no aviso exibido no primeiro acesso: enquanto não houver aceite, nenhum script de medição é carregado.',
      'Você pode alterar ou revogar essa escolha a qualquer momento no botão abaixo ou no rodapé do site. Não usamos cookies de publicidade nem de rastreamento entre sites.',
    ],
  },
  {
    id: 'seguranca',
    title: '10. Segurança',
    paragraphs: [
      'Adotamos medidas técnicas e administrativas para proteger seus dados, incluindo transmissão criptografada (HTTPS), proteção contra envios automatizados nos formulários e acesso restrito às caixas de e-mail que recebem as solicitações.',
    ],
  },
  {
    id: 'alteracoes',
    title: '11. Alterações desta política',
    paragraphs: [
      `Esta política pode ser atualizada. A versão vigente é a de ${privacidade.versaoPolitica} e fica sempre publicada nesta página.`,
    ],
  },
]

export default function PoliticaPrivacidadeClient() {
  return (
    <MainLayout>
      <PageHero
        title="Política de Privacidade"
        subtitle="Como o IFE trata os seus dados pessoais"
        imageSrc="/images/biblioteca.jpeg"
        height={{ xs: '30vh', md: '35vh' }}
      />

      <Section py={8}>
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Versão de {privacidade.versaoPolitica}. Encarregado pelo tratamento de dados:{' '}
            <MuiLink href={`mailto:${privacidade.emailEncarregado}`}>
              {privacidade.emailEncarregado}
            </MuiLink>
            .
          </Typography>

          <Stack spacing={5}>
            {sections.map((section) => (
              <Box key={section.id} id={section.id} component="section">
                <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                  {section.title}
                </Typography>

                {section.paragraphs?.map((paragraph) => (
                  <Typography
                    key={paragraph.slice(0, 40)}
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {paragraph}
                  </Typography>
                ))}

                {section.bullets && (
                  <Box component="ul" sx={{ pl: 3, m: 0 }}>
                    {section.bullets.map((bullet) => (
                      <Typography
                        key={bullet.slice(0, 40)}
                        component="li"
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {bullet}
                      </Typography>
                    ))}
                  </Box>
                )}

                {section.id === 'cookies' && (
                  <Button variant="outlined" onClick={abrirPreferenciasCookies} sx={{ mt: 1 }}>
                    Gerenciar preferências de cookies
                  </Button>
                )}
              </Box>
            ))}
          </Stack>

          <Divider sx={{ my: 5 }} />

          <Typography variant="body2" color="text.secondary">
            {institucional.razaoSocial} — CNPJ {formatarCNPJ(institucional.cnpj)} —{' '}
            {enderecoCompleto} — {contato.email}
          </Typography>
        </Container>
      </Section>
    </MainLayout>
  )
}
