import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { FAQAccordion, FAQSchema } from '@/components/FAQAccordion';
import { Testimonials } from '@/components/Testimonials';
import { getArea, serviceAreas } from '@/lib/areas';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const a = getArea(slug);
  if (!a) return {};
  const title = `Stucco Contractor in ${a.city} | Southwest Stucco`;
  const description = `Family-owned stucco contractor serving ${a.city}, CA — ${a.zips.join(', ')} — since 1995. Re-stucco, repair, scaffold, custom finishes. Free estimates. CSLB #${siteConfig.cslb}.`;
  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${a.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/service-areas/${a.slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceAreaPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const a = getArea(slug);
  if (!a) notFound();

  const localFaqs = [
    {
      q: `Do you offer stucco services throughout ${a.city}?`,
      a: `Yes — we serve all of ${a.city} (${a.zips.join(', ')}) and the surrounding neighborhoods including ${a.neighborhoods.join(', ')}. Our HQ on Agoura Rd in Calabasas is roughly ${a.drivingMinutes === 0 ? 'right here in town' : `${a.drivingMinutes} minutes from ${a.city}`}.`,
    },
    {
      q: `How quickly can you come out for an estimate in ${a.city}?`,
      a: `Most ${a.city} estimate visits happen within 1–3 business days of your call. Use the form on this page or call ${siteConfig.phone}.`,
    },
    {
      q: `Are you licensed and insured to work in ${a.city}?`,
      a: `Yes. We carry an active California State License Board license (CSLB #${siteConfig.cslb}) and full general liability and workers compensation insurance, valid throughout California — including ${a.city}.`,
    },
    {
      q: `What kinds of homes and buildings do you work on in ${a.city}?`,
      a: `Everything ${a.city} has — single-family custom homes, tract houses, condos, apartment buildings, mixed-use commercial, retail, and tenant improvements. Our crews handle re-stucco, new construction, repair, scaffold, and custom finishes.`,
    },
  ];

  const others = serviceAreas.filter((x) => x.slug !== a.slug).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={`Service Area · ${a.county}`}
        title={`Stucco Contractor in ${a.city}, CA`}
        sub={a.blurb}
        crumbs={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: a.city },
        ]}
      />

      <section className="py-20 px-[5vw] bg-mesa-fade">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
          <div>
            <h2 className="font-display text-[1.9rem] tracking-wide text-bone mb-4">
              Why {a.city} homeowners and builders call us
            </h2>
            <ul className="space-y-2 mb-10 list-none p-0 m-0">
              {a.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-bone/75 text-[0.96rem] leading-[1.7]"
                >
                  <span aria-hidden className="text-clay text-lg leading-none mt-0.5">✦</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-[1.9rem] tracking-wide text-bone mb-4">
              Neighborhoods we serve in {a.city}
            </h2>
            <p className="text-bone/70 leading-[1.8] mb-10">
              We regularly work across {a.neighborhoods.join(', ')}, plus every other corner of{' '}
              {a.city}. ZIP codes {a.zips.join(', ')}.
            </p>

            <h2 className="font-display text-[1.9rem] tracking-wide text-bone mb-6">
              Services available in {a.city}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-mesa-100/50 border border-sun/10 rounded-xl p-5 no-underline hover:border-clay/40 hover:bg-terracotta/[0.08] transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-[1.3rem]" aria-hidden>{s.icon}</span>
                    <h3 className="font-bold text-bone m-0">{s.name}</h3>
                  </div>
                  <p className="text-bone/60 text-[0.86rem] leading-[1.6] m-0">{s.short}</p>
                </Link>
              ))}
            </div>

            <h2 className="font-display text-[1.9rem] tracking-wide text-bone mb-6">
              Frequently asked questions about {a.city} stucco
            </h2>
            <FAQAccordion faqs={localFaqs} />
            <FAQSchema faqs={localFaqs} />
          </div>

          <aside className="md:sticky md:top-24 space-y-5">
            <div className="bg-mesa-100/70 border border-sun/15 rounded-2xl p-6 shadow-[0_18px_44px_-16px_rgba(0,0,0,0.5)]">
              <h3 className="font-display text-[1.5rem] tracking-wide text-bone mb-1">
                Free {a.city} estimate
              </h3>
              <p className="text-bone/65 text-sm mb-5">
                Tell us about your project — we typically respond same-day.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-gradient-to-b from-clay to-terracotta text-bone font-extrabold py-3 rounded-full no-underline shadow-[0_4px_14px_rgba(194,86,43,0.4)]"
              >
                Request Estimate
              </Link>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="block text-center mt-3 border border-sun/30 text-bone font-bold py-3 rounded-full no-underline hover:border-sun"
              >
                📞 {siteConfig.phone}
              </a>
              <dl className="mt-6 grid grid-cols-2 gap-3 text-[0.78rem]">
                <div>
                  <dt className="text-sun/75 font-bold tracking-wider uppercase">Drive Time</dt>
                  <dd className="text-bone font-bold mt-0.5">
                    {a.drivingMinutes === 0 ? 'On-site' : `~${a.drivingMinutes} min`}
                  </dd>
                </div>
                <div>
                  <dt className="text-sun/75 font-bold tracking-wider uppercase">License</dt>
                  <dd className="text-bone font-bold mt-0.5">CSLB #{siteConfig.cslb}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-mesa-100/40 border border-sun/10 rounded-2xl p-6">
              <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-sun/75 mb-3">
                Nearby Areas
              </h3>
              <ul className="list-none m-0 p-0 grid grid-cols-2 gap-1.5">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/service-areas/${o.slug}`}
                      className="text-bone/70 hover:text-clay no-underline text-[0.88rem] font-semibold"
                    >
                      {o.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Testimonials variant="page" limit={3} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Stucco & Plastering',
            name: `Stucco Contractor in ${a.city}`,
            provider: { '@id': `${siteConfig.url}/#business` },
            areaServed: { '@type': 'City', name: a.city, containedInPlace: { '@type': 'AdministrativeArea', name: a.county } },
            url: `${siteConfig.url}/service-areas/${a.slug}`,
          }),
        }}
      />

      <CtaStrip
        title={`Free stucco estimates in ${a.city}.`}
        sub="We respond within 24 hours — usually the same day."
      />
    </>
  );
}
