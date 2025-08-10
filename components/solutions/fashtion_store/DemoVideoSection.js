// components/solutions/healthcare/DemoVideoSection.js
import React from 'react';

const DemoVideoSection = () => {
  return (
    <section className="bg-gray-100 text-black py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Video */}
        <div className="w-full md:w-1/2">
          <video
            src="/aidemo.mp4"
            controls
            className="w-full rounded-xl shadow-lg"
            style={{ aspectRatio: '9 / 16', objectFit: 'cover' }}
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            See SparkAI in Action
          </h3>
          <p className="text-lg mb-3">
            This demo shows exactly how patients can interact with your clinic’s chatbot — from booking appointments to asking for prices, hours, and services.
          </p>
          <p className="text-lg">
            Available 24/7, always polite, and never tired. It's like having a digital assistant that never sleeps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
