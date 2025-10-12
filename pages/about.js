import Layout from '../components/layout/Layout';
import PageTransition from '../components/layout/PageTransition';
import HeroSection from '../components/about/HeroSection';
import Differentiators from '../components/about/Differentiators';
import FinalCTA from '../components/about/FinalCTA';
import FounderMessage from '../components/about/FounderMessage';
import Milestones from '../components/about/Milestones';
import SparkAIStory from '../components/about/SparkAIStory';
import TestimonialSection from '../components/about/TestimonialSection';
import Values from '../components/about/Values';

export default function Home() {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <SparkAIStory />
        <Differentiators />
        <FounderMessage />
        <TestimonialSection />
        <Milestones />
        <Values />
        <FinalCTA />
      </PageTransition>
    </Layout>
  );
}


