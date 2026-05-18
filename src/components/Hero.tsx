import Image from 'next/image';
import Link from 'next/link';
import { hero } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-[100vh] flex items-end overflow-hidden bg-mesa">
      {/* Full-bleed hero photography */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="/gallery/gallery-13.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Warm cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(31,22,17,0.85) 0%, rgba(31,22,17,0.55) 35%, rgba(140,58,30,0.55) 70%, rgba(31,22,17,0.92) 100%)',
          }}
        />
        {/* Right-side sun glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 82% 28%, rgba(212,165,116,0.32) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* Big watermark numeral — gives the hero an editorial signature */}
      <div
        aria-hidden
        className="absolute right-[4vw] top-[20vh] hidden lg:block pointer-events-none select-none"
      >
        <div className="font-serif italic text-[28vw] leading-[0.8] text-bone/[0.045]">
          .95
        </div>
      </div>

      {/* EST badge — top right, refined */}
      <div
        aria-hidden
        className="absolute top-28 right-[5vw] hidden md:flex flex-col items-end gap-1 text-bone/70 pointer-events-none animate-fade-in"
      >
        <span className="font-condensed text-[0.65rem] tracking-[0.5em] uppercase text-sun">Established</span>
        <span className="font-serif italic text-[2.5rem] leading-none text-bone">1995</span>
        <span className="font-condensed text-[0.6rem] tracking-[0.42em] uppercase text-bone/55">
          CSLB · {siteConfig.cslb}
        </span>
      </div>

      <div className="relative z-[2] w-full px-[5vw] pb-16 md:pb-20 pt-28 md:pt-36 max-w-[1400px] mx-auto">
        <div className="max-w-[920px] animate-rise-in">
          <span className="inline-flex items-center gap-2.5 bg-mesa/40 backdrop-blur border border-sun/30 text-sun rounded-full text-[0.74rem] font-bold py-[0.4rem] px-[1rem] mb-8 tracking-[0.18em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-clay animate-blink" aria-hidden />
            {hero.badge}
          </span>

          <h1 className="text-bone mb-7 text-shadow-warm">
            <span className="block font-display text-[clamp(3.4rem,9vw,9.5rem)] leading-[0.86] tracking-[0.005em]">
              Your Home
            </span>
            <span className="block font-serif italic text-[clamp(3.4rem,9.4vw,10rem)] leading-[0.86] tracking-[-0.01em] text-sun -mt-1">
              deserves
            </span>
            <span className="block font-display text-[clamp(3.4rem,9vw,9.5rem)] leading-[0.86] tracking-[0.005em]">
              the <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #E07B4A 0%, #D4A574 80%)',
                }}
              >best.</span>
            </span>
          </h1>

          <div className="grid md:grid-cols-[1.1fr_auto] gap-x-12 gap-y-6 items-end max-w-[1080px]">
            <p
              className="font-serif text-[1.25rem] md:text-[1.4rem] text-bone/85 leading-[1.55] max-w-[560px] [&_strong]:font-semibold [&_strong]:text-bone [&_strong]:not-italic"
              dangerouslySetInnerHTML={{ __html: hero.sub }}
            />

            {/* Stats row — editorial, mixed serif */}
            <ul className="flex gap-6 md:gap-8 list-none m-0 p-0 md:border-l md:border-sun/25 md:pl-8">
              {hero.stats.map((s) => (
                <li key={s.l}>
                  <div
                    className="font-serif italic text-[clamp(2.6rem,4.5vw,3.6rem)] leading-none bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, #F1E4CF 0%, #D4A574 100%)',
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[0.66rem] font-bold tracking-[0.22em] uppercase text-bone/55 mt-2 max-w-[88px] leading-tight">
                    {s.l}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="thin-rule my-10 max-w-[680px]" aria-hidden />

          <div className="flex flex-wrap gap-3 items-center">
            <Link href={hero.ctas.primary.href} className="btn-red">
              {hero.ctas.primary.label}
            </Link>
            <Link href={hero.ctas.secondary.href} className="btn-outline">
              {hero.ctas.secondary.label}
            </Link>
            <span className="ml-2 hidden sm:inline-block font-serif italic text-bone/55 text-[0.95rem]">
              or call <a className="text-sun hover:text-clay no-underline border-b border-sun/40" href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>
            </span>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-bone/70">
          <span className="text-[0.6rem] tracking-[0.42em] uppercase font-bold">Scroll</span>
          <span className="w-px h-12 bg-gradient-to-b from-sun/60 to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  );
}
