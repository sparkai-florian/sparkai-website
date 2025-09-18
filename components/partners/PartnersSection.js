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

import { useMemo, useState } from "react";

// --- Partner list (swap src with your SVG/PNG paths; href optional) ---
const PARTNERS = [
  { name: "Chatbotbuilder", src: "/partners/chatbotbuilder.png", href: "#" },
  { name: "Google Sheets", src: "/partners/google-sheets.png", href: "#" },
  { name: "Google Calendar", src: "/partners/google-calendar.png", href: "#" },
  { name: "Pushover", src: "/partners/pushover.png", href: "#" },
  { name: "Instagram", src: "/icons/instagram.png", href: "#" },
  { name: "Facebook", src: "/icons/facebook.png", href: "#" },
  { name: "WhatsApp", src: "/icons/whatsapp.png", href: "#" },
  { name: "Telegram", src: "/icons/telegram.png", href: "#" },
  { name: "Viber", src: "/icons/viber.png", href: "#" },
  { name: "Stripe", src: "/partners/stripe.png", href: "#" },
  { name: "OpenAI", src: "/partners/openai.png", href: "#" },
  { name: "Gemini", src: "/partners/google-gemini.png", href: "#" },
  { name: "Pabbly", src: "/partners/pabbly.png", href: "#" },
  { name: "Make.com", src: "/partners/make.png", href: "#" },
  { name: "SMS", src: "/partners/sms.png", href: "#" },
  { name: "Zoho", src: "/partners/zoho.png", href: "#" },
  { name: "HubSpot", src: "/partners/hubspot.png", href: "#" },
  { name: "FASHN AI", src: "/partners/fashnai.png", href: "#" },
];

// Optional groupings for tabs
const GROUPS = {
  All: PARTNERS,
  Platforms: [
    { name: "Chatbotbuilder", src: "/partners/chatbotbuilder.png", href: "#" },
    { name: "OpenAI", src: "/partners/openai.png", href: "#" },
    { name: "Gemini", src: "/partners/google-gemini.png", href: "#" },
    { name: "FASHN AI", src: "/partners/fashnai.png", href: "#" },
  ],
  Automation: [
    { name: "Make.com", src: "/partners/make.png", href: "#" },
    { name: "Pabbly", src: "/partners/pabbly.png", href: "#" },
  ],
  "Google Workspace": [
    { name: "Google Sheets", src: "/partners/google-sheets.png", href: "#" },
    { name: "Google Calendar", src: "/partners/google-calendar.png", href: "#" },
  ],
  Messaging: [
    { name: "Instagram", src: "/icons/instagram.png", href: "#" },
    { name: "Facebook", src: "/icons/facebook.png", href: "#" },
    { name: "WhatsApp", src: "/icons/whatsapp.png", href: "#" },
    { name: "Telegram", src: "/icons/telegram.png", href: "#" },
    { name: "Viber", src: "/icons/viber.png", href: "#" },
    { name: "SMS", src: "/partners/sms.png", href: "#" },
  ],
  Payments: [
    { name: "Stripe", src: "/partners/stripe.png", href: "#" },
  ],
  CRM: [
    { name: "HubSpot", src: "/partners/hubspot.png", href: "#" },
    { name: "Zoho", src: "/partners/zoho.png", href: "#" },
  ],
  Notifications: [
    { name: "Pushover", src: "/partners/pushover.png", href: "#" },
  ],
};

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {kicker}
        </p>
      )}
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}

function FilterTabs({ tabs, current, onChange }) {
  return (
    <div className="mx-auto mt-6 flex w-full max-w-[720px] flex-wrap items-center justify-center gap-2">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={
            "rounded-full border px-3 py-1.5 text-sm transition " +
            (current === t
              ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
              : "border-zinc-300/80 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800")
          }
        >
          {t}
        </button>
      ))}
    </div>
  );
}

function LogoCard({ src, alt = "Partner logo", name, href }) {
  const image = (
    <img
      src={src}
      alt={alt || name}
      className="max-h-full max-w-full object-contain grayscale opacity-70 transition group-hover:opacity-100"
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
      <span className="hidden text-sm font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
    </div>
  );

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900">
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
    <div className="relative isolate -mt-10 md:-mt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm dark:from-zinc-950/80" />
      <div className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80">
        <div className="flex animate-[ticker_35s_linear_infinite] gap-8 p-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {lane.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="partner logo"
              className="h-10 w-auto shrink-0 grayscale opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

export default function PartnersSection() {
  const [tab, setTab] = useState("All");
  const tabs = Object.keys(GROUPS);
  const logos = GROUPS[tab];

  return (
    <section className="relative">
      {/* Floating ticker that visually overlaps the navbar area */}
      <div className="container mx-auto px-4">
        <LogoTicker logos={PARTNERS} />
      </div>

      {/* Intro + Filters + Grid */}
      <div className="container mx-auto px-4 pb-12 pt-12 sm:pt-16 md:pt-20">
        <SectionHeader
          kicker=""
          title="Our ecosystem of tools & platforms"
          subtitle="These platforms, channels, and services help us build and automate end‑to‑end customer experiences."
        />

        <FilterTabs tabs={tabs} current={tab} onChange={setTab} />

        <div className="mt-8 md:mt-10">
          <LogoGrid logos={logos} />
        </div>
      </div>
    </section>
  );
}
