import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `How ${siteConfig.name} uses cookies and how you can opt out.`,
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
};

const updated = 'May 14, 2026';

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated={updated}
      crumbs={[{ label: 'Cookie Policy' }]}
    >
      <p>
        This Cookie Policy explains the small number of cookies we use on{' '}
        {siteConfig.url.replace(/^https?:\/\//, '')}, why we use them, and how you can opt out.
      </p>

      <h2>What is a cookie?</h2>
      <p>
        A cookie is a small text file that a website stores on your device. Cookies let a site
        remember your preferences (like your cookie-consent choice) and help us understand which
        pages are useful to visitors.
      </p>

      <h2>Cookies we use</h2>
      <h3>Strictly necessary</h3>
      <ul>
        <li>
          <strong>sws-cookie-consent</strong> — stores your accept/reject choice for the consent
          banner so we don't ask you again on every visit. Stored locally in your browser.
        </li>
      </ul>

      <h3>Analytics (optional, only with consent)</h3>
      <p>
        If you click "Accept" on the cookie banner, we load <strong>Google Analytics 4</strong> to
        understand which pages are popular and how visitors flow through the Site. We anonymize IP
        addresses and do not use Google Analytics for advertising. We never load Google Analytics
        until you have accepted.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can change your choice at any time by clearing your browser's site data for this Site.
        Most browsers also let you block or delete cookies entirely — see your browser's help
        documentation. Blocking strictly necessary cookies may affect how the Site works.
      </p>

      <h2>Do Not Track</h2>
      <p>
        We honor the Global Privacy Control (GPC) signal where supported. If your browser sends
        GPC, we treat it as an opt-out of optional analytics cookies.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or see our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
