"use client";

export default function ProblemSection() {

  return (
    <section id="problems" className="w-full bg-black">
      <div className="mx-auto w-[80%] py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tired of Choosing Between Good Service and Your Budget?
          </h2>
          
          {/* Strategic paragraph structure */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Every business faces the same impossible choice: 
              <span className="text-white font-medium"> hire enough staff to answer every customer message (expensive) or let some slip through the cracks (lost sales).</span>
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              You know those customers messaging at 8 PM asking about your services? Or the weekend inquiries about pricing? 
              <span className="text-white font-medium"> Right now, you're either paying someone overtime to catch those, or watching potential revenue walk away.</span>
            </p>
          </div>
        </div>

        {/* Two-column layout: Video left, Pain Points right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Video */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl">
              <video 
                className="w-full h-auto min-h-[300px] object-cover"
                controls
                poster="/the_support_dilemma.png"
                preload="metadata"
                style={{ aspectRatio: '16/9' }}
              >
                <source src="/videos/problem-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right side - Pain Points */}
          <div className="flex flex-col items-end">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-right">
              The Business Reality:
            </h3>
            <div className="space-y-4 w-3/4">
              {[
                "Staff Costs Keep Rising — Every new hire for customer support eats into your profit margins",
                "Peak Time Chaos — Busy periods overwhelm your team while quiet times waste payroll",
                "After-Hours Loss — Customers research and buy outside business hours, but nobody's there to help",
                "Repetitive Questions — Your team spends 80% of their time answering the same basic questions",
                "Inconsistent Service — Different staff members give different answers, confusing customers",
                "Revenue Leaks — Every missed message is potential revenue walking to your competitors"
              ].map((point, index) => (
                <div key={index} className="flex gap-4 p-4 bg-[#23241F] rounded-lg">
                  <div className="w-8 h-8 bg-[#d4ff00] text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed text-left">
                      <span className="font-semibold text-white">{point.split(' — ')[0]}</span>
                      <span className="text-gray-200"> — {point.split(' — ')[1]}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}