// components/home/HeroSection.js
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Circle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [showChatDropdown, setShowChatDropdown] = useState(false);
  const heroRef = useRef(null);

  const industryOptions = [
    { name: "Aesthetic Clinics", color: "#FF6F91", route: "/solutions/healthcare" },
    { name: "E-Commerce", color: "#FF7F11", route: "/solutions/e_commerce" },
    { name: "Fashion Retail", color: "#8E44AD", route: "/solutions/fashion_store" },
    { name: "Law Firms", color: "#002855", route: "/solutions/finance" },
    { name: "Travel Agencies", color: "#00B4D8", route: "/solutions/travel_agency" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showChatDropdown && !event.target.closest(".dropdown-container")) {
        setShowChatDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showChatDropdown]);

  const heroData = {
    key: "main",
    gradient:
      "linear-gradient(135deg, #000000 0%, #1a1a2e 20%, #16213e 40%, #0f3460 60%, #1a1a2e 80%, #000000 100%)",
    headline: "Cut Support Costs by 70% While Actually Improving Customer Service",
    subheadline:
      "Smart businesses are discovering how AI delivers better customer relationships at a fraction of the cost. Stop paying for expensive staff to answer the same questions over and over.",
    bullets: [
      "24/7 instant replies that cost less than minimum wage",
      "Real-time responses that turn more visitors into customers",
      "Messages that you trust — professional, accurate, every time",
    ],
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full"
      style={{ backgroundColor: "#000000", backgroundImage: heroData.gradient }}
    >
      {/* 85% wide container */}
      <div className="relative mx-auto w-[85%] max-w-[1700px] overflow-visible">
        <div className="relative flex flex-col lg:flex-row items-start gap-4 pt-16 pb-[110px]">
          {/* Left: Text */}
          <div className="lg:basis-1/2 w-full px-2 sm:px-4 md:px-6 text-white z-10 pt-4">
            <div className="flex justify-start mb-3">
              <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide font-paragraph">
                FOR BUSINESS OWNERS...
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 font-headline">
              {heroData.headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-4 max-w-2xl font-subheadline">
              {heroData.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
                <a
                href="#book"
                className="relative z-10 inline-block text-white bg-[#ec3481] px-5 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90 font-subheadline"
              >
                Book My Free Consultation Today
              </a>

              <div className="relative dropdown-container">
                <button
                  onClick={() => setShowChatDropdown(!showChatDropdown)}
                  className="relative z-10 inline-flex items-center gap-2 text-white bg-[#2139ff] px-5 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90 font-subheadline"
                >
                  <span>Chat with AI</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showChatDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showChatDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                    {industryOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setShowChatDropdown(false)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3"
                      >
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: option.color }}
                        />
                        <span className="text-gray-800 font-medium font-paragraph">{option.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bullets + Platforms card */}
            <div className="mt-6 mb-0 p-5 pb-5 rounded-xl bg-white/10 border border-white/15 shadow-lg backdrop-blur-sm">
              <ul className="space-y-3">
                {heroData.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <Circle className="w-3 h-3 shrink-0 text-[#d4ff00]" />
                    <span className="text-sm sm:text-base font-paragraph">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#d4ff00]/70 to-transparent" />

              <div className="pb-0">
                <p className="text-white/90 font-medium mb-3 font-subheadline">
                  Works seamlessly across your favorite platforms:
                </p>
                <div className="flex items-center gap-4 flex-wrap pb-0">
                  <Image src="/icons/facebook.png" alt="Facebook" width={40} height={40} />
                  <Image src="/icons/instagram.png" alt="Instagram" width={40} height={40} />
                  <Image src="/icons/whatsapp.png" alt="WhatsApp" width={40} height={40} />
                  <Image src="/icons/telegram.png" alt="Telegram" width={40} height={40} />
                  <Image src="/icons/viber.png" alt="Viber" width={40} height={40} />
                  <Image src="/icons/website.png" alt="Website" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bigger image, right aligned */}
          {/* Right: Bigger image, shifted left */}

<div className="lg:basis-1/2 w-full flex items-start justify-center pt-[80px]">
  <div className="w-full max-w-[600px] aspect-square">
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
      <iframe
        src="https://app.chatgptbuilder.io/webchat/?p=1234372&ref=1718203509503"
        className="w-full h-full border-none"
        allow="camera; microphone; clipboard-read; clipboard-write"
        title="SparkAI Chatbot Demo"
      />
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
