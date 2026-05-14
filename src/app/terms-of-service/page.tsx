import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for the ${siteConfig.name} website.`,
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
};

const updated = 'May 14, 2026';

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated={updated}
      crumbs={[{ label: 'Terms of Service' }]}
    >
      <p>
        These Terms of Service ("Terms") govern your use of {siteConfig.url.replace(/^https?:\/\//, '')}{' '}
        (the "Site") operated by {siteConfig.legalName}. By using the Site you agree to these
        Terms. If you do not agree, do not use the Site.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You may use the Site for personal, lawful purposes only — for example, to learn about our
        services, request an estimate, or contact us. You agree not to misuse the Site, attempt to
        breach its security, scrape it at scale, or interfere with other visitors' use of it.
      </p>

      <h2>2. Estimates and project agreements</h2>
      <p>
        Information on the Site (including pricing ranges, schedules, and service descriptions)
        is general guidance only and does not constitute a binding offer. Any work we perform for
        you is governed by a separate written contract signed by both parties. Pricing and
        timelines in any contract supersede anything stated on the Site.
      </p>

      <h2>3. Intellectual property</h2>
      <p>
        The Site, including its design, text, photographs, logos, and code, is owned by{' '}
        {siteConfig.legalName} or licensed to us. You may view and share links to the Site for
        non-commercial purposes. Reproduction, redistribution, or commercial use without our prior
        written permission is prohibited.
      </p>

      <h2>4. Third-party links</h2>
      <p>
        The Site may link to third-party sites (e.g. Google Maps, social media). We are not
        responsible for the content, privacy practices, or terms of those sites.
      </p>

      <h2>5. Disclaimers</h2>
      <p>
        The Site is provided "as is" and "as available" without warranties of any kind, express or
        implied. We do not warrant that the Site will be uninterrupted, error-free, or free of
        viruses or other harmful components.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.legalName} and its principals,
        employees, and contractors are not liable for any indirect, incidental, special,
        consequential, or punitive damages arising from your use of the Site, even if advised of
        the possibility of such damages. Nothing in these Terms limits liability that cannot be
        excluded under California law.
      </p>

      <h2>7. Governing law &amp; venue</h2>
      <p>
        These Terms are governed by the laws of the State of California, without regard to its
        conflict of laws rules. Any dispute related to the Site will be resolved exclusively in
        the state or federal courts located in Los Angeles County, California.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update these Terms from time to time. The "Last updated" date at the top reflects
        the most recent version. Continued use of the Site after changes constitutes acceptance.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these Terms can be sent to{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
