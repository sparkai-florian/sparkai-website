"use client";

export default function ProblemsSection() {

  return (
    <section id="problems" className="w-full bg-[#1C1C1C]">
      {/* Top divider */}
      <div className="h-8 bg-gradient-to-b from-black to-[#1C1C1C]" />
      
      <div className="mx-auto w-[85%] max-w-7xl py-16 md:py-20">
        {/* Section kicker + headline + paragraph at top */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex justify-center mb-4">
            <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              The Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Are You Losing Clients Without Realizing It?
          </h2>
          
          {/* Strategic paragraph structure */}
          <div className="mt-6 max-w-3xl mx-auto space-y-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Think about the last time a customer messaged you late at night or during a busy day. 
              <span className="text-white font-medium"> Did their question get lost under dozens of other messages?</span>
            </p>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Customers today expect <span className="text-white font-medium">fast, professional, and consistent replies</span> — 
              and when they don't get them, they leave. Every unanswered message isn't just a missed conversation, 
              <span className="text-[#d4ff00] font-medium"> it's a missed sale.</span>
            </p>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Without a system that takes care of every message, your business risks losing valuable opportunities 
              every single day while costs rise and your team struggles to keep up.
            </p>
          </div>
        </div>

        {/* Two-column layout: Video left, Pain Points right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left side - Video */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                className="w-full h-auto"
                controls
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/problem-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Optional overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right side - Pain Points */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              The Hidden Costs of Poor Communication
            </h3>
            <div className="space-y-4">
              {[
                "Delay — Slow responses send customers straight to competitors; minutes of waiting can cost the sale.",
                "Neglect — Conversations end without follow-ups, interest fades, and relationship-building never starts.",
                "Unprofessionalism — Short or careless replies damage credibility and reduce trust in your brand.",
                "Inefficiency — High message volumes overwhelm staff, and valuable leads slip through the cracks.",
                "Cost — Adding headcount for repetitive chats becomes expensive and unsustainable as inquiries grow.",
                "Silence — No replies outside working hours mean lost clients overnight and missed revenue."
              ].map((point, index) => (
                <div key={index} className="group flex gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#d4ff00] bg-gradient-to-br from-[#d4ff00]/20 to-[#d4ff00]/10 text-[#d4ff00] font-medium text-xs flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="font-semibold text-white">{point.split(' — ')[0]}</span>
                      <span className="text-gray-300"> — {point.split(' — ')[1]}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="h-8 bg-gradient-to-b from-[#1C1C1C] to-black" />
    </section>
  );
}