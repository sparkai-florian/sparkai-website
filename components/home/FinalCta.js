// components/home/FinalCta.js
import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#f6db4b]/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main headline with enhanced styling */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
          Ready To Scale Your Operations Intelligently?
        </h2>
        
        {/* Content with better visual hierarchy */}
        <div className="space-y-8 text-lg md:text-xl text-gray-300 mb-16 max-w-5xl mx-auto">
          <p className="leading-relaxed text-xl md:text-2xl">
            Your business has outgrown simple solutions. 
            <span className="text-white font-semibold"> You need intelligent automation that understands your processes, speaks your customers' languages, and integrates with your existing systems.</span>
          </p>
          
          <p className="text-2xl md:text-3xl font-semibold text-[#f6db4b] mb-6">
            This isn't about replacing your team - it's about empowering them.
          </p>
          
          <p className="leading-relaxed text-lg md:text-xl">
            I'll show you how businesses are using 
            <span className="text-white font-semibold"> sophisticated AI to optimize operations while delivering superior customer experiences.</span> 
            We'll design a system specifically for your business complexity and growth trajectory.
          </p>
        </div>

        {/* Enhanced CTA section with better design */}
        <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-16 mb-12 relative overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6db4b]/5 to-transparent opacity-50"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Book Your Strategic Optimization Session
            </h3>
            
            <div className="flex justify-center">
              <Link href="/book">
                <button className="bg-[#f6db4b] hover:bg-[#f6db4b]/90 hover:scale-105 transition-all duration-300 px-12 py-5 text-xl font-bold text-black rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-[#f6db4b]/30 group">
                  <span className="flex items-center gap-3">
                    YES, OPTIMIZE MY OPERATIONS
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
