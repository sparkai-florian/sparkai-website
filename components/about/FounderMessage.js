import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-[#2B00FF] mb-4 font-semibold">Founder</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Meet Florian: The Visionary Behind SparkAI</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-80 w-80 mx-auto rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <p className="text-gray-600 text-sm font-medium">Professional Photo</p>
                    <p className="text-xs text-gray-500">(Include a professional photo of Florian here)</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold">Founder & CEO</div>
                <div className="text-xs">SparkAI</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Florian is the driving force behind SparkAI. With a passion for problem-solving and a deep understanding of the challenges businesses face, he founded SparkAI to transform the way businesses communicate. His innovative mindset and commitment to excellence have made SparkAI a trusted partner for businesses around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
