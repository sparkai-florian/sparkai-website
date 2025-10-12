// pages/book-a-call.js
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import { InlineWidget } from 'react-calendly';
import { Calendar, Clock, CheckCircle, Video, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function BookACall() {
  const calendlyUrl = "https://calendly.com/florian-shllaku/discovery-call";
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Confetti effect function
  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Shoot confetti from left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      
      // Shoot confetti from right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  // Listen for Calendly events
  useEffect(() => {
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Trigger confetti when meeting is scheduled
        triggerConfetti();
        // Show success message
        setShowSuccessMessage(true);
        // Auto-hide after 8 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 8000);
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you"
    },
    {
      icon: Clock,
      title: "30-Minute Session",
      description: "Quick and efficient consultation"
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Face-to-face meeting via Zoom/Google Meet"
    },
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "No commitment, just valuable insights"
    }
  ];

  const whatToExpect = [
    "Understanding your business goals and challenges",
    "Personalized demo of SparkAI solutions",
    "Discussion of pricing and implementation timeline",
    "Q&A session tailored to your needs",
    "Next steps and action plan"
  ];

  return (
    <>
      <Head>
        <title>Book a Call | SparkAI - Free Consultation</title>
        <meta
          name="description"
          content="Schedule a free consultation with SparkAI. Discover how our AI chatbot solutions can transform your business."
        />
      </Head>
      <Layout>
        {/* Success Message Overlay */}
        <AnimatePresence>
          {showSuccessMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -100 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[10000] w-[90%] max-w-md"
            >
              <div className="bg-gradient-to-r from-[#ec3481] to-[#2139ff] rounded-2xl p-6 shadow-2xl border-2 border-white/20">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <PartyPopper className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-headline">
                      🎉 Meeting Booked!
                    </h3>
                    <p className="text-white/90 font-paragraph">
                      We're excited to connect with you! Check your email for confirmation details. 
                      See you soon!
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccessMessage(false)}
                    className="text-white/80 hover:text-white transition-colors text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="bg-gradient-to-b from-black via-zinc-950 to-black text-white">
          {/* Hero Section */}
          <section className="pt-24 pb-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-headline">
                  Let's Discuss Your{" "}
                  <span className="bg-gradient-to-r from-[#ec3481] to-[#2139ff] bg-clip-text text-transparent">
                    Business Growth
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-subheadline">
                  Book a free consultation to discover how SparkAI can help you cut support costs by 70% 
                  while improving customer satisfaction.
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <benefit.icon className="w-10 h-10 text-[#d4ff00] mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2 font-headline">{benefit.title}</h3>
                    <p className="text-sm text-gray-400 font-paragraph">{benefit.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - What to Expect */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-8"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold mb-6 font-headline">
                      What to Expect
                    </h2>
                    <ul className="space-y-4">
                      {whatToExpect.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-[#d4ff00] flex-shrink-0 mt-1" />
                          <span className="text-gray-300 font-paragraph">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-[#ec3481]/20 to-[#2139ff]/20 border border-[#ec3481]/30 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/icons/d.b.-pic.png"
                          alt="Donat Begzati"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold font-headline">Donat Begzati</h4>
                        <p className="text-sm text-gray-400 font-paragraph">dental plus</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic font-paragraph">
                      "It feels like I finally have time to be with my family while everything runs smoothly. A freedom I didn't think was possible."
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-4 font-headline">Why Choose SparkAI?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#d4ff00]"></div>
                        <span className="text-gray-300 font-paragraph">100+ Businesses Served</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#d4ff00]"></div>
                        <span className="text-gray-300 font-paragraph">24/7 AI Support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#d4ff00]"></div>
                        <span className="text-gray-300 font-paragraph">70% Cost Reduction Average</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#d4ff00]"></div>
                        <span className="text-gray-300 font-paragraph">Setup in 7 Days</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Calendly Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl sticky top-24">
                    <div className="p-6 bg-gradient-to-r from-[#ec3481] to-[#2139ff]">
                      <h3 className="text-2xl font-bold text-white font-headline">
                        Schedule Your Free Call
                      </h3>
                      <p className="text-white/90 mt-2 font-paragraph">
                        Pick a time that works best for you
                      </p>
                    </div>
                    <div className="bg-white min-h-[700px]">
                      <InlineWidget 
                        url={calendlyUrl}
                        styles={{
                          height: '700px',
                          width: '100%'
                        }}
                        pageSettings={{
                          backgroundColor: 'ffffff',
                          hideEventTypeDetails: false,
                          hideLandingPageDetails: false,
                          primaryColor: 'ec3481',
                          textColor: '000000'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 font-headline">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How long is the consultation?",
                    a: "The consultation typically lasts 30 minutes, giving us enough time to understand your needs and show you how SparkAI can help."
                  },
                  {
                    q: "Is this really free?",
                    a: "Absolutely! There's no cost and no obligation. We want to help you understand if SparkAI is the right fit for your business."
                  },
                  {
                    q: "What should I prepare?",
                    a: "Just come with questions about your customer support challenges. We'll handle the rest and provide personalized recommendations."
                  },
                  {
                    q: "Can I reschedule if needed?",
                    a: "Of course! You can reschedule or cancel anytime directly through the Calendly link in your confirmation email."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3 font-headline">{faq.q}</h3>
                    <p className="text-gray-400 font-paragraph">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-[#ec3481]/20 to-[#2139ff]/20 border border-white/20 rounded-2xl p-12">
                <h2 className="text-3xl font-bold mb-4 font-headline">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-300 mb-6 font-subheadline">
                  Prefer to email or call us instead?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:hi@sparkai-rks.com" 
                    className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 font-paragraph"
                  >
                    Email Us
                  </a>
                  <a 
                    href="tel:+38349453595" 
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-paragraph"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

