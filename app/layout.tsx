import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import WhatsAppButton from "@/components/WhatsAppButton";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TNLV4Q4P');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* Google Tag Manager Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNLV4Q4P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
