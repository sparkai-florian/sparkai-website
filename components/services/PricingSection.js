import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white font-headline">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-subheadline">
            One monthly subscription. All features included. No hidden costs, no surprises.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl p-12 border border-white/20 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFA3]/10 to-[#2139ff]/10 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FFA3] to-[#2139ff]"></div>
            
            <div className="relative z-10">
              {/* Pricing Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 font-headline">
                  Complete AI Solution
                </h3>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-6xl font-black text-white font-headline">€99</span>
                  <div className="text-left">
                    <div className="text-gray-300 font-paragraph">per month</div>
                    <div className="text-sm text-gray-400 font-paragraph">billed monthly</div>
                  </div>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-paragraph">
                  Everything you need to transform your customer service and automate your business processes.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00FFA3] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-paragraph">Unlimited contacts and messages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00FFA3] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-paragraph">24/7 ongoing support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00FFA3] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-paragraph">Light system changes included</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00FFA3] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-paragraph">Analytics and reporting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00FFA3] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-paragraph">No setup fees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00FFA3] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-paragraph">Multi-platform integration</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link href="/contact">
                  <button className="bg-[#ec3481] hover:bg-[#ec3481]/90 transition-all duration-300 px-12 py-4 text-lg font-bold text-white rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 group font-subheadline">
                    <span className="flex items-center justify-center gap-3">
                      GET STARTED TODAY
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <p className="text-sm text-gray-400 mt-4 font-paragraph">
                  Start your transformation today. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-white mb-4 font-headline">
                Need Additional Features?
              </h4>
              <p className="text-gray-300 mb-6 font-paragraph">
                Our standard plan includes everything most businesses need. For advanced features and custom integrations, 
                download our comprehensive feature price list.
              </p>
              
              {/* PDF Download Button */}
              <a 
                href="/pdf/sparkai-pricelist.pdf" 
                download="sparkai-pricelist.pdf"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-subheadline">Download Feature Price List</span>
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              
              <p className="text-sm text-gray-400 mt-4 font-paragraph">
                PDF includes detailed pricing for advanced features, integrations, and custom development
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 max-w-3xl mx-auto font-paragraph">
            <span className="text-white font-semibold">No hidden costs, no surprises.</span> 
            {' '}What you see is what you pay. One simple monthly fee covers everything you need to revolutionize your business operations.
          </p>
        </div>
      </div>
    </section>
  );
}
