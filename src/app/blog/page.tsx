import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { blogPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Stucco Blog | Tips, Pricing, How-Tos | Southwest Stucco',
  description:
    'Honest, practical articles about stucco — pricing, repair, finishes, hiring contractors, and what to expect on a residential project. Written by a 30-year California stucco contractor.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="From the Blog"
        title="Stucco Wisdom From the People Holding the Trowel."
        sub="Honest, evergreen articles about stucco pricing, repair, finishes, and the homeowner experience — written by people who actually do the work."
        crumbs={[{ label: 'Blog' }]}
      />
      <section className="bg-mesa-fade py-20 px-[5vw]">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group bg-mesa-100/60 border border-sun/12 rounded-2xl overflow-hidden no-underline transition-all hover:border-clay/40 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover brightness-90 group-hover:scale-[1.05] group-hover:brightness-105 transition-all duration-500"
                />
                <span className="absolute top-3 left-3 bg-mesa/85 backdrop-blur text-sun text-[0.7rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-sun/25">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="font-bold text-bone text-[1.1rem] leading-snug group-hover:text-clay transition-colors">
                  {p.title}
                </h2>
                <p className="text-bone/60 text-[0.9rem] leading-[1.7] mt-2 flex-1">{p.description}</p>
                <p className="text-sun/75 text-[0.75rem] font-bold mt-4 tracking-wide">
                  {new Date(p.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                  {' · '}
                  {p.readingMinutes} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            url: `${siteConfig.url}/blog`,
            name: `${siteConfig.name} Blog`,
            blogPost: blogPosts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              datePublished: p.publishedAt,
              url: `${siteConfig.url}/blog/${p.slug}`,
              image: `${siteConfig.url}${p.cover}`,
              author: { '@type': 'Organization', name: siteConfig.name },
            })),
          }),
        }}
      />

      <CtaStrip />
    </>
  );
}
