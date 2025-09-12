import { useState, useRef, useEffect } from "react";
import { ChevronDown, Play, Pause, Globe2, Languages, Sparkles, Rocket, Clock, RefreshCw, ShieldCheck, HelpCircle, Tag, MonitorPlay } from "lucide-react";

/**
 * SparkAI – Fire FAQ Section
 * - Video-first accordion: when an item opens, the video appears first, then the rich text answer.
 * - Supports YouTube/Vimeo (iframe) or direct .mp4/.webm via <video>.
 * - Tailwind design tuned to SparkAI palette (neon green #d4ff00 on a dark #1C1C1C surface).
 * - Accessible keyboard navigation (Enter/Space toggle), ARIA attributes, and focus rings.
 * - Drop-in component: <SparkAIFAQ />
 */

const BRAND = {
  bg: "#000000",
  text: "#FFFFFF",
  accent: "#d4ff00", // SparkAI neon
  subtle: "#9CA3AF", // gray-400
  card: "#111111",
  border: "#2A2A2A",
};

function isYouTubeOrVimeo(url) {
  if (!url) return false;
  const u = url.toLowerCase();
  return u.includes("youtube.com") || u.includes("youtu.be") || u.includes("vimeo.com");
}

function VideoPlayer({ url, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-pause inactive HTML5 videos when the panel closes
    const v = videoRef.current;
    if (!v) return;
    if (!isActive && !isYouTubeOrVimeo(url)) {
      try { v.pause(); } catch {}
    }
  }, [isActive, url]);

  if (!url) return null;

  if (isYouTubeOrVimeo(url)) {
    // Responsive iframe wrapper
    return (
      <div className="w-full aspect-video rounded-2xl overflow-hidden border" style={{ borderColor: BRAND.accent }}>
        <iframe
          className="w-full h-full"
          src={url}
          title="FAQ Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border aspect-video" style={{ borderColor: BRAND.accent }}>
      <video ref={videoRef} className="w-full h-full" controls preload="metadata">
        <source src={url} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function FaqItem({ i, open, onToggle, item }) {
  const isOpen = open === i;

  return (
    <div
      className={`group rounded-3xl border transition-all duration-300 transform hover:scale-105 ${isOpen ? "shadow-[0_0_0_4px_rgba(212,255,0,0.3),0_20px_60px_rgba(0,0,0,0.5)] border-[#d4ff00]/50 bg-gradient-to-br from-gray-900 to-gray-800" : "shadow-[0_0_0_0_rgba(0,0,0,0)] border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-[#d4ff00]/30"}`}
    >
      <button
        className="w-full flex items-start gap-6 p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0"
        onClick={() => onToggle(isOpen ? -1 : i)}
        aria-expanded={isOpen}
      >
        <div className="mt-1 shrink-0 h-12 w-12 grid place-items-center rounded-full bg-gradient-to-r from-[#d4ff00] to-[#b8e600] text-black font-bold text-lg group-hover:scale-110 transition-transform duration-300">
          ?
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold leading-tight text-white group-hover:text-[#d4ff00] transition-colors duration-300">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="mt-2 text-sm md:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.subtitle}</p>
          )}
        </div>
        <ChevronDown
          className={`mt-1 h-6 w-6 transition-transform ${isOpen ? "rotate-180" : "rotate-0"} text-[#d4ff00] group-hover:text-white`}
          aria-hidden
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-8 md:px-8 md:pb-10">
            {/* Text answer */}
            <div className="space-y-4">
              {item.answer.map((para, idx) => (
                <p key={idx} className="leading-relaxed text-base md:text-lg text-gray-300">
                  {para}
                </p>
              ))}
              {item.points?.length ? (
                <ul className="mt-6 space-y-3">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[#d4ff00] mt-2 flex-shrink-0"></div>
                      <span className="text-sm md:text-base leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SparkAIFAQ() {
  const [open, setOpen] = useState(-1);

  const faqs = [
    {
      title: "What kind of businesses can benefit from SparkAI?",
      subtitle: "From clinics and salons to hotels, banks, retail, and e‑commerce.",
      videoUrl: "", // optional
      answer: [
        "Any organization that communicates with customers benefits from faster replies and consistent service.",
        "SparkAI is configurable by industry and use‑case so you start with relevant skills from day one.",
      ],
      points: [
        "Healthcare & Med‑Spa: Bookings, pre‑visit triage, reminders, pricing FAQs.",
        "Hospitality & Travel: Reservations, availability, itinerary changes, upsells.",
        "Finance & Banking: Product discovery, branch/ATM info, lead pre‑qualification.",
        "Retail & E‑Com: Product Q&A, stock/size checks, order status, returns.",
      ],
    },
    {
      title: "How will SparkAI help me increase sales?",
      subtitle: "Instant replies, captured leads, and automation that moves customers to checkout.",
      videoUrl: "", // optional
      answer: [
        "Speed wins. SparkAI replies in real time, even during peak campaigns, so no lead goes cold.",
        "Guided flows and smart suggestions reduce friction, improving conversion at every step.",
      ],
      points: [
        "Lead capture with validated contact info and consent.",
        "Follow‑ups on abandoned chats and promotional campaigns.",
        "Cross‑sell/upsell recommendations based on intent signals.",
      ],
    },
    {
      title: "How long does it take to set up SparkAI?",
      subtitle: "Usually a few days depending on complexity — no tech skills required.",
      videoUrl: "", // optional
      answer: [
        "We use an implementation checklist to configure channels, knowledge, and workflows fast.",
        "Simple projects launch within days; complex integrations follow a clear milestone plan.",
      ],
      points: [
        "Kickoff → content intake → approval → go‑live.",
        "Training on your real FAQs and offers.",
        "Optional integrations (CRM, payments, sheets) when needed.",
      ],
    },
    {
      title: "Can I change information later (hours, prices, promotions)?",
      subtitle: "Yes — updates are simple and included in your maintenance plan.",
      videoUrl: "", // optional
      answer: [
        "All key business data (hours, pricing, promos, availability) lives in a structured knowledge base.",
        "Update once, and changes take effect across channels with version history for accountability.",
      ],
      points: [
        "Self‑serve dashboard or send updates to our team.",
        "Rollback support for time‑boxed promotions.",
        "Multi‑location overrides and holiday hours.",
      ],
    },
    {
      title: "What makes SparkAI different from other chatbots (like Facebook templates)?",
      subtitle: "Personalization, advanced automation, local support, and a real ROI focus.",
      videoUrl: "", // optional
      answer: [
        "Templates reply — SparkAI consults. It understands intent, asks clarifying questions, and executes actions.",
        "We optimize for outcomes: bookings, orders, qualified leads — not just message counts.",
      ],
      points: [
        "Industry kits to start fast, then deep customization.",
        "Automation: payments, bookings, lookups, order status, reminders.",
        "Human‑in‑the‑loop and analytics you can act on.",
      ],
    },
    {
      title: "What happens if SparkAI doesn’t understand a question?",
      subtitle: "It gracefully recovers, suggests alternatives, or routes to your team.",
      videoUrl: "", // optional
      answer: [
        "When confidence is low, SparkAI asks a clarifying question or offers the nearest helpful options.",
        "If human help is better, it escalates with full context so your team continues seamlessly.",
      ],
      points: [
        "Fallback FAQs and quick actions to keep momentum.",
        "Smart routing by business hours, team, or priority.",
        "Conversation transcript attached to escalation.",
      ],
    },
    {
      title: "What are the pricing options?",
      subtitle: "Flexible packages by features and industry — see the pricing page.",
      videoUrl: "", // optional
      answer: [
        "Pricing aligns with the value you need: from essential automation to advanced, integrated workflows.",
        "Transparent setup and a predictable monthly plan — no surprises.",
      ],
      points: [
        "Starter, Growth, and Enterprise tiers.",
        "Add‑ons for multi‑language, media handling, and integrations.",
        "Optional SLA and priority support.",
      ],
    },
    {
      title: "Can I see a demo before deciding?",
      subtitle: "Yes — book a live demo to experience SparkAI with your use‑case.",
      videoUrl: "", // optional
      answer: [
        "We’ll walk through a tailored scenario for your industry and show the admin view behind the scenes.",
        "You’ll leave with a clear plan, timeline, and expected outcomes.",
      ],
      points: [
        "Hands‑on trial flows.",
        "Q&A with implementation best practices.",
        "Post‑demo summary and next steps.",
      ],
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-black overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto w-[92%] max-w-6xl relative z-10">
        {/* Enhanced Heading */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Get instant answers to the most common questions about SparkAI and how it can transform your business.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5">
          {faqs.map((item, i) => (
            <FaqItem key={i} i={i} open={open} onToggle={setOpen} item={item} />
          ))}
        </div>

        {/* Enhanced Helper footer */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-gray-700/50 p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-[#d4ff00]/30 transition-all duration-300">
          <div>
            <p className="text-lg md:text-xl font-bold text-white mb-2">
              Still have questions?
            </p>
            <p className="text-sm md:text-base text-gray-300">
              Get personalized answers tailored to your specific business needs and industry.
            </p>
          </div>
          <a
            href="#book-a-demo"
            className="inline-flex items-center gap-3 rounded-xl px-6 py-3 bg-gradient-to-r from-[#d4ff00] to-[#b8e600] text-black font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Play className="h-5 w-5" /> Book a Live Demo
          </a>
        </div>
      </div>

      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
             style={{ background: "radial-gradient(closest-side, rgba(212,255,0,0.18), transparent 70%)" }} />
      </div>
    </section>
  );
}
