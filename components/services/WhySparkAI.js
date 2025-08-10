// components/services/WhySparkAI.js

import { CheckCircle } from 'lucide-react';

export default function WhySparkAI() {
  const benefits = [
    {
      title: 'Instant Replies 24/7',
      description:
        'Never lose a customer again — your chatbot responds immediately, day or night.',
    },
    {
      title: 'Save 10+ Hours Weekly',
      description:
        'Automate repetitive tasks like answering FAQs, booking, and sending updates.',
    },
    {
      title: 'Industry-Tailored Solutions',
      description:
        'Chatbots and automations built specifically for your niche and customer flow.',
    },
  ];

  return (
    <section className="bg-zinc-900 py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose SparkAI?
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          We don’t just build chatbots. We build high-performing AI systems
          that are custom-tailored to your business goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {benefits.map((item, idx) => (
            <div key={idx} className="text-left bg-zinc-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 text-[#d4ff00] mb-2">
                <CheckCircle size={20} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
