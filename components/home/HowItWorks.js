// components/home/HowItWorks.js

import Image from 'next/image';
import workflowImage from '@/public/how-it-works.png'; // replace with your image

const steps = [
  {
    number: '01',
    title: 'Book / Schedule',
    description: 'Choose a time that works for you — no tech skills needed.',
  },
  {
    number: '02',
    title: 'We’ll get to work',
    description: 'We build, personalize, and set everything up for you.',
  },
  {
    number: '03',
    title: 'Happily ever after!',
    description: 'Your chatbot handles leads and replies — you relax.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Steps */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex items-start gap-4">
                <div className="text-[#2B00FF] text-2xl font-bold w-10">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="w-full h-auto">
          <Image
            src={workflowImage}
            alt="Workflow illustration"
            className="rounded-xl shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
