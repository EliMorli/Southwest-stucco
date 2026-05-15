import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/services';

// Map each service to a hero image from the gallery
const imageFor: Record<string, string> = {
  'commercial-stucco': '/gallery/gallery-16.jpg',
  'residential-stucco': '/gallery/gallery-14.jpg',
  'stucco-repair': '/gallery/gallery-05.jpg',
  'scaffold-installation': '/gallery/gallery-11.jpg',
  'custom-finishes': '/gallery/gallery-09.jpg',
  're-stucco': '/gallery/gallery-13.jpg',
};

export function ServiceTeaser() {
  return (
    <section className="bg-mesa py-32 px-[5vw] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        <header className="grid md:grid-cols-[auto_1fr_auto] items-end gap-x-6 mb-16">
          <div className="section-num">03</div>
          <div>
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-sun/80 font-bold block mb-2">
              What We Do
            </span>
            <div className="thin-rule max-w-[260px]" aria-hidden />
          </div>
          <Link
            href="/services"
            className="hidden md:inline-block font-serif italic text-sun text-[1.1rem] hover:text-clay no-underline border-b border-sun/30 hover:border-clay pb-0.5"
          >
            All services →
          </Link>
        </header>

        <h2 className="mb-14">
          <span className="block font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.92] tracking-[0.005em] text-bone">
            Stucco, plaster &amp; scaffold —
          </span>
          <span className="block font-serif italic text-[clamp(2.6rem,6.2vw,6.2rem)] leading-[0.92] tracking-[-0.01em] text-sun -mt-1">
            all under one roof.
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] no-underline block"
            >
              <Image
                src={imageFor[s.slug] || '/gallery/gallery-13.jpg'}
                alt={s.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover brightness-[0.65] group-hover:brightness-[0.8] group-hover:scale-[1.04] transition-all duration-700"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(31,22,17,0.15) 0%, rgba(31,22,17,0.55) 60%, rgba(31,22,17,0.92) 100%)',
                }}
              />
              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-serif italic text-clay text-[1.4rem] leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-condensed text-[0.6rem] tracking-[0.32em] uppercase text-sun/70 font-bold">
                    Trade
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[1.9rem] leading-[0.95] tracking-wide text-bone mb-3 group-hover:text-clay transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-[0.86rem] text-bone/75 leading-[1.65] mb-4 max-w-[300px]">
                    {s.short}
                  </p>
                  <span className="font-serif italic text-sun text-[1rem] border-b border-sun/40 pb-0.5 group-hover:text-clay group-hover:border-clay">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
