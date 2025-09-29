import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            The Messages You{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Trust
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            At SparkAI, we're redefining how businesses communicate. In a world where most chatbots fail—offering laggy buttons, rigid templates, and frustrating "Sorry, I didn't understand" responses—we're here to prove that every message can have meaning.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-16">
            We believe that every interaction matters, and that's why we've built SparkAI to deliver personalized, trustworthy communication while automating repetitive tasks. Our goal? To help businesses focus on what they do best: crafting their expertise and delivering exceptional services to their clients.
          </p>
        </div>
      </div>
    </section>
  );
}
