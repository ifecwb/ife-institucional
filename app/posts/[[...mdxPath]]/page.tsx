import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
import MainLayout from '@/app/components/layout/MainLayout';

export async function generateStaticParams() {

    // Gerando no formato https://nextjs.org/docs/app/api-reference/functions/generate-static-params
    const mdxPaths = await generateStaticParamsFor('mdxPath')();

    const params = mdxPaths.map(paths => {
      return {
        mdxPath: [paths.mdxPath[1]],
        slug: [paths.mdxPath[1]]
      }  
    })
    return params
} 

export async function generateMetadata(props:any) {
    const params = await props.params
    params.mdxPath.unshift('posts')
    const { metadata } = await importPage(params.mdxPath) // 2º arg. é 'lang' (string), não objeto
    return metadata
}

// Optional but recommended so only these paths are valid (others = 404)
export const dynamicParams = false;

const Wrapper = getMDXComponents().wrapper

export default async function Page(props:any) {
    const params = await props.params
    params.mdxPath.unshift('posts')
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode
  } = await importPage(params.mdxPath)

  return (
    <MainLayout>
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    </MainLayout>
  )
}
