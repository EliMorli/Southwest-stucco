import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { serviceAreas } from '@/lib/areas';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Service Areas | Calabasas, San Fernando Valley & Greater LA',
  description:
    'Family-owned stucco contractor serving Calabasas, Hidden Hills, Agoura Hills, Westlake Village, Malibu, the San Fernando Valley, and the broader Los Angeles basin since 1995.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Calabasas Born. All of LA Served."
        sub="Headquartered on Agoura Rd in Calabasas, our crews work daily across the West Valley, Conejo Valley, Westside, and the broader Los Angeles basin."
        crumbs={[{ label: 'Service Areas' }]}
      />

      <section className="py-20 px-[5vw] bg-mesa-fade">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="group bg-mesa-100/60 border border-sun/12 rounded-2xl p-6 no-underline transition-all hover:border-clay/40 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-[1.5rem] tracking-wide text-bone group-hover:text-clay transition-colors">
                      {a.city}
                    </h2>
                    <p className="text-[0.78rem] text-sun/70 font-bold tracking-[0.18em] uppercase mt-0.5">
                      {a.county} · {a.zips.join(' / ')}
                    </p>
                  </div>
                  <span className="text-[0.72rem] text-bone/50 font-bold tracking-wide whitespace-nowrap mt-1">
                    {a.drivingMinutes === 0 ? 'HQ' : `${a.drivingMinutes} min`}
                  </span>
                </div>
                <p className="text-bone/65 text-[0.9rem] leading-[1.7] mt-3">{a.blurb}</p>
                <span className="text-clay text-sm font-bold mt-4 inline-block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: serviceAreas.map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${siteConfig.url}/service-areas/${a.slug}`,
              name: a.city,
            })),
          }),
        }}
      />

      <CtaStrip />
    </>
  );
}
