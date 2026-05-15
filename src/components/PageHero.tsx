import { Breadcrumbs, type Crumb } from './Breadcrumbs';

export function PageHero({
  eyebrow,
  title,
  italicTitle,
  sub,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  italicTitle?: string;
  sub?: string;
  crumbs: Crumb[];
}) {
  // If italicTitle isn't provided, try to split the title on a period/em-dash for nice rhythm
  const display = italicTitle ? { lead: title, accent: italicTitle } : { lead: title, accent: '' };

  return (
    <section className="relative bg-mesa pt-36 pb-20 px-[5vw] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(212,165,116,0.16) 0%, transparent 55%), linear-gradient(180deg, #1F1611 0%, #2A1F18 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-[10%] -left-[5%] font-serif italic text-[18vw] leading-none text-bone/[0.025] pointer-events-none select-none"
      >
        sws
      </div>

      <div className="relative z-[1] max-w-[1300px] mx-auto animate-rise-in">
        <Breadcrumbs trail={crumbs} />
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-clay to-sun" aria-hidden />
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-sun font-bold">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="text-bone max-w-[1000px]">
          <span className="block font-display text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.95] tracking-[0.005em]">
            {display.lead}
          </span>
          {display.accent && (
            <span className="block font-serif italic text-[clamp(2.2rem,5.2vw,5rem)] leading-[0.95] tracking-[-0.01em] text-sun -mt-1">
              {display.accent}
            </span>
          )}
        </h1>
        {sub && (
          <p className="font-serif italic text-[1.2rem] text-bone/75 leading-[1.55] max-w-[680px] mt-6">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
