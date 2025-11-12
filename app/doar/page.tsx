'use client';

import MainLayout from '../components/layout/MainLayout';
import PageHero from '../components/common/PageHero';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import {
  Favorite,
  Visibility,
  Receipt,
  WorkspacePremium,
  ContentCopy,
  Pix,
} from '@mui/icons-material';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import FAQAccordion from '../components/common/FAQAccordion';
import { motion } from 'framer-motion';
import { donationBenefits, donationSteps, donationFAQ } from '../data/donation';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { siteConfig, gerarLinkWhatsApp } from '@/config/site.config';

const iconMap: Record<string, any> = {
  favorite: Favorite,
  visibility: Visibility,
  receipt: Receipt,
  workspace_premium: WorkspacePremium,
};

export default function DoarPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Usa dados bancários da configuração centralizada
  const pixKey = siteConfig.dadosBancarios.pix.chave;
  const bankData = siteConfig.dadosBancarios.contaCorrente;
  
  // Mensagem para WhatsApp
  const mensagemComprovante = siteConfig.whatsappTemplates.doacao({
    nome: 'Doador',
    tipo: 'Comprovante de doação'
  });
  const linkWhatsApp = gerarLinkWhatsApp(mensagemComprovante);

  return (
    <MainLayout>
      <PageHero
        title="Faça sua Doação"
        subtitle="Transforme vidas com sua generosidade"
        imageSrc="https://picsum.photos/1920/600?random=23"
      />

      {/* Introdução */}
      <Section py={10}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 3,
              color: 'primary.main',
            }}
          >
            Sua Doação Faz a Diferença
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Cada doação, independente do valor, permite que continuemos oferecendo educação,
            esporte e cultura de qualidade para crianças e jovens. Com sua ajuda, mantemos
            oficinas gratuitas, compramos materiais e equipamentos, e transformamos vidas
            através da oportunidade.
          </Typography>
        </Container>
      </Section>

      {/* Benefícios de Doar */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Por Que Doar para o IFE?
          </PageTitle>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {donationBenefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: donationBenefits.indexOf(benefit) * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 2 }}>
                    <CardContent>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          bgcolor: 'success.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 32, color: 'white' }} />
                      </Box>

                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                        {benefit.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Section>

      {/* Como Doar */}
      <Section py={10}>
        <Container maxWidth="lg">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Como Fazer Sua Doação
          </PageTitle>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
              mb: 8,
            }}
          >
            {donationSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: donationSteps.indexOf(step) * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'success.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    {step.number}
                  </Box>

                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                    {step.title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {step.description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Dados Bancários e PIX */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {/* PIX */}
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Pix sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Doar via PIX
              </Typography>

              <Box sx={{ mb: 3 }}>
                <QRCodeSVG value={pixKey} size={200} />
              </Box>

              <Typography variant="body2" color="text.secondary" gutterBottom>
                Chave PIX ({siteConfig.dadosBancarios.pix.tipo})
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontFamily: 'monospace' }}>
                  {pixKey}
                </Typography>
                <Button
                  size="small"
                  startIcon={<ContentCopy />}
                  onClick={() => handleCopy(pixKey, 'pix')}
                >
                  {copiedField === 'pix' ? 'Copiado!' : 'Copiar'}
                </Button>
              </Box>

              <Typography variant="body2" color="text.secondary">
                {siteConfig.dadosBancarios.pix.beneficiario}
              </Typography>
            </Paper>

            {/* Transferência Bancária */}
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Transferência Bancária
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Banco
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {bankData.banco} - {bankData.codigoBanco}
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Agência
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {bankData.agencia}
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {bankData.tipoConta}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {bankData.conta}
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    CNPJ
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {bankData.cnpj}
                    </Typography>
                    <Button
                      size="small"
                      startIcon={<ContentCopy />}
                      onClick={() => handleCopy(bankData.cnpj, 'cnpj')}
                    >
                      {copiedField === 'cnpj' ? 'Copiado!' : 'Copiar'}
                    </Button>
                  </Box>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Favorecido
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {bankData.titular}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Após realizar sua doação, envie o comprovante para:
            </Typography>
            <Button
              variant="contained"
              size="large"
              href={linkWhatsApp}
              target="_blank"
              sx={{ mt: 2 }}
            >
              Enviar Comprovante via WhatsApp
            </Button>
          </Box>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bgcolor="grey.50" py={10}>
        <Container maxWidth="md">
          <PageTitle variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            Perguntas Frequentes
          </PageTitle>

          <FAQAccordion items={donationFAQ} />

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Tem mais dúvidas?
            </Typography>
            <Button
              component={Link}
              href="/faq"
              variant="outlined"
              color="primary"
              size="large"
            >
              Ver todas as perguntas frequentes
            </Button>
          </Box>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section bgcolor="success.main" py={8} sx={{ color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Juntos Somos Mais Fortes
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
            Cada doação conta. Seja você também um transformador de vidas!
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            sx={{
              bgcolor: 'white',
              color: 'success.main',
              '&:hover': { bgcolor: 'grey.100' },
            }}
          >
            Fazer Doação Agora
          </Button>
        </Container>
      </Section>
    </MainLayout>
  );
}

