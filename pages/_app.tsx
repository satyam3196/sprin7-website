import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="icon" 
          href={`${basePath}/favicon.ico`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
} 