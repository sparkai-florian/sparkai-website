// components/about/TestimonialSection.js
"use client";

import { ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/react/24/solid';

export default function TestimonialSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-headline">A Word from Our Customers</h2>
            <p className="text-xl text-gray-400 font-subheadline">See what our clients say about their experience with SparkAI</p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-gray-900 p-12 rounded-2xl border border-transparent bg-clip-padding relative backdrop-blur-md" style={{
            backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #d4ff00, #2139ff)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#d4ff0020' }}
              >
                <ChatBubbleLeftRightIcon className="w-10 h-10" style={{ color: '#d4ff00' }} />
              </div>
            </div>

            {/* Client Info */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 font-headline">Client Testimonial</h3>
              <p className="text-gray-400 font-paragraph">Satisfied Customer</p>
              
              {/* Star Rating */}
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6" style={{ color: '#d4ff00' }} />
                ))}
              </div>
            </div>
            
            {/* Testimonial Content */}
            <div className="max-w-5xl mx-auto">
              <blockquote className="text-lg text-white/90 leading-relaxed mb-6 font-paragraph italic">
                "As a company, we had been looking for a practical and effective solution to respond to our clients online with instant and professional answers. Luckily, Florian presented the innovative and energy-saving idea of a chatbot, which could be customized and adjusted to our needs. Surprisingly, the system not only surpassed our expectations but also led to increased traffic, more appointments, and less wasted time for our staff, allowing them to focus more on productivity."
              </blockquote>
              <blockquote className="text-lg text-white/90 leading-relaxed font-paragraph italic">
                "Florian has a problem-solving mindset—he is responsible, helpful, and highly innovative. He is undoubtedly a future-thinker, ensuring that the company's demands are met and never leaving without finding a solution. I strongly recommend him!"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
