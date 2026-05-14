import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import { footerCopy } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-ink border-t-[3px] border-red px-[5vw] py-10">
      <div className="grid md:grid-cols-3 gap-10 pb-8 border-b border-white/[0.06]">
        {/* Brand block */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="relative w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-red bg-white flex-shrink-0">
              <Image src="/logo.png" alt="" fill sizes="52px" className="object-cover" />
            </span>
            <div>
              <div className="font-display text-[1.3rem] tracking-[0.1em] text-white">
                Southwest <em className="not-italic text-red">Stucco</em> Inc.
              </div>
              <div className="text-[0.78rem] text-white/40 italic mt-0.5">{footerCopy.tagline}</div>
            </div>
          </div>
          <div className="flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-red hover:text-white hover:border-red transition"
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
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-red hover:text-white hover:border-red transition"
              >
                👍
              </a>
            )}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className="flex flex-col gap-2">
          <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.28em] uppercase text-white/40 mb-2">
            Quick Links
          </h3>
          {footerCopy.quickLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-semibold text-white/65 hover:text-red no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <address className="not-italic flex flex-col gap-1.5">
          <h3 className="font-condensed text-[0.7rem] font-bold tracking-[0.28em] uppercase text-white/40 mb-2">
            Contact Us
          </h3>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="text-[0.9rem] font-semibold text-white/75 hover:text-red no-underline"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[0.9rem] font-semibold text-white/75 hover:text-red no-underline break-all"
          >
            {siteConfig.email}
          </a>
          <span className="text-[0.85rem] text-white/55 mt-1">
            {siteConfig.address.streetAddress}
            <br />
            {siteConfig.address.locality}, {siteConfig.address.region} {siteConfig.address.postalCode}
          </span>
          <span className="text-[0.8rem] text-white/40 mt-1">CSLB License #{siteConfig.cslb}</span>
        </address>
      </div>

      <div className="flex items-center justify-center pt-6 text-[0.75rem] text-white/35 text-center">
        <p className="m-0">{footerCopy.copyright}</p>
      </div>
    </footer>
  );
}
