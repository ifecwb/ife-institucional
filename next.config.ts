import type { NextConfig } from "next";
import nextra from 'nextra'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

const withNextra = nextra({
  defaultShowCopyCode: true
})
 
export default withNextra(nextConfig)
