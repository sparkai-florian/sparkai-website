// components/home/BalkansSolution.js

import Image from 'next/image';
import robotImage from '@/public/robot-dashboard.png'; // Update this with your real image path

export default function BalkansSolutionIntro() {
  return (
    <section className="bg-[#FAFAF7] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SparkAI - Professional Customer Service That Pays for Itself
          </h2>
          
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              Here's what smart business owners are discovering: 
              <span className="text-white font-medium"> you can deliver better customer service while actually reducing costs.</span>
            </p>
            <p>
              SparkAI handles all the routine customer interactions - hours, pricing, availability, basic questions - 
              <span className="text-white font-medium"> with messages that you trust. Professional, accurate, and consistent every single time.</span>
            </p>
            <p>
              But here's the game-changer: 
              <span className="text-[#d4ff00] font-medium"> while it's handling the routine stuff, your team focuses on what actually grows your business - closing sales, building relationships, and serving customers who need that personal touch.</span>
            </p>
            <p>
              We customize everything to your business - your services, your processes, your brand personality.
            </p>
            <p>
              The result? 
              <span className="text-white font-medium"> Customers get instant, helpful responses 24/7, and you get more revenue with lower overhead costs.</span>
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full h-auto">
          <Image
            src={robotImage}
            alt="SparkAI dashboard"
            className="rounded-xl shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
