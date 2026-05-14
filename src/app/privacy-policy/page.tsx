import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}. What we collect, how we use it, and your rights as a visitor.`,
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

const updated = 'May 14, 2026';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated={updated}
      crumbs={[{ label: 'Privacy Policy' }]}
    >
      <p>
        This Privacy Policy describes how {siteConfig.legalName} ("Southwest Stucco", "we", "our",
        or "us") collects, uses, and shares information when you visit{' '}
        <Link href="/">{siteConfig.url.replace(/^https?:\/\//, '')}</Link> (the "Site") or contact
        us about our services. By using the Site, you agree to the practices described here.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you give us</h3>
      <p>
        When you submit a contact form, request an estimate, call, or email us, you may provide
        your name, phone number, email address, project address, and details about your project.
        We collect only what is necessary to respond to your inquiry.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        We may collect limited information automatically through our hosting provider and analytics
        tools, including:
      </p>
      <ul>
        <li>IP address and approximate location (city / region)</li>
        <li>Browser type, device type, operating system</li>
        <li>Pages visited, referring URL, time on site</li>
        <li>Cookies and similar technologies (see <Link href="/cookie-policy">Cookie Policy</Link>)</li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to estimate requests and customer inquiries</li>
        <li>To schedule and complete the work you hired us for</li>
        <li>To improve the Site and understand which content is useful</li>
        <li>To detect, prevent, and respond to fraud or technical abuse</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>We do not sell your personal information. We do not share it with advertisers.</p>

      <h2>3. Service providers</h2>
      <p>We share limited information with vendors that help us operate the Site, including:</p>
      <ul>
        <li><strong>Vercel</strong> — site hosting and content delivery</li>
        <li><strong>Resend</strong> — transactional email delivery for contact form submissions</li>
        <li><strong>Google Analytics</strong> (optional, only if you accept cookies) — aggregated traffic analytics</li>
      </ul>
      <p>
        Each of these vendors processes data subject to their own privacy and security policies.
      </p>

      <h2>4. Cookies</h2>
      <p>
        We use a small number of cookies to remember your cookie-consent choice and (optionally,
        with consent) to power Google Analytics. See our <Link href="/cookie-policy">Cookie Policy</Link>{' '}
        for details and how to opt out.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We retain estimate-request data only as long as needed to serve the customer and to keep
        records required for tax, warranty, and legal purposes (typically up to 7 years). We delete
        or anonymize older data when it is no longer needed.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete, or restrict
        processing of your personal information, and the right to opt out of "sale" or "sharing" as
        defined under California law (the CCPA / CPRA). We do not sell or share personal
        information for cross-context behavioral advertising.
      </p>
      <p>
        To exercise any of these rights, email us at{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{' '}
        <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>. We will respond within 45
        days.
      </p>

      <h2>7. Children</h2>
      <p>
        The Site is not directed to children under 13 and we do not knowingly collect personal
        information from them.
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect information we hold,
        including HTTPS encryption, vendor-vetted infrastructure, and limited internal access. No
        method of transmission over the internet is 100% secure.
      </p>

      <h2>9. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The "Last updated" date at the top
        reflects the latest version. Material changes will be highlighted on the Site.
      </p>

      <h2>10. Contact us</h2>
      <p>
        Questions or requests? Reach us at{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or {siteConfig.address.streetAddress},{' '}
        {siteConfig.address.locality}, {siteConfig.address.region} {siteConfig.address.postalCode}.
      </p>
    </LegalPage>
  );
}
