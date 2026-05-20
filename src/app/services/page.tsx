import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Stucco & Plastering Services | Los Angeles',
  description:
    'Family-owned stucco contractor offering commercial stucco, residential re-stucco, repair, scaffold install, custom finishes, and more across greater Los Angeles. CSLB #702110.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything Stucco. Done by People Who Care."
        sub="Six core service lines, one accountable family-owned crew. Pick the one that fits your project — or just call us and we'll point you the right way."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="py-20 px-[5vw] bg-sand-fade">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-bone border border-adobe/15 rounded-2xl p-7 no-underline transition-all hover:border-terracotta/40 hover:-translate-y-1 flex flex-col"
            >
              <span className="text-[2rem]" aria-hidden>{s.icon}</span>
              <h2 className="font-display text-[1.5rem] tracking-wide text-mesa mt-3 mb-2 group-hover:text-terracotta transition-colors">
                {s.name}
              </h2>
              <p className="text-mesa/65 text-[0.92rem] leading-[1.7] flex-1">{s.short}</p>
              <span className="text-terracotta text-sm font-bold mt-5">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ItemList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${siteConfig.url}/services/${s.slug}`,
              name: s.name,
            })),
          }),
        }}
      />

      <CtaStrip />
    </>
  );
}
