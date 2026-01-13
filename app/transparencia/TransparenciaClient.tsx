'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VerifiedIcon from '@mui/icons-material/Verified';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import Section from '../components/common/Section';
import {
  documentosInstitucionais,
  documentosAnuais,
  anosDisponiveis,
  type AnoDisponivel,
  type CategoriaDocumento,
  type Documento,
} from '../data/transparencia';

// Mapa de ícones por categoria
const iconMap: Record<CategoriaDocumento, React.ElementType> = {
  estatuto: DescriptionIcon,
  financeiro: AccountBalanceIcon,
  atas: GavelIcon,
  relatorios: AssessmentIcon,
  certidoes: VerifiedIcon,
  convenios: HandshakeIcon,
};

interface DocumentoCardProps {
  readonly documento: Documento;
}

function DocumentoCard({ documento }: DocumentoCardProps) {
  const IconComponent = iconMap[documento.categoria] || DescriptionIcon;

  return (
    <Card 
      elevation={0} 
      sx={{ 
        height: '100%', 
        border: '1px solid', 
        borderColor: 'divider',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: 2,
        },
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <IconComponent sx={{ fontSize: 32, color: 'primary.main', mr: 2, mt: 0.5 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {documento.titulo}
            </Typography>
            {documento.descricao && (
              <Typography variant="body2" color="text.secondary">
                {documento.descricao}
              </Typography>
            )}
          </Box>
        </Box>

        <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {documento.atualizadoEm && (
            <Typography variant="caption" color="text.secondary">
              Atualizado em {new Date(documento.atualizadoEm).toLocaleDateString('pt-BR')}
            </Typography>
          )}
          <Button
            component="a"
            href={documento.arquivo}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            startIcon={<PictureAsPdfIcon />}
            endIcon={<DownloadIcon />}
            sx={{ ml: 'auto' }}
          >
            Baixar PDF
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function TransparenciaClient() {
  const [anoSelecionado, setAnoSelecionado] = useState<AnoDisponivel>(anosDisponiveis[0]);

  const handleChangeAno = (_event: React.SyntheticEvent, novoAno: AnoDisponivel) => {
    setAnoSelecionado(novoAno);
  };

  const documentosDoAno = documentosAnuais[anoSelecionado] || [];

  return (
    <>
      {/* Documentos Institucionais */}
      <Section bgcolor="background.default" py={8}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Documentos Institucionais
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Documentos constitutivos e registros oficiais da instituição
          </Typography>

          <Grid container spacing={3}>
            {documentosInstitucionais.map((doc) => (
              <Grid key={doc.id} size={{ xs: 12, md: 6 }}>
                <DocumentoCard documento={doc} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Prestação de Contas por Ano */}
      <Section py={8}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Prestação de Contas
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Demonstrativos financeiros, relatórios de atividades e atas de assembleias
          </Typography>

          {/* Tabs de Anos */}
          <Paper elevation={0} sx={{ mb: 4, border: '1px solid', borderColor: 'divider' }}>
            <Tabs
              value={anoSelecionado}
              onChange={handleChangeAno}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '1rem',
                  minWidth: 100,
                },
              }}
            >
              {anosDisponiveis.map((ano) => (
                <Tab key={ano} label={ano.toString()} value={ano} />
              ))}
            </Tabs>
          </Paper>

          {/* Documentos do Ano Selecionado */}
          {documentosDoAno.length > 0 ? (
            <Grid container spacing={3}>
              {documentosDoAno.map((doc) => (
                <Grid key={doc.id} size={{ xs: 12, md: 6 }}>
                  <DocumentoCard documento={doc} />
                </Grid>
              ))}
            </Grid>
          ) : (
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
              <Typography variant="body1" color="text.secondary">
                Nenhum documento disponível para {anoSelecionado}.
              </Typography>
            </Paper>
          )}
        </Container>
      </Section>
    </>
  );
}
