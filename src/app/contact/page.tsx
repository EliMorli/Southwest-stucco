import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Contact } from '@/components/Contact';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimate | Southwest Stucco',
  description:
    'Free, no-pressure stucco estimates across Calabasas, Los Angeles, and surrounding cities. Call (818) 888-8554 or use the form. We respond within 24 hours.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Free Estimates. Fast Response."
        sub="Call us, email us, or fill out the form. We get back to you within 24 hours — usually same-day."
        crumbs={[{ label: 'Contact' }]}
      />
      <Contact />
      <section className="px-[5vw] pb-20 bg-mesa-fade">
        <div className="max-w-[1100px] mx-auto bg-mesa-100/60 border border-sun/15 rounded-2xl overflow-hidden">
          <iframe
            title={`${siteConfig.name} office location map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
            )}&output=embed`}
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: 'block' }}
          />
        </div>
      </section>
    </>
  );
}
