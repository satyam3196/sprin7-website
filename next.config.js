/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '/sprin7-website', // Your repository name
  assetPrefix: '/sprin7-website/', // Required for loading assets from public folder
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
}

module.exports = nextConfig 