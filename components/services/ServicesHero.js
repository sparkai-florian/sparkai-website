// components/services/ServicesHero.js

import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="w-full px-6 py-20 text-center bg-black">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Our Services
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Stop losing customers to slow responses and manual processes. Get AI that actually works for your business.
      </p>
      <div className="mt-8">
        <Link
          href="/contact"
          className="bg-[#d4ff00] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
