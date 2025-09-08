// components/home/HowItWorksWave.js
"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Book a quick call",
    blurb:
      "Choose a slot. We get insight, gather information, and discuss goals, needs, and potential solutions for your company.",
  },
  {
    number: "02",
    title: "Discovery & content intake",
    blurb:
      "Collect information, gather insights, and compile FAQs, pricing, and brand tone so replies sound like you.",
  },
  {
    number: "03",
    title: "Build & integrate",
    blurb:
      "We craft flows, languages, and automations—bookings, orders, follow-ups, lead qualification—and connect Email/Sheets/CRM.",
  },
  {
    number: "04",
    title: "Go live & optimize",
    blurb:
      "Launch in days. Your AI replies 24/7, captures every lead, books appointments, nudges follow-ups; we monitor and keep improving conversions.",
  },
];

export default function HowItWorksWave() {
  const [active, setActive] = useState(null);

  return (
    <section>
      <div className="mx-auto w-[92%] max-w-7xl py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-3 text-white/80">From first call to first sale—fast.</p>
        </div>

        {/* Wave Timeline */}
        <div className="relative mt-12 md:mt-16">
          <svg
            viewBox="0 0 1200 220"
            className="w-full h-[180px] md:h-[220px] block"
            aria-hidden="true"
          >
            {/* Guide wave */}
            <path
              d="M20,110 C220,20 380,200 600,110 C820,20 980,200 1180,110"
              fill="none"
              className="stroke-white/10"
              strokeWidth="2"
            />
            {/* Faster animated neon dash (speed ↑) */}
            <path
              d="M20,110 C220,20 380,200 600,110 C820,20 980,200 1180,110"
              fill="none"
              stroke="#d4ff00"
              strokeWidth="2"
              strokeDasharray="12 10"
              className="animate-[dashMove_3s_linear_infinite]"
              style={{ filter: "drop-shadow(0 0 6px rgba(212,255,0,0.35))" }}
            />

            {/* START */}
            <g transform="translate(20,110)">
              <circle r="10" fill="#d4ff00" />
              <circle r="20" fill="none" className="stroke-white/15" strokeWidth="2" />
            </g>

            {/* FINISH */}
            <g transform="translate(1180,110)">
              <circle r="14" fill="#d4ff00" />
              <circle r="24" fill="none" className="stroke-white/15" strokeWidth="2" />
              <path
                d="M-6 0 l4 4 l8 -9"
                fill="none"
                stroke="#0b0b0b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          {/* Interactive nodes over the wave */}
          <div className="pointer-events-none absolute inset-0">
            <Node x="10%" y="50%" label="01" active={active === 0} onHover={() => setActive(0)} onLeave={() => setActive(null)} />
            <Node x="40%" y="50%" label="02" active={active === 1} onHover={() => setActive(1)} onLeave={() => setActive(null)} />
            <Node x="70%" y="50%" label="03" active={active === 2} onHover={() => setActive(2)} onLeave={() => setActive(null)} />
            <Node x="90%" y="50%" label="04" active={active === 3} onHover={() => setActive(3)} onLeave={() => setActive(null)} />
          </div>
        </div>

        {/* Sales-driven boxes (always visible) */}
        <div className="mt-10 grid md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s, idx) => {
            const isActive = active === idx;
            return (
              <div
                key={s.number}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                className={[
                  "rounded-2xl border p-5 md:p-6 transition-all duration-200",
                  isActive
                    ? "border-[#d4ff00]/40 bg-[#121212] shadow-[0_0_0_4px_rgba(212,255,0,0.12)]"
                    : "border-white/10 bg-[#0F0F0F] hover:border-white/20",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                      isActive ? "bg-[#d4ff00] text-black" : "bg-[#191919] text-white",
                    ].join(" ")}
                  >
                    {s.number}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm md:text-[15px] text-white/75">{s.blurb}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Faster neon dash keyframes */}
      <style jsx>{`
        @keyframes dashMove {
          to {
            stroke-dashoffset: -22;
          }
        }
      `}</style>
    </section>
  );
}

/** Circular node component */
function Node({ x, y, label, active, onHover, onLeave }) {
  return (
    <div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <button
        type="button"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onHover}
        onBlur={onLeave}
        className={[
          "pointer-events-auto h-14 w-14 md:h-16 md:w-16 rounded-full",
          "border border-white/15 bg-[#151515] text-white",
          "flex items-center justify-center text-lg md:text-xl font-bold",
          "transition-all duration-200 outline-none",
          active
            ? "bg-[#d4ff00] text-black shadow-[0_0_0_10px_rgba(212,255,0,0.18),0_18px_55px_rgba(212,255,0,0.35)]"
            : "hover:bg-[#1a1a1a] hover:shadow-[0_0_0_8px_rgba(212,255,0,0.12)]",
        ].join(" ")}
        aria-label={`Step ${label}`}
      >
        {label}
      </button>
    </div>
  );
}
