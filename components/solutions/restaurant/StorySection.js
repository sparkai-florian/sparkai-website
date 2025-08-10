// components/solutions/healthcare/StorySection.js
import React from 'react';

const StorySection = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Built with Clinics, Evolved Through Experience
        </h2>
        <p className="text-lg mb-4">
          SparkAI was crafted in close collaboration with clinics that wanted to
          save time, provide instant replies, and streamline appointment booking. From
          the first message to real-time automation, every part of the solution
          was developed by listening to real needs.
        </p>
        <p className="text-lg">
          With every new clinic we work with, we improve SparkAI further — shaping
          it based on real conversations, feedback, and results. It’s not just
          a product. It’s a continuously evolving assistant, tailored to fit.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
