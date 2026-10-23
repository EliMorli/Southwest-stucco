import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { questions, getQuestion, relatedQuestions } from '@/lib/questions';
import { getService } from '@/lib/services';
import { getArea } from '@/lib/areas';
import { getPost } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';
import { primaryAuthor } from '@/lib/authors';

export function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const q = getQuestion(slug);
  if (!q) return {};
  return {
    title: q.question,
    description: q.description,
    alternates: { canonical: `/questions/${q.slug}` },
    openGraph: {
      title: q.question,
      description: q.description,
      url: `${siteConfig.url}/questions/${q.slug}`,
      type: 'article',
      modifiedTime: q.updatedAt,
    },
  };
}

export default async function QuestionPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const q = getQuestion(slug);
  if (!q) notFound();

  const related = relatedQuestions(q);
  const links = [
    ...q.services.map(getService).filter((s) => !!s).map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
    ...(q.areas || []).map(getArea).filter((a) => !!a).map((a) => ({ href: `/service-areas/${a.slug}`, label: `Stucco in ${a.city}` })),
    ...(q.posts || []).map(getPost).filter((p) => !!p).map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
  ];
  const url = `${siteConfig.url}/questions/${q.slug}`;

  return (
    <>
      <PageHero
        eyebrow={q.category}
        title={q.question}
        crumbs={[{ label: 'Questions', href: '/questions' }, { label: q.question }]}
      />

      <section className="bg-sand-fade py-16 px-[5vw]">
        <article className="max-w-[760px] mx-auto">
          <div className="bg-bone border border-adobe/15 border-l-4 border-l-terracotta rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="font-condensed text-[0.72rem] tracking-[0.32em] uppercase text-adobe font-bold mb-3">
              Short answer
            </h2>
            <p className="text-mesa text-[1.1rem] leading-[1.75] m-0">{q.short}</p>
          </div>

          <div
            className="prose-sws text-mesa/85 leading-[1.85] [&_h2]:font-display [&_h2]:text-mesa [&_h2]:text-[1.7rem] [&_h2]:tracking-wide [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-mesa [&_h3]:font-bold [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-2 [&_strong]:text-mesa [&_a]:text-adobe [&_a]:underline [&_table]:w-full [&_table]:my-6 [&_table]:text-left [&_table]:text-[0.92rem] [&_th]:font-bold [&_th]:text-mesa [&_th]:py-2 [&_th]:px-3 [&_th]:border-b [&_th]:border-adobe/25 [&_td]:py-2 [&_td]:px-3 [&_td]:border-b [&_td]:border-adobe/15 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: q.body }}
          />

          <p className="mt-12 pt-6 border-t border-adobe/15 text-mesa/70 text-[0.9rem]">
            Answered by <Link href="/about" className="text-adobe underline">{primaryAuthor.name}</Link>,{' '}
            {siteConfig.name} — CSLB License #{siteConfig.cslb}. Last reviewed{' '}
            <time dateTime={q.updatedAt}>
              {new Date(q.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
            </time>
            .
          </p>

          {links.length > 0 && (
            <nav aria-label="Related pages" className="mt-10">
              <h2 className="font-display text-[1.5rem] tracking-wide text-mesa mb-4">Related</h2>
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block bg-bone border border-adobe/20 rounded-full px-4 py-2 text-[0.88rem] text-adobe no-underline hover:border-terracotta"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </section>

      <section className="bg-bone py-20 px-[5vw]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] text-mesa leading-[0.95] mb-8 text-center">
            More questions, answered.
          </h2>
          <ul className="grid md:grid-cols-2 gap-5 list-none m-0 p-0">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/questions/${r.slug}`}
                  className="group block h-full bg-bone border border-adobe/15 rounded-2xl p-6 no-underline transition-all hover:border-terracotta/40"
                >
                  <h3 className="font-bold text-mesa text-[1rem] leading-snug group-hover:text-terracotta transition-colors">
                    {r.question}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8">
            <Link href="/questions" className="btn-outline-dark">All stucco questions</Link>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            url,
            dateModified: q.updatedAt,
            inLanguage: 'en-US',
            author: { '@id': `${siteConfig.url}/#author` },
            publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
            mainEntity: [
              {
                '@type': 'Question',
                name: q.question,
                acceptedAnswer: { '@type': 'Answer', text: q.short, url },
              },
            ],
          }),
        }}
      />

      <CtaStrip />
    </>
  );
}
