import Image from 'next/image';
import { hero } from '@/lib/content';

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(204,27,27,0.12) 0%, transparent 65%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-[5%] -left-[2%] font-display leading-none text-[28vw] select-none pointer-events-none"
        style={{ color: 'rgba(255,255,255,0.015)' }}
      >
        SWS
      </div>

      <div className="relative z-[2] grid md:grid-cols-[1.1fr_0.9fr] items-center w-full px-[5vw] pt-28 pb-20 gap-12">
        <div>
          <span className="inline-flex items-center gap-2 bg-red/15 border border-red/40 text-[#ffaaaa] rounded-full text-[0.82rem] font-bold py-[0.4rem] px-[1.1rem] mb-6">
            <span className="w-2 h-2 rounded-full bg-red animate-blink" aria-hidden />
            {hero.badge}
          </span>

          <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.92] tracking-[0.02em] text-white mb-5">
            {hero.title.line1}
            <br />
            {hero.title.line2}
            <br />
            <span className="text-red">{hero.title.line3}</span>
          </h1>

          <p
            className="text-[1.08rem] text-white/60 leading-[1.85] max-w-[480px] mb-4 [&_strong]:text-white [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: hero.sub }}
          />

          <div className="flex items-center gap-3 bg-white/[0.04] border-l-[3px] border-red px-5 py-3 mb-10 rounded-r-lg max-w-[460px]">
            <span aria-hidden className="text-2xl flex-shrink-0">
              {hero.promiseIcon}
            </span>
            <p className="text-sm text-white/65 italic leading-[1.5] m-0">{hero.promise}</p>
          </div>

          <div className="flex gap-4 flex-wrap items-center">
            <a href={hero.ctas.primary.href} className="btn-red">
              {hero.ctas.primary.label}
            </a>
            <a href={hero.ctas.secondary.href} className="btn-outline">
              {hero.ctas.secondary.label}
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-10 border-t border-white/[0.07]">
            {hero.stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-[3.2rem] text-red leading-none">{s.n}</div>
                <div className="text-[0.75rem] font-bold tracking-[0.08em] uppercase text-white/40 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center relative z-[2]">
          <div className="relative w-[clamp(260px,32vw,440px)] aspect-square">
            <div
              aria-hidden
              className="absolute -inset-5 rounded-full animate-spin-slow"
              style={{ border: '1px dashed rgba(204,27,27,0.3)' }}
            />
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full animate-spin-slower"
              style={{ border: '1px solid rgba(255,215,0,0.18)' }}
            />
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full animate-halo-pulse pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(204,27,27,0.18) 0%, transparent 65%)',
              }}
            />
            <div
              className="relative w-full h-full"
              style={{
                filter:
                  'drop-shadow(0 0 24px rgba(204,27,27,0.45)) drop-shadow(0 6px 18px rgba(0,0,0,0.9))',
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
