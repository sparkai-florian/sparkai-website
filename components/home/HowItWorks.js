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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            3 Steps to Automated Success
          </h2>
          <p className="text-lg text-gray-300">From first call to first sale—fast. Our streamlined process gets you up and running in days, not months.</p>
        </div>

        {/* Roadmap Design */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4ff00] via-[#2139ff] to-[#d4ff00] opacity-30"></div>
          
          {/* Steps in roadmap layout */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, idx) => (
              <div key={s.number} className="relative">
                {/* Step circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#d4ff00] to-[#2139ff] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-2xl">
                    {s.number}
                  </div>
                </div>

                {/* Step card */}
                <div className="bg-gray-900 p-6 rounded-lg border border-transparent bg-clip-padding relative hover:scale-105 transition-transform duration-300" style={{
                  backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #d4ff00, #2139ff)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}>
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#d4ff00] font-medium">
                      {s.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {s.blurb}
                  </p>

                  {/* Outcome */}
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">What happens:</p>
                    <p className="text-sm text-gray-200 font-medium">{s.outcome}</p>
                  </div>

                  {/* Arrow indicator for mobile */}
                  {idx < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#d4ff00] to-[#2139ff] rounded-full flex items-center justify-center text-black font-bold text-sm">
                        ↓
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

