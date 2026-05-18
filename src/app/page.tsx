import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { IntroBand } from '@/components/IntroBand';
import { About } from '@/components/About';
import { WhyUs } from '@/components/WhyUs';
import { Gallery } from '@/components/Gallery';
import { Testimonials, ReviewSchema } from '@/components/Testimonials';
import { CtaStrip } from '@/components/CtaStrip';
import { Contact } from '@/components/Contact';
import { ServiceTeaser } from '@/components/ServiceTeaser';
import { AreaTeaser } from '@/components/AreaTeaser';
import { BlogTeaser } from '@/components/BlogTeaser';
import { MarqueeMoment } from '@/components/MarqueeMoment';
import { FAQAccordion, FAQSchema } from '@/components/FAQAccordion';
import { generalFaqs } from '@/lib/faqs';

export default function HomePage() {
  const homeFaqs = generalFaqs.slice(0, 6);
  return (
    <>
      <Hero />
      <Ticker />
      <IntroBand />
      <About />
      <MarqueeMoment
        image="/gallery/gallery-15.jpg"
        pretitle="Our Promise"
        quote="We show up, we do the job right, and we stand behind our work."
        attribution="The Southwest Stucco family · Since 1995"
      />
      <ServiceTeaser />
      <WhyUs />
      <MarqueeMoment
        image="/gallery/gallery-19.jpg"
        pretitle="30 Years In"
        quote="Most of our work today still comes from referrals. That tells you everything."
        attribution="A note from the family"
      />
      <AreaTeaser />
      <Gallery limit={8} />
      <Testimonials variant="home" limit={6} />
      <BlogTeaser />
      <section className="bg-mesa py-28 px-[5vw]">
        <div className="max-w-[1100px] mx-auto">
          <header className="grid md:grid-cols-[auto_1fr] items-end gap-x-6 mb-12">
            <div className="section-num">07</div>
            <div>
              <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-sun/80 font-bold block mb-2">
                Common Questions
              </span>
              <div className="thin-rule max-w-[260px]" aria-hidden />
              <h2 className="mt-4">
                <span className="block font-display text-[clamp(2.2rem,4.5vw,4.4rem)] leading-[0.95] text-bone">
                  Answers before you
                </span>
                <span className="block font-serif italic text-[clamp(2.2rem,4.7vw,4.6rem)] leading-[0.95] -mt-1 text-sun">
                  even ask.
                </span>
              </h2>
            </div>
          </header>
          <FAQAccordion faqs={homeFaqs} />
          <FAQSchema faqs={homeFaqs} />
          <p className="text-center mt-10">
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
