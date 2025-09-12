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
    <section className="bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto w-[92%] max-w-7xl py-20 md:py-28 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            From first call to first sale—fast. Our streamlined process gets you up and running in days, not months.
          </p>
        </div>

        {/* Enhanced Wave Timeline */}
        <div className="relative mt-16 md:mt-20">
          <div className="relative">
            <svg
              viewBox="0 0 1200 220"
              className="w-full h-[200px] md:h-[240px] block"
              aria-hidden="true"
            >
              {/* Background wave */}
              <path
                d="M20,110 C220,20 380,200 600,110 C820,20 980,200 1180,110"
                fill="none"
                className="stroke-white/5"
                strokeWidth="4"
              />
              
              {/* Main animated wave */}
              <path
                d="M20,110 C220,20 380,200 600,110 C820,20 980,200 1180,110"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="3"
                strokeDasharray="15 12"
                className="animate-[dashMove_4s_linear_infinite]"
                style={{ filter: "drop-shadow(0 0 8px rgba(212,255,0,0.4))" }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4ff00" />
                  <stop offset="50%" stopColor="#2B00FF" />
                  <stop offset="100%" stopColor="#d4ff00" />
                </linearGradient>
              </defs>

              {/* START point */}
              <g transform="translate(20,110)">
                <circle r="12" fill="#d4ff00" className="animate-pulse" />
                <circle r="22" fill="none" className="stroke-white/20" strokeWidth="2" />
                <circle r="32" fill="none" className="stroke-white/10" strokeWidth="1" />
                <text x="0" y="35" textAnchor="middle" className="text-xs fill-white/60 font-semibold">START</text>
              </g>

              {/* FINISH point */}
              <g transform="translate(1180,110)">
                <circle r="16" fill="#d4ff00" className="animate-pulse" />
                <circle r="26" fill="none" className="stroke-white/20" strokeWidth="2" />
                <circle r="36" fill="none" className="stroke-white/10" strokeWidth="1" />
                <path
                  d="M-8 0 l6 6 l12 -12"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text x="0" y="45" textAnchor="middle" className="text-xs fill-white/60 font-semibold">FINISH</text>
              </g>
            </svg>
          </div>

          {/* Interactive nodes over the wave */}
          <div className="pointer-events-none absolute inset-0">
            <Node x="10%" y="50%" label="01" active={active === 0} onHover={() => setActive(0)} onLeave={() => setActive(null)} />
            <Node x="40%" y="50%" label="02" active={active === 1} onHover={() => setActive(1)} onLeave={() => setActive(null)} />
            <Node x="70%" y="50%" label="03" active={active === 2} onHover={() => setActive(2)} onLeave={() => setActive(null)} />
            <Node x="90%" y="50%" label="04" active={active === 3} onHover={() => setActive(3)} onLeave={() => setActive(null)} />
          </div>
        </div>

        {/* Enhanced step cards */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s, idx) => {
            const isActive = active === idx;
            return (
              <div
                key={s.number}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                className={[
                  "group relative rounded-3xl border p-6 md:p-8 transition-all duration-300 transform",
                  isActive
                    ? "border-[#d4ff00]/50 bg-gradient-to-br from-[#121212] to-[#0a0a0a] shadow-[0_0_0_4px_rgba(212,255,0,0.15),0_20px_60px_rgba(0,0,0,0.5)] scale-105"
                    : "border-white/10 bg-gradient-to-br from-[#0F0F0F] to-[#050505] hover:border-white/25 hover:scale-102",
                ].join(" ")}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: "radial-gradient(1200px 300px at 50% -10%, rgba(212,255,0,0.08), rgba(0,0,0,0))",
                     }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <span
                        className={[
                          "inline-flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold transition-all duration-300",
                          isActive 
                            ? "bg-gradient-to-r from-[#d4ff00] to-[#b8e600] text-black shadow-lg" 
                            : "bg-gradient-to-r from-[#191919] to-[#2a2a2a] text-white group-hover:from-[#2a2a2a] group-hover:to-[#3a3a3a]",
                        ].join(" ")}
                      >
                        {s.number}
                      </span>
                      {/* Pulse ring for active state */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-2 border-[#d4ff00]/30 animate-ping"></div>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#d4ff00] transition-colors duration-300">
                      {s.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {s.blurb}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={[
                        "h-full bg-gradient-to-r from-[#d4ff00] to-[#2B00FF] rounded-full transition-all duration-500",
                        isActive ? "w-full" : "w-0 group-hover:w-1/2"
                      ].join(" ")}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes dashMove {
          to {
            stroke-dashoffset: -27;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}

/** Enhanced circular node component */
function Node({ x, y, label, active, onHover, onLeave }) {
  return (
    <div
      className="absolute animate-float"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <button
        type="button"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onHover}
        onBlur={onLeave}
        className={[
          "pointer-events-auto h-16 w-16 md:h-18 md:w-18 rounded-full",
          "border-2 flex items-center justify-center text-lg md:text-xl font-bold",
          "transition-all duration-300 outline-none transform",
          "hover:scale-110 focus:scale-110",
          active
            ? "bg-gradient-to-r from-[#d4ff00] to-[#b8e600] text-black border-[#d4ff00] shadow-[0_0_0_12px_rgba(212,255,0,0.2),0_20px_60px_rgba(212,255,0,0.4)]"
            : "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white border-white/20 hover:bg-gradient-to-r hover:from-[#2a2a2a] hover:to-[#3a3a3a] hover:border-white/40 hover:shadow-[0_0_0_10px_rgba(212,255,0,0.15),0_15px_40px_rgba(0,0,0,0.3)]",
        ].join(" ")}
        aria-label={`Step ${label}`}
      >
        {label}
      </button>
    </div>
  );
}
