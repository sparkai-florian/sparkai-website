// components/home/HeroSection.js
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Circle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [showChatDropdown, setShowChatDropdown] = useState(false);
  const [chatbotUrl, setChatbotUrl] = useState("https://app.chatgptbuilder.io/webchat/?p=1166608&ref=1759931411611");
  const heroRef = useRef(null);

  const industryOptions = [
    { 
      name: "Aesthetic Clinics", 
      color: "#FF6F91", 
      route: "/solutions/healthcare",
      chatbotUrl: "https://app.chatgptbuilder.io/webchat/?p=1166608&ref=1759931745026"
    },
    { 
      name: "E-Commerce", 
      color: "#FF7F11", 
      route: "/solutions/e_commerce",
      chatbotUrl: "https://app.chatgptbuilder.io/webchat/?p=1166608&ref=1753121357698"
    },
    { 
      name: "Fashion Retail", 
      color: "#8E44AD", 
      route: "/solutions/fashion_store",
      chatbotUrl: "https://app.chatgptbuilder.io/webchat/?p=1166608&ref=1742856410341"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#000000", backgroundImage: heroData.gradient }}
    >
      {/* 85% wide container - matches header */}
      <div className="relative mx-auto w-[85%] max-w-[1700px] overflow-visible z-10">
        <div className="relative flex flex-col lg:flex-row items-start gap-4 pt-16 pb-[110px]">
          {/* Left: Text */}
          <motion.div 
            className="lg:basis-1/2 w-full px-2 sm:px-4 md:pl-12 md:pr-6 text-white z-10 pt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex justify-start mb-3" variants={fadeInUp}>
              <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide font-paragraph">
                FOR BUSINESS OWNERS...
              </span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 font-headline"
              variants={slideInLeft}
            >
              {heroData.headline}
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-white/90 mb-4 max-w-2xl font-subheadline"
              variants={fadeInUp}
            >
              {heroData.subheadline}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex gap-3 sm:gap-4 flex-wrap"
              variants={fadeInUp}
            >
                <motion.a
                href="/book-a-call"
                className="relative z-10 inline-block text-white bg-[#ec3481] px-5 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90 font-subheadline"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(236, 52, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Book My Free Consultation Today
              </motion.a>

              <div className="relative dropdown-container">
                <motion.button
                  onClick={() => setShowChatDropdown(!showChatDropdown)}
                  className="relative z-10 inline-flex items-center gap-2 text-white bg-[#2139ff] px-5 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:opacity-90 font-subheadline"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(33, 57, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Chat with AI</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showChatDropdown ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                {showChatDropdown && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {industryOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setChatbotUrl(option.chatbotUrl);
                          setShowChatDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3"
                      >
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: option.color }}
                        />
                        <span className="text-gray-800 font-medium font-paragraph">{option.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Bullets + Platforms card */}
            <motion.div 
              className="mt-6 mb-0 p-5 pb-5 rounded-xl bg-white/10 border border-white/15 shadow-lg backdrop-blur-sm"
              variants={fadeInUp}
            >
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
              >
                {heroData.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    <Circle className="w-3 h-3 shrink-0 text-[#d4ff00]" />
                    <span className="text-sm sm:text-base font-paragraph">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#d4ff00]/70 to-transparent" />

              <motion.div className="pb-0" variants={fadeInUp}>
                <p className="text-white/90 font-medium mb-3 font-subheadline">
                  Works seamlessly across your favorite platforms:
                </p>
                <div className="flex items-center gap-4 flex-wrap pb-0">
                  {[
                    { src: "/icons/facebook.png", alt: "Facebook" },
                    { src: "/icons/instagram.png", alt: "Instagram" },
                    { src: "/icons/whatsapp.png", alt: "WhatsApp" },
                    { src: "/icons/telegram.png", alt: "Telegram" },
                    { src: "/icons/viber.png", alt: "Viber" },
                    { src: "/icons/website.png", alt: "Website" },
                  ].map((icon, index) => (
                    <motion.div
                      key={icon.alt}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Image src={icon.src} alt={icon.alt} width={40} height={40} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Bigger image, right aligned */}
          {/* Right: Bigger image, shifted left */}

<motion.div 
  className="lg:basis-1/2 w-full flex items-start justify-end pt-[80px] pr-12 relative"
  initial="hidden"
  animate="visible"
  variants={slideInRight}
>
  {/* Animated background balls around iframe */}
  <div className="absolute inset-0 overflow-visible pointer-events-none -left-20 -right-20 -top-20 -bottom-20">
    <motion.div
      className="absolute w-40 h-40 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(212, 255, 0, 0.8) 0%, rgba(212, 255, 0, 0.4) 30%, rgba(212, 255, 0, 0) 70%)",
        filter: "blur(30px)",
        left: "-100px",
        top: "0",
        boxShadow: "0 0 60px 30px rgba(212, 255, 0, 0.5)",
      }}
      animate={{
        x: ["-50%", "150%", "-30%", "120%", "-50%"],
        y: ["-20%", "100%", "110%", "30%", "-20%"],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute w-52 h-52 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(212, 255, 0, 0.7) 0%, rgba(212, 255, 0, 0.3) 30%, rgba(212, 255, 0, 0) 70%)",
        filter: "blur(40px)",
        right: "-150px",
        top: "0",
        boxShadow: "0 0 70px 35px rgba(212, 255, 0, 0.4)",
      }}
      animate={{
        x: ["100%", "-80%", "90%", "-50%", "100%"],
        y: ["-30%", "120%", "40%", "80%", "-30%"],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute w-44 h-44 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(212, 255, 0, 0.75) 0%, rgba(212, 255, 0, 0.35) 30%, rgba(212, 255, 0, 0) 70%)",
        filter: "blur(35px)",
        left: "20%",
        bottom: "-100px",
        boxShadow: "0 0 65px 32px rgba(212, 255, 0, 0.45)",
      }}
      animate={{
        x: ["0%", "100%", "-60%", "80%", "0%"],
        y: ["100%", "-50%", "70%", "120%", "100%"],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute w-48 h-48 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(212, 255, 0, 0.65) 0%, rgba(212, 255, 0, 0.3) 30%, rgba(212, 255, 0, 0) 70%)",
        filter: "blur(45px)",
        right: "10%",
        top: "30%",
        boxShadow: "0 0 75px 37px rgba(212, 255, 0, 0.35)",
      }}
      animate={{
        x: ["30%", "-100%", "50%", "-70%", "30%"],
        y: ["80%", "-30%", "110%", "20%", "80%"],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>

  <div className="w-full max-w-[600px] aspect-square relative z-10">
    <motion.div 
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
        borderColor: "rgba(255, 255, 255, 0.3)"
      }}
      transition={{ duration: 0.3 }}
    >
      <iframe
        key={chatbotUrl}
        src={chatbotUrl}
        className="w-full h-full border-none"
        allow="camera; microphone; clipboard-read; clipboard-write"
        title="SparkAI Chatbot Demo"
      />
    </motion.div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
}
