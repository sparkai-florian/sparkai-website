// ================================
// File: components/partners/PartnersSection.js
// Description: Partners section component with filterable logo grid
// Tech: React + Tailwind (JavaScript, no TS)
// Notes:
// - Provides a floating logo ticker (overlaps nav using negative margin)
// - Filterable logo grid with normalized sizing for big/small logos
// - Minimal version per your request (no partner CTA, no co‑marketing line, no case studies)
// - Replace /public/*.svg with your actual assets
// ================================

import { useMemo } from "react";

// --- Partner list (swap src with your SVG/PNG paths; href optional) ---
const PARTNERS = [
  { name: "Chatbotbuilder", src: "/chatbotbuilder-logo.png", href: "#" },
  { name: "Google Sheets", src: "/google sheets-logo.png", href: "#" },
  { name: "Google Calendar", src: "/google-calendar-logo.png", href: "#" },
  { name: "Pushover", src: "/pushover-logo.png", href: "#" },
  { name: "Instagram", src: "/icons/instagram.png", href: "#" },
  { name: "Facebook", src: "/icons/facebook.png", href: "#" },
  { name: "WhatsApp", src: "/icons/whatsapp.png", href: "#" },
  { name: "Telegram", src: "/icons/telegram.png", href: "#" },
  { name: "Viber", src: "/icons/viber.png", href: "#" },
  { name: "Stripe", src: "/stripe-logo.png", href: "#" },
  { name: "OpenAI", src: "/openai-logo.png", href: "#" },
  { name: "Gemini", src: "/gemini-logo.png", href: "#" },
  { name: "Pabbly", src: "/pabbly-logo.png", href: "#" },
  { name: "Make.com", src: "/make.com-logo.png", href: "#" },
  { name: "SMS", src: "/sms.png", href: "#" },
  { name: "Zoho", src: "/zoho-logo.png", href: "#" },
  { name: "HubSpot", src: "/hubspot-logo.png", href: "#" },
  { name: "FASHN AI", src: "/fashnai-logo.png", href: "#" },
];

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {kicker && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#2139ff] font-paragraph">
          {kicker}
        </p>
      )}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
        <span className="bg-gradient-to-r from-[#2139ff] to-[#d4ff00] bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg text-gray-400 font-paragraph leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}


function LogoCard({ src, alt = "Partner logo", name, href }) {
  const image = (
    <img
      src={src}
      alt={alt || name}
      className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = "none";
        const fallback = target.nextElementSibling;
        if (fallback) fallback.style.display = "block";
      }}
    />
  );

  const content = (
    <div className="relative mx-auto flex aspect-[3/2] w-full items-center justify-center">
      {image}
      <span className="hidden text-sm font-medium text-gray-300">{name}</span>
    </div>
  );

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-sm transition-all duration-300 hover:border-[#2139ff]/40 hover:shadow-xl hover:shadow-[#2139ff]/20 hover:scale-105">
      {href ? (
        <a href={href} aria-label={name} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function LogoGrid({ logos }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {logos.map((item, i) => (
        <LogoCard
          key={i}
          src={item.src}
          name={item.name}
          alt={`${item.name} logo`}
          href={item.href}
        />
      ))}
    </div>
  );
}

function LogoTicker({ logos }) {
  const lane = useMemo(() => {
    const imgs = logos.map((l) => l.src);
    return [...imgs, ...imgs, ...imgs];
  }, [logos]);

  return (
    <div className="relative isolate mb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-black via-black/50 to-transparent" />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-xl backdrop-blur-md">
        <div className="flex animate-[ticker_35s_linear_infinite] gap-12 p-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {lane.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="partner logo"
              className="h-12 w-auto shrink-0 grayscale opacity-50 hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2139ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4ff00]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Logo Ticker */}
        <LogoTicker logos={PARTNERS} />

        {/* Header Section */}
        <div className="mb-16">
          <SectionHeader
            kicker="TRUSTED INTEGRATIONS"
            title="Our Ecosystem of Tools & Platforms"
            subtitle="These platforms, channels, and services help us build and automate end‑to‑end customer experiences for your business."
          />
        </div>

        {/* Logo Grid */}
        <div className="mt-12">
          <LogoGrid logos={PARTNERS} />
        </div>
      </div>
    </section>
  );
}
