// components/home/Features.jsx
"use client";

import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  ChatBubbleLeftRightIcon,
  LanguageIcon,
  MicrophoneIcon,
  PhotoIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  LinkIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const ACCENT = "#d4ff00";

const revenueGenerators = [
  { 
    title: "24/7 Sales Machine", 
    description: "Your AI never sleeps, never takes breaks, and never lets a hot lead go cold. While competitors lose customers to slow responses, you're closing deals at midnight.",
    icon: CurrencyDollarIcon
  },
  { 
    title: "Smart Appointment Booking", 
    description: "Stop playing phone tag. Your AI books appointments instantly, confirms details, and sends reminders—turning \"maybe later\" into \"see you Tuesday at 3 PM.\"",
    icon: CalendarDaysIcon
  },
  { 
    title: "Order Management That Sells", 
    description: "From first inquiry to final delivery, your AI manages the entire sales process. Upsells, cross-sells, order confirmations—all handled automatically while you focus on bigger deals.",
    icon: ShoppingCartIcon
  },
  { 
    title: "Lead Capture That Actually Works", 
    description: "Every conversation becomes a sales opportunity. Names, emails, phone numbers, buying intent—all captured automatically and fed straight into your CRM for follow-up.",
    icon: UserPlusIcon
  },
];

const customerExperienceBoosters = [
  { 
    title: "Meet Customers Where They Live", 
    description: "WhatsApp, Facebook, Instagram, Telegram, Viber, your website—your AI is everywhere your customers are. No more \"sorry, we only respond on email.\"",
    icon: ChatBubbleLeftRightIcon
  },
  { 
    title: "Speak Every Customer's Language", 
    description: "Break language barriers instantly. Albanian, English, French, Italian, and 50+ more languages—your AI speaks them all fluently, expanding your market overnight.",
    icon: LanguageIcon
  },
  { 
    title: "Voice Note Magic", 
    description: "Your customers love voice messages? Your AI gets it. Understands them, responds naturally, and keeps conversations flowing like you're texting with a friend.",
    icon: MicrophoneIcon
  },
  { 
    title: "Visual Selling Power", 
    description: "Send product photos, receive customer uploads, even generate custom personalized images. Show, don't just tell—and watch conversion rates soar.",
    icon: PhotoIcon
  },
];

const businessEfficiencyMultipliers = [
  { 
    title: "Never Miss Another Opportunity", 
    description: "Real-time notifications on Telegram, Email, or Slack mean you know the moment a big opportunity walks through your digital door.",
    icon: BellIcon
  },
  { 
    title: "Custom FAQ Training", 
    description: "Give precise, on-brand answers to every client question by training the assistant with your complete business knowledge.",
    icon: QuestionMarkCircleIcon
  },
  { 
    title: "Connect Everything", 
    description: "Your CRM, scheduling tools, payment systems—SparkAI connects to any platform with an API. One conversation, infinite possibilities.",
    icon: LinkIcon
  },
  { 
    title: "Messages That You Trust", 
    description: "Every response reflects your brand voice, your expertise, your professionalism. Customers can't tell the difference—except you're suddenly available 24/7.",
    icon: ShieldCheckIcon
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
    <section className="w-full bg-black text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#d4ff00] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#d4ff00] rounded-full blur-3xl opacity-15"></div>
      </div>
      <div className="mx-auto w-[80%]">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-headline">
            Everything You Need To Turn Every Message Into Money
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto font-subheadline">
            SparkAI doesn't just chat—it sells, books, and grows your business 24/7
          </p>
        </div>

        {/* Four-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allFeatures.map((feature, i) => (
            <div key={i} className="group relative h-full">
              {/* Card with gradient border */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-[#D4FF00]/50 hover:shadow-2xl hover:shadow-[#D4FF00]/20 h-full flex flex-col">
                {/* Icon in top left corner */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4FF00] to-[#213efa] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                
                {/* Feature heading */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4FF00] transition-colors duration-300 text-left font-headline">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/90 leading-relaxed text-sm text-left flex-1 font-paragraph">
                  {feature.description}
                </p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-[#D4FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
