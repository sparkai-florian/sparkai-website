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
            SparkAI is Your 24/7 Sales Assistant
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            SparkAI is an intelligent chatbot and automation system designed to
            help you respond instantly, automate repetitive tasks, and never miss another lead.
          </p>
          <p className="text-lg text-gray-300">
            Whether you're in healthcare, retail, or real estate — SparkAI adapts to your business and speaks your customer's language.
          </p>
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
