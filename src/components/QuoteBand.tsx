import { quote } from '@/lib/content';

export function QuoteBand() {
  return (
    <section className="bg-red py-20 px-[5vw] text-center relative overflow-hidden">
      <span
        aria-hidden
        className="absolute font-display leading-none pointer-events-none top-[-10%] left-1/2 -translate-x-1/2"
        style={{ fontSize: '30vw', color: 'rgba(0,0,0,0.1)' }}
      >
        &ldquo;
      </span>
      <blockquote className="relative z-[1] max-w-[1100px] mx-auto">
        <p
          className="font-display text-[clamp(2.2rem,4.5vw,4.8rem)] text-white leading-[0.97] tracking-[0.03em] mb-3"
          style={{ textShadow: '0 3px 16px rgba(0,0,0,0.25)' }}
        >
          {quote.before}{' '}
          <span
            className="italic"
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.9)',
              color: 'transparent',
            }}
          >
            {quote.middle}
          </span>
          <br />
          {quote.after}
        </p>
        <footer className="text-base italic text-white/75 font-normal">{quote.attr}</footer>
      </blockquote>
    </section>
  );
}
