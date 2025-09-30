// components/services/ServicesCTA.js

import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-full px-0">
        <div className="w-full">
          <div className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Supercharge Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Book your personalized demo today and see SparkAI in action. Transform your customer service and automate your business processes with our AI solutions.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-[#ec3481] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:bg-[#ec3481]/90 transition-all duration-300 hover:shadow-xl">
                  Book Your Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
