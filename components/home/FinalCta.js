// components/home/FinalCta.js
import Link from 'next/link';

export default function FinalCta() {
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
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
              Ready To Scale Your Operations Intelligently?
            </h2>
            
            <div className="space-y-4 text-base text-gray-100">
              <p className="leading-relaxed drop-shadow-md">
                Your business has outgrown simple solutions. 
                <span className="text-white font-medium"> You need intelligent automation that understands your processes, speaks your customers' languages, and integrates with your existing systems.</span>
              </p>
              
              <p className="text-lg font-semibold text-[#d4ff00] drop-shadow-md">
                This isn't about replacing your team - it's about empowering them.
              </p>
              
              <p className="leading-relaxed drop-shadow-md">
                I'll show you how businesses are using 
                <span className="text-white font-medium"> sophisticated AI to optimize operations while delivering superior customer experiences.</span> 
                We'll design a system specifically for your business complexity and growth trajectory.
              </p>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 relative shadow-2xl">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white drop-shadow-lg">
                Book Your Strategic Optimization Session
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-100">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full shadow-lg"></div>
                  <span>30-minute strategy call</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-100">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full shadow-lg"></div>
                  <span>Custom automation roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-100">
                  <div className="w-2 h-2 bg-[#d4ff00] rounded-full shadow-lg"></div>
                  <span>ROI projections for your business</span>
                </div>
              </div>
              
              <Link href="/book">
                <button className="w-full bg-[#d4ff00] hover:bg-[#d4ff00]/90 hover:scale-105 transition-all duration-300 px-6 py-4 text-base font-bold text-black rounded-xl shadow-2xl hover:shadow-3xl group">
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
