import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { footerCopy } from '@/lib/content';
import { services } from '@/lib/services';
import { serviceAreas } from '@/lib/areas';

export function Footer() {
  return (
    <footer className="bg-mesa relative px-[5vw] pt-14 pb-8">
      <div aria-hidden className="adobe-stripe h-[5px] absolute top-0 inset-x-0" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-sun/12 max-w-[1300px] mx-auto">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="relative w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-sun bg-bone flex-shrink-0 shadow-[0_0_18px_rgba(212,165,116,0.35)]">
              <Image src="/logo.png" alt="" fill sizes="54px" className="object-cover" />
            </span>
            <div>
              <div className="font-display text-[1.25rem] tracking-[0.1em] text-bone">
                Southwest <em className="not-italic text-clay">Stucco</em> Inc.
              </div>
              <div className="text-[0.74rem] text-sun/75 italic mt-0.5">{footerCopy.tagline}</div>
            </div>
          </div>
          <p className="text-[0.86rem] text-bone/55 leading-[1.65] mb-4">
            Family-owned stucco and plastering contractor based in Calabasas, serving greater Los
            Angeles since 1995. CSLB License #{siteConfig.cslb}.
          </p>
          <div className="flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-mesa-100 border border-sun/20 flex items-center justify-center text-sun/75 hover:bg-terracotta hover:text-bone hover:border-terracotta transition"
              >
                📸
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-mesa-100 border border-sun/20 flex items-center justify-center text-sun/75 hover:bg-terracotta hover:text-bone hover:border-terracotta transition"
              >
                👍
              </a>
            )}
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-sun/75 mb-3">
            Services
          </h3>
          <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[0.88rem] font-semibold text-bone/70 hover:text-clay no-underline"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Service areas */}
        <nav aria-label="Service Areas">
          <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-sun/75 mb-3">
            Service Areas
          </h3>
          <ul className="list-none m-0 p-0 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {serviceAreas.slice(0, 10).map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="text-[0.85rem] font-semibold text-bone/70 hover:text-clay no-underline"
                >
                  {a.city}
                </Link>
              </li>
            ))}
            <li className="col-span-2 mt-1">
              <Link href="/service-areas" className="text-[0.85rem] font-bold text-clay hover:text-sun">
                See all areas →
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic flex flex-col gap-1.5">
          <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-sun/75 mb-3">
            Contact
          </h3>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="text-[0.95rem] font-bold text-bone/85 hover:text-clay no-underline"
          >
            📞 {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[0.88rem] font-semibold text-bone/70 hover:text-clay no-underline break-all"
          >
            ✉️ {siteConfig.email}
          </a>
          <span className="text-[0.85rem] text-bone/55 mt-1">
            📍 {siteConfig.address.streetAddress}
            <br />
            {siteConfig.address.locality}, {siteConfig.address.region} {siteConfig.address.postalCode}
          </span>
          <span className="text-[0.78rem] text-sun/80 mt-2">CSLB License #{siteConfig.cslb}</span>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/contact"
              className="text-[0.78rem] font-extrabold tracking-[0.05em] bg-gradient-to-b from-clay to-terracotta text-bone px-4 py-2 rounded-full no-underline shadow-[0_4px_14px_rgba(194,86,43,0.4)]"
            >
              Free Estimate
            </Link>
            <Link
              href="/general-contractors"
              className="text-[0.78rem] font-extrabold tracking-[0.05em] border border-sun/40 text-bone px-4 py-2 rounded-full no-underline hover:border-sun"
            >
              For GCs
            </Link>
          </div>
        </address>
      </div>

      <div className="max-w-[1300px] mx-auto pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[0.74rem] text-bone/65">
        <p className="m-0 text-center md:text-left">{footerCopy.copyright}</p>
        <ul className="list-none m-0 p-0 flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end">
          <li><Link href="/privacy-policy" className="hover:text-clay">Privacy</Link></li>
          <li><Link href="/terms-of-service" className="hover:text-clay">Terms</Link></li>
          <li><Link href="/cookie-policy" className="hover:text-clay">Cookies</Link></li>
          <li><Link href="/accessibility-statement" className="hover:text-clay">Accessibility</Link></li>
          <li><Link href="/sitemap.xml" className="hover:text-clay">Sitemap</Link></li>
        </ul>
      </div>
    </footer>
  );
}
