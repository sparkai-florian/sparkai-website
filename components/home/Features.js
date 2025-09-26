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
  // Combine all features into one array for three-column layout
  const allFeatures = [
    ...revenueGenerators.map(f => ({ ...f, category: 'Revenue' })),
    ...customerExperienceBoosters.map(f => ({ ...f, category: 'Experience' })),
    ...businessEfficiencyMultipliers.map(f => ({ ...f, category: 'Efficiency' }))
  ];

  return (
    <section className="w-full bg-[#2EBE8B] text-black py-20">
      <div className="mx-auto w-[85%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Everything You Need To Turn Every Message Into Money
          </h2>
          <p className="text-lg text-black/80 max-w-3xl mx-auto">
            SparkAI doesn't just chat—it sells, books, and grows your business 24/7
          </p>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allFeatures.map((feature, i) => (
            <div key={i} className="text-center p-6">
              {/* Icon placeholder - you can replace with actual icons */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-black rounded-full"></div>
              </div>
              
              {/* Feature heading */}
              <h3 className="text-lg font-bold text-[#D4FF00] mb-3">
                {feature.title}
              </h3>
              
              {/* Short description */}
              <p className="text-sm text-black leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-white/20 border border-white/30">
          <p className="text-lg md:text-xl text-black leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#D4FF00]">The Bottom Line:</strong> While your competitors are still manually typing responses and losing customers to slow service, you'll have an AI-powered sales and support machine that works around the clock, speaks every language, and turns every conversation into revenue.
          </p>
        </div>
      </div>
    </section>
  );
}
