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
  bg: "#f8f9fa",
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
      className={`group rounded-2xl border transition-all duration-300 ${isOpen ? "shadow-[0_0_0_2px_rgba(212,255,0,.6)]" : "shadow-[0_0_0_0_rgba(0,0,0,0)]"}`}
      style={{ backgroundColor: BRAND.card, borderColor: BRAND.border }}
    >
      <button
        className="w-full flex items-start gap-4 p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0"
        onClick={() => onToggle(isOpen ? -1 : i)}
        aria-expanded={isOpen}
      >
        <div className="mt-1 shrink-0 h-10 w-10 grid place-items-center rounded-full border" style={{ borderColor: BRAND.accent }}>
          <MonitorPlay className="h-5 w-5" style={{ color: BRAND.accent }} />
        </div>
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold leading-snug" style={{ color: BRAND.text }}>
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="mt-1 text-sm" style={{ color: BRAND.subtle }}>{item.subtitle}</p>
          )}
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          style={{ color: BRAND.accent }}
          aria-hidden
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 md:px-6 md:pb-8 flex flex-col gap-4">
            {/* Video first */}
            <VideoPlayer url={item.videoUrl} isActive={isOpen} />
            {/* Text answer */}
            <div className="prose prose-invert max-w-none">
              {item.answer.map((para, idx) => (
                <p key={idx} className="leading-relaxed text-sm md:text-[15px]" style={{ color: BRAND.text }}>
                  {para}
                </p>
              ))}
              {item.points?.length ? (
                <ul className="mt-3 list-disc pl-5 text-sm md:text-[15px]" style={{ color: BRAND.text }}>
                  {item.points.map((p, idx) => (
                    <li key={idx} className="mb-1">{p}</li>
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
      title: "What platforms does SparkAI work on?",
      subtitle: "Instagram, WhatsApp, Facebook, Viber, Telegram, Website, and more.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0", // replace with real demo URL or mp4
      answer: [
        "SparkAI integrates natively with the channels your customers already use — no behavior change required.",
        "Deploy once and manage conversations across social, messaging apps, and your website from a unified workflow.",
      ],
      points: [
        "Instagram & Facebook: Inbox replies, story/campaign surge handling, automated follow-ups.",
        "WhatsApp & Viber & Telegram: Verified business flows, quick replies, order updates.",
        "Website: Embedded widget, lead capture, appointment booking, and self‑service FAQs.",
      ],
    },
    {
      title: "Can chatbots speak multiple languages?",
      subtitle: "Yes — SparkAI delivers multilingual experiences out of the box.",
      videoUrl: "", // optional
      answer: [
        "SparkAI detects and responds in the customer’s language, enabling global reach without extra staffing.",
        "Language packs are configurable per business; add or refine phrasing any time as your audience evolves.",
      ],
      points: [
        "Auto‑detect input language; reply consistently in that language.",
        "Support for dialects and formal/informal tone presets.",
        "Escalation to a human agent with translated context when needed.",
      ],
    },
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
      className="relative py-14 md:py-20"
      style={{ backgroundColor: BRAND.bg }}
    >
      <div className="mx-auto w-[92%] max-w-6xl">
        {/* Heading */}
        <div className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border" style={{ borderColor: BRAND.accent, color: BRAND.accent }}>
            <Sparkles className="h-3.5 w-3.5" /> Fire FAQ
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight" style={{ color: BRAND.text }}>
            Answers in <span style={{ color: BRAND.accent }}>seconds</span>, demos in <span style={{ color: BRAND.accent }}>motion</span>
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: BRAND.subtle }}>
            Click a question to watch a short explainer — the video comes first, then a detailed, programmable answer.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5">
          {faqs.map((item, i) => (
            <FaqItem key={i} i={i} open={open} onToggle={setOpen} item={item} />
          ))}
        </div>

        {/* Helper footer */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-4 md:p-6"
             style={{ borderColor: BRAND.border, background: "linear-gradient(135deg, rgba(212,255,0,0.08), rgba(32,32,32,0.6))" }}>
          <div>
            <p className="text-sm md:text-base font-medium" style={{ color: BRAND.text }}>
              Want these answers tailored to your industry?
            </p>
            <p className="text-xs md:text-sm" style={{ color: BRAND.subtle }}>
              We can swap videos and copy per niche (healthcare, travel, finance, retail) with one config.
            </p>
          </div>
          <a
            href="#book-a-demo"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border text-sm font-semibold transition-colors hover:opacity-90"
            style={{ borderColor: BRAND.accent, color: "#000", backgroundColor: BRAND.accent }}
          >
            <Play className="h-4 w-4" /> Book a Live Demo
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
