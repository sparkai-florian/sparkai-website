import Image from "next/image";

export default function SparkAIStory() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Story: From Prishtina to the World</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SparkAI was born out of a simple observation in early 2024 in Prishtina, Kosovo. At the time, the AI industry was in its infancy, and businesses were struggling to keep up with the demands of modern communication.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-white/10 h-full">
                <h3 className="text-2xl font-semibold text-white mb-4">The Problem We Saw</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At the time, the AI industry was in its infancy, and businesses were struggling to keep up with the demands of modern communication.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our founder, Florian, noticed how businesses were overwhelmed with messages, often responding too late—or not at all. Appointments were still being booked in notebooks, and customer inquiries were met with generic, unhelpful responses like, "The price is 50 euros."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl border border-[#2B00FF]/20 h-full flex items-center justify-center">
                <Image
                  src="/prishtina.png"
                  alt="Prishtina"
                  fill
                  className="object-cover rounded-2xl"
                  style={{margin: '4px'}}
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">The Solution</h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
                Florian saw an opportunity to change this. Through trial and error, countless conversations, and a relentless drive to solve these problems, SparkAI was created. Today, we're proud to help businesses around the world optimize their communication and automate repetitive tasks, so they can focus on what truly matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
