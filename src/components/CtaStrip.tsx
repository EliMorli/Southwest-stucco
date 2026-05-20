import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function CtaStrip({
  title = 'Ready for a free estimate?',
  italic = 'no pressure.',
  sub = 'We respond within 24 hours — usually the same day.',
}: {
  title?: string;
  italic?: string;
  sub?: string;
}) {
  return (
    <section
      className="relative px-[5vw] py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #8C3A1E 0%, #C2562B 50%, #E07B4A 100%)',
      }}
    >
      <div
        aria-hidden
        className="absolute -top-[60%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(250,243,231,0.20) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto grid md:grid-cols-[1.4fr_auto] gap-10 items-end">
        <div>
          <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-bone/70 font-bold block mb-4">
            Free Estimate
          </span>
          <h2 className="m-0">
            <span className="block font-display text-[clamp(2.2rem,5.5vw,5rem)] leading-[0.95] tracking-wide text-bone">
              {title}
            </span>
            <span className="block font-serif italic text-[clamp(2.2rem,5.5vw,5rem)] leading-[0.95] -mt-1 text-bone/90">
              {italic}
            </span>
          </h2>
          <p className="font-serif italic text-bone/80 mt-5 text-[1.15rem] max-w-[480px]">{sub}</p>
        </div>
        <div className="flex flex-col gap-3 items-stretch md:items-end">
          <Link
            href="/contact"
            className="bg-bone text-adobe font-extrabold px-8 py-4 rounded-full no-underline tracking-[0.04em] text-center shadow-[0_12px_30px_rgba(41,29,20,0.32)] hover:-translate-y-0.5 transition-transform"
          >
            Get a Free Estimate
          </Link>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="border-2 border-bone/70 text-bone font-extrabold px-8 py-3.5 rounded-full no-underline tracking-[0.04em] text-center hover:bg-bone/10"
          >
            📞 {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
