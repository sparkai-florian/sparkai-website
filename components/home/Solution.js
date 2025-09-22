// components/home/Solution.js

import Image from 'next/image';
import robotImage from '@/public/robot-dashboard.png'; // Update this with your real image path

export default function SolutionIntro() {
  return (
    <section className="bg-[#FAFAF7] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SparkAI - Intelligent Automation That Understands Your Business
          </h2>
          
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              Modern businesses need more than chatbots - 
              <span className="text-white font-medium"> they need intelligent systems that understand context, handle complexity, and integrate seamlessly with existing processes.</span>
            </p>
            <p>
              SparkAI delivers messages that you trust because 
              <span className="text-white font-medium"> it's trained on your specific business knowledge, processes, and brand voice.</span> 
              It doesn't just answer questions - it understands intent, manages workflows, and maintains context across complex customer journeys.
            </p>
            <p>
              Whether your customer needs technical support, pricing information, or process guidance, 
              <span className="text-[#d4ff00] font-medium"> they get sophisticated, contextual responses that reflect your business expertise.</span>
            </p>
            <p>
              We integrate with your existing systems, understand your processes, and scale intelligently as your business grows.
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
