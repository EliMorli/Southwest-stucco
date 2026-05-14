import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { CtaStrip } from '@/components/CtaStrip';
import { FAQAccordion, FAQSchema } from '@/components/FAQAccordion';
import { generalFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Stucco FAQ | Common Questions, Honest Answers',
  description:
    'Common questions about stucco contractors, pricing, repair, finishes, and warranty — answered honestly by a 30-year Calabasas, CA stucco company.',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common Questions, Honest Answers."
        sub="Three decades of stucco work means we've heard almost every question. Here are the ones we hear the most — answered straight."
        crumbs={[{ label: 'FAQ' }]}
      />
      <section className="bg-mesa-fade py-20 px-[5vw]">
        <div className="max-w-[1000px] mx-auto">
          <FAQAccordion faqs={generalFaqs} />
          <FAQSchema faqs={generalFaqs} />
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
