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
      <Head>
        {/* Add your favicon here */}
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
