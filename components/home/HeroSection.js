// components/home/HeroSection.js
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Circle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
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
    image: "/banner-image1.png",
    imageAlt: "SparkAI banner",
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
      className="relative w-full min-h-screen"
      style={{ backgroundColor: "#000000", backgroundImage: heroData.gradient }}
    >
      {/* 85% wide container */}
      <div className="relative mx-auto w-[85%] max-w-[1700px] overflow-visible">
        <div className="relative min-h-[80vh] flex flex-col lg:flex-row items-center gap-10 py-10">
          {/* Left: Text */}
          <div className="lg:basis-1/2 w-full px-2 sm:px-4 md:px-6 text-white z-10 relative top-[25px]">
            <div className="flex justify-start mb-3">
              <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
                FOR BUSINESS OWNERS...
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {heroData.headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 max-w-2xl">
              {heroData.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a
                href="#book"
                className="relative z-10 inline-block text-white bg-[#ec3481] px-5 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90"
              >
                Book My Free Consultation Today
              </a>

              <div className="relative dropdown-container">
                <button
                  onClick={() => setShowChatDropdown(!showChatDropdown)}
                  className="relative z-10 inline-flex items-center gap-2 text-white bg-[#2139ff] px-5 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90"
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
                        <span className="text-gray-800 font-medium">{option.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bullets + Platforms card */}
            <div className="mt-8 mb-10 p-6 rounded-xl bg-white/10 border border-white/15 shadow-lg backdrop-blur-sm">
              <ul className="space-y-3">
                {heroData.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <Circle className="w-3 h-3 shrink-0 text-[#d4ff00]" />
                    <span className="text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#d4ff00]/70 to-transparent" />

              <div>
                <p className="text-white/90 font-medium mb-3">
                  Works seamlessly across your favorite platforms:
                </p>
                <div className="flex items-center gap-4 flex-wrap">
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

<div className="lg:basis-1/2 w-full flex items-center">
  <div className="ml-auto w-full max-w-[900px] relative -left-[30px]">
    {!showVideo ? (
      <div className="relative">
        <Image
          src={heroData.image}
          alt={heroData.imageAlt}
          width={1800}   // bigger intrinsic width
          height={1100}  // bigger intrinsic height
          className="w-full h-auto object-contain cursor-pointer"
          priority
          onClick={() => setShowVideo(true)}
        />
      </div>
    ) : (
      <div className="relative">
        <video
          className="w-full h-auto object-contain rounded-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/videos/aidemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() => setShowVideo(false)}
          className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          ×
        </button>
      </div>
    )}
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
