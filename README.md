# Site Institucional — Instituto Futuro de Excelência (IFE)

Site do [Instituto Futuro de Excelência](https://ifecwb.org.br), organização sem fins lucrativos de Curitiba/PR que atua com esporte, cultura e educação para crianças e adolescentes.

**Produção:** https://ifecwb.org.br

## Stack

| Recurso | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| UI | Material UI 7 + Emotion |
| Animações | Framer Motion |
| Conteúdo | MDX via Nextra |
| Deploy | GitHub Pages |

O site é **100% estático**: não há back-end nem banco de dados. Essa é a restrição central do projeto e explica boa parte das decisões abaixo — qualquer funcionalidade que pareça exigir servidor precisa ser resolvida por serviço externo ou no cliente.

## Começando

Requer Node 24 (mesma versão usada no CI).

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build estático em `out/` + geração do sitemap |
| `npm run lint` | ESLint |

## Estrutura

```
app/
  components/
    common/      Componentes reutilizáveis (PageHero, Section, CookieConsent...)
    forms/       Formulários
    layout/      Header, Footer, MainLayout
    home/        Seções da home
  data/          Conteúdo e configuração (fonte da verdade do site)
  hooks/         useWeb3FormsSubmit
  <rota>/        page.tsx (metadata, server) + <Nome>Client.tsx (UI, client)
content/posts/   Notícias em MDX
public/          Imagens e documentos
```

### Padrão de página

Cada rota separa metadados de UI:

- `page.tsx` — server component, exporta `metadata` (SEO, Open Graph, Twitter)
- `<Nome>Client.tsx` — client component com `'use client'`, monta a UI dentro de `<MainLayout>`

## Configuração

[`app/data/site.config.ts`](app/data/site.config.ts) concentra contato, endereço, redes sociais, dados bancários, dados institucionais, estatísticas, integrações, privacidade e os templates de mensagem do WhatsApp. **Alterações de conteúdo institucional devem começar por aí**, não espalhadas pelos componentes.

Os demais arquivos em `app/data/` guardam o conteúdo de páginas específicas (projetos, voluntariado, doação, imposto de renda, transparência).

## Formulários

Como não há back-end, os formulários usam duas estratégias:

**Web3Forms** — envia os dados por e-mail para a equipe. Não há painel para acompanhar: as submissões chegam na caixa de entrada. Implementado em [`useWeb3FormsSubmit`](app/hooks/useWeb3FormsSubmit.ts), com anti-spam em duas camadas (honeypot `botcheck` + hCaptcha).

**WhatsApp** — monta um link `wa.me` com a mensagem pré-preenchida a partir dos templates em `siteConfig.whatsappTemplates`. Não guarda registro algum.

> **Pendência:** o hCaptcha precisa ser ativado no painel do Web3Forms para a access key configurada. Sem isso o token é enviado, mas não validado no servidor.

## Privacidade e LGPD

- **Consentimento**: [`ConsentimentoLGPD`](app/components/common/ConsentimentoLGPD.tsx) em todos os formulários. Nunca pré-marcado, bloqueia o envio e descreve a finalidade específica de cada formulário.
- **Prova do aceite**: cada envio leva data, hora e versão da política.
- **Cookies**: [`CookieConsent`](app/components/common/CookieConsent.tsx) só carrega o Google Analytics após o aceite. Antes disso, nenhum script de medição é executado.
- **Política**: [`/politica-de-privacidade`](app/politica-de-privacidade), com controlador, encarregado, bases legais, compartilhamento e os direitos do Art. 18.

Ao alterar o texto da política, atualize `siteConfig.privacidade.versaoPolitica`. Ao mudar as finalidades de cookies, incremente `siteConfig.privacidade.cookies.versao` — isso invalida os aceites anteriores e pede consentimento novamente.

## Página de Imposto de Renda

`/imposto-de-renda` explica como destinar parte do IRPF ao IFE via Fundo Municipal da Criança e do Adolescente de Curitiba, com simulador e tutorial passo a passo.

Há três variações no ar para teste; as duas alternativas são `noindex` e ficam fora do sitemap:

| Rota | Formulário |
|---|---|
| `/imposto-de-renda` | Web3Forms |
| `/imposto-de-renda-whatsapp` | WhatsApp |
| `/imposto-de-renda-hibrido` | Web3Forms + continuidade no WhatsApp |

As três compartilham [`ImpostoRendaPage`](app/components/imposto-de-renda/ImpostoRendaPage.tsx) e os mesmos campos; muda apenas o destino do envio. **Depois de escolher uma, remova as outras duas rotas.**

> **Pendência:** os screenshots do programa da Receita devem ser adicionados em `public/images/imposto-de-renda/passo-1.png` … `passo-5.png`. Enquanto não existirem, cada passo mostra um placeholder — o layout e o build não quebram.

## Notícias

Posts ficam em `content/posts/` como MDX, no padrão `AAAA-MM-DD-titulo.mdx`. Anexos vão em `public/posts/attachments/`.

## Deploy

Automático via GitHub Actions, com Pages configurado como **Source: GitHub Actions**:

| Branch | Workflow | Destino |
|---|---|---|
| `main` | `deploy-production.yml` | Produção (ifecwb.org.br) |
| `homolog` | `deploy-homolog.yml` | ⚠️ mesmo site da produção — ver abaixo |

O build gera `out/` e é publicado com `actions/deploy-pages`.

> **Atenção:** um repositório tem apenas **um** site do GitHub Pages e **um** custom domain. O `environment: homolog` no workflow é só um rótulo: o deploy vai para o mesmo site da produção e a sobrescreve. Por isso `homolog.ifecwb.org.br` não funciona — o DNS aponta para o GitHub Pages, mas o Pages não reconhece esse host (404 em HTTP, sem certificado em HTTPS). Homologação precisa de um repositório separado ou de outro host.

O domínio é definido no painel do GitHub Pages (Settings → Pages → Custom domain). O arquivo `CNAME` na raiz **não** é usado: o `output: 'export'` só copia `public/` para `out/`.
