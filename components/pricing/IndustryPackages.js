// components/pricing/IndustryPackages.js
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const packages = [
  {
    industry: 'Healthcare',
    price: '499 €',
    note: 'includes up to 4 pages of info',
    features: [
      'Appointment Booking',
      'FAQ Answers',
      'Google Review Request',
      'Data Collection',
      'WhatsApp Order Alerts',
    ],
    color: '#008080',
  },
  {
    industry: 'Restaurant',
    price: '200 €',
    note: 'starter flow + 2 pages',
    features: [
      'Menu & Orders via Chat',
      'Table Reservations',
      'Order Alerts to Telegram',
      'FAQ Answers',
      'Google Review Request',
    ],
    color: '#D62828',
  },
  {
    industry: 'E-Commerce',
    price: '399 €',
    note: 'catalog starter + 3 pages',
    features: [
      'Product Q&A',
      'Cart Support',
      'Abandoned Follow-ups',
      'Order Alerts',
      'Lead Collection',
    ],
    color: '#7209B7',
  },
  {
    industry: 'Retail Store',
    price: '349 €',
    note: 'in-store + social flow',
    features: [
      'Inventory Questions',
      'Store Hours & Location',
      'Order/Inquiry Alerts',
      'FAQ Answers',
      'Review Request',
    ],
    color: '#F77F00',
  },
  {
    industry: 'Fashion Store',
    price: '399 €',
    note: 'social commerce starter',
    features: [
      'Size/Style Q&A',
      'Virtual Try-on (flow)',
      'Order Alerts',
      'FAQ Answers',
      'Follow-ups',
    ],
    color: '#D00070',
  },
  {
    industry: 'Finance',
    price: '499 €',
    note: 'compliance-aware flow',
    features: [
      'Service Triage',
      'Lead Qualification',
      'FAQ Answers',
      'Appointment Setting',
      'Email Alerts',
    ],
    color: '#023E8A',
  },
];

export default function IndustryPackages() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Industry Packages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.industry} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{pkg.industry}</h3>
                <span className="text-sm px-2 py-1 rounded-md" style={{ background: pkg.color }}>
                  Starter
                </span>
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-3xl font-bold">{pkg.price}</span>
                <span className="text-zinc-400 text-sm">/ one-time setup</span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">{pkg.note}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-[#d4ff00] mt-0.5" />
                    <span className="text-zinc-200">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="bg-[#2B00FF] text-white px-4 py-2 rounded-lg font-semibold text-center hover:opacity-90 transition"
                >
                  Book a Free Demo
                </Link>
                <a href="#add-ons" className="text-center text-white/80 hover:text-white underline">
                  Add More Features
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
