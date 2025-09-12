// components/home/Testimonials.js
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Krenar Dobroshi',
    company: 'estethica',
    quote:
      'SparkAI transformed the way we handle messages. Clients get answers instantly — and we save hours every day.',
    image: '/icons/k.d.-pic.png',
  },
  {
    name: 'Njomza Belegu',
    company: 'noma dent',
    quote:
      'We had over 250 messages during our promotion. SparkAI handled all of them professionally — without stress.',
    image: '/icons/n.b.h.-pic.png',
  },
  {
    name: 'Donat Begzati',
    company: 'dental plus',
    quote:
      'It feels like I finally have time to be with my family while everything runs smoothly. A freedom I didn’t think was possible.',
    image: '/icons/d.b.-pic.png',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black py-20 px-6 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300">Trusted by businesses across Kosovo</p>
        </div>

        {/* Enhanced Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-lg flex flex-col justify-between h-full border border-gray-700 hover:border-[#d4ff00]/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_0_8px_rgba(212,255,0,0.15),0_25px_70px_rgba(0,0,0,0.6)]"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     background: "radial-gradient(1200px 300px at 50% -10%, rgba(212,255,0,0.08), rgba(0,0,0,0))",
                   }}
              />

              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#d4ff00] to-[#b8e600] rounded-full flex items-center justify-center text-black font-bold text-sm">
                "
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed italic group-hover:text-gray-200 transition-colors duration-300">
                  {testimonial.quote}
                </p>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                <div className="flex text-[#FFD700] text-lg">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="hover:scale-110 transition-transform duration-200" />
                  ))}
                </div>
              </div>

              {/* Author info */}
              <div className="relative flex items-center gap-4 mt-auto">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4ff00]/30 group-hover:border-[#d4ff00]/60 transition-colors duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <span className="font-bold text-white text-lg group-hover:text-[#d4ff00] transition-colors duration-300">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">{testimonial.company}</span>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4ff00] to-[#2B00FF] rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
