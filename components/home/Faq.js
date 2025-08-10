// components/home/Faq.js
import { Disclosure } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What platforms does SparkAI work on?',
    answer:
      'SparkAI works seamlessly on Instagram, WhatsApp, Facebook, Viber, and your website. You can be everywhere your clients are.',
  },
  {
    question: 'Is it hard to set up?',
    answer:
      'Not at all. We handle the setup for you. Most clients are up and running within a day with full support from our team.',
  },
  {
    question: 'Can the chatbot speak multiple languages?',
    answer:
      'Yes. SparkAI supports multiple languages including Albanian and English. It can even auto-detect the client’s language.',
  },
  {
    question: 'How does SparkAI know what to answer?',
    answer:
      'We train your chatbot based on your specific business details: services, prices, FAQs, and tone of voice — all customized.',
  },
  {
    question: 'What if I want to make changes later?',
    answer:
      'You can request changes anytime. We offer ongoing support to keep your bot accurate and up to date.',
  },
  {
    question: 'Is my data safe and secure?',
    answer:
      'Absolutely. We follow best practices for data privacy and comply with GDPR regulations to keep your data protected.',
  },
];

export default function Faq() {
  return (
    <section className="w-full bg-white py-20 px-6 text-black">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Still curious? We’ve got you covered.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="border rounded-lg overflow-hidden">
                <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition">
                  {faq.question}
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-sm text-gray-700 bg-gray-50">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
