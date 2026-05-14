import { siteConfig } from '@/lib/site-config';

export function StickyCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phoneE164}`}
      aria-label={`Call ${siteConfig.name} at ${siteConfig.phone}`}
      className="md:hidden fixed bottom-5 right-5 z-[700] flex items-center gap-2 bg-gradient-to-br from-clay to-terracotta text-bone font-extrabold text-sm px-5 py-3.5 rounded-full shadow-[0_10px_28px_rgba(140,58,30,0.55)] hover:shadow-[0_14px_36px_rgba(140,58,30,0.7)] transition-all"
    >
      <span aria-hidden className="text-base">📞</span>
      Call Now
    </a>
  );
}
