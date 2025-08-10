// components/home/Testimonials.js
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Krenar Dobroshi',
    company: 'estethica',
    quote:
      'SparkAI transformed the way we handle messages. Clients get answers instantly — and we save hours every day.',
    image: '/profile-pic1.png',
  },
  {
    name: 'Njomza Belegu',
    company: 'noma dent',
    quote:
      'We had over 250 messages during our promotion. SparkAI handled all of them professionally — without stress.',
    image: '/profile-pic1.png',
  },
  {
    name: 'Donat Begzati',
    company: 'dental plus',
    quote:
      'It feels like we hired a new team member who works 24/7 and never makes a mistake. Incredible solution.',
    image: '/profile-pic1.png',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f9f9f9] py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600">Trusted by businesses across Kosovo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full"
          >
            <p className="text-gray-800 text-sm mb-6 italic">"{testimonial.quote}"</p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-sm">
                  {testimonial.name}
                </span>
                <span className="text-gray-500 text-xs">{testimonial.company}</span>
              </div>

              <div className="flex ml-auto text-[#FFD700] text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
