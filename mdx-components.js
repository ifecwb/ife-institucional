import { useMDXComponents as getThemeComponents } from 'nextra-theme-blog'
import BlogPostWrapper from './app/posts/components/BlogPostWrapper'
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    wrapper: BlogPostWrapper,
    ...components
  }
}