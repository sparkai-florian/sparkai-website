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
    title: "Respond Faster, Close More",
    tagline: "Never lose a lead again.",
    points: [
      "Instant replies • 24/7",
      "Weekends & off-hours covered",
      "Trained on your business",
    ],
  },
  {
    icon: PiggyBank,
    title: "Save Time, Cut Costs",
    tagline: "Automate the busywork.",
    points: [
      "Auto-FAQs & smart follow-ups",
      "Lower workload for your team",
      "Focus on high-value tasks",
    ],
  },
  {
    icon: Languages,
    title: "Multilingual, Built-In",
    tagline: "Every client feels understood.",
    points: [
      "Auto language detection",
      "Albanian, English & more",
      "Consistent, on-brand tone",
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-[#f8f9fa] text-white">
      <div className="mx-auto w-[92%] max-w-7xl py-16 md:py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What You Gain with SparkAI</h2>
          <p className="mt-3 text-white/80">
            Three benefits that drive revenue, efficiency, and reach—powered by AI that works while you sleep.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {benefits.map(({ icon: Icon, title, tagline, points }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 md:p-7 transition-all duration-200 hover:border-[#d4ff00]/30 hover:shadow-[0_0_0_6px_rgba(212,255,0,0.10),0_18px_55px_rgba(0,0,0,0.45)]"
            >
              {/* subtle gradient wash */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                   style={{
                     background: "radial-gradient(1200px 300px at 50% -10%, rgba(212,255,0,0.10), rgba(0,0,0,0))",
                   }}
              />

              {/* Icon + title */}
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414] group-hover:border-[#d4ff00]/30 transition-colors duration-200">
                  <Icon className="h-5 w-5 text-white group-hover:text-[#d4ff00]" aria-hidden="true" />
                </span>
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
              </div>

              {/* Tagline */}
              <p className="relative mt-2 text-white/75">{tagline}</p>

              {/* Bullets */}
              <ul className="relative mt-4 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-white/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#d4ff00]" aria-hidden="true" />
                    <span className="text-sm md:text-[15px]">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Accent line */}
              <div className="relative mt-6 h-px w-full bg-white/5" />
              <div className="relative mt-1 h-[2px] w-16 bg-[#d4ff00] group-hover:w-24 transition-all duration-300 shadow-[0_0_12px_rgba(212,255,0,0.55)]" />
            </div>
          ))}
        </div>

        {/* Optional reassurance strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
          <span className="rounded-full border border-white/10 px-3 py-1">Go live in days</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Instagram • WhatsApp • Facebook • Telegram • Website</span>
          <span className="rounded-full border border-white/10 px-3 py-1">24/7 • Multilingual</span>
        </div>
      </div>
    </section>
  );
}
