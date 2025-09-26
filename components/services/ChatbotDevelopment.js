import React from 'react';
import Link from 'next/link';
import {
  UserIcon,
  ClipboardDocumentIcon,
  BuildingStorefrontIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  BanknotesIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    emoji: '💰',
    title: 'Instant Replies',
    description: 'While your competitors leave customers hanging, you\'re closing deals at midnight. Every second counts - studies show you have 5 minutes max before hot leads go cold.'
  },
  {
    emoji: '🎯',
    title: 'Audience Growth',
    description: 'Turn every conversation into a sales opportunity. Your AI doesn\'t just answer questions - it qualifies leads, captures contact info, and feeds your sales pipeline automatically.'
  },
  {
    emoji: '🔗',
    title: 'Custom Integrations',
    description: 'Your CRM, scheduling tools, payment systems - everything talks to each other seamlessly. One conversation, infinite possibilities.'
  },
  {
    emoji: '🌐',
    title: 'Multi-Platform Domination',
    description: 'Instagram, WhatsApp, Telegram, your website - your AI is everywhere your customers are. No more "sorry, we only respond on email."'
  },
  {
    emoji: '🗣️',
    title: 'Multilingual Money-Making',
    description: 'Break language barriers instantly. Serve customers in Albanian, English, French, Italian, and 50+ more languages. Expand your market overnight.'
  },
  {
    emoji: '🧠',
    title: 'Smart Conversations That Sell',
    description: 'Context-aware responses that understand intent, handle objections, and guide customers toward purchase. It\'s like having your best salesperson available 24/7.'
  },
  {
    emoji: '🔄',
    title: 'Automated Follow-Ups That Actually Follow Up',
    description: 'Most businesses lose 80% of sales because they forget to follow up. Your AI never forgets, never gets busy, never takes a day off.'
  },
  {
    emoji: '📈',
    title: 'Social Media Algorithm Boost',
    description: 'Fast, frequent, quality interactions make algorithms love you. More visibility = more customers = more money.'
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Chatbot Development</h2>
          <p className="text-xl text-gray-300 mb-6">
            Finally... Customer Service That Never Sleeps (And Never Screws Up)
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Forget those frustrating "I don't understand" chatbots that make customers want to throw their phones. SparkAI chatbots actually get it - they understand context, handle complex requests, and sound like your best employee (who happens to work 24/7 for pennies).
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mt-4">
            Here's what this means for your bank account:
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="text-3xl">{feature.emoji}</span>
              <div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industry-Specific Chatbots */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Industry-Specific Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={index}
                  href={`/solutions/${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-4 bg-gray-900 hover:bg-gray-800 transition p-4 rounded-lg border border-gray-700"
                >
                  <Icon className="h-6 w-6" style={{ color: industry.color }} />
                  <span className="font-medium">{industry.name}</span>
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
