// components/home/BalkansHomePage.js
import BalkansHeroSection from './BalkansHeroSection';
import BalkansProblem from './BalkansProblem';
import BalkansSolution from './BalkansSolution';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import Features from './Features';
import Faq from './Faq';
import FinalCta from './FinalCta';
import HowItWorks from './HowItWorks';

export default function BalkansHomePage() {
  return (
    <>
      <BalkansHeroSection />
      <BalkansProblem />
      <BalkansSolution />
      <HowItWorks/>
      <Benefits />
      <Testimonials />
      <Features />
      <Faq />
      <FinalCta />
    </>
  );
}
