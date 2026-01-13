import * as React from 'react';
import { Metadata } from 'next';
import {
  Container,
  Typography,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import MainLayout from '../components/layout/MainLayout';
import PageHero from '../components/common/PageHero';
import Section from '../components/common/Section';
import siteConfig, { gerarLinkWhatsApp } from '@/app/data/site.config';
import TransparenciaClient from './TransparenciaClient';

export const metadata: Metadata = {
  title: 'Transparência | Instituto Futuro de Excelência',
  description:
    'Portal de transparência do IFE. Acesse informações institucionais, prestação de contas, documentos oficiais, convênios e demonstrativos financeiros.',
  keywords: [
    'transparência',
    'prestação de contas',
    'documentos',
    'convênios',
    'CNPJ',
    'dados institucionais',
    'IFE',
    'curitiba',
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/transparencia`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${siteConfig.seo.urlSite}/transparencia`,
    siteName: siteConfig.sigla,
    title: 'Portal de Transparência - Instituto Futuro de Excelência',
    description:
      'Acesse informações institucionais, prestação de contas e documentos oficiais do IFE.',
    images: [
      {
        url: `${siteConfig.seo.urlSite}/images/emprego.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Instituto Futuro de Excelência (IFE) - Transparência',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portal de Transparência - IFE',
    description: 'Acesse informações institucionais e prestação de contas do IFE.',
    images: [`${siteConfig.seo.urlSite}/images/emprego.jpeg`],
  },
};

export default function TransparenciaPage() {
  return (
    <MainLayout>
      <PageHero
        title="Transparência"
        subtitle="Compromisso com a transparência e prestação de contas à sociedade"
        imageSrc="/images/emprego.jpeg"
      />

      {/* Documentos - Componente Client com Tabs por Ano */}
      <TransparenciaClient />

      {/* Informações Institucionais */}
      <Section py={8}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Informações Institucionais
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Razão Social
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {siteConfig.institucional.razaoSocial}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  CNPJ
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {siteConfig.institucional.cnpj}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Data de Fundação
                </Typography>
                <Typography variant="body1">
                  {new Date(siteConfig.institucional.dataFundacao).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Endereço
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {siteConfig.endereco.rua}, {siteConfig.endereco.numero}
                  {siteConfig.endereco.complemento && ` - ${siteConfig.endereco.complemento}`}
                  <br />
                  {siteConfig.endereco.bairro} - {siteConfig.endereco.cidade}/{siteConfig.endereco.estado}
                  <br />
                  CEP: {siteConfig.endereco.cep}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Contato
                </Typography>
                <Typography variant="body1">
                  Email: {siteConfig.contato.email}
                  <br />
                  Telefone: {siteConfig.contato.telefone}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section bgcolor="background.default" py={8}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Dúvidas sobre nossa transparência?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Entre em contato conosco para solicitar informações adicionais ou esclarecimentos sobre nossa atuação institucional.
            </Typography>
            <MuiLink
              href={gerarLinkWhatsApp('Olá! Gostaria de mais informações sobre a transparência do IFE.')}
              underline="none"
              sx={{
                display: 'inline-block',
                px: 4,
                py: 1.5,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 1,
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Entrar em Contato
            </MuiLink>
          </Paper>
        </Container>
      </Section>
    </MainLayout>
  );
}
