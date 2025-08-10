// components/services/ServicesCTA.js

import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="bg-[#2B00FF] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Supercharge Your Business?
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          Book your personalized demo today and see SparkAI in action.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#2B00FF] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Book Your Demo
        </Link>
      </div>
    </section>
  );
}
