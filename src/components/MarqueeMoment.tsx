import Image from 'next/image';

export function MarqueeMoment({
  image,
  pretitle,
  quote,
  attribution,
}: {
  image: string;
  pretitle?: string;
  quote: string;
  attribution?: string;
}) {
  return (
    <section className="relative h-[80vh] min-h-[520px] flex items-center overflow-hidden bg-mesa">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,22,17,0.55) 0%, rgba(31,22,17,0.35) 50%, rgba(140,58,30,0.75) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(212,165,116,0.18) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-[1] w-full px-[5vw] max-w-[1400px] mx-auto">
        {pretitle && (
          <span className="font-condensed text-[0.7rem] tracking-[0.5em] uppercase text-sun mb-6 inline-block font-bold">
            {pretitle}
          </span>
        )}
        <blockquote className="m-0">
          <p className="font-serif italic text-[clamp(2rem,5.5vw,5rem)] leading-[1.05] text-bone max-w-[1000px] text-shadow-warm">
            <span className="text-clay text-shadow-warm">&ldquo;</span>
            {quote}
            <span className="text-clay text-shadow-warm">&rdquo;</span>
          </p>
          {attribution && (
            <footer className="mt-8 flex items-center gap-4">
              <span className="w-12 h-px bg-sun/70" aria-hidden />
              <span className="font-condensed text-[0.7rem] tracking-[0.35em] uppercase text-sun/85 font-bold">
                {attribution}
              </span>
            </footer>
          )}
        </blockquote>
      </div>
    </section>
  );
}
