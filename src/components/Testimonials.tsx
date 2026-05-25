import { testimonials, aggregate } from '@/lib/testimonials';

export function Testimonials({
  variant = 'home',
  limit,
}: {
  variant?: 'home' | 'page';
  limit?: number;
}) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  const isHome = variant === 'home';
  return (
    <section
      id="reviews"
      className={`px-[5vw] relative overflow-hidden bg-sand-fade ${
        isHome ? 'py-28' : 'py-20'
      }`}
    >
      <div
        aria-hidden
        className="absolute -top-[15%] right-[5%] w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,165,116,0.30) 0%, transparent 65%)',
        }}
      />
      <div className="max-w-[1300px] mx-auto relative">
        {isHome && (
          <header className="grid md:grid-cols-[auto_1fr_auto] items-end gap-x-6 mb-14">
            <div className="section-num text-adobe">05</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-adobe font-bold block mb-2">
                Word of Mouth
              </span>
              <div className="thin-rule-dark max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.92] text-mesa">
                  What neighbors
                </span>
                <span
                  className="block font-serif italic text-[clamp(2.4rem,5.2vw,5.2rem)] leading-[0.92] -mt-1 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)',
                  }}
                >
                  are saying.
                </span>
              </h2>
            </div>
            <div className="text-right text-mesa/80 hidden md:block">
              <div className="text-terracotta text-xl tracking-widest" aria-hidden>
                ★★★★★
              </div>
              <div className="font-serif italic text-[1.6rem] text-mesa mt-1">
                {aggregate.ratingValue.toFixed(1)} / 5
              </div>
              <div className="font-condensed text-[0.65rem] tracking-[0.32em] uppercase text-adobe font-bold">
                {aggregate.reviewCount} reviews
              </div>
            </div>
          </header>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-adobe/15 rounded-sm overflow-hidden">
          {items.map((t) => (
            <article
              key={t.name + t.date}
              className="bg-bone p-8 flex flex-col shadow-[0_8px_24px_-12px_rgba(41,29,20,0.18)]"
            >
              <span className="text-adobe text-base tracking-widest mb-4" aria-hidden>
                {'★'.repeat(t.rating)}
              </span>
              <p className="font-serif italic text-mesa/85 leading-[1.55] text-[1.15rem] flex-1">
                &ldquo;{t.body}&rdquo;
              </p>
              <footer className="mt-6 pt-5 border-t border-adobe/15">
                <div className="font-bold text-mesa text-sm tracking-wide">{t.name}</div>
                <div className="font-condensed text-[0.7rem] text-adobe tracking-[0.22em] uppercase font-bold mt-0.5">
                  {t.city} · {t.service}
                </div>
              </footer>
            </article>
          ))}
        </div>

        {isHome && (
          <div className="text-center mt-10">
            <a href="/reviews" className="btn-outline-dark">Read all reviews</a>
          </div>
        )}
      </div>
    </section>
  );
}

export function ReviewSchema() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://southweststucco.net/#business',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregate.ratingValue.toFixed(1),
      reviewCount: aggregate.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: t.name },
      datePublished: t.date,
      reviewBody: t.body,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
