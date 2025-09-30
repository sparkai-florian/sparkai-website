// pages/services.js

import Head from 'next/head';
import dynamic from 'next/dynamic';
import ServicesHero from '@/components/services/ServicesHero';
import AutomationDevelopment from '@/components/services/AutomationDevelopment';
import ServicesCTA from '@/components/services/ServicesCTA';
import Layout from '@/components/layout/Layout';

// 🧠 Dynamically load ChatbotDevelopment with SSR disabled
const ChatbotDevelopment = dynamic(
  () => import('@/components/services/ChatbotDevelopment'),
  { ssr: false }
);

export default function ServicesPage() {
  return (
    <>
      <Layout>
      <Head>
        <title>Services | SparkAI</title>
        <meta name="description" content="Discover our powerful chatbot and automation development services" />
      </Head>

      <main className="bg-black text-white">
        <ServicesHero />
        <ChatbotDevelopment />
        <AutomationDevelopment />
        <ServicesCTA />
      </main>
      </Layout>
    </>
  );
}
