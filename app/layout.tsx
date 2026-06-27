import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
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
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
