import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { IntroBand } from '@/components/IntroBand';
import { About } from '@/components/About';
import { WhyUs } from '@/components/WhyUs';
import { Gallery } from '@/components/Gallery';
import { Testimonials, ReviewSchema } from '@/components/Testimonials';
import { QuoteBand } from '@/components/QuoteBand';
import { CtaStrip } from '@/components/CtaStrip';
import { Contact } from '@/components/Contact';
import { ServiceTeaser } from '@/components/ServiceTeaser';
import { AreaTeaser } from '@/components/AreaTeaser';
import { BlogTeaser } from '@/components/BlogTeaser';
import { FAQAccordion, FAQSchema } from '@/components/FAQAccordion';
import { generalFaqs } from '@/lib/faqs';

export default function HomePage() {
  const homeFaqs = generalFaqs.slice(0, 6);
  return (
    <>
      <Hero />
      <Ticker />
      <IntroBand />
      <ServiceTeaser />
      <About />
      <WhyUs />
      <AreaTeaser />
      <Gallery />
      <Testimonials variant="home" limit={6} />
      <QuoteBand />
      <BlogTeaser />
      <section className="bg-mesa-fade py-24 px-[5vw]">
        <div className="max-w-[1000px] mx-auto">
          <header className="text-center mb-10">
            <span className="eyebrow">Common Questions</span>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] text-bone mt-3">
              Answers Before You Even Ask.
            </h2>
          </header>
          <FAQAccordion faqs={homeFaqs} />
          <FAQSchema faqs={homeFaqs} />
          <p className="text-center mt-8">
            <a href="/faq" className="btn-outline">See all FAQs</a>
          </p>
        </div>
      </section>
      <CtaStrip />
      <Contact />
      <ReviewSchema />
    </>
  );
}
