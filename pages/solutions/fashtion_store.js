// pages/solutions/fashtion_store.js
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/solutions/fashtion_store/HeroSection';
import StorySection from '@/components/solutions/fashtion_store/StorySection';
import DemoVideoSection from '@/components/solutions/fashtion_store/DemoVideoSection';
import BenefitsSection from '@/components/solutions/fashtion_store/BenefitsSection';
import FreeGuide from '@/components/solutions/fashtion_store/FreeGuide';
import ChatbotDemoSection from '@/components/solutions/fashtion_store/ChatbotDemoSection';
import UseCases from '@/components/solutions/fashtion_store/UseCases';
import TestimonialSection from '@/components/solutions/fashtion_store/TestimonialSection';
import CTASection from '@/components/solutions/fashtion_store/CTASection';
import Layout from '@/components/layout/Layout';

const FashionStoreSolutionPage = () => {
  return (
    <>
      <Head>
        <title>Fashion Store AI Chatbots | SparkAI</title>
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

export default FashionStoreSolutionPage;
