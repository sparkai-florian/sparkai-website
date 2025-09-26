import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Messages You{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Trust
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-6">
            At SparkAI, we're redefining how businesses communicate. In a world where most chatbots fail—offering laggy buttons, rigid templates, and frustrating "Sorry, I didn't understand" responses—we're here to prove that every message can have meaning.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            We believe that every interaction matters, and that's why we've built SparkAI to deliver personalized, trustworthy communication while automating repetitive tasks. Our goal? To help businesses focus on what they do best: crafting their expertise and delivering exceptional services to their clients.
          </p>
          
          {/* Key Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#2B00FF]/30 transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">No Buttons, No Templates</h3>
              <p className="text-gray-400">Personalized responses that feel human and meaningful</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-300">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Every Message Matters</h3>
              <p className="text-gray-400">Care and precision in every interaction</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#f6db4b]/30 transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Automation</h3>
              <p className="text-gray-400">Quality communication without compromise</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="inline-flex items-center rounded-xl bg-[#2B00FF] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl">
              Book a Free Consultation
            </Link>
            <Link href="/demo" className="inline-flex items-center rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Try Our Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
