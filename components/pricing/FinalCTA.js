// components/pricing/FinalCTA.js
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#2B00FF]">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Ready to automate your customer communication?
        </h2>
        <p className="text-white/90 mb-8">
          Book a free demo and we’ll show you the exact flow for your industry.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-[#2B00FF] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Book a Free Demo
          </Link>
          <a href="#all-features" className="underline text-white/90 hover:text-white">
            Compare Features
          </a>
        </div>
      </div>
    </section>
  );
}
