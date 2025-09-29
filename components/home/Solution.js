// components/home/Solution.js

import Image from 'next/image';
import robotImage from '@/public/robot-dashboard.png'; // Update this with your real image path

export default function SolutionIntro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-[80%]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            SparkAI - Professional Customer Service That Pays for Itself
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Text Side */}
          <div className="space-y-6 lg:pr-8">
            <p className="text-lg text-gray-700">
              Here's what smart business owners are discovering: 
              <span className="text-black font-medium"> you can deliver better customer service while actually reducing costs.</span>
            </p>
            
            <p className="text-lg text-gray-700">
              SparkAI handles all the routine customer interactions - hours, pricing, availability, basic questions - 
              <span className="text-black font-medium"> with messages that you trust. Professional, accurate, and consistent every single time.</span>
            </p>
            
            <div className="bg-[#d4ff00]/10 border-l-4 border-[#d4ff00] p-6 rounded-r-lg">
              <p className="text-lg text-gray-700">
                <span className="text-black font-bold text-xl">But here's the game-changer:</span>
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

          {/* Image Side */}
          <div className="h-auto lg:pl-8">
            <div className="relative">
              <Image
                src={robotImage}
                alt="SparkAI dashboard"
                className="rounded-xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}