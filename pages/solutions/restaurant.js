// pages/solutions/restaurant.js
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/solutions/restaurant/HeroSection';
import StorySection from '@/components/solutions/restaurant/StorySection';
import DemoVideoSection from '@/components/solutions/restaurant/DemoVideoSection';
import BenefitsSection from '@/components/solutions/restaurant/BenefitsSection';
import FreeGuide from '@/components/solutions/restaurant/FreeGuide';
import ChatbotDemoSection from '@/components/solutions/restaurant/ChatbotDemoSection';
import UseCases from '@/components/solutions/restaurant/UseCases';
import TestimonialSection from '@/components/solutions/restaurant/TestimonialSection';
import CTASection from '@/components/solutions/restaurant/CTASection';
import Layout from '@/components/layout/Layout';

const RestaurantSolutionPage = () => {
  return (
    <>
      <Head>
        <title>Restaurants AI Chatbots | SparkAI</title>
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

export default RestaurantSolutionPage;
