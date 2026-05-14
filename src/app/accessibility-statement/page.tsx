import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: `Our commitment to making ${siteConfig.name} accessible to all visitors.`,
  alternates: { canonical: '/accessibility-statement' },
  robots: { index: true, follow: true },
};

const updated = 'May 14, 2026';

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      updated={updated}
      crumbs={[{ label: 'Accessibility' }]}
    >
      <p>
        {siteConfig.legalName} is committed to making our website accessible to the widest
        possible audience, including people with disabilities. We aim to conform with the{' '}
        <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Use semantic HTML and ARIA landmarks so screen readers can navigate the site.</li>
        <li>Maintain readable contrast ratios across text and interactive elements.</li>
        <li>Support keyboard navigation across all interactive components.</li>
        <li>Provide alternative text for meaningful images.</li>
        <li>Respect the user's reduced-motion preference.</li>
        <li>Provide a "Skip to main content" link at the top of every page.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        We continually review and improve accessibility. If you encounter content that is hard to
        access, please let us know — your feedback directly informs our roadmap.
      </p>

      <h2>Contact us about accessibility</h2>
      <p>
        Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{' '}
        <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>. We will respond within 5
        business days and do our best to provide the information you need in an accessible format.
      </p>
    </LegalPage>
  );
}
