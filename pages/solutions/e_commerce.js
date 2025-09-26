// pages/solutions/e_commerce.js
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/solutions/e_commerce/HeroSection';
import StorySection from '@/components/solutions/e_commerce/StorySection';
import DemoVideoSection from '@/components/solutions/e_commerce/DemoVideoSection';
import BenefitsSection from '@/components/solutions/e_commerce/BenefitsSection';
import FreeGuide from '@/components/solutions/e_commerce/FreeGuide';
import ChatbotDemoSection from '@/components/solutions/e_commerce/ChatbotDemoSection';
import UseCases from '@/components/solutions/e_commerce/UseCases';
import TestimonialSection from '@/components/solutions/e_commerce/TestimonialSection';
import CTASection from '@/components/solutions/e_commerce/CTASection';
import Layout from '@/components/layout/Layout';

const ECommerceSolutionPage = () => {
  return (
    <>
      <Head>
        <title>E Commerce AI Chatbots | SparkAI</title>
        <meta
          name="description"
          content="Discover how SparkAI chatbots help e-commerce stores increase conversions, reduce cart abandonment, and provide instant customer support with automation."
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

export default ECommerceSolutionPage;
