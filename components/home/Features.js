// components/home/Features.jsx
"use client";

const ACCENT = "#d4ff00";

const features = [
  { title: "24/7 Instant Replies", description: "Your chatbot replies instantly at any hour — even when your team is offline." },
  { title: "Instagram & WhatsApp Ready", description: "Fully integrated with the channels your customers use the most." },
  { title: "Multi-Language Support", description: "Communicate in Albanian, English, or any language your client prefers." },
  { title: "Smart Appointment Booking", description: "Clients can book directly without waiting for manual replies." },
  { title: "Real-Time Notifications", description: "Get alerts instantly on Telegram, Email, or Slack." },
  { title: "Custom FAQ Training", description: "We train your bot with the exact answers your business needs." },
  { title: "Photo Sharing & Uploads", description: "Your chatbot can send and receive pictures to assist customers." },
  { title: "Lead Capture Automation", description: "It collects names, emails, and other client data for your CRM." },
  { title: "GDPR & Cookie Consent", description: "Fully compliant with privacy regulations across Europe." },
  { title: "Works on Any Website", description: "Easy to install and integrates seamlessly with your current site." },
];

const left = features.slice(0, 5);
const right = features.slice(5);

export default function Features() {
  return (
    <section
      className="w-full bg-[#f8f9fa] text-white py-16 md:py-20 px-6"
      style={{ ["--accent"]: ACCENT }}
    >
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">All the Features You Need — Built In</h2>
        <p className="mt-3 text-white/70">
          SparkAI packs the essentials to communicate faster, sell more, and support better.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {[left, right].map((side, colIdx) => (
          <ul key={colIdx} className="space-y-5">
            {side.map(({ title, description }, i) => (
              <li key={i} className="group flex items-start gap-4">
                {/* open-circle bullet with center dot */}
                <span className="relative mt-1 inline-block h-5 w-5 shrink-0">
                  {/* ring */}
                  <span className="bullet-ring absolute inset-0 rounded-full" />
                  {/* center dot */}
                  <span className="bullet-dot absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
                </span>

                {/* text */}
                <div className="min-w-0">
                  <h3 className="font-medium text-base md:text-lg leading-tight group-hover:text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-white/70 text-sm md:text-[15px] leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ))}
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
