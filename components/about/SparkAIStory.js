import Image from "next/image";

export default function SparkAIStory() {
  return (
    <section className="w-full py-20 bg-black relative overflow-hidden">
      {/* Glossy background effects */}
      <div className="absolute inset-0">
        {/* Main glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
        
        {/* Reflective highlights */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      
      <div className="w-[85%] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-headline bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Our Story: From Prishtina to the World
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-subheadline">
              SparkAI was born out of a simple observation in early 2024 in Prishtina, Kosovo. At the time, the AI industry was in its infancy, and businesses were struggling to keep up with the demands of modern communication.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:border-white/30">
                <h3 className="text-2xl font-semibold text-white mb-4 font-headline bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  The Problem We Saw
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 font-paragraph">
                  At the time, the AI industry was in its infancy, and businesses were struggling to keep up with the demands of modern communication.
                </p>
                <p className="text-gray-300 leading-relaxed font-paragraph">
                  Our founder, Florian, noticed how businesses were overwhelmed with messages, often responding too late—or not at all. Appointments were still being booked in notebooks, and customer inquiries were met with generic, unhelpful responses like, "The price is 50 euros."
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:border-white/30">
                <h3 className="text-2xl font-semibold text-white mb-4 font-headline bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  The Solution
                </h3>
                <p className="text-lg text-white/90 leading-relaxed font-paragraph">
                  Florian saw an opportunity to change this. Through trial and error, countless conversations, and a relentless drive to solve these problems, SparkAI was created. Today, we're proud to help businesses around the world optimize their communication and automate repetitive tasks, so they can focus on what truly matters.
                </p>
              </div>
            </div>
            
            <div className="relative group h-[700px] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/prishtina.png"
                alt="Prishtina"
                width={600}
                height={700}
                className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
