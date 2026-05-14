import Link from 'next/link';
import { services } from '@/lib/services';

export function ServiceTeaser() {
  return (
    <section className="bg-mesa-fade py-24 px-[5vw] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 className="font-display text-[clamp(2.2rem,4.2vw,4rem)] leading-[0.95] text-bone mt-3">
              Stucco, Plaster &amp; Scaffold —{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #E07B4A 0%, #D4A574 100%)',
                }}
              >
                All Under One Roof.
              </span>
            </h2>
          </div>
          <Link href="/services" className="btn-outline self-start md:self-end">
            See all services →
          </Link>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative bg-mesa-100/60 border border-sun/12 rounded-2xl p-7 no-underline transition-all hover:bg-terracotta/[0.10] hover:border-clay/40 hover:-translate-y-1 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    'radial-gradient(circle, rgba(224,123,74,0.35) 0%, transparent 70%)',
                }}
              />
              <div className="relative">
                <span className="text-[1.9rem]" aria-hidden>{s.icon}</span>
                <h3 className="font-extrabold text-[1.05rem] text-bone mt-3 mb-2">{s.name}</h3>
                <p className="text-[0.88rem] text-bone/60 leading-[1.7] mb-4">{s.short}</p>
                <span className="text-clay text-sm font-bold">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
