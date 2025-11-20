import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'
 
export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap('/posts'),
    route: '/posts'
  })
  return directories
    .filter(post => post.name !== 'index')
    .sort((a: any, b: any) => new Date(b.frontMatter?.date || 0).getTime() - new Date(a.frontMatter?.date || 0).getTime())
}
 
export async function getTags() {
  const posts = await getPosts()
  const tags = [...(new Set(posts.flatMap(post => post.frontMatter.tag)))]
  return tags
}