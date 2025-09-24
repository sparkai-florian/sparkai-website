import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqItem({ i, open, onToggle, item }) {
  const isOpen = open === i;

  return (
    <div className="border-b border-gray-700/50">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={() => onToggle(isOpen ? -1 : i)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white pr-4">
          {item.title}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {item.answer.map((para, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
            {item.points?.length && (
              <ul className="mt-4 space-y-2">
                {item.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#d4ff00] mt-1">•</span>
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SparkAIFAQ() {
  const [open, setOpen] = useState(-1);

  const faqs = [
    {
      title: "What kind of businesses can benefit from SparkAI?",
      answer: [
        "Short answer: Pretty much any business that gets customer messages.",
        "Real answer: We've transformed operations for clinics handling appointment bookings, salons managing client inquiries, hotels processing reservations, banks answering account questions, retail stores managing product inquiries, and e-commerce businesses converting browsers into buyers.",
        "But here's the thing - if customers message you with questions, complaints, or interest in your services, SparkAI can handle it. We've worked with restaurants taking orders, real estate agents qualifying leads, fitness centers booking classes, legal firms screening clients, and even local service businesses managing emergency calls.",
        "The magic isn't in the industry - it's in having customers who expect fast, professional responses."
      ]
    },
    {
      title: "How will SparkAI help me increase sales?",
      answer: [
        "The brutal truth: Most businesses lose 60% of potential sales because they respond too slowly or not at all.",
        "Here's how SparkAI fixes that:"
      ],
      points: [
        "Instant replies keep hot leads from going cold (studies show you have 5 minutes max before they move on)",
        "Smart lead qualification identifies your best prospects automatically",
        "Follow-up sequences that actually follow up (most humans forget after the first attempt)",
        "24/7 availability captures sales while competitors sleep",
        "Objection handling that addresses concerns before they become deal-breakers",
        "Upsell automation that suggests additional services naturally",
        "Appointment booking that eliminates phone tag and \"I'll call you back\""
      ]
    },
    {
      title: "How long does it take to set up SparkAI?",
      answer: [
        "Typically 3-14 days, depending on complexity.",
        "Here's the reality: A basic setup with your core FAQs and services? We can have you live in 3-5 days.",
        "Want it to handle complex product catalogs, integrate with your CRM, manage appointment booking, and know every detail of your business? That might take up to 14 days.",
        "But here's what's different about us: We don't disappear after setup. We monitor, optimize, and keep improving your system based on real conversations.",
        "Most businesses see results within 24 hours of going live."
      ]
    },
    {
      title: "Can I change information later (hours, prices, promotions)?",
      answer: [
        "Yes, absolutely. After you notify us of changes, it takes 24-48 hours to update the system with the right information.",
        "But here's where it gets interesting: If you want certain areas of your chatbot to have more frequent updates or faster changes, we can give you direct access where changes are instant.",
        "Think of it like this: Basic updates (hours, prices, policies) go through us for quality control. But if you're running frequent promotions or need real-time inventory updates, we can set up instant access for those specific areas.",
        "Your business changes, your AI adapts - at whatever speed you need."
      ]
    },
    {
      title: "What makes SparkAI different from other chatbots (like Facebook templates)?",
      answer: [
        "Facebook templates: \"I don't understand. Please try again.\"",
        "SparkAI: Actually understands what your customer meant and responds intelligently.",
        "Here's the difference: Our AI doesn't just match keywords - it understands context, intent, and nuance. Your customer could write \"hey can u tel me wat time u close on saturdya?\" (grammar errors and all) and SparkAI will understand they're asking about Saturday hours.",
        "But here's the real magic:",
        "Every response is personalized based on:"
      ],
      points: [
        "The specific words your customer chose",
        "The context of the conversation",
        "Your unique brand voice",
        "The customer's apparent intent",
        "Previous conversation history"
      ]
    },
    {
      title: "What happens if SparkAI doesn't understand a question?",
      answer: [
        "First: It doesn't panic or give up. SparkAI makes intelligent guesses based on context and provides the most helpful response possible.",
        "Second: If it's genuinely stumped, it gracefully suggests alternatives: \"I'm not sure about that specific question, but I can help you with [related topic] or connect you with our team.\"",
        "Third: We have safeguards. Every \"I don't know\" gets flagged, and we work with you to add that knowledge to the system.",
        "The goal: Your AI gets smarter every day, and customers never feel abandoned."
      ]
    },
    {
      title: "What are the pricing options?",
      answer: [
        "Flexible packages designed around what you actually need.",
        "We don't believe in one-size-fits-all pricing because every business is different. A small salon needs different features than a multi-location retail chain.",
        "Check out all our packages at: sparkai-rks.com/pricing",
        "Want the honest truth? Most businesses save more in reduced support costs than they spend on SparkAI. It's not an expense - it's an investment that pays for itself."
      ]
    },
    {
      title: "Can I see a demo before deciding?",
      answer: [
        "Absolutely. We've got you covered two ways:",
        "Industry-Specific Demos: Visit sparkai-rks.com/services and select your industry to see exactly how SparkAI works for businesses like yours. See real conversations, real scenarios, real results.",
        "Personalized Demo: Want to see SparkAI with YOUR actual business information? Upload your details at sparkai-rks.com/demo for just $11 and we'll create a custom demo using your services, pricing, and brand voice.",
        "Why the small fee for personalized demos? Because creating a custom demo takes real work, and we want to work with serious business owners who are ready to see exactly how SparkAI would transform their specific business.",
        "The industry demos give you a great overview, but the personalized demo shows you exactly how it works for your business."
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Get instant answers to the most common questions about SparkAI and how it can transform your business.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-lg border border-gray-700/50">
          {faqs.map((item, i) => (
            <FaqItem key={i} i={i} open={open} onToggle={setOpen} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
