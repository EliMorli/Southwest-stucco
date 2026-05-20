import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Nunito, Barlow_Condensed, Cormorant_Garamond } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { StickyCallButton } from '@/components/StickyCallButton';
import { CookieConsent } from '@/components/CookieConsent';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { MicrosoftClarity } from '@/components/MicrosoftClarity';
import { AnalyticsListener } from '@/components/AnalyticsListener';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const nunito = Nunito({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const barlow = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '600'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FAF3E7',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || '';
  return (
    <html lang="en" className={`${bebas.variable} ${nunito.variable} ${barlow.variable} ${cormorant.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1000] focus:bg-bone focus:text-adobe focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallButton />
        <CookieConsent />
        <AnalyticsListener />
        {gaId && <GoogleAnalytics id={gaId} />}
        {clarityId && <MicrosoftClarity id={clarityId} />}
      </body>
    </html>
  );
}
