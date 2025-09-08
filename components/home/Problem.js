// components/home/ProblemsSection.js
"use client";

import { MessageSquare, Clock, AlertTriangle } from "lucide-react";

export default function ProblemsSection() {
  const cards = [
    {
      title: "Missed Sales & Opportunities",
      points: [
        "Leads get lost in DMs or messages are left unanswered.",
        "No structured follow-up, so hot prospects slip away.",
        "Businesses lose revenue because they can’t respond fast enough.",
      ],
      icon: <MessageSquare className="w-12 h-12 text-[#d4ff00]" />,
    },
    {
      title: "Slow Responses & Lack of Efficiency",
      points: [
        "Time wasted answering repetitive questions.",
        "No automation for simple tasks like bookings, FAQs, or order checks.",
        "Competitors who reply faster win the customer.",
      ],
      icon: <Clock className="w-12 h-12 text-[#d4ff00]" />,
    },
    {
      title: "Overload During Promotions & High Demand",
      points: [
        "Too many messages during campaigns or peak hours.",
        "Staff can’t keep up, leading to frustrated customers.",
        "Inconsistent service quality, especially outside working hours.",
      ],
      icon: <AlertTriangle className="w-12 h-12 text-[#d4ff00]" />,
    },
  ];

  return (
    <section id="problems" className="w-full bg-[#1C1C1C]">
      <div className="mx-auto w-[92%] max-w-7xl py-16 md:py-20">
        {/* Section kicker + headline */}
        <div className="text-center mb-12 md:mb-16">
          <p className="inline-block text-xs tracking-widest uppercase text-white/60">
            The Problem
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight text-white">
            Every business dreams of growth, but hidden roadblocks get in the way.
            Missed messages, slow replies, and overwhelmed staff hold companies back
            from winning more clients.
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
            These everyday struggles quietly eat away at opportunities and revenue,
            until they become impossible to ignore.
          </p>
        </div>

        {/* Icons row above cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {cards.map((card, i) => (
            <div key={i} className="flex justify-center">{card.icon}</div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ title, points }, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 transition-transform duration-300 will-change-transform hover:-translate-y-1"
            >
              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-center text-white mb-3">
                {title}
              </h3>

              {/* Bullets */}
              <ul className="mt-3 space-y-2.5 text-sm text-white/80">
                {points.map((p, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4ff00] group-hover:animate-pulse" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom bar accent on hover */}
              <div className="absolute left-4 right-4 bottom-0 h-[2px] origin-left scale-x-0 bg-[#d4ff00] transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}