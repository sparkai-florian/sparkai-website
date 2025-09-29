import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] text-white p-5 rounded-2xl shadow-2xl border-2 border-white/20">
                <div className="text-center">
                  <div className="text-sm font-bold mb-1">Founder & CEO</div>
                  <div className="text-xs font-medium opacity-90">SparkAI</div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-300 shadow-2xl relative overflow-hidden">
                {/* Golden paper texture effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-yellow-300/10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                
                <div className="relative z-10">
                  <div className="text-amber-800 leading-relaxed space-y-4 text-sm">
                    <p className="font-medium">
                      Hi, I'm Florian, a young entrepreneur from the vibrant city of Prishtina, Kosovo. In early 2024, SparkAI was born from a simple yet powerful idea: to reimagine how businesses communicate and operate.
                    </p>
                    
                    <p>
                      It all started with curiosity. As we approached businesses, we noticed the challenges they faced in managing communication effectively. At the same time, the world was witnessing the rise of AI technologies like ChatGPT, and we saw an opportunity to make a difference.
                    </p>
                    
                    <p>
                      From day one, we built SparkAI with the end user in mind. But what truly shaped our journey was working hand-in-hand with businesses. Through countless conversations, trials, and iterations, we refined our system to deliver functionalities that truly meet their needs.
                    </p>
                    
                    <p>
                      At SparkAI, we believe that every message matters. Communication isn't just about words—it's how businesses build trust, foster partnerships, and write their own stories. That's why we're committed to more than just technology. We're here to provide personalized care and exceptional service in every partnership we form.
                    </p>
                    
                    <p>
                      This is more than a platform—it's a promise to help businesses connect, grow, and succeed.
                    </p>
                    
                    <p className="font-medium">
                      Let's write the future of communication together.
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-amber-300">
                      <p className="text-amber-700 font-medium">Cheers,</p>
                      <p className="text-amber-800 font-semibold">Florian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
