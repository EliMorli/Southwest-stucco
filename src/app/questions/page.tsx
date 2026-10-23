import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { questions, questionCategories } from '@/lib/questions';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Stucco Questions Answered | Cost, Repair, Contractors in Los Angeles',
  description:
    'Straight answers to the stucco questions Los Angeles homeowners ask most — cost, cracks, water damage, permits, fire resistance, and how to choose a contractor.',
  alternates: { canonical: '/questions' },
};

export default function QuestionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stucco Questions"
        title="Ask a Stucco Contractor."
        sub="The questions we hear every week from Los Angeles homeowners — each answered on its own page by a family that has been doing this since 1995."
        crumbs={[{ label: 'Questions' }]}
      />

      <section className="bg-sand-fade py-20 px-[5vw]">
        <div className="max-w-[1100px] mx-auto space-y-16">
          {questionCategories.map((cat) => {
            const items = questions.filter((q) => q.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] tracking-wide text-mesa mb-6">
                  {cat}
                </h2>
                <ul className="grid md:grid-cols-2 gap-5 list-none m-0 p-0">
                  {items.map((q) => (
                    <li key={q.slug}>
                      <Link
                        href={`/questions/${q.slug}`}
                        className="group block h-full bg-bone border border-adobe/15 rounded-2xl p-6 no-underline transition-all hover:border-terracotta/40 hover:-translate-y-1"
                      >
                        <h3 className="font-bold text-mesa text-[1.05rem] leading-snug group-hover:text-terracotta transition-colors">
                          {q.question}
                        </h3>
                        <p className="text-mesa/70 text-[0.9rem] leading-[1.65] mt-3 line-clamp-3">
                          {q.short}
                        </p>
                        <span className="text-adobe text-sm font-bold mt-4 inline-block">Read the answer →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <p className="text-center text-mesa/75">
            Looking for something else? See the <Link href="/faq" className="text-adobe underline">general FAQ</Link>,
            the <Link href="/blog" className="text-adobe underline">blog</Link>, or call{' '}
            <a href={`tel:${siteConfig.phoneE164}`} className="text-adobe underline">{siteConfig.phone}</a>.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Stucco questions answered by Southwest Stucco Inc.',
            itemListElement: questions.map((q, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${siteConfig.url}/questions/${q.slug}`,
              name: q.question,
            })),
          }),
        }}
      />

      <CtaStrip />
    </>
  );
}
