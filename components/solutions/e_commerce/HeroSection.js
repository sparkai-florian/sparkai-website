// components/solutions/healthcare/HeroSection.js
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Chatbots Built for Clinics That Care
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
          Respond instantly to patient inquiries, book appointments, and follow up automatically — all without lifting a finger.
        </p>
        <Link
          href="/book"
          className="bg-primaryCTA text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 inline-block"
        >
          Book Your Demo
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
