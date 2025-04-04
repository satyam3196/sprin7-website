/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  // basePath: '/sprin7-website', // Removed for custom domain
  // assetPrefix: '/sprin7-website/', // Removed for custom domain
  images: {
    unoptimized: true, // Required for static export
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // This is important to handle GitHub Pages routing
  trailingSlash: true,
  reactStrictMode: true,
  // Updated for custom domain
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
}

module.exports = nextConfig 