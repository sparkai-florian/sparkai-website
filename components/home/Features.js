// components/home/Features.js
import { FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    title: '24/7 Instant Replies',
    description: 'Your chatbot replies instantly at any hour — even when your team is offline.',
  },
  {
    title: 'Instagram & WhatsApp Ready',
    description: 'Fully integrated with the channels your customers use the most.',
  },
  {
    title: 'Multi-Language Support',
    description: 'Communicate in Albanian, English, or any language your client prefers.',
  },
  {
    title: 'Smart Appointment Booking',
    description: 'Clients can book directly without waiting for manual replies.',
  },
  {
    title: 'Real-Time Notifications',
    description: 'Get alerts instantly on Telegram, Email, or Slack.',
  },
  {
    title: 'Custom FAQ Training',
    description: 'We train your bot with the exact answers your business needs.',
  },
  {
    title: 'Photo Sharing & Uploads',
    description: 'Your chatbot can send and receive pictures to assist customers.',
  },
  {
    title: 'Lead Capture Automation',
    description: 'It collects names, emails, and other client data for your CRM.',
  },
  {
    title: 'GDPR & Cookie Consent',
    description: 'Fully compliant with privacy regulations across Europe.',
  },
  {
    title: 'Works on Any Website',
    description: 'Easy to install and integrates seamlessly with your current site.',
  },
];

export default function Features() {
  const left = features.slice(0, 5);
  const right = features.slice(5);

  return (
    <section className="w-full bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">All the Features You Need — Built In</h2>
        <p className="text-gray-400">We packed SparkAI with everything a modern business needs to communicate smarter and faster.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {[left, right].map((side, idx) => (
          <div key={idx} className="space-y-6">
            {side.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <FaCheckCircle className="text-[#2B00FF] mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
