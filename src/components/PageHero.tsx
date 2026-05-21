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
  return (
    <section className="relative bg-sand-fade pt-36 pb-20 px-[5vw] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(194,86,43,0.10) 0%, transparent 55%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-[10%] -left-[5%] font-serif italic text-[18vw] leading-none text-adobe/[0.035] pointer-events-none select-none"
      >
        sws
      </div>

      <div className="relative z-[1] max-w-[1300px] mx-auto animate-rise-in">
        <Breadcrumbs trail={crumbs} variant="light" />
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-terracotta to-adobe" aria-hidden />
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="text-mesa max-w-[1000px]">
          <span className="block font-display text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.95] tracking-[0.005em]">
            {title}
          </span>
          {italicTitle && (
            <span
              className="block font-serif italic text-[clamp(2.2rem,5.2vw,5rem)] leading-[0.95] tracking-[-0.01em] -mt-1 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)',
              }}
            >
              {italicTitle}
            </span>
          )}
        </h1>
        {sub && (
          <p className="font-serif italic text-[1.2rem] text-mesa/75 leading-[1.55] max-w-[680px] mt-6">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
