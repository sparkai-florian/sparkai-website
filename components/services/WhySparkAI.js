// components/services/WhySparkAI.js

import { Zap, Clock, Target, DollarSign } from 'lucide-react';

export default function WhySparkAI() {
  const benefits = [
    {
      icon: Zap,
      title: 'Instant Replies 24/7',
      description: 'Never lose another customer to slow responses. Your AI works while you sleep, vacation, or focus on big-picture strategy.',
    },
    {
      icon: Clock,
      title: 'Save 10+ Hours Weekly',
      description: 'Stop answering the same questions over and over. Your AI handles FAQs, bookings, and updates automatically.',
    },
    {
      icon: Target,
      title: 'Industry-Tailored Solutions',
      description: 'Forget generic templates. Get AI built specifically for how your industry actually operates.',
    },
    {
      icon: DollarSign,
      title: 'ROI That Makes Sense',
      description: 'Most businesses save more in reduced support costs than they spend on SparkAI. It\'s not an expense - it\'s an investment that pays for itself.',
    },
  ];

  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose SparkAI?
          </h2>
          <p className="text-xl text-gray-300">
            We Don't Build Chatbots - We Build Revenue Machines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#d4ff00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
