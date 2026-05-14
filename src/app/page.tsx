import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { IntroBand } from '@/components/IntroBand';
import { About } from '@/components/About';
import { WhyUs } from '@/components/WhyUs';
import { Gallery } from '@/components/Gallery';
import { QuoteBand } from '@/components/QuoteBand';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <IntroBand />
        <About />
        <WhyUs />
        <Gallery />
        <QuoteBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
