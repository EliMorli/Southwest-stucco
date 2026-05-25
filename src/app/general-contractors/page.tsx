import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { FAQAccordion, FAQSchema } from '@/components/FAQAccordion';
import { siteConfig } from '@/lib/site-config';
import {
  gcHero,
  capabilities,
  gcAudienceFacts,
  sampleProjects,
  gcProcess,
  gcFaqs,
} from '@/lib/gc';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Stucco Subcontractor for General Contractors | Los Angeles',
  description:
    'Southwest Stucco Inc. — commercial stucco subcontractor for general contractors across Los Angeles. Multi-crew capacity, owned scaffold, bonded and insured. CSLB #702110.',
  keywords: [
    'stucco subcontractor los angeles',
    'commercial stucco contractor calabasas',
    'C-35 plastering contractor LA',
    'mid-rise stucco subcontractor',
    'podium stucco contractor los angeles',
    'EIFS contractor san fernando valley',
    'bonded stucco subcontractor LA',
    'apartment stucco subcontractor',
    'multifamily stucco contractor los angeles',
    'tenant improvement stucco contractor',
  ],
  alternates: { canonical: '/general-contractors' },
  openGraph: {
    title: 'Stucco Subcontractor for General Contractors | Los Angeles',
    description:
      'Multi-crew commercial stucco for general contractors across Los Angeles. Owned scaffold, bonded and insured, 30 years of references.',
    url: `${siteConfig.url}/general-contractors`,
    type: 'website',
  },
};

