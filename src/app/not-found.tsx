import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-desert-dusk flex items-center justify-center px-[5vw] pt-32 pb-20 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-desert-sun pointer-events-none" />
      <div className="relative z-[1] text-center max-w-[700px]">
        <p className="font-condensed text-[0.78rem] font-bold tracking-[0.4em] uppercase text-clay">
          404 · Page Not Found
        </p>
        <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9] text-bone mt-3 mb-6">
          That wall isn't here.
        </h1>
        <p className="text-bone/70 leading-[1.85] text-[1.05rem] mb-10">
          The page you were looking for has moved, doesn't exist, or never did. Try one of these
          instead — or just give us a call and we'll point you the right way.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-red">Back home</Link>
          <Link href="/services" className="btn-outline">See services</Link>
          <a href={`tel:${siteConfig.phoneE164}`} className="btn-outline">
            📞 {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
