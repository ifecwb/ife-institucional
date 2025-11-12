const config = {
  footer: (
    <footer style={{ 
      marginTop: '4rem', 
      padding: '2rem 0', 
      borderTop: '1px solid #eaeaea', 
      textAlign: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <a 
          href="/" 
          style={{ 
            color: '#467FF7', 
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 600 
          }}
        >
          ← Voltar ao Site Principal
        </a>
      </div>
      <small style={{ color: '#666' }}>
        © {new Date().getFullYear()} Instituto Futuro de Excelência. Todos os direitos reservados.
      </small>
    </footer>
  ),
  head: ({ title, meta }: any) => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={meta.description || 'Blog do IFE - Notícias, projetos e histórias de transformação'} />
      <meta property="og:title" content={title ? `${title} | IFE Blog` : 'IFE Blog'} />
      <meta property="og:description" content={meta.description || 'Blog do IFE - Notícias, projetos e histórias de transformação'} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title ? `${title} | IFE Blog` : 'IFE - Blog de Notícias'}</title>
    </>
  ),
  readMore: 'Ler mais →',
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: '/',
      name: '🏠 Voltar ao Site',
    },
  ],
};

export default config;
