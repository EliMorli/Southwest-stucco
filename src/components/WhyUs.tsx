import { whyUs } from '@/lib/content';

export function WhyUs() {
  return (
    <section
      id="why"
      className="bg-sand-fade py-32 px-[5vw] relative overflow-hidden"
    >
      {/* Soft sun behind heading */}
      <div
        aria-hidden
        className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[480px] h-[480px] sun-disc rounded-full pointer-events-none opacity-60"
      />
      {/* Decorative adobe stripe at top */}
      <div aria-hidden className="adobe-stripe h-[6px] absolute top-0 inset-x-0 opacity-90" />

      <div className="max-w-[1200px] mx-auto relative">
        <header className="text-center mb-16">
          <span className="font-condensed text-[0.72rem] font-bold tracking-[0.38em] uppercase text-terracotta mb-3 inline-block">
            {whyUs.eyebrow}
          </span>
          <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] text-mesa">
            {whyUs.title.line1}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #8C3A1E 0%, #C2562B 60%, #E07B4A 100%)',
              }}
            >
              {whyUs.title.line2Red}
            </span>
          </h2>
          <p className="text-base text-mesa/65 mt-4 max-w-[520px] mx-auto leading-[1.7]">{whyUs.sub}</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.cards.map((c) => (
            <article
              key={c.title}
              className="adobe-card p-8 text-center transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_44px_-12px_rgba(140,58,30,0.35)]"
            >
              <span
                className="inline-flex items-center justify-center w-[64px] h-[64px] rounded-full mb-4 text-[2rem] bg-gradient-to-br from-sun/40 to-terracotta/10 border border-terracotta/15"
                aria-hidden
              >
                {c.icon}
              </span>
              <h3 className="font-extrabold text-[1.1rem] text-mesa mb-2">{c.title}</h3>
              <p className="text-[0.88rem] text-mesa/65 leading-[1.7]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
