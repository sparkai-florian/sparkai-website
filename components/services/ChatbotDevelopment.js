import React from 'react';
import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  LanguageIcon,
  CpuChipIcon,
  ArrowPathIcon,
  ChartBarIcon,
  SparklesIcon,
  ClockIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ClockIcon,
    title: 'Instant Replies',
    description: 'While your competitors leave customers hanging, you\'re closing deals at midnight. Every second counts - studies show you have 5 minutes max before hot leads go cold.',
    color: 'from-[#d4ff00] to-[#2139ff]'
  },
  {
    icon: UserGroupIcon,
    title: 'Audience Growth',
    description: 'Turn every conversation into a sales opportunity. Your AI doesn\'t just answer questions - it qualifies leads, captures contact info, and feeds your sales pipeline automatically.',
    color: 'from-[#2139ff] to-[#00D4FF]'
  },
  {
    icon: CogIcon,
    title: 'Custom Integrations',
    description: 'Your CRM, scheduling tools, payment systems - everything talks to each other seamlessly. One conversation, infinite possibilities.',
    color: 'from-[#00D4FF] to-[#d4ff00]'
  },
  {
    icon: GlobeAltIcon,
    title: 'Multi-Platform Domination',
    description: 'Instagram, WhatsApp, Telegram, your website - your AI is everywhere your customers are. No more "sorry, we only respond on email."',
    color: 'from-[#d4ff00] to-[#2139ff]'
  },
  {
    icon: LanguageIcon,
    title: 'Multilingual Money-Making',
    description: 'Break language barriers instantly. Serve customers in Albanian, English, French, Italian, and 50+ more languages. Expand your market overnight.',
    color: 'from-[#2139ff] to-[#00D4FF]'
  },
  {
    icon: CpuChipIcon,
    title: 'Smart Conversations That Sell',
    description: 'Context-aware responses that understand intent, handle objections, and guide customers toward purchase. It\'s like having your best salesperson available 24/7.',
    color: 'from-[#00D4FF] to-[#d4ff00]'
  },
  {
    icon: ArrowPathIcon,
    title: 'Automated Follow-Ups That Actually Follow Up',
    description: 'Most businesses lose 80% of sales because they forget to follow up. Your AI never forgets, never gets busy, never takes a day off.',
    color: 'from-[#d4ff00] to-[#2139ff]'
  },
  {
    icon: ChartBarIcon,
    title: 'Social Media Algorithm Boost',
    description: 'Fast, frequent, quality interactions make algorithms love you. More visibility = more customers = more money.',
    color: 'from-[#2139ff] to-[#00D4FF]'
  }
];

const services = [
  {
    name: 'Aesthetic Clinics',
    image: '/aesthetic_clinics.png',
    link: '/solutions/healthcare'
  },
  {
    name: 'E Commerce',
    image: '/e_commerce.png',
    link: '/solutions/e_commerce'
  },
  {
    name: 'Fashion Stores',
    image: '/fashion_stores.png',
    link: '/solutions/fashtion_store'
  }
];

const ChatbotDevelopment = () => {

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white font-headline">
            Customer Service That Never Sleeps
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-subheadline">
            Forget those frustrating "I don't understand" chatbots that make customers want to throw their phones. SparkAI chatbots actually get it - they understand context, handle complex requests, and sound like your best employee.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-paragraph">
            Here's what this means for your bank account:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="group relative h-full">
                {/* Card with gradient border */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-[#D4FF00]/50 hover:shadow-2xl hover:shadow-[#D4FF00]/20 h-full flex flex-col">
                  
                  {/* Icon in top left corner */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: '#d4ff0020' }}
                    >
                      {IconComponent && <IconComponent className="w-8 h-8" style={{ color: '#d4ff00' }} />}
                    </div>
                  </div>
                  
                  {/* Feature heading */}
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4FF00] transition-colors duration-300 text-left font-headline">
                    {feature.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-sm text-left flex-1 font-paragraph">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-[#D4FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry-Specific Solutions */}
        <div className="w-[80%] mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center font-headline">Industry-Specific Solutions</h3>
          
          {/* Static Grid */}
          <div className="flex justify-center items-start gap-12">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer" style={{ width: '280px' }}>
                {/* Service name above image */}
                <div className="mb-4">
                  <h4 className="text-white text-xl font-bold text-center">
                    {service.name}
                  </h4>
                </div>
                
                {/* Service image with thin gradient border */}
                <Link href={service.link}>
                  <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-2xl p-0.5 bg-gradient-to-br from-[#d4ff00] to-[#213efa] transition-transform duration-300 hover:scale-105">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDevelopment;
