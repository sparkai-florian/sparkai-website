// components/home/Solution.js

import Image from 'next/image';
import robotImage from '@/public/robot-dashboard.png'; // Update this with your real image path

export default function SolutionIntro() {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Centered tag */}
      <div className="flex justify-center mb-8">
        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          The Solution
        </span>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Side */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Meet Your 24/7 Assistant — For Conversations and Automated Tasks
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              SparkAI Assistant is more than just a chatbot. It's your intelligent partner, available around the clock, built to respond instantly and manage the tasks that slow your team down.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              The assistant is designed and thought through for the end-user first — so conversations feel natural, professional, and easy to follow. At the same time, we work closely with businesses across industries to personalize the system around their processes, ensuring it meets their needs while staying consistent with their brand voice.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With SparkAI's Automated Task & Messaging System (ATMK), you get more than replies — you get follow-ups, notifications, and repetitive work handled automatically. That means fewer missed opportunities, less stress for your team, and more time to focus on what truly drives your business forward.
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative flex justify-center items-center">
          <div className="relative z-10 max-w-md w-full">
            <Image
              src={robotImage}
              alt="SparkAI dashboard"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full h-auto"
              priority
            />
          </div>
          
          {/* Floating elements around image */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
          
          {/* Decorative border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1 -z-10 max-w-md">
            <div className="w-full h-full bg-black rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
