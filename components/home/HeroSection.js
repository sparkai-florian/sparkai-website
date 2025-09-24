// components/home/HeroSection.js
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Circle } from "lucide-react";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef(null);

  const heroData = {
    key: "global",
    // Bright gold and grey gradient
    gradient:
      "linear-gradient(135deg, #f4f4f4 0%, #e8e8e8 20%, #d4af37 40%, #b8860b 60%, #8b7355 80%, #696969 100%)",
    image: "/banner-image1.png",
    imageAlt: "Global-focused SparkAI banner",
    headline: "Finally... AI That Optimizes Your Business Instead of Frustrating Your Customers",
    subheadline:
      "Modern businesses are scaling smarter with AI that actually understands context, handles complex processes, and delivers messages that you trust across every interaction.",
    bullets: [
      "Intelligent process automation that scales with your growth",
      "Multi-language support that maintains your brand voice",
      "Messages that you trust - sophisticated, contextual, never generic",
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
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <Image
                  src={heroData.image}
                  alt={heroData.imageAlt}
                  width={1200}
                  height={800}
                  className="object-contain max-w-[100%] max-h-[90vh] cursor-pointer"
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
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-[100%] max-h-[90vh]">
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
          <div className="relative z-10 flex items-center min-h-[80vh]">
            <div className="max-w-3xl w-full px-6 md:px-12 ml-[10px] py-12">
              <div className="flex justify-start mb-4">
                <span className="text-gray-800 text-sm font-semibold bg-white/80 px-3 py-1 rounded-full">
                  FOR BUSINESS OWNERS...
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900 drop-shadow-lg">
                {heroData.headline}
              </h1>

              <p className="text-base md:text-lg mb-6 text-gray-800 drop-shadow-md">
                {heroData.subheadline}
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="#book"
                  className="group relative z-10 inline-flex items-center gap-2 text-black bg-gradient-to-r from-[#d4ff00] to-[#b8e600] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Book Your Free Consultation Today"
                >
                  <span className="relative z-10">Book Your Free Consultation Today</span>
                  <div className="w-2 h-2 bg-black rounded-full group-hover:animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4ff00] to-[#b8e600] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
                <a
                  href="#chat"
                  className="group relative z-10 inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#2B00FF] to-[#1a00cc] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-600"
                  aria-label="Chat with AI"
                >
                  <span className="relative z-10">Chat with AI</span>
                  <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2B00FF] to-[#1a00cc] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
              </div>

              {/* Bullets + Platforms wrapped in a glass card */}
              <div className="mt-8 mb-10 p-6 rounded-xl bg-white/90 border border-gray-300/50 shadow-lg backdrop-blur-sm">
                <ul className="space-y-3">
                  {heroData.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-800 hover:!text-gray-900 transition-colors"
                    >
                      <Circle className="w-3 h-3 shrink-0 text-[#d4af37]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Separator line */}
                <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"></div>

                {/* Platforms row */}
                <div>
                  <p className="text-gray-700 font-medium mb-3">
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

          <div className="absolute inset-0 pointer-events-none" aria-hidden />
        </div>
      </div>
    </section>
  );
}
