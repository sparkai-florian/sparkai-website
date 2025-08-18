import Layout from '../components/layout/Layout';
import HeroSection from '../components/about/HeroSection';
import Differentiators from '../components/about/Differentiators';
import EchoIntro from '../components/about/EchoIntro';
import FinalCTA from '../components/about/FinalCTA';
import FounderMessage from '../components/about/FounderMessage';
import Milestones from '../components/about/Milestones';
import SparkAIStory from '../components/about/SparkAIStory';
import Values from '../components/about/Values';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SparkAIStory />
      <FounderMessage />
      <Values/>
      <Differentiators />
      <Milestones />
      <EchoIntro />
      <FinalCTA />
    </Layout>
  );
}


