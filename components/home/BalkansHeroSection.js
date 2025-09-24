// components/home/BalkansHeroSection.js
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Circle } from "lucide-react";

export default function BalkansHeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef(null);

  const heroData = {
    key: "balkans",
    // Dark theme gradient
    gradient:
      "linear-gradient(180deg, #000000 0%, #1a1a1a 10px, #2d1b69 40%, #4a1a4a 100%)",
    image: "/banner-image1.png",
    imageAlt: "Balkans-focused SparkAI banner",
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
          <div className="relative z-10 flex items-center min-h-[80vh]">
            <div className="max-w-3xl w-full px-6 md:px-12 ml-[10px] py-12 text-white">
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
                  className="relative z-10 inline-block text-white bg-[#f6db4b] px-6 py-3 rounded-full font-semibold shadow transition duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
                  aria-label="Book Your Free Consultation Today"
                >
                  Book Your Free Consultation Today
                </a>
                <a
                  href="#chat"
                  className="relative z-10 inline-block text-gray-700 bg-gray-300 px-6 py-3 rounded-full font-semibold shadow transition duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-500/70"
                  aria-label="Chat with AI"
                >
                  Chat with AI
                </a>
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

          <div className="absolute inset-0 pointer-events-none" aria-hidden />
        </div>
      </div>
    </section>
  );
}
