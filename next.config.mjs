/** @type {import('next').NextConfig} */
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['trpc-remit-dj', 'shadcn-ui'],
  experimental: {
    forceSwcTransforms: true,
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }
    return config
  },
  ...(process.env.APPLICATION_MODE !== 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
}

export default nextConfig
