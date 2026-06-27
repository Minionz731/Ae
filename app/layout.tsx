import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ae.creates — creative. design.',
  description:
    'Brand identities & graphic design from South Africa. Logos, branding packages, posters, and social media design.',
  keywords: ['graphic design', 'branding', 'logo design', 'South Africa', 'ae creates'],
  openGraph: {
    title: 'ae.creates — creative. design.',
    description: 'Brand identities & graphic design from South Africa.',
    url: 'https://aecreates.xyz',
    siteName: 'ae.creates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ae.creates — creative. design.',
    description: 'Brand identities & graphic design from South Africa.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
