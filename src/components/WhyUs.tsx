import { whyUs } from '@/lib/content';

export function WhyUs() {
  return (
    <section
      id="why"
      className="relative plaster-bg py-32 px-[5vw] overflow-hidden"
    >
      <div aria-hidden className="adobe-stripe h-[5px] absolute top-0 inset-x-0 opacity-95" />

      <div className="relative max-w-[1300px] mx-auto">
        {/* Header */}
        <header className="grid md:grid-cols-[auto_1fr_auto] items-end gap-x-6 mb-16">
          <div className="section-num text-adobe">02</div>
          <div>
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-terracotta font-bold block mb-2">
              {whyUs.eyebrow}
            </span>
            <div className="thin-rule-dark max-w-[260px]" aria-hidden />
          </div>
          <p className="hidden md:block font-serif italic text-mesa/65 text-[1.05rem] max-w-[260px] leading-snug">
            {whyUs.sub}
          </p>
        </header>

        <h2 className="mb-16">
          <span className="block font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.92] tracking-[0.005em] text-mesa">
            We do things
          </span>
          <span
            className="block font-serif italic text-[clamp(2.6rem,6.2vw,6.2rem)] leading-[0.92] tracking-[-0.01em] -mt-1 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #8C3A1E 0%, #C2562B 60%, #E07B4A 100%)',
            }}
          >
            the right way.
          </span>
        </h2>

        {/* Editorial numbered grid */}
        <ol className="grid md:grid-cols-2 gap-x-12 gap-y-10 list-none p-0 m-0 stagger">
          {whyUs.cards.map((c, i) => (
            <li
              key={c.title}
              className="grid grid-cols-[auto_1fr] gap-x-6 items-start animate-rise-in pt-6 border-t border-adobe/15"
            >
              <span className="font-serif italic text-[3rem] leading-none text-terracotta select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-[1.7rem] tracking-wide text-mesa mb-2 leading-tight">
                  {c.title}
                </h3>
                <p className="text-[0.96rem] text-mesa/70 leading-[1.75] max-w-[460px]">
                  {c.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
