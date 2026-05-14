import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function CtaStrip({
  title = 'Ready for a free, no-pressure estimate?',
  sub = 'We respond within 24 hours — usually the same day.',
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section
      className="relative px-[5vw] py-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #8C3A1E 0%, #C2562B 50%, #E07B4A 100%)',
      }}
    >
      <div
        aria-hidden
        className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(250,243,231,0.25) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-[1] max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-wide text-bone">
            {title}
          </h2>
          <p className="text-bone/85 mt-2 text-[1rem] italic">{sub}</p>
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Link
            href="/contact"
            className="bg-bone text-adobe font-extrabold px-7 py-3.5 rounded-full no-underline tracking-wide shadow-[0_8px_22px_rgba(31,22,17,0.28)] hover:-translate-y-0.5 transition-transform"
          >
            Get a Free Estimate
          </Link>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="border-2 border-bone/70 text-bone font-extrabold px-7 py-3 rounded-full no-underline tracking-wide hover:bg-bone/10"
          >
            📞 {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