export default function GeneralContractorsPage() {
  const gcPosts = blogPosts.filter((p) => p.audience === 'gc');

  return (
    <>
      <PageHero
        eyebrow={gcHero.eyebrow}
        title={gcHero.title}
        italicTitle={gcHero.italicTitle}
        sub={gcHero.sub}
        crumbs={[{ label: 'General Contractors' }]}
      />

      {/* Quick-glance capability table — the part PMs screenshot */}
      <section className="bg-sand-fade py-16 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-3">
                Capabilities
              </span>
              <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[0.95] text-mesa mb-4">
                The numbers your{' '}
                <span className="font-serif italic text-terracotta">project manager</span>{' '}
                actually needs.
              </h2>
              <p className="text-mesa/65 leading-[1.75] text-[0.96rem]">
                Screenshot this section and forward it to your superintendent. Or call{' '}
                <a
                  className="text-terracotta hover:text-terracotta border-b border-adobe/25 no-underline"
                  href={`tel:${siteConfig.phoneE164}`}
                >
                  {siteConfig.phone}
                </a>{' '}
                and we will email a current trade-partner packet.
              </p>
            </div>

            <dl className="grid sm:grid-cols-2 gap-[1px] bg-adobe/15 rounded-sm overflow-hidden">
              {capabilities.map((c) => (
                <div
                  key={c.label}
                  className="bg-bone px-5 py-4 flex flex-col justify-between"
                >
                  <dt className="font-condensed text-[0.62rem] tracking-[0.28em] uppercase text-adobe font-bold">
                    {c.label}
                  </dt>
                  <dd className="m-0 font-bold text-mesa text-[0.95rem] leading-snug mt-1">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Why GCs choose us — 6 facts */}
      <section className="plaster-bg py-24 px-[5vw]">
        <div className="max-w-[1300px] mx-auto">
          <header className="grid md:grid-cols-[auto_1fr] items-end gap-x-6 mb-12">
            <div className="section-num">01</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
                Why GCs Keep Coming Back
              </span>
              <div className="thin-rule max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2.2rem,4.5vw,4.4rem)] leading-[0.95] text-mesa">
                  One accountable
                </span>
                <span
                  className="block font-serif italic text-[clamp(2.2rem,4.7vw,4.6rem)] leading-[0.95] -mt-1 bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)" }}
                >
                  trade partner.
                </span>
              </h2>
            </div>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-adobe/15 rounded-sm overflow-hidden">
            {gcAudienceFacts.map((f) => (
              <article key={f.title} className="bg-bone p-7 backdrop-blur-sm">
                <span className="text-[1.8rem]" aria-hidden>{f.icon}</span>
                <h3 className="font-display text-[1.45rem] tracking-wide text-mesa mt-3 mb-2">
                  {f.title}
                </h3>
                <p className="text-[0.92rem] text-mesa/65 leading-[1.7]">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand-fade py-24 px-[5vw]">
        <div className="max-w-[1100px] mx-auto">
          <header className="grid md:grid-cols-[auto_1fr] items-end gap-x-6 mb-12">
            <div className="section-num">02</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
                Pre-Con Through Punch
              </span>
              <div className="thin-rule max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2.2rem,4.5vw,4.4rem)] leading-[0.95] text-mesa">
                  Six stages,
                </span>
                <span
                  className="block font-serif italic text-[clamp(2.2rem,4.7vw,4.6rem)] leading-[0.95] -mt-1 bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)" }}
                >
                  one accountable team.
                </span>
              </h2>
            </div>
          </header>
          <ol className="grid md:grid-cols-2 gap-x-10 gap-y-8 list-none p-0 m-0">
            {gcProcess.map((p, i) => (
              <li
                key={p.title}
                className="grid grid-cols-[auto_1fr] gap-x-5 pt-6 border-t border-adobe/15"
              >
                <span className="font-serif italic text-[2.4rem] leading-none text-terracotta select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-[1.4rem] tracking-wide text-mesa mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[0.94rem] text-mesa/70 leading-[1.75]">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sample projects — credibility */}
      <section className="plaster-bg py-24 px-[5vw]">
        <div className="max-w-[1300px] mx-auto">
          <header className="grid md:grid-cols-[auto_1fr] items-end gap-x-6 mb-12">
            <div className="section-num">03</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
                Recent Commercial Scope
              </span>
              <div className="thin-rule max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2.2rem,4.5vw,4.4rem)] leading-[0.95] text-mesa">
                  Project profile
                </span>
                <span
                  className="block font-serif italic text-[clamp(2.2rem,4.7vw,4.6rem)] leading-[0.95] -mt-1 bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)" }}
                >
                  by the numbers.
                </span>
              </h2>
            </div>
          </header>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <ul className="list-none p-0 m-0 grid gap-[1px] bg-adobe/15 rounded-sm overflow-hidden">
              {sampleProjects.map((p) => (
                <li key={p.name} className="bg-bone p-6 md:p-7">
                  <h3 className="font-display text-[1.35rem] tracking-wide text-mesa mb-1">
                    {p.name}
                  </h3>
                  <p className="font-serif italic text-adobe text-[1rem] mb-3">{p.system}</p>
                  <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-[0.88rem]">
                    <div>
                      <dt className="text-adobe font-bold tracking-wide uppercase text-[0.66rem]">
                        Scope
                      </dt>
                      <dd className="m-0 text-mesa/85 leading-snug">{p.scope}</dd>
                    </div>
                    <div>
                      <dt className="text-adobe font-bold tracking-wide uppercase text-[0.66rem]">
                        Duration
                      </dt>
                      <dd className="m-0 text-mesa/85 leading-snug">{p.duration}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>

            <aside className="bg-bone border border-adobe/15 rounded-sm p-7 backdrop-blur-sm lg:sticky lg:top-24">
              <h3 className="font-display text-[1.5rem] tracking-wide text-mesa mb-2">
                References on request
              </h3>
              <p className="text-mesa/65 leading-[1.7] text-[0.94rem] mb-5">
                We provide three GC references from completed projects within the last 24
                months — with the superintendent&rsquo;s direct phone number — at bid day.
                Most of our pipeline comes from repeat partnerships.
              </p>
              <Link
                href={`mailto:${siteConfig.email}?subject=Trade%20Partner%20Packet%20Request`}
                className="block text-center bg-gradient-to-b from-clay to-terracotta text-mesa font-extrabold py-3 rounded-full no-underline shadow-[0_4px_14px_rgba(194,86,43,0.4)]"
              >
                Request Trade Partner Packet
              </Link>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="block text-center mt-3 border border-adobe/25 text-mesa font-bold py-3 rounded-full no-underline hover:border-sun"
              >
                📞 {siteConfig.phone}
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* B2B blog posts */}
      <section className="bg-sand-fade py-24 px-[5vw]">
        <div className="max-w-[1300px] mx-auto">
          <header className="grid md:grid-cols-[auto_1fr_auto] items-end gap-x-6 mb-12">
            <div className="section-num">04</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
                Reading For PMs
              </span>
              <div className="thin-rule max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2rem,4vw,3.6rem)] leading-[0.95] text-mesa">
                  Field notes
                </span>
                <span
                  className="block font-serif italic text-[clamp(2rem,4.2vw,3.8rem)] leading-[0.95] -mt-1 bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)" }}
                >
                  from a 30-year sub.
                </span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-block font-serif italic text-terracotta text-[1.1rem] hover:text-terracotta no-underline border-b border-adobe/25 hover:border-terracotta pb-0.5"
            >
              All posts →
            </Link>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gcPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-bone border border-adobe/15 rounded-sm overflow-hidden no-underline transition-all hover:border-terracotta/40 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-90 group-hover:scale-[1.05] transition-all duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="font-condensed text-[0.62rem] tracking-[0.28em] uppercase text-adobe font-bold">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-mesa text-[0.98rem] leading-snug mt-2 group-hover:text-terracotta transition-colors flex-1">
                    {p.title}
                  </h3>
                  <span className="text-adobe text-[0.72rem] font-bold mt-3 tracking-wide">
                    {p.readingMinutes} min read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GC FAQ — schema-rich for AI engines */}
      <section className="plaster-bg py-24 px-[5vw]">
        <div className="max-w-[1100px] mx-auto">
          <header className="grid md:grid-cols-[auto_1fr] items-end gap-x-6 mb-12">
            <div className="section-num">05</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
                Common GC Questions
              </span>
              <div className="thin-rule max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2rem,4vw,3.6rem)] leading-[0.95] text-mesa">
                  Asked at bid day.
                </span>
                <span
                  className="block font-serif italic text-[clamp(2rem,4.2vw,3.8rem)] leading-[0.95] -mt-1 bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)" }}
                >
                  Answered up front.
                </span>
              </h2>
            </div>
          </header>
          <FAQAccordion faqs={gcFaqs} />
          <FAQSchema faqs={gcFaqs} />
        </div>
      </section>

      {/* Service schema specifically for the GC offering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Commercial Stucco Subcontracting',
            name: 'Stucco Subcontractor for General Contractors',
            provider: { '@id': `${siteConfig.url}/#business` },
            areaServed: siteConfig.serviceAreas.map((c) => ({ '@type': 'City', name: c })),
            audience: { '@type': 'BusinessAudience', audienceType: 'General Contractors' },
            description: metadata.description as string,
            url: `${siteConfig.url}/general-contractors`,
          }),
        }}
      />

      <CtaStrip
        title="Have a project coming up?"
        italic="let's talk before bid day."
        sub="Email a draft scope and plan set, or call the office. We respond same-day on GC inquiries."
      />
    </>
  );
}
