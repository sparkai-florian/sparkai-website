import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import Features from '../components/home/Features';
import Faq from '../components/home/Faq';
import FinalCta from '../components/home/FinalCta';
import HowItWorks from '../components/home/HowItWorks';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Problem />
      <Solution />
      <HowItWorks/>
      <Benefits />
      <Testimonials />
      <Features />
      <Faq />
      <FinalCta />
    </Layout>
  );
}


