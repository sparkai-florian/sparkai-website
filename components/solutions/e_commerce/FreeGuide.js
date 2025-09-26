import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const FreeGuide = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Want to boost your e-commerce conversions instantly?
        </h3>
        <p className="text-gray-600 mb-6">
          Download our free guide tailored for online store owners. Learn how to build stronger customer relationships with smart, efficient messaging strategies.
        </p>
        <Link href="/guides/ecommerce-communication-client-guide.pdf" target="_blank">
          <button className="inline-flex items-center gap-2 bg-[#D62828] text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 hover:opacity-90 transition-all duration-300">
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download Free Guide
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FreeGuide;
