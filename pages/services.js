// pages/services.js

import Head from 'next/head';
import dynamic from 'next/dynamic';
import AutomationDevelopment from '@/components/services/AutomationDevelopment';
import WhySparkAI from '@/components/services/WhySparkAI';
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
        <section className="pt-24 pb-8 text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-zinc-400 mt-2 max-w-2xl mx-auto">
            Powerful automation and communication tools designed to grow your business and save time.
          </p>
        </section>

        <ChatbotDevelopment />
        <AutomationDevelopment />
        <WhySparkAI />
        <ServicesCTA />
      </main>
      </Layout>
    </>
  );
}
