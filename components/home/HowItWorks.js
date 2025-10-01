// components/home/HowItWorksWave.js
"use client";


const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    subtitle: "We Learn Your Business Inside Out",
    blurb:
      "Go live in days and watch the magic happen. Your AI handles every message professionally, captures leads you used to miss, books appointments automatically, and follows up consistently. Meanwhile, you're sleeping better, working smarter, and watching your business grow automatically while maintaining perfect relationships.",
    outcome: "Strategic consultation + complete business knowledge collection",
  },
  {
    number: "02",
    title: "Build & Integrate",
    subtitle: "We Craft Your Intelligent System",
    blurb:
      "Our team builds custom conversation flows, sets up multi-language support, and creates smart automations for bookings, lead qualification, follow-ups, and more. Then we seamlessly connect everything to your existing tools - Email, CRM, scheduling systems.",
    outcome: "Custom AI development + full system integration",
  },
  {
    number: "03",
    title: "Launch & Thrive",
    subtitle: "You Get Your Life Back While Revenue Grows",
    blurb:
      "Go live in days and watch the magic happen. Your AI handles every message professionally, captures leads you used to miss, books appointments automatically, and follows up consistently. Meanwhile, you're sleeping better, working smarter, and watching your business grow automatically.",
    outcome: "24/7 automated success + peace of mind + growing revenue",
  },
];

export default function HowItWorksWave() {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#d4ff00] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#2139ff] rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="mx-auto w-[80%] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-headline">
            3 Steps to Automated Success
          </h2>
          <p className="text-lg text-gray-300 font-subheadline">From first call to first sale—fast. Our streamlined process gets you up and running in days, not months.</p>
        </div>

        {/* Roadmap Design */}
        <div className="relative">
          {/* Moving wave dashes with start and end reference points */}
          <div className="hidden md:block absolute -top-2 left-0 right-0 h-16 overflow-hidden">
            {/* Start reference circle */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#d4ff00] to-[#2139ff] rounded-full border-2 border-white shadow-lg z-10"></div>
            
            {/* Wave path */}
            <div className="absolute left-4 right-4 top-0 h-full">
              <svg className="w-full h-full" viewBox="0 0 800 64" preserveAspectRatio="none">
                <path
                  d="M0,32 Q200,8 400,32 T800,32"
                  stroke="url(#waveGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="12,8"
                  className="animate-dash-flow"
                />
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4ff00" />
                    <stop offset="50%" stopColor="#2139ff" />
                    <stop offset="100%" stopColor="#d4ff00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* End reference circle */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#2139ff] to-[#d4ff00] rounded-full border-2 border-white shadow-lg z-10"></div>
          </div>
          
          {/* Steps in equal height cards with numbers on top */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, idx) => (
              <div key={s.number} className="relative flex flex-col">
                {/* Step circle on top of card */}
                <div className="flex justify-center mb-8 relative z-10 -mt-4">
                  <div className="relative group">
                    <div className="w-16 h-16 bg-[#2139ff] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl transition-all duration-300 group-hover:scale-125 group-hover:shadow-3xl cursor-pointer">
                      {s.number}
                    </div>
                    {/* Hover tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {s.title}
                    </div>
                  </div>
                </div>

                {/* Glossy step card */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm relative hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 font-headline">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#d4ff00] font-medium font-subheadline">
                      {s.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow font-paragraph">
                    {s.blurb}
                  </p>

                  {/* Outcome */}
                  <div className="bg-white/10 rounded-lg p-3 mt-auto border border-white/20">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1 font-paragraph">What happens:</p>
                    <p className="text-sm text-gray-200 font-medium font-paragraph">{s.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

