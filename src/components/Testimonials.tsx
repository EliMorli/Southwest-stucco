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
      <div className="max-w-[1200px] mx-auto relative">
        {isHome && (
          <header className="text-center mb-14">
            <span className="eyebrow">Word of Mouth</span>
            <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] text-bone mt-3">
              What Neighbors{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #E07B4A 0%, #D4A574 100%)',
                }}
              >
                Are Saying.
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5 text-bone/75">
              <span className="text-clay text-xl tracking-widest" aria-hidden>
                ★★★★★
              </span>
              <span className="text-sm font-bold tracking-wide">
                {aggregate.ratingValue.toFixed(1)} / 5 · {aggregate.reviewCount} reviews
              </span>
            </div>
          </header>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t) => (
            <article
              key={t.name + t.date}
              className="bg-mesa-100/60 border border-sun/12 rounded-2xl p-7 backdrop-blur-sm flex flex-col"
            >
              <span className="text-clay text-base tracking-widest mb-3" aria-hidden>
                {'★'.repeat(t.rating)}
              </span>
              <p className="text-bone/80 leading-[1.7] text-[0.94rem] flex-1">{t.body}</p>
              <footer className="mt-5 pt-4 border-t border-sun/10">
                <div className="font-bold text-bone text-sm">{t.name}</div>
                <div className="text-[0.8rem] text-sun/70">{t.city} · {t.service}</div>
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
