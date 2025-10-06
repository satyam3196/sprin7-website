import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayoutWrapper from './components/ClientLayoutWrapper'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Powered Swift, Safe, and Sustainable Services',
  description: 'Connecting people in getting swift, safe, sustainable services to have an easy sustainable lifestyle and boost the economy.',
  keywords: 'sprin7, sustainable delivery, eco-friendly delivery, carbon neutral delivery, green logistics, sustainable marketplace, AI delivery service, zero emission delivery',
  authors: [{ name: 'Newmint Technologies Ltd' }],
  openGraph: {
    title: 'AI-Powered Swift, Safe, and Sustainable Services',
    description: 'Connecting people in getting swift, safe, sustainable services to have an easy sustainable lifestyle and boost the economy.',
    url: 'https://sprin7.com',
    siteName: 'Sprin7',
    images: [
      {
        url: 'https://sprin7.com/sprin7_svg.jpg',
        width: 1200,
        height: 630,
        alt: 'Sprin7 Logo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Swift, Safe, and Sustainable Services',
    description: 'Connecting people in getting swift, safe, sustainable services to have an easy sustainable lifestyle and boost the economy.',
    images: ['https://sprin7.com/sprin7_svg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sprin7_svg.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/sprin7_svg.jpg" />
        <meta name="theme-color" content="#0D9488" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
} 