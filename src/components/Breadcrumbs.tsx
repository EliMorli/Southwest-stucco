import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ label: 'Home', href: '/' }, ...trail];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${siteConfig.url}${c.href}` } : {}),
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[0.78rem] tracking-wide text-bone/55 mb-6"
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className="hover:text-clay no-underline">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className="text-bone/85">
                  {c.label}
                </span>
              )}
              {!last && <span aria-hidden className="text-sun/75">/</span>}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </nav>
  );
}
