// components/pricing/FinalCTA.js
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-br from-[#213efa] via-[#4f6eff] via-[#7a8fff] to-white text-white py-20 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[1400px] h-[1400px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(33,62,250,0.4) 0%, rgba(79,110,255,0.2) 30%, rgba(122,143,255,0.1) 60%, transparent 100%)'
          }}
        ></div>
      </div>
      
      {/* Additional accent elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#d4ff00] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#d4ff00] rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-10"></div>
      
      <div className="mx-auto w-[80%] relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg font-headline">
              Ready to Automate Your Customer Communication?
            </h2>
            
            <div className="space-y-4 text-base text-gray-100">
              <p className="leading-relaxed drop-shadow-md font-paragraph">
                Book a free demo and we'll show you the exact flow for your industry. 
                <span className="text-white font-medium"> Transform your customer service with our AI-powered solutions that deliver results from day one.</span>
              </p>
              
              <p className="text-lg font-semibold text-[#d4ff00] drop-shadow-md font-subheadline">
                This isn't just about pricing - it's about value and results.
              </p>
              
              <p className="leading-relaxed drop-shadow-md font-paragraph">
                We'll show you how businesses are using 
                <span className="text-white font-medium"> our flexible pricing to scale their operations and achieve measurable ROI.</span> 
                Let's design a package that fits your budget and growth goals.
              </p>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 relative shadow-2xl">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white drop-shadow-lg font-headline">
                Book Your Free Demo
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-100">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full shadow-lg"></div>
                  <span className="font-paragraph">Industry-specific demo</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-100">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full shadow-lg"></div>
                  <span className="font-paragraph">Custom pricing package</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-100">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full shadow-lg"></div>
                  <span className="font-paragraph">ROI projections</span>
                </div>
              </div>
              
              <Link href="/contact">
                <button className="w-full bg-[#ec3481] hover:bg-[#ec3481]/90 hover:scale-105 transition-all duration-300 px-6 py-4 text-base font-bold text-white rounded-xl shadow-2xl hover:shadow-3xl group font-subheadline">
                  <span className="flex items-center justify-center gap-3">
                    BOOK MY FREE CONSULTATION
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
