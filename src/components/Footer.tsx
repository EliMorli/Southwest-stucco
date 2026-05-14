import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import { footerCopy } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-mesa relative px-[5vw] pt-12 pb-8">
      {/* Adobe brick stripe at top */}
      <div aria-hidden className="adobe-stripe h-[5px] absolute top-0 inset-x-0" />

      <div className="grid md:grid-cols-3 gap-10 pb-8 border-b border-sun/12 max-w-[1300px] mx-auto">
        {/* Brand block */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="relative w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-sun bg-bone flex-shrink-0 shadow-[0_0_18px_rgba(212,165,116,0.35)]">
              <Image src="/logo.png" alt="" fill sizes="54px" className="object-cover" />
            </span>
            <div>
              <div className="font-display text-[1.3rem] tracking-[0.1em] text-bone">
                Southwest <em className="not-italic text-clay">Stucco</em> Inc.
              </div>
              <div className="text-[0.78rem] text-sun/70 italic mt-0.5">{footerCopy.tagline}</div>
            </div>
          </div>
          <div className="flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-mesa-100 border border-sun/20 flex items-center justify-center text-sun/70 hover:bg-terracotta hover:text-bone hover:border-terracotta transition"
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
                className="w-10 h-10 rounded-full bg-mesa-100 border border-sun/20 flex items-center justify-center text-sun/70 hover:bg-terracotta hover:text-bone hover:border-terracotta transition"
              >
                👍
              </a>
            )}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className="flex flex-col gap-2">
          <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-sun/70 mb-2">
            Quick Links
          </h3>
          {footerCopy.quickLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-semibold text-bone/70 hover:text-clay no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <address className="not-italic flex flex-col gap-1.5">
          <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.32em] uppercase text-sun/70 mb-2">
            Contact Us
          </h3>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="text-[0.9rem] font-semibold text-bone/80 hover:text-clay no-underline"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[0.9rem] font-semibold text-bone/80 hover:text-clay no-underline break-all"
          >
            {siteConfig.email}
          </a>
          <span className="text-[0.85rem] text-bone/55 mt-1">
            {siteConfig.address.streetAddress}
            <br />
            {siteConfig.address.locality}, {siteConfig.address.region} {siteConfig.address.postalCode}
          </span>
          <span className="text-[0.8rem] text-sun/55 mt-1">CSLB License #{siteConfig.cslb}</span>
        </address>
      </div>

      <div className="flex items-center justify-center pt-6 text-[0.75rem] text-bone/40 text-center max-w-[1300px] mx-auto">
        <p className="m-0">{footerCopy.copyright}</p>
      </div>
    </footer>
  );
}
