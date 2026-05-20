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
      className={`px-[5vw] relative overflow-hidden ${
        isHome ? 'bg-mesa-fade py-28' : 'bg-mesa-fade py-20'
      }`}
    >
      <div
        aria-hidden
        className="absolute -top-[15%] right-[5%] w-[460px] h-[460px] rounded-full pointer-events-none sun-disc opacity-50"
      />
      <div className="max-w-[1300px] mx-auto relative">
        {isHome && (
          <header className="grid md:grid-cols-[auto_1fr_auto] items-end gap-x-6 mb-14">
            <div className="section-num">05</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-sun/80 font-bold block mb-2">
                Word of Mouth
              </span>
              <div className="thin-rule max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.92] text-bone">
                  What neighbors
                </span>
                <span className="block font-serif italic text-[clamp(2.4rem,5.2vw,5.2rem)] leading-[0.92] -mt-1 text-sun">
                  are saying.
                </span>
              </h2>
            </div>
            <div className="text-right text-bone/75 hidden md:block">
              <div className="text-clay text-xl tracking-widest" aria-hidden>
                ★★★★★
              </div>
              <div className="font-serif italic text-[1.6rem] text-bone mt-1">
                {aggregate.ratingValue.toFixed(1)} / 5
              </div>
              <div className="font-condensed text-[0.65rem] tracking-[0.32em] uppercase text-sun/75 font-bold">
                {aggregate.reviewCount} reviews
              </div>
            </div>
          </header>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-sun/10 rounded-sm overflow-hidden">
          {items.map((t) => (
            <article
              key={t.name + t.date}
              className="bg-mesa-100/80 p-8 backdrop-blur-sm flex flex-col"
            >
              <span className="text-clay text-base tracking-widest mb-4" aria-hidden>
                {'★'.repeat(t.rating)}
              </span>
              <p className="font-serif italic text-bone/90 leading-[1.55] text-[1.15rem] flex-1">
                &ldquo;{t.body}&rdquo;
              </p>
              <footer className="mt-6 pt-5 border-t border-sun/15">
                <div className="font-bold text-bone text-sm tracking-wide">{t.name}</div>
                <div className="font-condensed text-[0.7rem] text-sun/75 tracking-[0.22em] uppercase font-bold mt-0.5">
                  {t.city} · {t.service}
                </div>
              </footer>
            </article>
          ))}
        </div>

        {isHome && (
          <div className="text-center mt-10">
            <a href="/reviews" className="btn-outline">Read all reviews</a>
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
