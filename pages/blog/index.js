import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Newspaper, Rocket, Clock, Bell, Sparkles } from 'lucide-react';

export default function BlogIndex() {
  // Generate random positions for floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <Head>
        <title>Blog Coming Soon | SparkAI</title>
        <meta
          name="description"
          content="Our blog is coming soon! Stay tuned for AI insights, automation tips, and industry best practices."
        />
      </Head>
      <Layout>
        <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ec3481] to-[#2139ff] blur-3xl opacity-50"
                />
                <div className="relative bg-gradient-to-br from-[#ec3481] to-[#2139ff] p-8 rounded-3xl">
                  <Newspaper className="w-20 h-20 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headline">
                Our Blog is{" "}
                <span className="bg-gradient-to-r from-[#ec3481] to-[#2139ff] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-subheadline">
                We're crafting amazing content about AI automation, chatbot strategies, 
                and business growth tips. Stay tuned!
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                {
                  icon: Rocket,
                  title: "AI Insights",
                  description: "Latest trends in AI and automation"
                },
                {
                  icon: Clock,
                  title: "Industry Tips",
                  description: "Practical advice for your business"
                },
                {
                  icon: Bell,
                  title: "Case Studies",
                  description: "Real success stories from our clients"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "rgba(212, 255, 0, 0.5)",
                    boxShadow: "0 20px 40px rgba(212, 255, 0, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#ec3481]/0 via-[#2139ff]/0 to-[#d4ff00]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(236, 52, 129, 0) 0%, rgba(33, 57, 255, 0) 50%, rgba(212, 255, 0, 0) 100%)",
                        "linear-gradient(135deg, rgba(236, 52, 129, 0.2) 0%, rgba(33, 57, 255, 0.2) 50%, rgba(212, 255, 0, 0.2) 100%)",
                        "linear-gradient(135deg, rgba(236, 52, 129, 0) 0%, rgba(33, 57, 255, 0) 50%, rgba(212, 255, 0, 0) 100%)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1,
                      type: "spring"
                    }}
                  >
                    <feature.icon className="w-10 h-10 text-[#d4ff00] mb-4 mx-auto relative z-10" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 font-headline relative z-10">{feature.title}</h3>
                  <p className="text-sm text-gray-400 font-paragraph relative z-10">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Get Notified When We Launch
              </h3>
              <p className="text-gray-300 mb-6 font-paragraph">
                Be the first to read our articles and get exclusive insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ec3481] font-paragraph"
                />
                <motion.button 
                  className="px-8 py-3 bg-gradient-to-r from-[#ec3481] to-[#2139ff] text-white font-semibold rounded-xl font-paragraph relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(236, 52, 129, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(236, 52, 129, 0.3)",
                      "0 0 40px rgba(33, 57, 255, 0.5)",
                      "0 0 20px rgba(236, 52, 129, 0.3)",
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
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
                  <span className="relative z-10">Notify Me</span>
                </motion.button>
              </div>
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
                className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 font-paragraph inline-block"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-paragraph inline-block"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
              {/* Floating gradient orbs */}
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
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
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.3, 1],
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
                  x: [0, -50, 50, 0],
                  y: [0, 80, -40, 0],
                  scale: [1, 1.4, 0.8, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#d4ff00]/10 rounded-full blur-3xl"
              />
              
              {/* Floating sparkle particles */}
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
