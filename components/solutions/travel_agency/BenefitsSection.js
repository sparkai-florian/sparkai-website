// components/solutions/healthcare/BenefitsSection.js
import React from 'react';

const benefits = [
  {
    title: 'Faster Patient Response',
    features: [
      'Automated instant replies for appointment requests',
      '24/7 availability, even outside clinic hours',
      'No more missed DMs or long waits',
    ],
  },
  {
    title: 'Fewer Repetitive Tasks',
    features: [
      'Automatic follow-ups for unanswered messages',
      'Appointment confirmations and reminders',
      'Answers to frequently asked questions',
    ],
  },
  {
    title: 'More Bookings, Less Stress',
    features: [
      'Integrated booking system via chatbot',
      'Data sync with your calendar or CRM',
      'Multilingual conversations with international clients',
    ],
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full bg-white py-16 text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Benefits That Make a Difference
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-primaryCTA">
                {benefit.title}
              </h3>
              <ul className="space-y-2">
                {benefit.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{feature}</span>
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
