import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { navLinks } from '@/lib/content';

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-[600] flex items-center justify-between px-[5vw] py-3 bg-mesa/90 backdrop-blur-xl border-b border-terracotta/60 shadow-[0_2px_0_0_rgba(212,165,116,0.18)]"
    >
      <Link
        href="/"
        className="flex items-center gap-3 no-underline"
        aria-label={`${siteConfig.name} home`}
      >
        <span className="relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-sun bg-bone flex-shrink-0 shadow-[0_0_18px_rgba(212,165,116,0.45)]">
          <Image src="/logo.png" alt="" fill sizes="50px" className="object-cover" priority />
        </span>
        <span className="leading-[1.15] hidden sm:inline-block">
          <span className="block font-display text-[1.25rem] tracking-[0.12em] text-bone">
            Southwest <span className="text-clay">Stucco</span>
          </span>
          <span className="block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-sun/80">
            Family Owned Since 1995
          </span>
        </span>
      </Link>

      <ul className="hidden md:flex gap-8 list-none items-center m-0 p-0">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-bold text-sm text-bone/65 hover:text-clay no-underline tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={`tel:${siteConfig.phoneE164}`}
        className="bg-gradient-to-b from-clay to-terracotta text-white px-5 sm:px-6 py-[0.6rem] rounded-full font-extrabold text-sm no-underline tracking-wide whitespace-nowrap hover:from-terracotta hover:to-adobe hover:-translate-y-px transition-all shadow-[0_4px_14px_rgba(194,86,43,0.45)]"
      >
        📞 <span className="hidden sm:inline">Call Us Now</span>
        <span className="sm:hidden">{siteConfig.phone}</span>
      </a>
    </nav>
  );
}
