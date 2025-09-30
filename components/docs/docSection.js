import DocCard from "./docCard";

// Replace the hrefs below with your actual file paths or external links
const COMMUNICATION_RESOURCES = [
  {
    title: "Healthcare — Communication Guide",
    summary:
      "Make patient conversations clearer and faster: appointment triage, pricing notes, reminders, and follow‑ups.",
    category: "Industry: Healthcare",
    hrefEn: "/docs/communication/healthcare-en.pdf",
    hrefAl: "/docs/communication/healthcare-al.pdf",
  },
  {
    title: "Restaurant — Communication Guide",
    summary:
      "Handle reservations, menu FAQs, allergens, and delivery updates with friendly, fast replies.",
    category: "Industry: Restaurant",
    hrefEn: "/docs/communication/restaurant-en.pdf",
    hrefAl: "/docs/communication/restaurant-al.pdf",
  },
  {
    title: "Retail Store — Communication Guide",
    summary:
      "Answer product availability, sizes, and store info instantly; reduce wait times and missed sales.",
    category: "Industry: Retail",
    hrefEn: "/docs/communication/retail-en.pdf",
    hrefAl: "/docs/communication/retail-al.pdf",
  },
  {
    title: "E‑commerce — Communication Guide",
    summary:
      "From pre‑purchase Q&A to order status and returns: messages that convert with less effort.",
    category: "Industry: E‑commerce",
    hrefEn: "/docs/communication/ecommerce-en.pdf",
    hrefAl: "/docs/communication/ecommerce-al.pdf",
  },
  {
    title: "Travel Agency — Communication Guide",
    summary:
      "Respond to price requests, itinerary changes, and promos fast—across Instagram, WhatsApp, and more.",
    category: "Industry: Travel",
    hrefEn: "/docs/communication/travel-en.pdf",
    hrefAl: "/docs/communication/travel-al.pdf",
  },
  {
    title: "Finance — Communication Guide",
    summary:
      "Clarify product info, branch hours, and card support with compliant, helpful responses.",
    category: "Industry: Finance",
    hrefEn: "/docs/communication/finance-en.pdf",
    hrefAl: "/docs/communication/finance-al.pdf",
  },
  {
    title: "Fashion Store — Communication Guide",
    summary:
      "Size guidance, availability, and styling suggestions that move chats to checkouts.",
    category: "Industry: Fashion",
    hrefEn: "/docs/communication/fashion-en.pdf",
    hrefAl: "/docs/communication/fashion-al.pdf",
  },
];

const FUNNEL_RESOURCES = [
  {
    title: "DM‑to‑Order Funnel",
    summary:
      "Step‑by‑step funnel turning inbox messages into sales—copy & paste blocks you can adapt in minutes.",
    category: "Sales & Marketing",
    hrefEn: "/docs/funnels/dm-to-order-en.pdf",
    hrefAl: "/docs/funnels/dm-to-order-al.pdf",
  },
  {
    title: "Lead Capture in Chat",
    summary:
      "Best practices, examples, and prompt snippets to collect qualified leads without killing the vibe.",
    category: "Sales & Marketing",
    hrefEn: "/docs/funnels/lead-capture-en.pdf",
    hrefAl: "/docs/funnels/lead-capture-al.pdf",
  },
];

const AUTOMATION_RESOURCES = [
  {
    title: "Automation Recipes (Coming soon)",
    summary:
      "When X happens → do Y (via Make/Pabbly). Real flows for pricing checks, notifications, and routing.",
    category: "Automations",
    disabled: true,
  },
  {
    title: "Webhook Cookbook (Coming soon)",
    summary:
      "Capture form/DM data to Sheets & CRMs with clean payloads and retries.",
    category: "Automations",
    disabled: true,
  },
];

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-paragraph">{kicker}</p>
      )}
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl font-headline">{title}</h2>
      {subtitle && <p className="mt-3 text-zinc-600 dark:text-zinc-400 font-paragraph">{subtitle}</p>}
    </div>
  );
}

export default function DocsSection() {
  return (
    <section className="container mx-auto px-4 py-14 sm:py-18 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-paragraph">Docs & Playbooks</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl font-headline">Practical guides for better communication & automations</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 font-paragraph">
          Download concise guides in English and Albanian. Start with industry‑specific communication playbooks,
          then explore funnels and (soon) automation recipes.
        </p>
      </div>

      {/* Communication Guides */}
      <div className="mt-10">
        <SectionHeader
          kicker="Guides"
          title="Industry Communication Guides (EN/AL)"
          subtitle="How to answer faster and better across each vertical."
        />
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {COMMUNICATION_RESOURCES.map((r) => (
            <DocCard key={r.title} {...r} />
          ))}
        </div>
      </div>

      {/* Funnels & Lead Capture */}
      <div className="mt-12">
        <SectionHeader
          kicker="Sales & Marketing"
          title="Funnels & Lead Capture (EN/AL)"
          subtitle="Turn DMs into orders and capture qualified leads in chat."
        />
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {FUNNEL_RESOURCES.map((r) => (
            <DocCard key={r.title} {...r} />
          ))}
        </div>
      </div>

      {/* Automations (coming soon) */}
      <div className="mt-12">
        <SectionHeader
          kicker="Automations"
          title="Playbooks & Recipes"
          subtitle="Real Make/Pabbly flows and webhook patterns (coming soon)."
        />
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {AUTOMATION_RESOURCES.map((r) => (
            <DocCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}