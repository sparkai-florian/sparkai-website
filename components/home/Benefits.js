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
    title: "Deep Discovery & Custom Setup",
    tagline: "We dive deep into your goals, challenges, and customer needs, then gather all your business knowledge to make your AI sound exactly like you.",
    points: [
      "Comprehensive discovery of your goals and challenges",
      "Analysis of customer needs and pain points",
      "Gathering FAQs, pricing, and brand voice guidelines",
      "AI that sounds exactly like you but never takes a day off",
    ],
  },
  {
    icon: Globe,
    title: "Smart Automation & Integration",
    tagline: "We build custom conversation flows, set up multi-language support, and create smart automations that seamlessly connect to your existing tools.",
    points: [
      "Custom conversation flows tailored to your business",
      "Multi-language support for global reach",
      "Smart automations for bookings and lead qualification",
      "Seamless integration with Email, CRM, and scheduling systems",
    ],
  },
  {
    icon: Target,
    title: "Go Live & Watch Results",
    tagline: "Deploy in days and watch your AI handle every message professionally, capture leads, book appointments, and follow up consistently while you work smarter.",
    points: [
      "Go live in days with immediate impact",
      "Professional handling of every customer message",
      "Automatic lead capture and appointment booking",
      "Consistent follow-ups while you sleep better and work smarter",
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="mx-auto w-[85%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Strategic Advantages for Your Operations
          </h2>
          <p className="text-lg text-gray-300">Three strategic pillars that elevate your business operations and enable intelligent scaling.</p>
        </div>

        {/* Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, tagline, points }, index) => (
            <div key={title} className="bg-gray-900 p-6 rounded-lg border border-transparent bg-clip-padding relative" style={{
              backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #d4ff00, #2139ff)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}>
              {/* Step number in top right */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#d4ff00] to-[#2139ff] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#d4ff00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-gray-300 text-sm mb-4">
                {tagline}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[#d4ff00] flex-shrink-0" />
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
