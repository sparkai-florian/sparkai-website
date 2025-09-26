import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  UserIcon,
  ClipboardDocumentIcon,
  BuildingStorefrontIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  BanknotesIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon
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
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Update carousel position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = currentIndex * 312; // 288px width + 24px gap
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

        {/* Industry-Specific Solutions Carousel */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Industry-Specific Solutions</h3>
          <div className="flex items-center gap-4">
            {/* Left Navigation Arrow */}
            <button
              onClick={scrollLeft}
              className="flex-shrink-0 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-200"
            >
              <ChevronLeftIcon className="h-8 w-8 text-white" />
            </button>

            {/* Carousel Container */}
            <div className="flex-1 overflow-hidden">
              <div ref={carouselRef} className="flex gap-6 py-4 animate-scroll" style={{ width: 'max-content' }}>
                {/* Duplicate services for infinite loop */}
                {[...services, ...services, ...services].map((service, index) => (
                  <div key={`${service.name}-${index}`} className="flex-shrink-0 group cursor-pointer">
                    {/* Service name above image */}
                    <div className="mb-4">
                      <h4 className="text-white text-xl font-bold text-left">
                        {service.name}
                      </h4>
                    </div>
                    
                    {/* Service image with thin gradient border */}
                    <Link href={service.link}>
                      <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl p-0.5 bg-gradient-to-br from-[#d4ff00] to-[#213efa]">
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

            {/* Right Navigation Arrow */}
            <button
              onClick={scrollRight}
              className="flex-shrink-0 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-200"
            >
              <ChevronRightIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDevelopment;
