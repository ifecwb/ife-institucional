import * as React from 'react';
import { Metadata } from 'next';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VerifiedIcon from '@mui/icons-material/Verified';
import MainLayout from '../components/layout/MainLayout';
import PageHero from '../components/common/PageHero';
import Section from '../components/common/Section';
import siteConfig, { gerarLinkWhatsApp } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Transparência - IFE',
  description: 'Portal de transparência do Instituto Futuro de Excelência. Acesse informações institucionais, prestação de contas e documentos oficiais.',
};

export default function TransparenciaPage() {
  return (
    <MainLayout>
      <PageHero
        title="Transparência"
        subtitle="Compromisso com a transparência e prestação de contas à sociedade"
        imageSrc="/images/emprego.jpeg"
      />

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

      {/* Reconhecimentos e Certificações */}
      <Section bgcolor="background.default" py={8}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Reconhecimentos Oficiais
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {siteConfig.institucional.reconhecimentos.comtiba.nome.split(' - ')[0]}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {siteConfig.institucional.reconhecimentos.comtiba.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {siteConfig.institucional.reconhecimentos.cme.nome.split(' - ')[0]}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {siteConfig.institucional.reconhecimentos.cme.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GavelIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {siteConfig.institucional.reconhecimentos.lei13019.nome}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {siteConfig.institucional.reconhecimentos.lei13019.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Parcerias Governamentais */}
      <Section py={8}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Parcerias Governamentais Ativas
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Termos de fomento vigentes com poder público municipal
          </Typography>

          <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary.main" sx={{ fontWeight: 700 }}>
                    {siteConfig.institucional.parcerias.termosAtivos}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Termos de Fomento Ativos
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary.main" sx={{ fontWeight: 700 }}>
                    R$ {siteConfig.institucional.parcerias.recursosCaptados.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Recursos Captados em 2025
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary.main" sx={{ fontWeight: 700 }}>
                    100%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Conformidade nas Prestações
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary.main" sx={{ fontWeight: 700 }}>
                    2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Órgãos Parceiros (FMCA/PMC)
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Convênios Vigentes
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {siteConfig.institucional.parcerias.convenios.map((convenio, index) => (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
                  <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Termo de Fomento {convenio.numero}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Concedente: {convenio.concedente} | Vigência: até {convenio.vigenciaAte} | Valor: R$ {convenio.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section>

      {/* Documentos e Relatórios */}
      <Section bgcolor="background.default" py={8}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Documentos e Relatórios
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DescriptionIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Estatuto Social
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Estatuto atualizado e vigente da instituição
                  </Typography>
                  <MuiLink href="#" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    Baixar documento →
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AssessmentIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Relatório de Atividades
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Relatório anual de atividades e impacto social
                  </Typography>
                  <MuiLink href="#" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    Baixar documento →
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Prestação de Contas
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Demonstrativos financeiros e prestação de contas
                  </Typography>
                  <MuiLink href="#" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    Baixar documento →
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GavelIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Ata de Assembleia
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Atas de assembleias gerais e decisões institucionais
                  </Typography>
                  <MuiLink href="#" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    Baixar documento →
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section py={8}>
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
              href={gerarLinkWhatsApp(siteConfig.contato.telefoneWhatsApp)}
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
