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
    { name: "Fashion Retail", color: "#8E44AD", route: "/solutions/fashtion_store" },
    { name: "Law Firms", color: "#002855", route: "/solutions/finance" },
    { name: "Travel Agencies", color: "#00B4D8", route: "/solutions/travel_agency" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showChatDropdown && !event.target.closest('.dropdown-container')) {
        setShowChatDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showChatDropdown]);

  const heroData = {
    key: "main",
            // Dynamic diagonal gradient
            gradient:
              "linear-gradient(135deg, #000000 0%, #2139ff 15%, #2ebe8b 35%, #2139ff 55%, #2ebe8b 75%, #000000 100%)",
    image: "/banner-image1.png",
    imageAlt: "SparkAI banner",
    headline: "Cut Support Costs by 70% While Actually Improving Customer Service",
    subheadline:
      "Smart businesses are discovering how AI delivers better customer relationships at a fraction of the cost. Stop paying for expensive staff to answer the same questions over and over.",
    bullets: [
      "24/7 instant replies that cost less than minimum wage",
      "Real-time responses that turn more visitors into customers",
      "Messages that you trust - professional, accurate, every time",
    ],
    buttonStyle: `
      inline-block
      text-white
      bg-gradient-to-r from-[#2B00FF] to-[#d4ff00]
      px-6 py-3
      rounded-full
      font-semibold
      shadow
      transition duration-300
      hover:opacity-90
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70
    `,
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen mt-[0px]"
      style={{ backgroundColor: "#000000", backgroundImage: heroData.gradient }}
    >
      <div className="relative mx-auto w-[85%] overflow-hidden rounded-1xl transition-colors duration-300">
        <div className="relative min-h-[80vh]">
          {/* Background image or video */}
          <div className="absolute inset-0 flex items-center justify-end z-0 pr-0">
            {!showVideo ? (
              <div className="relative">
                <Image
                  src={heroData.image}
                  alt={heroData.imageAlt}
                  width={1200}
                  height={800}
                  className="object-contain max-w-[60%] max-h-[90%] translate-x-8 cursor-pointer"
                  priority
                  onClick={() => setShowVideo(true)}
                />
                {/* Coin click overlay image */}
                <Image
                  src="/coin-click.png"
                  alt="Click to play video"
                  width={0}
                  height={0}
                  className="absolute top-2 right-2 cursor-pointer hover:scale-110 transition-transform duration-300 z-10 w-auto h-auto max-w-[50px] max-h-[50px]"
                  onClick={() => setShowVideo(true)}
                  title="Click to play video"
                />
              </div>
            ) : (
              <div className="relative max-w-[60%] max-h-[90%] translate-x-8">
                <video
                  className="w-full h-full object-contain rounded-lg"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src="/videos/aidemo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Close button */}
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
                  title="Close video"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Foreground content */}
          <div className="relative z-10 flex items-center min-h-[15px]">
            <div className="max-w-3xl w-full px-6 md:px-12 ml-[10px] pt-24 pb-12 text-white">
              <div className="flex justify-start mb-4">
                <span className="text-white text-sm font-semibold">
                  FOR BUSINESS OWNERS...
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                {heroData.headline}
              </h1>

              <p className="text-base md:text-lg mb-6">
                {heroData.subheadline}
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="#book"
                  className="relative z-10 inline-block text-black bg-[#d4ff00] px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Book My Free Consultation Today"
                >
                  Book My Free Consultation Today
                </a>
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setShowChatDropdown(!showChatDropdown)}
                    className="relative z-10 inline-flex items-center gap-2 text-white bg-[#2139ff] px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
                    aria-label="Chat with AI"
                  >
                    <span>Chat with AI</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showChatDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showChatDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                      {industryOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            // For now, just close the dropdown
                            setShowChatDropdown(false);
                            // Later we'll add navigation here
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3"
                        >
                          <div 
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: option.color }}
                          ></div>
                          <span className="text-gray-800 font-medium">{option.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bullets + Platforms wrapped in a glass card */}
              <div className="mt-8 mb-10 p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm">
                <ul className="space-y-3">
                  {heroData.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-200 hover:!text-white transition-colors"
                    >
                      <Circle className="w-3 h-3 shrink-0 text-[#d4ff00]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Separator line */}
                <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4ff00]/60 to-transparent"></div>

                {/* Platforms row */}
                <div>
                  <p className="text-gray-200 font-medium mb-3">
                    Works seamlessly across your favorite platforms:
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <Image src="/icons/facebook.png" alt="Facebook" width={32} height={32} className="object-contain" />
                    <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} className="object-contain" />
                    <Image src="/icons/whatsapp.png" alt="WhatsApp" width={32} height={32} className="object-contain" />
                    <Image src="/icons/telegram.png" alt="Telegram" width={32} height={32} className="object-contain" />
                    <Image src="/icons/viber.png" alt="Viber" width={32} height={32} className="object-contain" />
                    <Image src="/icons/website.png" alt="Website" width={32} height={32} className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

                  {/* Dynamic spark circles scattered throughout */}
                  <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    {/* Pinkish spark circles - scattered randomly */}
                    <div className="absolute top-16 left-16 w-2 h-2 bg-[#ff6b9d] rounded-full opacity-70 animate-pulse"></div>
                    <div className="absolute top-28 right-24 w-3 h-3 bg-[#ff6b9d] rounded-full opacity-60 animate-pulse delay-300"></div>
                    <div className="absolute top-48 left-32 w-1 h-1 bg-[#ff6b9d] rounded-full opacity-80 animate-pulse delay-1200"></div>
                    <div className="absolute top-64 right-48 w-2 h-2 bg-[#ff6b9d] rounded-full opacity-65 animate-pulse delay-800"></div>
                    <div className="absolute top-80 left-48 w-3 h-3 bg-[#ff6b9d] rounded-full opacity-55 animate-pulse delay-1500"></div>
                    <div className="absolute top-96 right-16 w-1 h-1 bg-[#ff6b9d] rounded-full opacity-75 animate-pulse delay-2000"></div>
                    
                    {/* Bottom section sparks */}
                    <div className="absolute bottom-32 left-20 w-2 h-2 bg-[#ff6b9d] rounded-full opacity-60 animate-pulse delay-500"></div>
                    <div className="absolute bottom-48 right-32 w-3 h-3 bg-[#ff6b9d] rounded-full opacity-50 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-64 left-40 w-1 h-1 bg-[#ff6b9d] rounded-full opacity-70 animate-pulse delay-1800"></div>
                    <div className="absolute bottom-80 right-20 w-2 h-2 bg-[#ff6b9d] rounded-full opacity-65 animate-pulse delay-600"></div>
                    
                    {/* Larger animated spark rings */}
                    <div className="absolute top-24 right-36 w-4 h-4 border border-[#ff6b9d] rounded-full opacity-40 animate-ping"></div>
                    <div className="absolute bottom-40 left-28 w-3 h-3 border border-[#ff6b9d] rounded-full opacity-35 animate-ping delay-1000"></div>
                    <div className="absolute top-72 left-24 w-2 h-2 border border-[#ff6b9d] rounded-full opacity-45 animate-ping delay-2000"></div>
                    
                    {/* Floating spark effects */}
                    <div className="absolute top-40 left-56 w-1 h-1 bg-[#ff6b9d] rounded-full opacity-60 animate-bounce delay-400"></div>
                    <div className="absolute bottom-56 right-44 w-1 h-1 bg-[#ff6b9d] rounded-full opacity-55 animate-bounce delay-1600"></div>
                  </div>
                </div>
              </div>
            </section>
  );
}