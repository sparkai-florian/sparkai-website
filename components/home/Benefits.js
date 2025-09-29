// components/home/BenefitsSection.jsx
"use client";

import {
  Clock,
  Heart,
  Shield,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "More Time to Do What You Love",
    tagline: "Imagine having the freedom to focus on the parts of your business that truly matter—upgrading your services, innovating, and connecting with your customers on a deeper level.",
    points: [
      "Focus on parts of your business that truly matter",
      "Upgrade your services and innovate more",
      "Connect with customers on a deeper level",
      "Feel more in control and energized to grow your business",
    ],
  },
  {
    icon: Heart,
    title: "Happier, More Loyal Customers",
    tagline: "Your customers will feel valued and understood, thanks to timely and thoughtful responses. This creates stronger relationships, builds trust, and leaves them with a positive impression of your brand.",
    points: [
      "Customers feel valued and understood",
      "Timely and thoughtful responses every time",
      "Stronger relationships and increased trust",
      "Positive brand impression and customer loyalty",
    ],
  },
  {
    icon: Shield,
    title: "A Business That Runs Smoothly, Day and Night",
    tagline: "You'll feel the peace of mind that comes with knowing every inquiry is handled, every opportunity is captured, and everything is running seamlessly—even when you're not there.",
    points: [
      "Every inquiry is handled professionally",
      "Every opportunity is captured automatically",
      "Seamless operations day and night",
      "Peace of mind and confidence to focus on bigger picture",
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="mx-auto w-[85%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-300">Three strategic pillars that elevate your business operations and enable intelligent scaling.</p>
        </div>

        {/* Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map(({ icon: Icon, title, tagline, points }, index) => (
            <div key={title} className="bg-gray-900 p-6 rounded-lg border border-transparent bg-clip-padding relative" style={{
              backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #d4ff00, #2139ff)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}>
              {/* Step number in top right */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#d4ff00] to-[#2139ff] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#d4ff00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-gray-300 text-sm">
                {tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
