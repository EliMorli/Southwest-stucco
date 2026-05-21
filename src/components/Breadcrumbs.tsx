import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  trail,
  variant = 'dark',
}: {
  trail: Crumb[];
  variant?: 'dark' | 'light';
}) {
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

  const isLight = variant === 'light';
  const trail_cls = isLight ? 'text-mesa/65' : 'text-bone/55';
  const current_cls = isLight ? 'text-mesa' : 'text-bone/85';
  const sep_cls = isLight ? 'text-adobe/60' : 'text-sun/75';
  const hover_cls = isLight ? 'hover:text-terracotta' : 'hover:text-clay';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-[0.78rem] tracking-wide mb-6 ${trail_cls}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className={`no-underline ${hover_cls}`}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={current_cls}>
                  {c.label}
                </span>
              )}
              {!last && <span aria-hidden className={sep_cls}>/</span>}
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
