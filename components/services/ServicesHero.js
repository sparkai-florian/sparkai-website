// components/services/ServicesHero.js

import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="w-full px-6 py-20 text-center bg-black">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        AI Services That Work While You Sleep
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        From chatbots that close leads to automations that save hours — SparkAI gives your team superpowers.
      </p>
      <div className="mt-8">
        <Link
          href="/contact"
          className="bg-[#2B00FF] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
