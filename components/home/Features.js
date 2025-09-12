// components/home/Features.jsx
"use client";

const ACCENT = "#d4ff00";

const features = [
  { title: "24/7 Instant Replies", description: "Never miss a client again — your assistant replies instantly at any hour, keeping conversations alive even when your team is offline." },
  { title: "Omnichannel Integration", description: "Seamlessly connect with clients across WhatsApp, Facebook, Instagram, Telegram, Viber, and your Website — meeting them exactly where they are." },
  { title: "Multi-Language Support", description: "Break down barriers by speaking your client's language — from Albanian and English to French, Italian, and 50+ more." },
  { title: "Smart Appointment Booking", description: "Turn conversations into confirmed bookings with an automated scheduling flow that eliminates waiting for manual replies." },
  { title: "Order Management", description: "Manage inquiries, confirm orders, and update customers — all within the same chat, from first message to final delivery." },
  { title: "Real-Time Notifications", description: "Stay in control with instant alerts on Telegram, Email, or Slack, so you can act the moment an opportunity arrives." },
  { title: "Custom FAQ Training", description: "Give precise, on-brand answers to every client question by training the assistant with your business knowledge." },
  { title: "Photo Sharing & Uploads", description: "Handle requests faster with image sending and receiving — from product photos to customer uploads." },
  { title: "Lead Capture Automation", description: "Automatically collect names, emails, and key client details — feeding directly into your CRM for follow-ups and sales." },
  { title: "Voice Note Replies", description: "Your assistant can understand and reply to client voice messages, making interactions more natural and human-like." },
  { title: "3rd-Party API Connections", description: "Connect SparkAI to any external platform or tool with an API — enabling custom automations tailored to your workflows." },
  { title: "Custom Personalized Images", description: "Deliver a unique experience with AI-generated visuals — from product previews to personalized content that makes every client interaction feel special." },
];

const left = features.slice(0, 6);
const right = features.slice(6);

export default function Features() {
  return (
    <section
      className="w-full bg-black text-white py-20 md:py-28 px-6 relative overflow-hidden"
      style={{ ["--accent"]: ACCENT }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Feature Set
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            All the Features You Need — Built In
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            SparkAI packs the essentials to communicate faster, sell more, and support better.
          </p>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[left, right].map((side, colIdx) => (
            <div key={colIdx} className="space-y-6">
              {side.map(({ title, description }, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-2xl border border-gray-700/50 hover:border-[#d4ff00]/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_0_4px_rgba(212,255,0,0.1),0_15px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{
                         background: "radial-gradient(1200px 300px at 50% -10%, rgba(212,255,0,0.05), rgba(0,0,0,0))",
                       }}
                  />

                  <div className="relative flex items-start gap-4">
                    {/* Enhanced bullet point */}
                    <div className="relative mt-1 flex-shrink-0">
                      <span className="relative inline-block h-6 w-6">
                        {/* outer ring */}
                        <span className="absolute inset-0 rounded-full border-2 border-[#d4ff00] group-hover:border-[#d4ff00] transition-colors duration-300" />
                        {/* inner dot */}
                        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4ff00] group-hover:scale-125 transition-transform duration-300" />
                        {/* pulse ring on hover */}
                        <span className="absolute inset-0 rounded-full border-2 border-[#d4ff00]/30 group-hover:animate-ping" />
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg md:text-xl leading-tight text-white group-hover:text-[#d4ff00] transition-colors duration-300 mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#d4ff00] to-[#2B00FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
