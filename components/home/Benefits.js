// components/home/BenefitsSection.jsx
"use client";

import {
  Zap,
  PiggyBank,
  Languages,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Never Miss a Client, Grow Without Stress",
    tagline: "You'll feel the relief of knowing every client is answered instantly, even while you sleep, and watch sales grow without stress.",
    points: [
      "Replies sent in under 2 seconds",
      "Clients covered nights, weekends, holidays",
      "Answers personalized to your business",
    ],
  },
  {
    icon: PiggyBank,
    title: "Win Back Your Time & Cut Costs",
    tagline: "By automating the busywork, you gain back precious hours to enjoy with family and friends—while also freeing up focus for the areas of business that drive growth.",
    points: [
      "Auto-FAQs resolve 80% of questions",
      "Smart follow-ups recover lost sales",
      "Team focuses only on high-value work",
    ],
  },
  {
    icon: Languages,
    title: "Speak Every Client's Language Effortlessly",
    tagline: "Clients feel valued and understood in their own language, while you enjoy the confidence of truly global, professional communication.",
    points: [
      "Automatic detection of client language",
      "French, Italian, English and 50+ more…",
      "Consistent, on-brand tone",
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto w-[92%] max-w-7xl py-20 md:py-28 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Core Benefits
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            What You Gain with SparkAI
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Three benefits that drive revenue, efficiency, and reach—powered by AI that works while you sleep.
          </p>
        </div>

        {/* Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map(({ icon: Icon, title, tagline, points }, index) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F0F0F] to-[#050505] p-8 md:p-10 transition-all duration-300 transform hover:scale-105 hover:border-[#d4ff00]/40 hover:shadow-[0_0_0_8px_rgba(212,255,0,0.15),0_25px_70px_rgba(0,0,0,0.6)]"
            >
              {/* Decorative gradient overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     background: "radial-gradient(1200px 300px at 50% -10%, rgba(212,255,0,0.08), rgba(0,0,0,0))",
                   }}
              />

              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#d4ff00] to-[#b8e600] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon + title */}
              <div className="relative mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] group-hover:border-[#d4ff00]/40 group-hover:from-[#2a2a2a] group-hover:to-[#3a3a3a] transition-all duration-300">
                    <Icon className="h-7 w-7 text-white group-hover:text-[#d4ff00] transition-colors duration-300" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#d4ff00] transition-colors duration-300 leading-tight">
                  {title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="relative mb-6 text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
                {tagline}
              </p>

              {/* Bullets */}
              <ul className="relative space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[#d4ff00] flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm md:text-base leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Enhanced accent line */}
              <div className="relative mt-8 h-px w-full bg-white/5" />
              <div className="relative mt-2 h-[3px] w-20 bg-gradient-to-r from-[#d4ff00] to-[#2B00FF] group-hover:w-32 transition-all duration-500 shadow-[0_0_15px_rgba(212,255,0,0.6)] rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
