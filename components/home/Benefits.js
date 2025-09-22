// components/home/BenefitsSection.jsx
"use client";

import {
  Cpu,
  Globe,
  Target,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Cpu,
    title: "Intelligent Process Optimization",
    tagline: "Transform complex customer journeys into seamless experiences with AI that understands context and integrates with your existing systems.",
    points: [
      "Handles complex, multi-step customer journeys",
      "Integrates seamlessly with existing business systems",
      "Maintains context across all customer touchpoints",
      "Messages that you trust - sophisticated and contextually aware",
    ],
  },
  {
    icon: Globe,
    title: "Scale Without Complexity",
    tagline: "Expand globally with confidence knowing your brand voice and communication quality remain consistent across all markets and languages.",
    points: [
      "Native-level communication in 50+ languages",
      "Consistent brand voice across all interactions",
      "24/7 coverage without staffing challenges",
      "Cultural nuance and professional communication",
    ],
  },
  {
    icon: Target,
    title: "Strategic Resource Allocation",
    tagline: "Optimize your team's focus by automating routine processes while empowering strategic initiatives and complex problem-solving.",
    points: [
      "Automates routine processes, not just responses",
      "Teams focus on strategic initiatives and complex problem-solving",
      "Scales operations without proportional resource increases",
      "Data-driven insights for continuous optimization",
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
            Strategic Advantages for Your Operations
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Three strategic pillars that elevate your business operations and enable intelligent scaling.
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
