import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'PawCare Veterinary Clinic - Professional Pet Care',
  description: 'Professional veterinary care for your pets. Book appointments, explore our services, and meet our experienced team of veterinarians.',
  generator: 'Mindoxa',
  icons: {
    icon: [
      {
        url: '/iconn.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/iconn.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/iconn.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/iconn.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
