# Anexos dos Posts

Esta pasta armazena arquivos anexos para os posts do blog, como PDFs, documentos, planilhas, etc.

## Estrutura Recomendada

```
attachments/
  2025/
    11/
      relatorio-anual.pdf
      fotos-evento.zip
    12/
      balanco-final.pdf
  2024/
    ...
```

## Como Usar

1. **Salve o arquivo aqui**: Coloque seu PDF, DOCX, XLSX ou ZIP nesta pasta
2. **Use no post**: Referencie com o caminho `/posts/attachments/nome-do-arquivo.pdf`
3. **Exemplo**:
   ```mdx
   Baixe o [Relatório (PDF)](/posts/attachments/2025-relatorio.pdf)
   ```

## Boas Práticas

- ✅ Use nomes descritivos: `2025-11-relatorio-anual.pdf`
- ✅ Prefira lowercase e hífens
- ✅ Mantenha arquivos abaixo de 10MB
- ✅ Organize por ano/mês quando houver muitos arquivos
- ✅ Indique o formato no link: `(PDF)`, `(DOCX)`, `(ZIP)`

## Formatos Suportados

- 📄 PDFs
- 📊 Planilhas (XLSX, XLS, CSV)
- 📝 Documentos (DOCX, DOC)
- 🖼️ Imagens (JPG, PNG, SVG)
- 📦 Arquivos compactados (ZIP, RAR)
- 🎬 Vídeos (MP4, WEBM) - se não forem muito grandes

## Arquivos Grandes

Para arquivos maiores que 10MB, considere usar:
- Google Drive
- Dropbox
- YouTube (para vídeos)
- Flickr (para álbuns de fotos)

E então adicione o link externo no post.
