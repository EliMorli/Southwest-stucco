import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { projects, galleryItems } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects & Portfolio | Southwest Stucco',
  description:
    'Selected stucco and plaster projects across Calabasas, Los Angeles, Westlake Village, Woodland Hills, and the broader San Fernando Valley.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real Projects. Real Results."
        sub="A selection of recent residential and commercial stucco work across Los Angeles. Hover or tap a card to see the case study."
        crumbs={[{ label: 'Projects' }]}
      />

      <section className="py-20 px-[5vw] bg-mesa-fade">
        <div className="max-w-[1300px] mx-auto">
          <header className="mb-10">
            <span className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-sun/80">
              Featured Case Studies
            </span>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] text-bone leading-[0.95] mt-2">
              A closer look at three jobs.
            </h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.slug}
                className="bg-mesa-100/60 border border-sun/12 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-mesa/85 backdrop-blur text-sun text-[0.7rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-sun/25">
                    {p.service}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-[1.4rem] tracking-wide text-bone">{p.title}</h3>
                  <p className="text-[0.78rem] text-sun/75 font-bold tracking-[0.18em] uppercase mt-1">
                    {p.city}
                  </p>
                  <p className="text-bone/70 leading-[1.7] text-[0.92rem] mt-3 flex-1">{p.body}</p>
                  <dl className="grid grid-cols-2 gap-3 text-[0.78rem] mt-5 pt-4 border-t border-sun/10">
                    <div>
                      <dt className="text-sun/75 font-bold tracking-wider uppercase">Finish</dt>
                      <dd className="text-bone font-bold mt-0.5">{p.finish}</dd>
                    </div>
                    <div>
                      <dt className="text-sun/75 font-bold tracking-wider uppercase">Duration</dt>
                      <dd className="text-bone font-bold mt-0.5">{p.duration}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-sun/75 font-bold tracking-wider uppercase">Scope</dt>
                      <dd className="text-bone font-bold mt-0.5">{p.scope}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-[5vw] bg-mesa">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-10 text-center">
            <span className="eyebrow">Full Gallery</span>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] text-bone leading-[0.95] mt-3">
              20+ recent projects.
            </h2>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {galleryItems.map((g) => (
              <div key={g.src} className="relative aspect-[3/4] rounded-lg overflow-hidden ring-1 ring-sun/10">
                <Image
                  src={g.src}
                  alt={`${g.label} — Southwest Stucco project`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-end p-3"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(41,29,20,0.65) 0%, transparent 50%)',
                  }}
                >
                  <span className="text-bone text-[0.78rem] font-bold tracking-[0.18em] uppercase">
                    {g.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/contact" className="btn-red">
              Want to be the next one?
            </Link>
          </p>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
