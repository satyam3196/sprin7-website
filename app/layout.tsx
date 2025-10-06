import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayoutWrapper from './components/ClientLayoutWrapper'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Powered Swift, Safe, and Sustainable Services',
  description: 'Connecting people in getting swift, safe, sustainable services to have an easy sustainable lifestyle and boost the economy.',
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
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
} 