import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Easy Pools & Spas | Best Swimming Pool Construction Company in Nigeria',
  description: 'Easy Pools & Spas designs and builds swimming pools, spas, fountains, waterfalls, and water features nationwide in Nigeria. 20+ years of precision craftsmanship.',
  keywords: ['swimming pool construction company in Nigeria', 'pool builders Nigeria', 'spa construction Nigeria', 'water features Nigeria', 'pool renovation'],
  generator: 'v0.app',
  openGraph: {
    title: 'Easy Pools & Spas | Think it. We build it.',
    description: 'Nationwide swimming pool, spa, fountain, and water feature construction built with precision.',
    type: 'website',
    locale: 'en_NG',
  },
  /* icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  }, */
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#06162e',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}  themeColor: '#06162e',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
