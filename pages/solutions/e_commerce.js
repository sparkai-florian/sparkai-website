// pages/solutions/healthcare.js
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/solutions/healthcare/HeroSection';
import StorySection from '@/components/solutions/healthcare/StorySection';
import DemoVideoSection from '@/components/solutions/healthcare/DemoVideoSection';
import BenefitsSection from '@/components/solutions/healthcare/BenefitsSection';
import FreeGuide from '@/components/solutions/healthcare/FreeGuide';
import ChatbotDemoSection from '@/components/solutions/healthcare/ChatbotDemoSection';
import UseCases from '@/components/solutions/healthcare/UseCases';
import TestimonialSection from '@/components/solutions/healthcare/TestimonialSection';
import CTASection from '@/components/solutions/healthcare/CTASection';
import Layout from '@/components/layout/Layout';

const HealthcareSolutionPage = () => {
  return (
    <>
      <Head>
        <title>E Commerce AI Chatbots | SparkAI</title>
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

export default HealthcareSolutionPage;
