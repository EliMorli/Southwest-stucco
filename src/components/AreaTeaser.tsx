import Link from 'next/link';
import { serviceAreas } from '@/lib/areas';

export function AreaTeaser() {
  return (
    <section className="plaster-bg py-32 px-[5vw] relative overflow-hidden">
      <div aria-hidden className="adobe-stripe h-[5px] absolute top-0 inset-x-0 opacity-95" />
      <div className="max-w-[1300px] mx-auto relative">
        <header className="grid md:grid-cols-[auto_1fr_auto] items-end gap-x-6 mb-14">
          <div className="section-num text-adobe">04</div>
          <div>
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
              Where We Work
            </span>
            <div className="thin-rule-dark max-w-[260px]" aria-hidden />
          </div>
          <Link
            href="/service-areas"
            className="hidden md:inline-block font-serif italic text-adobe text-[1.1rem] hover:text-terracotta no-underline border-b border-adobe/40 hover:border-terracotta pb-0.5"
          >
            All areas →
          </Link>
        </header>

        <h2 className="mb-14 max-w-[1100px]">
          <span className="block font-display text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[0.92] tracking-[0.005em] text-mesa">
            Calabasas born.
          </span>
          <span
            className="block font-serif italic text-[clamp(2.4rem,5.7vw,5.7rem)] leading-[0.92] tracking-[-0.01em] -mt-1 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #8C3A1E 0%, #C2562B 60%, #E07B4A 100%)',
            }}
          >
            All of LA served.
          </span>
        </h2>

        <p className="font-serif italic text-mesa/75 text-[1.2rem] leading-[1.5] max-w-[620px] mb-12">
          Headquartered on Agoura Rd, our crews work daily across the West Valley,
          Conejo Valley, Westside, and the broader Los Angeles basin.
        </p>

        <ul className="list-none m-0 p-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-adobe/15 rounded-sm overflow-hidden">
          {serviceAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/service-areas/${a.slug}`}
                className="block bg-bone px-5 py-4 text-mesa no-underline hover:bg-terracotta/[0.06] transition-colors h-full group"
              >
                <span className="block font-display text-[1.4rem] tracking-wide text-mesa group-hover:text-terracotta transition-colors leading-tight">
                  {a.city}
                </span>
                <span className="block font-condensed text-[0.66rem] font-bold tracking-[0.22em] uppercase text-mesa/70 mt-1.5">
                  {a.zips[0]} · {a.drivingMinutes === 0 ? 'HQ' : `${a.drivingMinutes} min`}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
