// components/home/Testimonials.js
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Krenar Dobroshi',
    company: 'estethica Medical Wellness Polyclinic',
    quote:
      'We went from delayed replies to instant communication — SparkAI made it effortless.',
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
    <section className="w-full bg-black py-20">
      <div className="mx-auto w-[80%]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-headline">
            What Our Clients Say
          </h2>
                  <p className="text-lg text-gray-300 font-subheadline">Trusted by businesses across Republic of Kosova</p>
        </div>

        {/* Glossy Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm relative">
              {/* Quote */}
              <p className="text-gray-300 text-base leading-relaxed mb-6 font-paragraph">
                <span className="text-white text-2xl font-bold mr-1">"</span>
                {testimonial.quote}
                <span className="text-white text-2xl font-bold ml-1">"</span>
              </p>

              {/* Stars */}
              <div className="flex mb-4">
                <div className="flex text-[#FFD700] text-lg">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <span className="font-semibold text-white text-sm font-headline">
                    {testimonial.name}
                  </span>
                  <div className="text-gray-400 text-xs font-paragraph">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
