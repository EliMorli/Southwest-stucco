import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { blogPosts, getPost } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `${siteConfig.url}/blog/${p.slug}`,
      type: 'article',
      publishedTime: p.publishedAt,
      images: [{ url: p.cover, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const p = getPost(slug);
  if (!p) notFound();

  const others = blogPosts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={p.category}
        title={p.title}
        sub={p.description}
        crumbs={[
          { label: 'Blog', href: '/blog' },
          { label: p.title },
        ]}
      />

      <section className="bg-mesa-fade py-16 px-[5vw]">
        <article className="max-w-[760px] mx-auto">
          <p className="text-sun/70 text-[0.78rem] font-bold tracking-[0.2em] uppercase mb-6">
            {new Date(p.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
            {' · '}
            {p.readingMinutes} min read
          </p>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-sun/15">
            <Image
              src={p.cover}
              alt={p.title}
              fill
              sizes="760px"
              className="object-cover"
              priority
            />
          </div>
          <div
            className="prose-sws text-bone/85 leading-[1.85] [&_h2]:font-display [&_h2]:text-bone [&_h2]:text-[1.7rem] [&_h2]:tracking-wide [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-bone [&_h3]:font-bold [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-2 [&_strong]:text-bone [&_a]:text-clay [&_a]:underline [&_a:hover]:text-sun"
            dangerouslySetInnerHTML={{ __html: p.body }}
          />
        </article>
      </section>

      <section className="bg-mesa py-20 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <header className="mb-10 text-center">
            <span className="eyebrow">Keep Reading</span>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] text-bone leading-[0.95] mt-3">
              More from the blog.
            </h2>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/blog/${o.slug}`}
                className="group bg-mesa-100/60 border border-sun/12 rounded-2xl overflow-hidden no-underline transition-all hover:border-clay/40 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={o.cover}
                    alt={o.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover brightness-90 group-hover:scale-[1.05] transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-bone text-[1rem] leading-snug group-hover:text-clay transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sun/70 text-[0.72rem] font-bold mt-3 tracking-wide">
                    {o.readingMinutes} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.description,
            datePublished: p.publishedAt,
            dateModified: p.updatedAt || p.publishedAt,
            url: `${siteConfig.url}/blog/${p.slug}`,
            image: `${siteConfig.url}${p.cover}`,
            author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
            publisher: {
              '@type': 'Organization',
              name: siteConfig.name,
              logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.png` },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/blog/${p.slug}` },
            articleSection: p.category,
          }),
        }}
      />

      <CtaStrip />
    </>
  );
}
