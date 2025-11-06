# Tema e Estilos - IFE Institucional

## 📋 Estrutura de Arquivos

- **`app/theme.ts`**: Configuração do tema MUI com paleta de cores IFE
- **`app/ThemeRegistry.tsx`**: Wrapper para integração MUI + Next.js App Router
- **`app/layout.tsx`**: Layout raiz com ThemeRegistry e imports CSS
- **`app/globals.css`**: Estilos globais e customizações

## 🎨 Paleta de Cores

### Cores Principais
- **Primary**: `#467FF7` - Azul principal da marca
- **Secondary**: `#36A099` - Verde água
- **Info**: `#4696CB` - Azul claro
- **Warning**: `#8F539B` - Roxo
- **Success**: `#5A51A0` - Roxo escuro

### Uso das Cores
```tsx
// Em componentes MUI
<Button color="primary">Doar Agora</Button>
<Button color="secondary">Seja Voluntário</Button>

// Com sx prop
<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
  Conteúdo
</Box>
```

## 🔧 Componentes MUI Customizados

### Buttons
- Border radius: 12px
- Sem sombra por padrão
- Sombra suave no hover
- Text transform: none (mantém capitalização original)

### Cards
- Border radius: 16px
- Animação de hover (translateY + sombra)
- Sombra suave por padrão

### TextFields
- Variant padrão: outlined
- Border radius: 12px

### Accordions
- Border radius: 12px
- Sem linha divisória padrão
- Sombra suave

## 🎭 Tipografia

### Font Family
Sistema de fontes nativo com fallback:
- Geist Sans (variável)
- System fonts (-apple-system, etc.)

### Hierarquia
- **H1**: 3rem, weight 700
- **H2**: 2.5rem, weight 700
- **H3**: 2rem, weight 600
- **H4**: 1.75rem, weight 600
- **H5**: 1.5rem, weight 600
- **H6**: 1.25rem, weight 600

## ♿ Acessibilidade

### Foco Visível
```css
:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}
```

### Redução de Movimento
O tema respeita `prefers-reduced-motion` automaticamente:
- Animações desabilitadas
- Transições mínimas
- Scroll behavior: auto

## 🎠 Slick Carousel

### Estilos Customizados
- Dots com cor primária
- Setas com cor primária
- Posicionamento dos dots ajustado

### Uso Básico
```tsx
import Slider from 'react-slick';

<Slider
  dots={true}
  infinite={true}
  autoplay={true}
  speed={500}
  slidesToShow={1}
  slidesToScroll={1}
>
  {/* Slides aqui */}
</Slider>
```

## 📱 Responsividade

### Breakpoints MUI (padrão)
- **xs**: 0px
- **sm**: 600px
- **md**: 900px
- **lg**: 1200px
- **xl**: 1536px

### Container Responsivo
```tsx
import { Container } from '@mui/material';

<Container maxWidth="lg">
  {/* Conteúdo com largura máxima responsiva */}
</Container>
```

## 🚀 Próximos Passos

Agora que o tema está configurado, podemos:

1. ✅ Criar componentes reutilizáveis (Section, PageTitle, CTAButton)
2. ✅ Implementar Header e Footer
3. ✅ Desenvolver as páginas principais
4. ✅ Adicionar animações com Framer Motion
5. ✅ Integrar formulários com react-hook-form

---

**Fase Concluída**: Fase 1 - Setup estático & Tema ✅
