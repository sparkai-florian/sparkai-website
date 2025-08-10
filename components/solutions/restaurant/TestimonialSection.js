// components/solutions/healthcare/TestimonialSection.js
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function TestimonialSection() {
  return (
    <section className="bg-[#111111] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/profile-pic1.png"
            alt="Krenar Dobroshi"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xl" />
          ))}
        </div>
        <h3 className="text-white text-2xl font-semibold mb-2">
          “SparkAI completely transformed the way we handle client communication”
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          With hundreds of clients messaging daily, it was impossible to keep up manually. Now, our SparkAI chatbot handles everything instantly — from booking to answering questions. Clients are impressed. Our team is relieved. It's a game-changer.
        </p>
        <p className="text-white font-medium">Krenar Dobroshi, Estethica</p>
      </div>
    </section>
  );
}
