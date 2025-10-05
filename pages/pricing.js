// pages/pricing.js
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import PricingHero from '@/components/pricing/PricingHero';
import IndustryPackages from '@/components/pricing/IndustryPackages';
import PricingSection from '@/components/services/PricingSection';
import FinalCTA from '@/components/pricing/FinalCTA';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing | SparkAI</title>
        <meta
          name="description"
          content="Simple, transparent pricing for AI chatbot and automation solutions. Industry packages and monthly subscriptions available."
        />
      </Head>
      <Layout>
        <main className="bg-black text-white">
            <PricingHero />
            <IndustryPackages />
            <PricingSection />
            <FinalCTA />
        </main>
      </Layout>
      
    </>
  );
}
