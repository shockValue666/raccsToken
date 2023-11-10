import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Head } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SolRaccs',
  description: 'SolRaccs is a memecoin on Solana!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
