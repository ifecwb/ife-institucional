import type { NextConfig } from "next";
import nextra from 'nextra'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
};



const withNextra = nextra({
  // ... other Nextra config options
})
 
export default withNextra(nextConfig)

// export default nextConfig;
