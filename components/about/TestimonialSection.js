// components/about/TestimonialSection.js
"use client";

export default function TestimonialSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-[#2B00FF] mb-4 font-semibold">Customer Success</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">A Word from Our Customers</h2>
          </div>

          <div className="bg-gradient-to-r from-[#2B00FF]/10 to-[#00D4FF]/10 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2B00FF]/20 to-[#00D4FF]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#f6db4b]/20 to-[#2B00FF]/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-semibold text-white mb-2">Client Testimonial</h3>
                <p className="text-gray-400">Satisfied Customer</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-xl text-white/90 leading-relaxed mb-8 italic">
                  "As a company, we had been looking for a practical and effective solution to respond to our clients online with instant and professional answers. Luckily, Florian presented the innovative and energy-saving idea of a chatbot, which could be customized and adjusted to our needs. Surprisingly, the system not only surpassed our expectations but also led to increased traffic, more appointments, and less wasted time for our staff, allowing them to focus more on productivity.
                </blockquote>
                <blockquote className="text-xl text-white/90 leading-relaxed mb-8 italic">
                  Florian has a problem-solving mindset—he is responsible, helpful, and highly innovative. He is undoubtedly a future-thinker, ensuring that the company's demands are met and never leaving without finding a solution. I strongly recommend him!"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
