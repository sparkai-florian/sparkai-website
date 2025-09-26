// pages/solutions/finance.js
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/solutions/finance/HeroSection';
import StorySection from '@/components/solutions/finance/StorySection';
import DemoVideoSection from '@/components/solutions/finance/DemoVideoSection';
import BenefitsSection from '@/components/solutions/finance/BenefitsSection';
import FreeGuide from '@/components/solutions/finance/FreeGuide';
import ChatbotDemoSection from '@/components/solutions/finance/ChatbotDemoSection';
import UseCases from '@/components/solutions/finance/UseCases';
import TestimonialSection from '@/components/solutions/finance/TestimonialSection';
import CTASection from '@/components/solutions/finance/CTASection';
import Layout from '@/components/layout/Layout';

const FinanceSolutionPage = () => {
  return (
    <>
      <Head>
        <title>Finance AI Chatbots | SparkAI</title>
        <meta
          name="description"
          content="Discover how SparkAI chatbots help healthcare clinics respond instantly, book appointments, and save time with automation."
        />
      </Head>
      <Layout>
        <main>
          <HeroSection />
          <StorySection />
          <DemoVideoSection />
          <BenefitsSection />
          <FreeGuide />
          <ChatbotDemoSection />
          <UseCases />
          <TestimonialSection />
          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default FinanceSolutionPage;
