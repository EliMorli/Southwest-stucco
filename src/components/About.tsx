import { about } from '@/lib/content';

export function About() {
  return (
    <section
      id="about"
      className="bg-mesa-fade py-32 px-[5vw] grid md:grid-cols-2 gap-20 items-center relative overflow-hidden"
    >
      {/* Background sun glow */}
      <div
        aria-hidden
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(194,86,43,0.10) 0%, transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="absolute font-display leading-none pointer-events-none select-none -right-[5%] -bottom-[10%]"
        style={{ fontSize: '30vw', color: 'rgba(212,165,116,0.04)' }}
      >
        SWS
      </div>

      <div className="relative">
        <span className="eyebrow">{about.eyebrow}</span>
        <h2 className="section-title text-bone mt-3 mb-6 font-display">
          {about.title.line1}
          <br />
          {about.title.line2}
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #E07B4A 0%, #D4A574 100%)',
            }}
          >
            {about.title.line3Red}
          </span>
        </h2>
        <p
          className="text-base text-bone/65 leading-[1.9] mb-4 [&_strong]:text-bone [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: about.body1 }}
        />
        <p className="text-base text-bone/65 leading-[1.9] mb-8">{about.body2}</p>

        <div className="flex gap-3 flex-wrap mb-2">
          {about.trustBadges.map((b) => (
            <div
              key={b.strong}
              className="flex items-center gap-2.5 bg-mesa-100/60 border border-sun/15 rounded-lg px-4 py-[0.6rem] backdrop-blur-sm"
            >
              <span className="text-[1.2rem]" aria-hidden>
                {b.icon}
              </span>
              <div className="text-[0.78rem] font-bold text-bone/75 leading-tight">
                <strong className="block text-bone text-[0.85rem]">{b.strong}</strong>
                {b.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
        {about.services.map((s) => (
          <article
            key={s.name}
            className="relative bg-mesa-100/60 border border-sun/10 rounded-xl p-7 transition-all hover:bg-terracotta/[0.10] hover:border-clay/40 hover:-translate-y-1 group overflow-hidden"
          >
            {/* corner glow */}
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  'radial-gradient(circle, rgba(224,123,74,0.35) 0%, transparent 70%)',
              }}
            />
            <div className="flex items-center gap-3 mb-3 relative">
              <span className="text-[1.8rem]" aria-hidden>
                {s.icon}
              </span>
              <h3 className="font-extrabold text-base text-bone m-0">{s.name}</h3>
            </div>
            <p className="text-[0.84rem] text-bone/55 leading-[1.65] relative">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
