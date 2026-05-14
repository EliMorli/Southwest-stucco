import { whyUs } from '@/lib/content';

export function WhyUs() {
  return (
    <section id="why" className="bg-warm py-32 px-[5vw] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-16">
          <span className="font-condensed text-[0.72rem] font-bold tracking-[0.35em] uppercase text-red mb-3 inline-block">
            {whyUs.eyebrow}
          </span>
          <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] text-text">
            {whyUs.title.line1}
            <br />
            <span className="text-red">{whyUs.title.line2Red}</span>
          </h2>
          <p className="text-base text-[#666] mt-4 max-w-[500px] mx-auto leading-[1.7]">{whyUs.sub}</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.cards.map((c) => (
            <article
              key={c.title}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-b-4 border-red text-center transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
            >
              <span className="text-[2.6rem] mb-3 block" aria-hidden>
                {c.icon}
              </span>
              <h3 className="font-extrabold text-[1.1rem] text-text mb-2">{c.title}</h3>
              <p className="text-[0.88rem] text-[#666] leading-[1.7]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
