import Image from 'next/image';
import { hero } from '@/lib/content';

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-desert-dusk">
      {/* Soft sun glow on the right */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-desert-sun"
      />
      {/* Distant horizon haze */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-[40%] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(194,86,43,0.18) 60%, rgba(140,58,30,0.35) 100%)',
        }}
      />
      {/* Watermark SWS */}
      <div
        aria-hidden
        className="absolute -bottom-[5%] -left-[2%] font-display leading-none text-[28vw] select-none pointer-events-none"
        style={{ color: 'rgba(250,243,231,0.03)' }}
      >
        SWS
      </div>

      <div className="relative z-[2] grid md:grid-cols-[1.1fr_0.9fr] items-center w-full px-[5vw] pt-28 pb-20 gap-12">
        <div>
          <span className="inline-flex items-center gap-2 bg-sun/15 border border-sun/40 text-sun rounded-full text-[0.82rem] font-bold py-[0.4rem] px-[1.1rem] mb-6">
            <span className="w-2 h-2 rounded-full bg-clay animate-blink" aria-hidden />
            {hero.badge}
          </span>

          <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.92] tracking-[0.02em] text-bone mb-5">
            {hero.title.line1}
            <br />
            {hero.title.line2}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #E07B4A 0%, #D4A574 60%, #F1E4CF 100%)',
              }}
            >
              {hero.title.line3}
            </span>
          </h1>

          <p
            className="text-[1.08rem] text-bone/70 leading-[1.85] max-w-[480px] mb-4 [&_strong]:text-bone [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: hero.sub }}
          />

          <div className="flex items-center gap-3 bg-mesa-100/50 border-l-[3px] border-sun px-5 py-3 mb-10 rounded-r-lg max-w-[460px] backdrop-blur-sm">
            <span aria-hidden className="text-2xl flex-shrink-0">
              {hero.promiseIcon}
            </span>
            <p className="text-sm text-bone/75 italic leading-[1.5] m-0">{hero.promise}</p>
          </div>

          <div className="flex gap-4 flex-wrap items-center">
            <a href={hero.ctas.primary.href} className="btn-red">
              {hero.ctas.primary.label}
            </a>
            <a href={hero.ctas.secondary.href} className="btn-outline">
              {hero.ctas.secondary.label}
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-10 border-t border-sun/20">
            {hero.stats.map((s) => (
              <div key={s.l}>
                <div
                  className="font-display text-[3.2rem] leading-none bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, #E07B4A 0%, #D4A574 100%)',
                  }}
                >
                  {s.n}
                </div>
                <div className="text-[0.75rem] font-bold tracking-[0.08em] uppercase text-bone/50 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center relative z-[2]">
          <div className="relative w-[clamp(260px,32vw,440px)] aspect-square">
            {/* Sun behind logo */}
            <div
              aria-hidden
              className="absolute -inset-12 rounded-full sun-disc animate-sun-pulse pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -inset-5 rounded-full animate-spin-slow"
              style={{ border: '1px dashed rgba(212, 165, 116, 0.45)' }}
            />
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full animate-spin-slower"
              style={{ border: '1px solid rgba(224, 123, 74, 0.28)' }}
            />
            <div
              className="relative w-full h-full"
              style={{
                filter:
                  'drop-shadow(0 0 28px rgba(212,165,116,0.45)) drop-shadow(0 6px 22px rgba(31,22,17,0.7))',
              }}
            >
              <Image
                src="/logo.png"
                alt="Southwest Stucco Inc. — family-owned stucco contractor logo, est. 1995, Calabasas CA, CSLB #702110"
                fill
                sizes="(max-width: 768px) 280px, 440px"
                className="object-contain rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
