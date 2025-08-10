// components/solutions/healthcare/UseCases.js
import { FaCalendarCheck, FaComments, FaClipboardCheck, FaHeartbeat } from 'react-icons/fa';

export default function UseCases() {
  const cases = [
    {
      icon: <FaCalendarCheck className="text-[#008080] text-3xl" />,
      title: 'Automated Appointment Booking',
      description: 'Let patients schedule appointments instantly through chat without waiting for a response.',
    },
    {
      icon: <FaComments className="text-[#008080] text-3xl" />,
      title: '24/7 FAQs Answered',
      description: 'Answer questions about treatments, prices, or hours automatically — anytime, any day.',
    },
    {
      icon: <FaClipboardCheck className="text-[#008080] text-3xl" />,
      title: 'Follow-Up Messaging',
      description: 'Send personalized follow-ups to check on patients or remind them of upcoming visits.',
    },
    {
      icon: <FaHeartbeat className="text-[#008080] text-3xl" />,
      title: 'Lead Collection & CRM Sync',
      description: 'Capture patient details and sync directly to your CRM or management system.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Real Use Cases in Healthcare
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] p-6 rounded-xl border border-[#2B00FF]/20 hover:shadow-xl transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
