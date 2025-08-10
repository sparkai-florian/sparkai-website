// components/pricing/PricingHero.js
import Link from 'next/link';

export default function PricingHero() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Plans. Clear Pricing. Real Results.</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Choose an industry package or customize your chatbot with powerful features and integrations.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#2B00FF] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Book a Free Demo
          </Link>
          <a href="#all-features" className="text-white/80 hover:text-white underline">
            Compare All Features
          </a>
        </div>
      </div>
    </section>
  );
}
