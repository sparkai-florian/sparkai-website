import React, { useRef, useEffect, useState } from 'react';
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
  ChevronLeftIcon,
  ChevronRightIcon,
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
  },
  {
    name: 'Law',
    image: '/law_firms.png',
    link: '/solutions/finance'
  },
  {
    name: 'Travel Agencies',
    image: '/travel_agency.png',
    link: '/solutions/travel_agency'
  }
];

const ChatbotDevelopment = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 after showing all 5 services (0-4)
        return nextIndex >= 5 ? 0 : nextIndex;
      });
    }, 4500); // Change every 4.5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Update carousel position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = currentIndex * 336; // 320px width + 16px gap (w-80 + gap-8)
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [currentIndex]);

  // Debug: Log current index changes
  useEffect(() => {
    console.log('Current index:', currentIndex, 'Service:', services[currentIndex]?.name);
  }, [currentIndex]);

  const scrollLeft = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? 4 : nextIndex; // Loop to last item if going below 0
    });
    // Restart auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= 5 ? 0 : nextIndex; // Loop to first item if going above 4
    });
    // Restart auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Customer Service That Never Sleeps
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Forget those frustrating "I don't understand" chatbots that make customers want to throw their phones. SparkAI chatbots actually get it - they understand context, handle complex requests, and sound like your best employee.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here's what this means for your bank account:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="group">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-white group-hover:text-[#d4ff00] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry-Specific Solutions Carousel */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Tailored for Your Industry
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Custom AI solutions designed specifically for your business sector
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* Left Navigation Arrow */}
            <button
              onClick={scrollLeft}
              className="flex-shrink-0 bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 hover:from-[#2B00FF]/30 hover:to-[#00D4FF]/30 rounded-full p-4 transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>

            {/* Carousel Container */}
            <div className="flex-1 overflow-hidden">
              <div ref={carouselRef} className="flex gap-8 py-4" style={{ width: 'max-content' }}>
                {/* Duplicate services for infinite loop */}
                {[...services, ...services, ...services].map((service, index) => (
                  <div key={`${service.name}-${index}`} className="flex-shrink-0 group cursor-pointer">
                    <Link href={service.link}>
                      <div className="relative">
                        {/* Service name above image */}
                        <div className="mb-6 text-center">
                          <h4 className="text-white text-xl font-bold group-hover:text-[#d4ff00] transition-colors">
                            {service.name}
                          </h4>
                        </div>
                        
                        {/* Service image with modern gradient border */}
                        <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-[#d4ff00] via-[#2139ff] to-[#00D4FF] group-hover:shadow-3xl transition-all duration-300">
                          <div className="w-full h-full rounded-3xl overflow-hidden bg-black">
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-end justify-center pb-6">
                            <div className="text-center">
                              <SparklesIcon className="w-8 h-8 text-[#d4ff00] mx-auto mb-2" />
                              <span className="text-white font-semibold">Explore Solution</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={scrollRight}
              className="flex-shrink-0 bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 hover:from-[#2B00FF]/30 hover:to-[#00D4FF]/30 rounded-full p-4 transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDevelopment;
