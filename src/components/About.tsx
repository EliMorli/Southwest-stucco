import { about } from '@/lib/content';

export function About() {
  return (
    <section
      id="about"
      className="bg-ink-50 py-32 px-[5vw] grid md:grid-cols-2 gap-20 items-center relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute font-display leading-none pointer-events-none select-none -right-[5%] -bottom-[10%]"
        style={{ fontSize: '30vw', color: 'rgba(204,27,27,0.025)' }}
      >
        SWS
      </div>

      <div className="relative">
        <span className="eyebrow">{about.eyebrow}</span>
        <h2 className="section-title text-white mt-3 mb-6 font-display">
          {about.title.line1}
          <br />
          {about.title.line2}
          <br />
          <span className="text-red">{about.title.line3Red}</span>
        </h2>
        <p
          className="text-base text-white/60 leading-[1.9] mb-4 [&_strong]:text-white [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: about.body1 }}
        />
        <p className="text-base text-white/60 leading-[1.9] mb-8">{about.body2}</p>

        <div className="flex gap-3 flex-wrap mb-2">
          {about.trustBadges.map((b) => (
            <div
              key={b.strong}
              className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-4 py-[0.6rem]"
            >
              <span className="text-[1.2rem]" aria-hidden>
                {b.icon}
              </span>
              <div className="text-[0.78rem] font-bold text-white/70 leading-tight">
                <strong className="block text-white text-[0.85rem]">{b.strong}</strong>
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
            className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-7 transition-all hover:bg-red/[0.08] hover:border-red/30 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[1.8rem]" aria-hidden>
                {s.icon}
              </span>
              <h3 className="font-extrabold text-base text-white m-0">{s.name}</h3>
            </div>
            <p className="text-[0.84rem] text-white/45 leading-[1.65]">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
