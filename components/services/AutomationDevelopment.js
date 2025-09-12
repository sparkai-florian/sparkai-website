import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const useCases = [
  {
    title: 'Product Scraping',
    description: 'Track product info, prices, and availability from websites — including images — automatically.',
  },
  {
    title: 'Lead Collection',
    description: 'Pull leads from forms, DMs, or comments and sync directly to your CRM or Google Sheets.',
  },
  {
    title: 'Automated Reports',
    description: 'Send weekly reports from Instagram, website analytics, or CRM data to your inbox or Slack.',
  },
  {
    title: 'Inventory Sync',
    description: 'Keep your product inventory updated across platforms automatically.',
  },
  {
    title: 'Appointment Reminders',
    description: 'Send reminders to clients through WhatsApp, Email, or Telegram based on calendar data.',
  },
  {
    title: 'Custom Integrations',
    description: 'Connect any two tools via API to streamline your business processes.',
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
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-primaryCTA">Automation Development</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12">
          Free your team from repetitive tasks. SparkAI builds smart automations that sync platforms, collect data, and do the heavy lifting — so your business runs smoother, faster, and better.
        </p>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-primaryCTA">{useCase.title}</h3>
              <p className="text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-zinc-900 text-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-4">Why Automate with SparkAI?</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primaryCTA mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Have an idea for an automation?</h3>
          <p className="mb-6 text-gray-700">If it saves you time, we can build it. Let's make it happen.</p>
          <a
            href="/contact"
            className="bg-primaryCTA text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
