import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { navLinks } from '@/lib/content';

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-[600] flex items-center justify-between px-[5vw] py-3 bg-black/95 backdrop-blur-xl border-b-[3px] border-red"
    >
      <Link
        href="/"
        className="flex items-center gap-3 no-underline"
        aria-label={`${siteConfig.name} home`}
      >
        <span className="relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-red bg-white flex-shrink-0 shadow-[0_0_16px_rgba(204,27,27,0.5)]">
          <Image src="/logo.png" alt="" fill sizes="50px" className="object-cover" priority />
        </span>
        <span className="leading-[1.15] hidden sm:inline-block">
          <span className="block font-display text-[1.25rem] tracking-[0.12em] text-white">
            Southwest <span className="text-red">Stucco</span>
          </span>
          <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-warmgray">
            Family Owned Since 1995
          </span>
        </span>
      </Link>

      <ul className="hidden md:flex gap-8 list-none items-center m-0 p-0">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-bold text-sm text-white/60 hover:text-red no-underline tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={`tel:${siteConfig.phoneE164}`}
        className="bg-red text-white px-5 sm:px-6 py-[0.6rem] rounded-full font-extrabold text-sm no-underline tracking-wide whitespace-nowrap hover:bg-red-dark hover:-translate-y-px transition-all"
      >
        📞 <span className="hidden sm:inline">Call Us Now</span>
        <span className="sm:hidden">{siteConfig.phone}</span>
      </a>
    </nav>
  );
}
