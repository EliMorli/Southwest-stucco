import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export function BlogTeaser() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="bg-mesa-fade py-24 px-[5vw] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">From the Blog</span>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] text-bone mt-3">
              30 Years of Stucco{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #E07B4A 0%, #D4A574 100%)',
                }}
              >
                Hard-Won Wisdom.
              </span>
            </h2>
          </div>
          <Link href="/blog" className="btn-outline self-start md:self-end">
            View all posts →
          </Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group bg-mesa-100/60 border border-sun/12 rounded-2xl overflow-hidden no-underline transition-all hover:border-clay/40 hover:-translate-y-1"
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
              <div className="p-6">
                <h3 className="font-bold text-bone text-[1.05rem] leading-snug group-hover:text-clay transition-colors">
                  {p.title}
                </h3>
                <p className="text-bone/60 text-[0.88rem] leading-[1.65] mt-2">
                  {p.description}
                </p>
                <p className="text-sun/75 text-[0.75rem] font-bold mt-4 tracking-wide">
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
