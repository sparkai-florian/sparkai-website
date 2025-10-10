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
            <div className="flex items-center justify-end gap-4">
              <div className="relative h-[520px] w-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/florian.png"
                  alt="Florian - Founder & CEO of SparkAI"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              </div>
              <div className="relative bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-2xl border-2 border-[#d4ff00]/60 self-end mb-8">
                <div className="text-center">
                  <div className="text-xs font-bold mb-0.5 text-[#d4ff00] tracking-wider uppercase">Founder & CEO</div>
                  <div className="text-[10px] font-medium text-white/90">SparkAI</div>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#d4ff00] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#d4ff00]/60 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/20 border border-white/30 rounded-2xl p-8 shadow-xl backdrop-blur-md relative overflow-hidden">
                {/* Transparent glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="text-white leading-relaxed space-y-4 text-sm">
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
                    
                    <div className="mt-6 pt-4 border-t border-white/30">
                      <p className="text-white/90 font-medium">Cheers,</p>
                      <p className="text-white font-semibold">Florian</p>
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
