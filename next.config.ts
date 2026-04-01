import type { NextConfig } from 'next'

const config: NextConfig = {
  transpilePackages: ['animejs'],
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default config
