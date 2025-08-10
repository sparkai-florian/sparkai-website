import React from 'react';
import Link from 'next/link';
import {
  UserIcon,
  ClipboardDocumentIcon,
  BuildingStorefrontIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  BanknotesIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Instant Replies',
    description: 'Clients receive immediate answers without waiting, improving satisfaction and increasing conversion rates.'
  },
  {
    title: 'Audience Growth',
    description: 'Every interaction becomes a lead opportunity, helping businesses grow their client base effortlessly.'
  },
  {
    title: 'Custom Integrations',
    description: 'Connect chat seamlessly with CRMs, databases, or accounting tools to keep everything organized and automatic.'
  },
  {
    title: 'Multi-Platform Support',
    description: 'Engage users on Instagram, WhatsApp, Telegram, and more — all from one chatbot.'
  },
  {
    title: 'Multilingual Communication',
    description: 'Serve clients in their preferred language and remove barriers to trust and clarity.'
  },
  {
    title: 'Smart Conversations',
    description: 'Respond with context-aware messages that feel natural and tailored to each client.'
  },
  {
    title: 'Automated Follow-Ups',
    description: 'Never forget a message. The chatbot reminds and re-engages users automatically.'
  },
  {
    title: 'Social Media Optimization',
    description: 'Boost algorithm visibility with fast, frequent, and quality interactions — driven by automation.'
  }
];

const industries = [
  {
    name: 'Healthcare',
    color: '#008080',
    icon: UserIcon
  },
  {
    name: 'Restaurant',
    color: '#D62828',
    icon: ClipboardDocumentIcon
  },
  {
    name: 'Retail Store',
    color: '#F77F00',
    icon: BuildingStorefrontIcon
  },
  {
    name: 'E-Commerce',
    color: '#7209B7',
    icon: GlobeAltIcon
  },
  {
    name: 'Travel Agency',
    color: '#00B4D8',
    icon: PaperAirplaneIcon
  },
  {
    name: 'Finance',
    color: '#023E8A',
    icon: BanknotesIcon
  },
  {
    name: 'Fashion Store',
    color: '#D00070',
    icon: SparklesIcon
  }
];

const ChatbotDevelopment = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primaryCTA">Chatbot Development</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Chatbot development is about creating smart virtual assistants that speak with your clients — automatically, intelligently, and in real-time.
          SparkAI chatbots help you generate leads, take bookings, answer FAQs, and provide excellent service across multiple platforms.
        </p>
        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircleIcon className="h-6 w-6 text-primaryCTA mt-1" />
              <div>
                <h4 className="font-semibold text-lg">{feature.title}</h4>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industry-Specific Chatbots */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Industry-Specific Solutions</h3>
          <div className="space-y-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={index}
                  href={`/solutions/${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 transition p-4 rounded-lg"
                >
                  <Icon className="h-6 w-6" style={{ color: industry.color }} />
                  <span className="font-medium text-lg">{industry.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDevelopment;
