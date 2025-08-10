// components/home/HeroSection.js
import Image from 'next/image';
import bannerImage from '../../public/banner-image.png'; // Make sure this file exists

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Automate Your Customer Support with AI
          </h1>
          <p className="text-lg mb-6">
            SparkAI chatbots respond instantly, 24/7, in multiple languages — so you never miss a client again.
          </p>
          <button className="bg-[#2B00FF] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 mb-8">
            Book your Demo Today
          </button>

          {/* Results */}
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              ✅ 24/7 instant replies, even during weekends
            </li>
            <li className="flex items-center gap-2">
              ✅ Higher lead conversion and faster response times
            </li>
            <li className="flex items-center gap-2">
              ✅ Multilingual chatbot trained for your business
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={bannerImage}
            alt="AI Robot Banner"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
