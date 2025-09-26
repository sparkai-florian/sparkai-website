// pages/solutions/travel_agency.js
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/solutions/travel_agency/HeroSection';
import StorySection from '@/components/solutions/travel_agency/StorySection';
import DemoVideoSection from '@/components/solutions/travel_agency/DemoVideoSection';
import BenefitsSection from '@/components/solutions/travel_agency/BenefitsSection';
import FreeGuide from '@/components/solutions/travel_agency/FreeGuide';
import ChatbotDemoSection from '@/components/solutions/travel_agency/ChatbotDemoSection';
import UseCases from '@/components/solutions/travel_agency/UseCases';
import TestimonialSection from '@/components/solutions/travel_agency/TestimonialSection';
import CTASection from '@/components/solutions/travel_agency/CTASection';
import Layout from '@/components/layout/Layout';

const TravelAgencySolutionPage = () => {
  return (
    <>
      <Head>
        <title>Travel Agency AI Chatbots | SparkAI</title>
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

export default TravelAgencySolutionPage;
