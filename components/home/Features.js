// components/home/Features.jsx
"use client";

const ACCENT = "#d4ff00";

const revenueGenerators = [
  { 
    title: "24/7 Sales Machine", 
    description: "Your AI never sleeps, never takes breaks, and never lets a hot lead go cold. While competitors lose customers to slow responses, you're closing deals at midnight." 
  },
  { 
    title: "Smart Appointment Booking", 
    description: "Stop playing phone tag. Your AI books appointments instantly, confirms details, and sends reminders—turning \"maybe later\" into \"see you Tuesday at 3 PM.\"" 
  },
  { 
    title: "Order Management That Sells", 
    description: "From first inquiry to final delivery, your AI manages the entire sales process. Upsells, cross-sells, order confirmations—all handled automatically while you focus on bigger deals." 
  },
  { 
    title: "Lead Capture That Actually Works", 
    description: "Every conversation becomes a sales opportunity. Names, emails, phone numbers, buying intent—all captured automatically and fed straight into your CRM for follow-up." 
  },
];

const customerExperienceBoosters = [
  { 
    title: "Meet Customers Where They Live", 
    description: "WhatsApp, Facebook, Instagram, Telegram, Viber, your website—your AI is everywhere your customers are. No more \"sorry, we only respond on email.\"" 
  },
  { 
    title: "Speak Every Customer's Language", 
    description: "Break language barriers instantly. Albanian, English, French, Italian, and 50+ more languages—your AI speaks them all fluently, expanding your market overnight." 
  },
  { 
    title: "Voice Note Magic", 
    description: "Your customers love voice messages? Your AI gets it. Understands them, responds naturally, and keeps conversations flowing like you're texting with a friend." 
  },
  { 
    title: "Visual Selling Power", 
    description: "Send product photos, receive customer uploads, even generate custom personalized images. Show, don't just tell—and watch conversion rates soar." 
  },
];

const businessEfficiencyMultipliers = [
  { 
    title: "Never Miss Another Opportunity", 
    description: "Real-time notifications on Telegram, Email, or Slack mean you know the moment a big opportunity walks through your digital door." 
  },
  { 
    title: "Custom FAQ Training", 
    description: "Give precise, on-brand answers to every client question by training the assistant with your complete business knowledge." 
  },
  { 
    title: "Connect Everything", 
    description: "Your CRM, scheduling tools, payment systems—SparkAI connects to any platform with an API. One conversation, infinite possibilities." 
  },
  { 
    title: "Messages That You Trust", 
    description: "Every response reflects your brand voice, your expertise, your professionalism. Customers can't tell the difference—except you're suddenly available 24/7." 
  },
];

export default function Features() {
  return (
    <section
      className="w-full bg-[#f8f9fa] text-white py-16 md:py-20 px-6"
      style={{ ["--accent"]: ACCENT }}
    >
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold">Everything You Need To Turn Every Message Into Money</h2>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
          SparkAI doesn't just chat—it sells, books, and grows your business 24/7
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Revenue Generators */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#d4ff00] mb-2">💰 REVENUE GENERATORS</h3>
            <p className="text-white/70">Turn every conversation into a sales opportunity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {revenueGenerators.map((feature, i) => (
              <div key={i} className="group flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4ff00]/30 transition-all duration-300">
                <span className="relative mt-1 inline-block h-5 w-5 shrink-0">
                  <span className="bullet-ring absolute inset-0 rounded-full" />
                  <span className="bullet-dot absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-lg leading-tight group-hover:text-[#d4ff00] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Experience Boosters */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#d4ff00] mb-2">🚀 CUSTOMER EXPERIENCE BOOSTERS</h3>
            <p className="text-white/70">Meet customers where they are, how they want</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerExperienceBoosters.map((feature, i) => (
              <div key={i} className="group flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4ff00]/30 transition-all duration-300">
                <span className="relative mt-1 inline-block h-5 w-5 shrink-0">
                  <span className="bullet-ring absolute inset-0 rounded-full" />
                  <span className="bullet-dot absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-lg leading-tight group-hover:text-[#d4ff00] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Efficiency Multipliers */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#d4ff00] mb-2">⚡ BUSINESS EFFICIENCY MULTIPLIERS</h3>
            <p className="text-white/70">Work smarter, not harder—while your AI works 24/7</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessEfficiencyMultipliers.map((feature, i) => (
              <div key={i} className="group flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4ff00]/30 transition-all duration-300">
                <span className="relative mt-1 inline-block h-5 w-5 shrink-0">
                  <span className="bullet-ring absolute inset-0 rounded-full" />
                  <span className="bullet-dot absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-lg leading-tight group-hover:text-[#d4ff00] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#d4ff00]/10 to-[#2B00FF]/10 border border-[#d4ff00]/20">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#d4ff00]">The Bottom Line:</strong> While your competitors are still manually typing responses and losing customers to slow service, you'll have an AI-powered sales and support machine that works around the clock, speaks every language, and turns every conversation into revenue.
          </p>
        </div>
      </div>

      {/* minimal hover effects for ring & dot */}
      <style jsx>{`
        .bullet-ring {
          box-shadow: inset 0 0 0 2px var(--accent);
          transition: box-shadow 180ms ease;
        }
        .group:hover .bullet-ring {
          box-shadow: inset 0 0 0 3px var(--accent);
        }
        .bullet-dot {
          background: var(--accent);
          transform: scale(1);
          transition: transform 180ms ease;
        }
        .group:hover .bullet-dot {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
