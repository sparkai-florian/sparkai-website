import React from 'react';
import { 
  CheckCircleIcon,
  CogIcon,
  ChartBarIcon,
  LinkIcon,
  ClockIcon,
  DocumentTextIcon,
  ShoppingCartIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

const useCases = [
  {
    icon: ShoppingCartIcon,
    title: 'Product Scraping',
    description: 'Track product info, prices, and availability from websites — including images — automatically.',
    color: 'from-[#d4ff00] to-[#2139ff]'
  },
  {
    icon: ChartBarIcon,
    title: 'Lead Collection',
    description: 'Pull leads from forms, DMs, or comments and sync directly to your CRM or Google Sheets.',
    color: 'from-[#2139ff] to-[#00D4FF]'
  },
  {
    icon: DocumentTextIcon,
    title: 'Automated Reports',
    description: 'Send weekly reports from Instagram, website analytics, or CRM data to your inbox or Slack.',
    color: 'from-[#00D4FF] to-[#d4ff00]'
  },
  {
    icon: CogIcon,
    title: 'Inventory Sync',
    description: 'Keep your product inventory updated across platforms automatically.',
    color: 'from-[#d4ff00] to-[#2139ff]'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Appointment Reminders',
    description: 'Send reminders to clients through WhatsApp, Email, or Telegram based on calendar data.',
    color: 'from-[#2139ff] to-[#00D4FF]'
  },
  {
    icon: LinkIcon,
    title: 'Custom Integrations',
    description: 'Connect any two tools via API to streamline your business processes.',
    color: 'from-[#00D4FF] to-[#d4ff00]'
  },
];

const benefits = [
  'Save 20+ hours per month on repetitive tasks',
  'Avoid manual errors and ensure consistency',
  'Boost speed and team productivity',
  'Build tools tailored to your needs',
];

export default function AutomationDevelopment() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Free Your Team from{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Repetitive Tasks
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            SparkAI builds smart automations that sync platforms, collect data, and do the heavy lifting — so your business runs smoother, faster, and better.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#d4ff0020' }}
                  >
                    {IconComponent && <IconComponent className="w-8 h-8" style={{ color: '#d4ff00' }} />}
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-white group-hover:text-[#d4ff00] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 rounded-2xl p-12 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Why Automate with{" "}
              <span className="bg-gradient-to-r from-[#d4ff00] to-[#2139ff] bg-clip-text text-transparent">
                SparkAI?
              </span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#d4ff0020' }}
                >
                  <CheckCircleIcon className="h-5 w-5" style={{ color: '#d4ff00' }} />
                </div>
                <span className="text-white/90 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
