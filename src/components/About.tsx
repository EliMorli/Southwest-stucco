import Image from 'next/image';
import { about } from '@/lib/content';

export function About() {
  return (
    <section
      id="about"
      className="relative bg-sand-fade py-32 px-[5vw] overflow-hidden"
    >
      {/* Background warm glow */}
      <div
        aria-hidden
        className="absolute -top-[20%] -right-[15%] w-[65vw] h-[65vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(194,86,43,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section header — editorial */}
        <header className="grid md:grid-cols-[auto_1fr] items-end gap-x-6 mb-16">
          <div className="section-num text-adobe">01</div>
          <div>
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
              {about.eyebrow}
            </span>
            <div className="thin-rule-dark max-w-[260px]" aria-hidden />
          </div>
        </header>

        <div className="grid md:grid-cols-12 gap-x-8 gap-y-14 items-start">
          {/* Big editorial title spanning the grid */}
          <h2 className="md:col-span-12 mb-2">
            <span className="block font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.005em] text-mesa">
              A family that
            </span>
            <span
              className="block font-serif italic text-[clamp(3rem,7.2vw,7.2rem)] leading-[0.9] tracking-[-0.01em] -mt-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)',
              }}
            >
              takes pride
            </span>
            <span className="block font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.005em] text-mesa">
              in <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)' }}
              >every wall.</span>
            </span>
          </h2>

          {/* Left: large editorial photo with floating number */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-adobe/15 shadow-[0_30px_60px_-30px_rgba(41,29,20,0.45)]">
              <Image
                src="/gallery/gallery-07.jpg"
                alt="Southwest Stucco crew finishing a wall"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(41,29,20,0.45) 100%)',
                }}
              />
            </div>
            {/* Floating year tag */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-bone border border-adobe/20 px-6 py-4 rounded-sm shadow-[0_24px_60px_-24px_rgba(41,29,20,0.35)]">
              <div className="font-condensed text-[0.6rem] tracking-[0.4em] uppercase text-adobe font-bold">
                Family Owned
              </div>
              <div className="font-serif italic text-[2.4rem] leading-none text-mesa mt-1">
                Since 1995
              </div>
            </div>
          </div>

          {/* Right: body copy and trust badges */}
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <p
              className="font-serif text-[1.35rem] md:text-[1.5rem] leading-[1.45] text-mesa/85 mb-7 italic [&_strong]:not-italic [&_strong]:font-semibold [&_strong]:text-mesa"
              dangerouslySetInnerHTML={{ __html: about.body1 }}
            />
            <div className="thin-rule-dark mb-7 max-w-[200px]" aria-hidden />
            <p className="text-base text-mesa/70 leading-[1.9] mb-10 max-w-[520px]">
              {about.body2}
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-2">
              {about.trustBadges.map((b) => (
                <div
                  key={b.strong}
                  className="bg-bone border border-adobe/15 rounded-sm px-4 py-4 shadow-[0_6px_18px_-8px_rgba(41,29,20,0.18)]"
                >
                  <div
                    aria-hidden
                    className="font-serif italic text-[0.78rem] text-terracotta tracking-wide mb-1"
                  >
                    {b.icon}
                  </div>
                  <div className="font-condensed text-[0.65rem] font-bold tracking-[0.22em] uppercase text-adobe">
                    {b.strong}
                  </div>
                  <div className="font-bold text-mesa text-[0.92rem] mt-1 leading-tight">
                    {b.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services row — large editorial blocks under the about story */}
        <div className="mt-24">
          <div className="flex items-end justify-between gap-4 mb-8">
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold">
              Our Trades
            </span>
            <div className="thin-rule-dark flex-1 ml-6" aria-hidden />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-adobe/15 rounded-sm overflow-hidden">
            {about.services.map((s, i) => (
              <article
                key={s.name}
                className="relative bg-bone p-7 group hover:bg-terracotta/[0.06] transition-colors min-h-[230px] flex flex-col"
              >
                <div className="font-serif italic text-adobe text-[1rem] mb-4">
                  0{i + 1}
                </div>
                <span className="text-[1.6rem] mb-3" aria-hidden>{s.icon}</span>
                <h3 className="font-display text-[1.4rem] tracking-wide text-mesa mb-3">{s.name}</h3>
                <p className="text-[0.86rem] text-mesa/70 leading-[1.7] flex-1">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
