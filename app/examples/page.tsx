import MainLayout from '../components/layout/MainLayout';
import PageHero from '../components/common/PageHero';
import Section from '../components/common/Section';
import { Container, Box, Typography } from '@mui/material';
import ExampleCard from './ExampleCard';

export const metadata = {
  title: 'Exemplo SCSS - Instituto Futuro de Excelência',
  description: 'Página de exemplo demonstrando o uso de SCSS Modules no Next.js',
};

/**
 * Página de exemplo demonstrando o uso de SCSS no projeto
 * 
 * Esta página mostra:
 * - Como criar componentes com SCSS Modules
 * - Estrutura de pastas recomendada
 * - Uso de BEM naming convention
 * - Integração com Material-UI
 */
export default function ExamplesPage() {
  return (
    <MainLayout>
      <PageHero
        title="Exemplo de SCSS"
        subtitle="Demonstração de componentes usando SCSS Modules"
        imageSrc="/images/biblioteca.jpeg"
      />

      <Section py={10}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
            Componentes com SCSS Modules
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
              mb: 6,
            }}
          >
            <ExampleCard
              title="Variante Padrão"
              description="Card usando o estilo padrão com gradiente roxo."
              variant="default"
            />

            <ExampleCard
              title="Variante Dark"
              description="Card usando o tema escuro com gradiente cinza."
              variant="dark"
            />
          </Box>

          <Box sx={{ mb: 6 }}>
            <ExampleCard
              title="Variante Light"
              description="Card usando o tema claro com gradiente azul suave."
              variant="light"
              features={[
                'SCSS suporta nesting de seletores',
                'CSS Modules garantem escopo isolado',
                'Ideal para componentes complexos',
                'Compatível com Material-UI',
              ]}
            />
          </Box>

          {/* Documentação */}
          <Box
            sx={{
              bgcolor: 'grey.100',
              p: 4,
              borderRadius: 2,
              mt: 6,
            }}
          >
            <Typography variant="h5" gutterBottom>
              📚 Como usar SCSS no projeto
            </Typography>

            <Typography variant="body1" paragraph>
              <strong>1. Estrutura de arquivos:</strong>
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: 'grey.900',
                color: 'white',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                fontSize: '0.875rem',
                mb: 3,
              }}
            >
{`app/
  examples/
    ExampleCard.tsx           // Componente React
    styles/
      ExampleCard.module.scss // Estilos SCSS`}
            </Box>

            <Typography variant="body1" paragraph>
              <strong>2. Importar no componente:</strong>
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: 'grey.900',
                color: 'white',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                fontSize: '0.875rem',
                mb: 3,
              }}
            >
{`import styles from './styles/ExampleCard.module.scss';

// Usar as classes
<div className={styles['example-card']}>
  <h2 className={styles['example-card__title']}>
    Título
  </h2>
</div>`}
            </Box>

            <Typography variant="body1" paragraph>
              <strong>3. Benefícios do SCSS:</strong>
            </Typography>
            <ul>
              <li>
                <Typography variant="body2">
                  Nesting de seletores para melhor organização
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Variáveis, mixins e funções para reutilização
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  CSS Modules garantem escopo isolado (sem conflitos)
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Suporte nativo no Next.js (sem configuração extra)
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Section>
    </MainLayout>
  );
}
