import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Nunito, Barlow_Condensed } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const nunito = Nunito({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const barlow = Barlow_Condensed({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#1F1611',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Family-Owned Stucco & Plastering Since 1995 | Calabasas, CA`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: 'Next.js',
  keywords: [
    'stucco contractor Calabasas',
    'stucco repair Los Angeles',
    'plastering San Fernando Valley',
    'Santa Barbara finish stucco',
    'exterior stucco contractor',
    'family-owned stucco company',
    'Calabasas stucco',
    'Agoura Hills stucco',
    'Westlake Village plaster',
    're-stucco Los Angeles',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Family-Owned Stucco & Plastering Since 1995`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Calabasas, CA stucco contractor`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Stucco & Plastering, Calabasas CA`,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  category: 'business',
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Calabasas',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${nunito.variable} ${barlow.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
