import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Let's Transform Communication Together
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                At SparkAI, we're not just building chatbots; we're building connections. Join us in transforming communication and helping businesses thrive in a fast-paced, digital world.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/book" className="rounded-xl bg-white text-[#2B00FF] px-10 py-4 text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl">
                  Book a Free Consultation
                </Link>
                <Link href="/demo" className="rounded-xl border-2 border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Try Our Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
