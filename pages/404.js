// pages/404.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Bot, Zap } from 'lucide-react';

export default function Custom404() {
  // Generate random positions for floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <Head>
        <title>404 - Page Not Found | SparkAI</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Let's get you back on track."
        />
      </Head>
      <Layout>
        <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated 404 with Robot */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                {/* Glowing background */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#ec3481] to-[#2139ff] rounded-full blur-3xl"
                />
                
                {/* 404 Text */}
                <div className="relative">
                  <motion.h1 
                    className="text-9xl md:text-[200px] font-black bg-gradient-to-r from-[#ec3481] to-[#2139ff] bg-clip-text text-transparent font-headline"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(236, 52, 129, 0.5)",
                        "0 0 40px rgba(33, 57, 255, 0.5)",
                        "0 0 20px rgba(236, 52, 129, 0.5)",
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    404
                  </motion.h1>
                  
                  {/* Robot Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: 1,
                      rotate: 0,
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.6, type: "spring" },
                      rotate: { duration: 0.6, type: "spring" },
                      y: { 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    className="absolute -top-8 -right-8 bg-gradient-to-br from-[#ec3481] to-[#2139ff] p-4 rounded-2xl shadow-2xl cursor-pointer"
                  >
                    <Bot className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
                Oops! Page Not Found
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-subheadline">
                Looks like our AI chatbot couldn't find this page. It might have been moved, 
                deleted, or perhaps it never existed. Let's get you back on track!
              </p>
            </motion.div>

            {/* Error Message Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Search className="w-6 h-6 text-[#d4ff00]" />
                <h3 className="text-lg font-semibold font-headline">What happened?</h3>
              </div>
              <p className="text-gray-400 font-paragraph">
                The URL you entered may be incorrect, or the page has been moved to a new location. 
                Don't worry, we have plenty of other great pages to explore!
              </p>
            </motion.div>

            {/* Quick Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {[
                { href: "/", label: "Home", icon: Home },
                { href: "/about", label: "About Us", icon: Bot },
                { href: "/services", label: "Services", icon: Search },
                { href: "/pricing", label: "Pricing", icon: Search },
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link
                    href={link.href}
                    className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-[#d4ff00]/50 group relative overflow-hidden"
                  >
                    {/* Animated background shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{
                        x: ["-200%", "200%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "linear"
                      }}
                    />
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + index * 0.1,
                        type: "spring"
                      }}
                    >
                      <link.icon className="w-6 h-6 text-[#d4ff00] mb-2 mx-auto relative z-10" />
                    </motion.div>
                    <span className="text-white font-semibold font-paragraph relative z-10">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ec3481] to-[#2139ff] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-paragraph"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-paragraph"
              >
                <Search className="w-5 h-5" />
                Contact Support
              </Link>
            </motion.div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 text-gray-500 text-sm font-paragraph"
            >
              <p>💡 Fun fact: Even our AI makes mistakes sometimes, but it learns from them!</p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
              {/* Animated gradient orbs */}
              <motion.div
                animate={{
                  x: [0, 100, -50, 0],
                  y: [0, 50, -30, 0],
                  scale: [1, 1.3, 0.9, 1],
                  rotate: [0, 90, 180, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-64 h-64 bg-[#ec3481]/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  x: [0, -100, 50, 0],
                  y: [0, -50, 80, 0],
                  scale: [1, 1.4, 0.8, 1],
                  rotate: [0, -90, -180, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-[#2139ff]/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  x: [0, -50, 70, 0],
                  y: [0, 100, -50, 0],
                  scale: [1, 1.5, 0.7, 1],
                  rotate: [0, 180, 360, 0]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#d4ff00]/10 rounded-full blur-3xl"
              />
              
              {/* Floating sparkle particles */}
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                    background: `radial-gradient(circle, rgba(212, 255, 0, 1), rgba(236, 52, 129, 0.5))`,
                  }}
                  animate={{
                    y: [0, -150, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Lightning bolts effect */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`zap-${i}`}
                  className="absolute"
                  style={{
                    left: `${20 * i}%`,
                    top: `${10 * i}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "easeInOut"
                  }}
                >
                  <Zap className="w-8 h-8 text-[#d4ff00]/30" />
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

