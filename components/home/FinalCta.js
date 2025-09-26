// components/home/FinalCta.js
import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="w-full bg-black text-white py-20 relative overflow-hidden">
      {/* Radiant gradient background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[1000px] h-[1000px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212,255,0,0.15) 0%, rgba(212,255,0,0.05) 50%, transparent 100%)'
          }}
        ></div>
      </div>
      
      <div className="mx-auto w-[85%] max-w-6xl relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready To Scale Your Operations Intelligently?
            </h2>
            
            <div className="space-y-4 text-base text-gray-300">
              <p className="leading-relaxed">
                Your business has outgrown simple solutions. 
                <span className="text-white font-medium"> You need intelligent automation that understands your processes, speaks your customers' languages, and integrates with your existing systems.</span>
              </p>
              
              <p className="text-lg font-semibold text-[#d4ff00]">
                This isn't about replacing your team - it's about empowering them.
              </p>
              
              <p className="leading-relaxed">
                I'll show you how businesses are using 
                <span className="text-white font-medium"> sophisticated AI to optimize operations while delivering superior customer experiences.</span> 
                We'll design a system specifically for your business complexity and growth trajectory.
              </p>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 relative">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                Book Your Strategic Optimization Session
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full"></div>
                  <span>30-minute strategy call</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full"></div>
                  <span>Custom automation roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full"></div>
                  <span>ROI projections for your business</span>
                </div>
              </div>
              
              <Link href="/book">
                <button className="w-full bg-[#d4ff00] hover:bg-[#d4ff00]/90 hover:scale-105 transition-all duration-300 px-6 py-4 text-base font-bold text-black rounded-xl shadow-lg hover:shadow-xl group">
                  <span className="flex items-center justify-center gap-3">
                    YES, OPTIMIZE MY OPERATIONS
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
