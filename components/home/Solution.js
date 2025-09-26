// components/home/Solution.js

import Image from 'next/image';
import robotImage from '@/public/robot-dashboard.png'; // Update this with your real image path

export default function SolutionIntro() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#2ebe8b] rounded-br-3xl"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#2ebe8b] rounded-bl-3xl"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#2ebe8b] rounded-tr-3xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#2ebe8b] rounded-tl-3xl"></div>
      
      {/* Side accents */}
      <div className="absolute top-1/2 left-0 w-4 h-32 bg-[#2ebe8b] rounded-r-2xl transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-4 h-32 bg-[#2ebe8b] rounded-l-2xl transform -translate-y-1/2"></div>
      
      <div className="mx-auto w-[85%] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            SparkAI - Professional Customer Service That Pays for Itself
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex justify-between items-start max-w-7xl mx-auto px-6 md:px-12">
          {/* Text Side - Aligned with Logo */}
          <div className="w-[45%] space-y-6">
            <p className="text-lg text-gray-700">
              Here's what smart business owners are discovering: 
              <span className="text-black font-medium"> you can deliver better customer service while actually reducing costs.</span>
            </p>
            
            <p className="text-lg text-gray-700">
              SparkAI handles all the routine customer interactions - hours, pricing, availability, basic questions - 
              <span className="text-black font-medium"> with messages that you trust. Professional, accurate, and consistent every single time.</span>
            </p>
            
            <div className="bg-[#2ebe8b]/5 border-l-4 border-[#2ebe8b] p-6 rounded-r-lg">
              <p className="text-lg text-gray-700">
                <span className="text-[#2ebe8b] font-bold text-xl">But here's the game-changer:</span>
                <br />
                <span className="text-black font-medium"> while it's handling the routine stuff, your team focuses on what actually grows your business - closing sales, building relationships, and serving customers who need that personal touch.</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-700">
              We customize everything to your business - your services, your processes, your brand personality.
            </p>
            
            <p className="text-lg text-gray-700">
              The result? 
              <span className="text-black font-medium"> Customers get instant, helpful responses 24/7, and you get more revenue with lower overhead costs.</span>
            </p>
          </div>

          {/* Image Side - Aligned with Book a Call Button */}
          <div className="w-[45%] h-auto">
            <div className="relative">
              <Image
                src={robotImage}
                alt="SparkAI dashboard"
                className="rounded-xl shadow-xl"
                priority
              />
              {/* Teal accent on image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2ebe8b] rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#2ebe8b] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}