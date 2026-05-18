'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { serviceAreas } from '@/lib/areas';

const primaryLinks: { href: string; label: string; mega?: 'services' | 'areas' }[] = [
  { href: '/services', label: 'Services', mega: 'services' },
  { href: '/service-areas', label: 'Service Areas', mega: 'areas' },
  { href: '/projects', label: 'Projects' },
  { href: '/general-contractors', label: 'For GCs' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<'services' | 'areas' | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-[600] bg-mesa/95 backdrop-blur-xl border-b border-terracotta/60 shadow-[0_2px_0_0_rgba(212,165,116,0.18)]"
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="flex items-center justify-between px-[5vw] py-3">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="relative w-[46px] h-[46px] rounded-full overflow-hidden border-2 border-sun bg-bone flex-shrink-0 shadow-[0_0_18px_rgba(212,165,116,0.45)]">
            <Image src="/logo.png" alt="" fill sizes="46px" className="object-cover" priority />
          </span>
          <span className="leading-[1.1] inline-block">
            <span className="block font-display text-[1rem] sm:text-[1.2rem] tracking-[0.1em] sm:tracking-[0.12em] text-bone">
              Southwest <span className="text-clay">Stucco</span>
            </span>
            <span className="hidden sm:block text-[0.62rem] font-bold tracking-[0.18em] uppercase text-sun/80">
              Family Owned Since 1995
            </span>
            <span className="sm:hidden block text-[0.55rem] font-bold tracking-[0.22em] uppercase text-sun/75">
              Since 1995 · CSLB {siteConfig.cslb}
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex gap-7 list-none items-center m-0 p-0">
          {primaryLinks.map((l) => (
            <li
              key={l.href}
              className="relative"
              onMouseEnter={() => l.mega && setOpenMega(l.mega)}
            >
              <Link
                href={l.href}
                className={`font-bold text-[0.85rem] no-underline tracking-wide transition-colors ${
                  openMega === l.mega ? 'text-clay' : 'text-bone/70 hover:text-clay'
                }`}
              >
                {l.label}
                {l.mega && <span className="ml-1 text-sun/80 text-[0.7rem]">▾</span>}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="hidden sm:inline-block bg-gradient-to-b from-clay to-terracotta text-white px-5 py-[0.55rem] rounded-full font-extrabold text-[0.82rem] no-underline tracking-wide whitespace-nowrap hover:from-terracotta hover:to-adobe hover:-translate-y-px transition-all shadow-[0_4px_14px_rgba(194,86,43,0.45)]"
          >
            📞 {siteConfig.phone}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 rounded-md border border-sun/25 text-bone flex items-center justify-center"
          >
            <span aria-hidden className="text-xl leading-none">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      {openMega && (
        <div
          className="hidden lg:block absolute inset-x-0 top-full bg-mesa-100 border-t border-sun/25 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]"
          onMouseEnter={() => setOpenMega(openMega)}
          onMouseLeave={() => setOpenMega(null)}
        >
          <div className="max-w-[1200px] mx-auto px-[5vw] py-8">
            {openMega === 'services' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex gap-3 items-start no-underline p-3 rounded-md hover:bg-terracotta/15 transition-colors"
                  >
                    <span className="text-[1.6rem]" aria-hidden>{s.icon}</span>
                    <div>
                      <div className="font-bold text-bone group-hover:text-clay">{s.name}</div>
                      <div className="text-[0.82rem] text-bone/70 leading-snug mt-0.5">{s.short}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {openMega === 'areas' && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/service-areas/${a.slug}`}
                      className="text-[0.95rem] font-semibold text-bone/85 hover:text-clay no-underline py-1.5 px-2 rounded-md hover:bg-terracotta/10 transition-colors"
                    >
                      {a.city}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/service-areas"
                  className="inline-block mt-5 text-sm font-bold text-clay hover:text-sun"
                >
                  View all service areas →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-sun/25 bg-mesa-100 max-h-[80vh] overflow-y-auto shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]">
          <ul className="flex flex-col list-none m-0 p-4 gap-1">
            {primaryLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-bold text-bone/85 hover:text-clay no-underline py-2.5 px-2 border-b border-sun/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="block text-center bg-gradient-to-b from-clay to-terracotta text-bone font-extrabold py-3 rounded-full no-underline shadow-[0_4px_14px_rgba(194,86,43,0.45)]"
              >
                📞 {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
