// components/home/HowItWorksWave.js
"use client";


const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    subtitle: "We Learn Your Business Inside Out",
    blurb:
      "Book a quick call where we dive deep into your goals, challenges, and customer needs. Then we gather all your business knowledge - FAQs, pricing, brand voice, processes - so your AI sounds exactly like you (but never takes a day off).",
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
      "Go live in days and watch the magic happen. Your AI handles every message professionally, captures leads you used to miss, books appointments automatically, and follows up consistently. Meanwhile, you're sleeping better, working smarter, and watching your business grow on autopilot.",
    outcome: "24/7 automated success + peace of mind + growing revenue",
  },
];

export default function HowItWorksWave() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto w-[85%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            3 Steps to Automated Success
          </h2>
          <p className="text-lg text-gray-300">From first call to first sale—fast. Our streamlined process gets you up and running in days, not months.</p>
        </div>

        {/* Simple step cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={s.number} className="bg-gray-900 p-6 rounded-lg border border-transparent bg-clip-padding relative" style={{
              backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #d4ff00, #2139ff)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}>
              {/* Step number in top right */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#d4ff00] to-[#2139ff] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {s.number}
              </div>

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
              <p className="text-gray-300 text-sm mb-4">
                {s.blurb}
              </p>

              {/* Outcome */}
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">What happens:</p>
                <p className="text-sm text-gray-200 font-medium">{s.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

