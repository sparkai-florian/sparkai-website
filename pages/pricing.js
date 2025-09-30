// pages/pricing.js
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import PricingHero from '@/components/pricing/PricingHero';
import IndustryPackages from '@/components/pricing/IndustryPackages';
import AddOns from '@/components/pricing/AddOns';
import FeatureList from '@/components/pricing/FeatureList';
import FinalCTA from '@/components/pricing/FinalCTA';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing | SparkAI</title>
        <meta
          name="description"
          content="Flexible plans, clear pricing, and powerful add-ons for chatbot and automation development."
        />
      </Head>
      <Layout>
        <main className="bg-black text-white">
            <PricingHero />
            <IndustryPackages />
            <AddOns />
            <FeatureList />
            <FinalCTA />
        </main>
      </Layout>
      
    </>
  );
}
