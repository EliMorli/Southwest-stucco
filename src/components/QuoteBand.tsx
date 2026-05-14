import { quote } from '@/lib/content';

export function QuoteBand() {
  return (
    <section
      className="py-24 px-[5vw] text-center relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #8C3A1E 0%, #C2562B 45%, #E07B4A 100%)',
      }}
    >
      {/* Sun in upper background */}
      <div
        aria-hidden
        className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(250,243,231,0.30) 0%, rgba(212,165,116,0.15) 35%, transparent 65%)',
        }}
      />
      {/* Adobe brick stripes top/bottom */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-[4px]"
        style={{
          background:
            'linear-gradient(90deg, rgba(31,22,17,0.5) 0%, transparent 50%, rgba(31,22,17,0.5) 100%)',
        }}
      />

      <span
        aria-hidden
        className="absolute font-display leading-none pointer-events-none top-[-12%] left-1/2 -translate-x-1/2 select-none"
        style={{ fontSize: '32vw', color: 'rgba(31,22,17,0.10)' }}
      >
        &ldquo;
      </span>
      <blockquote className="relative z-[1] max-w-[1100px] mx-auto">
        <p
          className="font-display text-[clamp(2.2rem,4.5vw,4.8rem)] text-bone leading-[0.97] tracking-[0.03em] mb-4"
          style={{ textShadow: '0 3px 18px rgba(31,22,17,0.35)' }}
        >
          {quote.before}{' '}
          <span
            className="italic"
            style={{
              WebkitTextStroke: '2px rgba(250,243,231,0.95)',
              color: 'transparent',
            }}
          >
            {quote.middle}
          </span>
          <br />
          {quote.after}
        </p>
        <footer className="text-base italic text-bone/80 font-normal tracking-wide">
          {quote.attr}
        </footer>
      </blockquote>
    </section>
  );
}
