import Image from 'next/image';
import { about } from '@/lib/content';

export function About() {
  return (
    <section
      id="about"
      className="relative bg-mesa py-32 px-[5vw] overflow-hidden"
    >
      {/* Background sun glow */}
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
          <div className="section-num">01</div>
          <div>
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-sun/80 font-bold block mb-2">
              {about.eyebrow}
            </span>
            <div className="thin-rule max-w-[260px]" aria-hidden />
          </div>
        </header>

        <div className="grid md:grid-cols-12 gap-x-8 gap-y-14 items-start">
          {/* Big editorial title spanning the grid */}
          <h2 className="md:col-span-12 mb-2">
            <span className="block font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.005em] text-bone">
              A family that
            </span>
            <span className="block font-serif italic text-[clamp(3rem,7.2vw,7.2rem)] leading-[0.9] tracking-[-0.01em] text-sun -mt-2">
              takes pride
            </span>
            <span className="block font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.005em] text-bone">
              in <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #E07B4A 0%, #D4A574 100%)' }}>every wall.</span>
            </span>
          </h2>

          {/* Left: large editorial photo with floating number */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-sun/15 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
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
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-mesa-100/95 backdrop-blur border border-sun/25 px-6 py-4 rounded-sm shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)]">
              <div className="font-condensed text-[0.6rem] tracking-[0.4em] uppercase text-sun/80 font-bold">
                Family Owned
              </div>
              <div className="font-serif italic text-[2.4rem] leading-none text-bone mt-1">
                Since 1995
              </div>
            </div>
          </div>

          {/* Right: body copy and trust badges */}
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <p
              className="font-serif text-[1.35rem] md:text-[1.5rem] leading-[1.45] text-bone/90 mb-7 italic [&_strong]:not-italic [&_strong]:font-semibold [&_strong]:text-bone"
              dangerouslySetInnerHTML={{ __html: about.body1 }}
            />
            <div className="thin-rule mb-7 max-w-[200px]" aria-hidden />
            <p className="text-base text-bone/65 leading-[1.9] mb-10 max-w-[520px]">
              {about.body2}
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-2">
              {about.trustBadges.map((b) => (
                <div
                  key={b.strong}
                  className="bg-mesa-100/60 border border-sun/15 rounded-sm px-4 py-4 backdrop-blur-sm"
                >
                  <div
                    aria-hidden
                    className="font-serif italic text-[0.78rem] text-clay tracking-wide mb-1"
                  >
                    {b.icon}
                  </div>
                  <div className="font-condensed text-[0.65rem] font-bold tracking-[0.22em] uppercase text-sun/75">
                    {b.strong}
                  </div>
                  <div className="font-bold text-bone text-[0.92rem] mt-1 leading-tight">
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
            <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-sun/75 font-bold">
              Our Trades
            </span>
            <div className="thin-rule flex-1 ml-6" aria-hidden />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-sun/10 rounded-sm overflow-hidden">
            {about.services.map((s, i) => (
              <article
                key={s.name}
                className="relative bg-mesa-100 p-7 group hover:bg-terracotta/[0.10] transition-colors min-h-[230px] flex flex-col"
              >
                <div className="font-serif italic text-clay text-[1rem] mb-4">
                  0{i + 1}
                </div>
                <span className="text-[1.6rem] mb-3" aria-hidden>{s.icon}</span>
                <h3 className="font-display text-[1.4rem] tracking-wide text-bone mb-3">{s.name}</h3>
                <p className="text-[0.86rem] text-bone/55 leading-[1.7] flex-1">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
