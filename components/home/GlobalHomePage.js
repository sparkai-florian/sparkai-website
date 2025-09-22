// components/home/GlobalHomePage.js
import HeroSection from './HeroSection';
import Problem from './Problem';
import Solution from './Solution';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import Features from './Features';
import Faq from './Faq';
import FinalCta from './FinalCta';
import HowItWorks from './HowItWorks';

export default function GlobalHomePage() {
  return (
    <>
      <HeroSection />
      <Problem />
      <Solution />
      <HowItWorks/>
      <Benefits />
      <Testimonials />
      <Features />
      <Faq />
      <FinalCta />
    </>
  );
}
