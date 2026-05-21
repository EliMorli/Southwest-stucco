import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { FAQAccordion, FAQSchema } from '@/components/FAQAccordion';
import { Testimonials } from '@/components/Testimonials';
import { getService, services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${siteConfig.url}/services/${s.slug}`,
      type: 'website',
    },
  };
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        sub={s.hero.sub}
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: s.name },
        ]}
      />

      <section className="py-20 px-[5vw] bg-sand-fade">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
          <div>
            <p className="text-mesa/80 leading-[1.85] text-[1.05rem] mb-8">{s.intro}</p>

            <h2 className="font-display text-[1.9rem] tracking-wide text-mesa mb-4">
              What's Included
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 mb-12 list-none p-0 m-0">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-mesa/75 text-[0.94rem] leading-[1.6]"
                >
                  <span aria-hidden className="text-terracotta text-lg leading-none mt-0.5">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-[1.9rem] tracking-wide text-mesa mb-6">
              How It Works
            </h2>
            <ol className="space-y-4 list-none p-0 m-0 mb-12">
              {s.process.map((p, i) => (
                <li
                  key={p.title}
                  className="flex gap-4 bg-bone border border-adobe/15 rounded-xl p-5"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-b from-clay to-terracotta text-mesa font-extrabold flex items-center justify-center text-sm shadow-[0_4px_12px_rgba(194,86,43,0.4)]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-mesa text-[1.02rem] mb-1">{p.title}</h3>
                    <p className="text-mesa/65 text-[0.92rem] leading-[1.65] m-0">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {s.finishes && (
              <>
                <h2 className="font-display text-[1.9rem] tracking-wide text-mesa mb-6">
                  Finishes Available
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {s.finishes.map((f) => (
                    <div
                      key={f.name}
                      className="bg-bone border border-adobe/15 rounded-xl p-5"
                    >
                      <h3 className="font-bold text-mesa mb-1">{f.name}</h3>
                      <p className="text-mesa/65 text-[0.9rem] leading-[1.65] m-0">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2 className="font-display text-[1.9rem] tracking-wide text-mesa mb-6">
              Common Questions
            </h2>
            <FAQAccordion faqs={s.faqs} />
            <FAQSchema faqs={s.faqs} />
          </div>

          <aside className="md:sticky md:top-24 space-y-5">
            <div className="bg-bone border border-adobe/15 rounded-2xl p-6 shadow-[0_18px_44px_-16px_rgba(0,0,0,0.5)]">
              <h3 className="font-display text-[1.5rem] tracking-wide text-mesa mb-1">
                Get a free estimate
              </h3>
              <p className="text-mesa/65 text-sm mb-5">
                Free, fast, no pressure. We respond inside 24 hours.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-gradient-to-b from-clay to-terracotta text-mesa font-extrabold py-3 rounded-full no-underline shadow-[0_4px_14px_rgba(194,86,43,0.4)]"
              >
                Request Estimate
              </Link>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="block text-center mt-3 border border-adobe/25 text-mesa font-bold py-3 rounded-full no-underline hover:border-sun"
              >
                📞 {siteConfig.phone}
              </a>
            </div>

            <div className="bg-bone border border-adobe/15 rounded-2xl p-6">
              <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-adobe mb-3">
                Other Services
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/services/${o.slug}`}
                      className="text-mesa/70 hover:text-terracotta no-underline text-[0.92rem] font-semibold"
                    >
                      {o.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Testimonials variant="page" limit={3} />

      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.name,
            serviceType: s.name,
            provider: { '@id': `${siteConfig.url}/#business` },
            areaServed: siteConfig.serviceAreas.map((c) => ({ '@type': 'City', name: c })),
            description: s.metaDescription,
            url: `${siteConfig.url}/services/${s.slug}`,
          }),
        }}
      />

      <CtaStrip
        title={`Ready for a free ${s.name.toLowerCase()} estimate?`}
        sub="Tell us about your project — we'll be in touch within 24 hours."
      />
    </>
  );
}
