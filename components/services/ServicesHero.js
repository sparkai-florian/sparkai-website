// components/services/ServicesHero.js

import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Stop losing customers to slow responses and manual processes. Get AI that actually works for your business with our comprehensive suite of intelligent automation solutions.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We deliver custom AI solutions tailored to your specific needs, from 24/7 customer support automation to seamless platform integrations. Our goal is to help you focus on what you do best while we handle the repetitive tasks that slow you down.
          </p>
        </div>
      </div>
    </section>
  );
}