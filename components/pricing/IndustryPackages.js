// components/pricing/IndustryPackages.js
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const packages = [
  {
    industry: 'Aesthetic Clinics',
    price: '299 €',
    note: 'Starter package',
    features: [
      '5 Pages of Info',
      'Request Google Review',
      'Request Feedback',
    ],
    color: '#FF6F91',
  },
  {
    industry: 'E-Commerce',
    price: '249 €',
    note: 'Starter package',
    features: [
      '5 Pages of Info',
      'Orders → WhatsApp or Email',
      'Request Feedback',
    ],
    color: '#FF7F11',
  },
  {
    industry: 'Fashion',
    price: '399 €',
    note: 'Starter package',
    features: [
      '5 Pages of Info',
      'Virtual Dressing Wardrobe',
      'Request Feedback',
    ],
    color: '#8E44AD',
  },
  {
    industry: 'Law Firms',
    price: '249 €',
    note: 'Starter package',
    features: [
      '5 Pages of Info',
      'Lead Qualification & Generation',
    ],
    color: '#002855',
  },
  {
    industry: 'Travel Agencies',
    price: '299 €',
    note: 'Starter package',
    features: [
      '5 Pages of Info',
      'API Flight Price Automation',
    ],
    color: '#00B4D8',
  },
];

export default function IndustryPackages() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const selectIndustry = (pkg) => {
    setSelectedIndustry(pkg);
    // Dispatch event to notify AddOns component
    window.dispatchEvent(new CustomEvent('industrySelected', { detail: pkg }));
    // Scroll to add-ons section
    document.getElementById('add-ons')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16">
      <div className="w-[85%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">Industry Packages</h2>
        
        {selectedIndustry && (
          <div className="mb-8 p-6 bg-gradient-to-r from-[#2B00FF]/10 to-[#00D4FF]/10 border border-[#2B00FF]/30 rounded-2xl">
            <div className="flex items-center gap-4">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: selectedIndustry.color }}
              />
              <div>
                <h3 className="text-xl font-bold text-white font-headline">
                  Selected: {selectedIndustry.industry} Package
                </h3>
                <p className="text-gray-300 font-paragraph">
                  Base price: {selectedIndustry.price} • Now customize with add-ons below
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Royal Industry Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.industry} 
              className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-6 border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden"
              style={{
                boxShadow: `0 0 30px ${pkg.color}20`,
                borderColor: `${pkg.color}40`
              }}
            >
              {/* Royal gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br opacity-5 rounded-2xl"
                style={{ 
                  background: `linear-gradient(135deg, ${pkg.color}40, transparent)`
                }}
              />
              

              <div className="relative z-10">
                {/* Industry header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0 shadow-lg animate-pulse"
                    style={{ 
                      backgroundColor: pkg.color,
                      boxShadow: `0 0 10px ${pkg.color}80`
                    }}
                  />
                  <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors font-headline">
                    {pkg.industry}
                  </h3>
                </div>

                {/* Royal pricing */}
                <div className="mb-5 text-center">
                  <span className="text-3xl font-black text-white group-hover:text-gray-100 transition-colors font-headline">
                    {pkg.price}
                  </span>
                  <span className="text-zinc-400 text-sm font-medium font-paragraph">one-time setup</span>
                </div>

                {/* Features with royal styling */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <div 
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${pkg.color}20` }}
                      >
                        <CheckCircleIcon 
                          className="h-3 w-3" 
                          style={{ color: pkg.color }}
                        />
                      </div>
                      <span className="text-zinc-200 font-medium font-paragraph">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Royal CTA button */}
                <button
                  onClick={() => selectIndustry(pkg)}
                  className="w-full relative overflow-hidden rounded-xl font-bold text-white py-3 px-4 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group/btn"
                  style={{ 
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)`,
                    boxShadow: `0 0 20px ${pkg.color}40`
                  }}
                >
                  <span className="relative z-10">Choose This Industry</span>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
