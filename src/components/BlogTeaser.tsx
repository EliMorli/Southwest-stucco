import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export function BlogTeaser() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="bg-sand-fade py-24 px-[5vw] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">From the Blog</span>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] text-mesa mt-3">
              30 Years of Stucco{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #C2562B 0%, #8C3A1E 100%)',
                }}
              >
                Hard-Won Wisdom.
              </span>
            </h2>
          </div>
          <Link href="/blog" className="btn-outline-dark self-start md:self-end">
            View all posts →
          </Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group bg-bone border border-adobe/15 rounded-2xl overflow-hidden no-underline transition-all hover:border-terracotta/40 hover:-translate-y-1 shadow-[0_10px_28px_-14px_rgba(41,29,20,0.25)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover brightness-95 group-hover:scale-[1.05] group-hover:brightness-105 transition-all duration-500"
                />
                <span className="absolute top-3 left-3 bg-mesa/90 backdrop-blur text-sun text-[0.7rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-sun/30">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-mesa text-[1.05rem] leading-snug group-hover:text-terracotta transition-colors">
                  {p.title}
                </h3>
                <p className="text-mesa/70 text-[0.88rem] leading-[1.65] mt-2">
                  {p.description}
                </p>
                <p className="text-adobe text-[0.75rem] font-bold mt-4 tracking-wide">
                  {p.readingMinutes} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
