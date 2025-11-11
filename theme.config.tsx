import { useRouter } from 'next/router';

const config = {
  footer: (
    <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
      <small>
        © {new Date().getFullYear()} Instituto Futuro de Excelência. Todos os direitos reservados.
      </small>
    </footer>
  ),
  head: ({ title, meta }: any) => {
    const { asPath } = useRouter();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={meta.description || 'Blog do IFE - Notícias, projetos e histórias de transformação'} />
        <meta property="og:title" content={title ? `${title} | IFE Blog` : 'IFE Blog'} />
        <meta property="og:description" content={meta.description || 'Blog do IFE - Notícias, projetos e histórias de transformação'} />
        <meta property="og:url" content={`https://ife.org.br${asPath}`} />
      </>
    );
  },
  readMore: 'Ler mais →',
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: '/',
      name: 'Voltar ao Site',
    },
  ],
};

export default config;
