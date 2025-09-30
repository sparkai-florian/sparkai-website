// components/pricing/PricingHero.js
import Link from 'next/link';

export default function PricingHero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="w-[85%] mx-auto px-4 md:px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight font-headline">
            Flexible{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12 font-subheadline">
            Choose an industry package or customize your chatbot with powerful features and integrations. Clear pricing with no hidden fees.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed font-paragraph">
            We believe in transparent pricing that scales with your business. From startups to enterprise, we have a plan that fits your needs and budget. Get started today and see real results from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
