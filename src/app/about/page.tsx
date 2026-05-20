import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { Testimonials } from '@/components/Testimonials';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Southwest Stucco | Family-Owned Since 1995',
  description:
    'A Calabasas, CA family-owned stucco contractor since 1995. Three decades of residential and commercial stucco, plastering, and scaffold work across Los Angeles. CSLB #702110.',
  alternates: { canonical: '/about' },
};

const milestones = [
  { year: '1995', title: 'Founded in Calabasas', body: 'Started with one truck, one crew, and a simple promise: do the work right and treat people right.' },
  { year: '2002', title: 'First commercial GC partnership', body: 'Began running multi-crew commercial work alongside residential — apartments, retail, mixed-use.' },
  { year: '2010', title: 'In-house scaffold operation', body: 'Brought scaffold install in-house to control quality and schedule end-to-end.' },
  { year: '2018', title: '500-customer milestone', body: 'Crossed 500 lifetime residential homeowner customers, most of them from referrals.' },
  { year: '2025', title: '30 years and 1,000+ customers', body: 'Three decades of continuous local operation — and we still answer the phone ourselves.' },
];

const values = [
  { icon: '🤝', title: 'We answer the phone.', body: "Pick up. Show up. Follow up. Most of contracting reputation comes down to that." },
  { icon: '📐', title: 'Square work, every time.', body: 'Plumb walls, level joints, clean caulking, full thickness on every coat. The fundamentals are the entire job.' },
  { icon: '🧹', title: 'Leave the site cleaner than we found it.', body: 'Sweep daily. Protect landscaping. Take the dumpster with us.' },
  { icon: '💬', title: 'Talk like a person.', body: 'No contractor-speak. No mystery line items. We explain what we are doing and why.' },
  { icon: '🛡️', title: 'License, insurance, warranty in writing.', body: `CSLB #${siteConfig.cslb}, full GL and workers comp, written workmanship warranty on every job.` },
  { icon: '🪜', title: 'Own our scaffold.', body: 'Owning our equipment means no day-rate hostage situations and no subcontractor flake-outs.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Family Stucco Business. Three Decades In."
        sub="Founded in 1995 in Calabasas, Southwest Stucco Inc. has spent 30 years doing one thing — stucco — for Los Angeles homeowners, builders, and property managers."
        crumbs={[{ label: 'About' }]}
      />

      <section className="py-20 px-[5vw] bg-sand-fade">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] text-mesa leading-[0.95] mt-3 mb-6">
              Built one wall, one customer, one referral at a time.
            </h2>
            <p className="text-mesa/75 leading-[1.85] mb-4">
              Southwest Stucco Inc. started in 1995 with one truck, one crew, and a phone number our
              founder answered himself. Three decades later, that's still the model: family-owned,
              family-run, and small enough that the people on your job are the same people who
              answer the phone.
            </p>
            <p className="text-mesa/75 leading-[1.85] mb-4">
              We have crewed up over the years — multiple residential teams, dedicated commercial
              crews, an in-house scaffold operation — but we've never franchised, never bought our
              way into another market, and never taken on a job we didn't think we could do right.
            </p>
            <p className="text-mesa/75 leading-[1.85]">
              Most of our work today still comes from referrals. That tells you everything you need
              to know about how we treat customers.
            </p>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-adobe/15 shadow-[0_18px_48px_-16px_rgba(0,0,0,0.6)]">
            <Image
              src="/gallery/gallery-13.jpg"
              alt="Southwest Stucco crew on a Los Angeles project"
              fill
              sizes="(max-width: 768px) 100vw, 540px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-[5vw] bg-sand-fade">
        <div className="max-w-[1200px] mx-auto">
          <header className="text-center mb-14">
            <span className="font-condensed text-[0.72rem] font-bold tracking-[0.38em] uppercase text-adobe mb-3 inline-block">
              How We Work
            </span>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] text-mesa leading-[0.95]">
              Six rules we run our business by.
            </h2>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="adobe-card p-7">
                <span
                  className="inline-flex items-center justify-center w-[58px] h-[58px] rounded-full mb-4 text-[1.7rem] bg-gradient-to-br from-sun/40 to-terracotta/10 border border-terracotta/15"
                  aria-hidden
                >
                  {v.icon}
                </span>
                <h3 className="font-extrabold text-mesa text-[1.05rem] mb-2">{v.title}</h3>
                <p className="text-mesa/70 text-[0.92rem] leading-[1.7]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-[5vw] bg-sand-fade">
        <div className="max-w-[1000px] mx-auto">
          <header className="mb-14 text-center">
            <span className="eyebrow">Three Decades</span>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] text-mesa leading-[0.95] mt-3">
              A few milestones along the way.
            </h2>
          </header>
          <ol className="relative border-l-2 border-adobe/25 ml-3 space-y-8 list-none p-0">
            {milestones.map((m) => (
              <li key={m.year} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gradient-to-b from-clay to-terracotta border-2 border-mesa shadow-[0_0_0_3px_rgba(212,165,116,0.25)]" />
                <div className="font-display text-[1.6rem] tracking-wider text-terracotta leading-none">{m.year}</div>
                <h3 className="font-bold text-mesa text-[1.1rem] mt-1">{m.title}</h3>
                <p className="text-mesa/70 leading-[1.75] mt-1">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials variant="page" limit={3} />
      <CtaStrip />
    </>
  );
}
