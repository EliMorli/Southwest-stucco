import { Breadcrumbs, type Crumb } from './Breadcrumbs';

export function PageHero({
  eyebrow,
  title,
  sub,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative bg-desert-dusk pt-32 pb-16 px-[5vw] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-desert-sun"
      />
      <div className="relative z-[1] max-w-[1200px] mx-auto">
        <Breadcrumbs trail={crumbs} />
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-[0.02em] text-bone mt-3 mb-4 max-w-[900px]">
          {title}
        </h1>
        {sub && (
          <p className="text-[1.05rem] text-bone/70 leading-[1.75] max-w-[680px]">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
