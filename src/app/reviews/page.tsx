import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { Testimonials, ReviewSchema } from '@/components/Testimonials';
import { aggregate } from '@/lib/testimonials';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Customer Reviews | Southwest Stucco',
  description: `Read ${aggregate.reviewCount}+ reviews from Southwest Stucco customers across Calabasas, Los Angeles, and the surrounding cities.`,
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title={`Rated ${aggregate.ratingValue.toFixed(1)} / 5 by neighbors who hired us.`}
        sub="Most of our work comes from word of mouth. Here is some of what our customers say after the crew packs up and goes home."
        crumbs={[{ label: 'Reviews' }]}
      />

      <section className="bg-sand-fade py-12 px-[5vw]">
        <div className="max-w-[900px] mx-auto bg-bone border border-adobe/15 rounded-2xl p-8 text-center">
          <span className="text-terracotta text-2xl tracking-widest" aria-hidden>
            ★★★★★
          </span>
          <p className="text-mesa mt-3 font-extrabold text-lg">
            {aggregate.ratingValue.toFixed(1)} / 5 average rating · {aggregate.reviewCount} reviews
          </p>
          <p className="text-mesa/65 mt-3 text-sm leading-[1.7] max-w-[620px] mx-auto">
            We feature a curated selection of recent customer testimonials below. To leave a review
            of your own — or read public reviews — find us on Google,{' '}
            <Link
              href={siteConfig.social.facebook}
              className="underline text-terracotta hover:text-terracotta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            , or{' '}
            <Link
              href={siteConfig.social.instagram}
              className="underline text-terracotta hover:text-terracotta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            .
          </p>
        </div>
      </section>

      <Testimonials variant="page" />
      <ReviewSchema />

      <CtaStrip />
    </>
  );
}
