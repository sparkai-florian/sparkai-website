// components/solutions/e_commerce/BenefitsSection.js
import React from 'react';

const benefits = [
  {
    title: 'Higher Conversion Rates',
    features: [
      'Instant product recommendations and sizing help',
      '24/7 customer support, even outside business hours',
      'No more abandoned carts due to unanswered questions',
    ],
  },
  {
    title: 'Reduced Support Load',
    features: [
      'Automatic responses to common product questions',
      'Order tracking and status updates',
      'Returns and exchange assistance',
    ],
  },
  {
    title: 'More Sales, Less Work',
    features: [
      'Integrated cart recovery and checkout assistance',
      'Data sync with your e-commerce platform',
      'Multilingual support for global customers',
    ],
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full bg-white py-16 text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center font-headline">
          Benefits That Make a Difference
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-primaryCTA font-headline">
                {benefit.title}
              </h3>
              <ul className="space-y-2">
                {benefit.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="font-paragraph">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
