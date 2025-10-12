// components/pricing/IndustryPackages.js
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const packages = [
  {
    industry: 'Aesthetic Clinics',
    packageName: 'Care Bot',
    setupFee: '€799',
    features: [
      'Digital Business Hub (FAQ, treatments, hours, pricing)',
      'Lead Generation → Google Sheets',
      'Google Review Automation',
      'Feedback Collection',
      'Multilingual Support',
    ],
    color: '#FF6F91',
  },
  {
    industry: 'Fashion Stores',
    packageName: 'Try-On Suite',
    setupFee: '€799',
    features: [
      'Digital Business Hub (FAQ, store hours, size guide, pricing)',
      'Google Review Automation',
      'Feedback Collection',
      'AI Virtual Dressing Try-On (upload photo → preview outfit)',
    ],
    color: '#8E44AD',
  },
  {
    industry: 'E-Commerce',
    packageName: 'Sales Flow',
    setupFee: '€799',
    features: [
      'Digital Business Hub (FAQ, products, delivery info, pricing)',
      'Lead Generation → Google Sheets',
      'Up to 30 Products with Images (expandable as add-on)',
      'Order Management → Email, WhatsApp, Telegram',
      'After-Care Support Automation',
      'Multilingual Support',
    ],
    color: '#FF7F11',
  },
];

export default function IndustryPackages() {

  return (
    <section className="py-16">
      <div className="w-[80%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">Industry Packages</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto font-paragraph">
          Choose the perfect package for your industry. Each package includes setup and monthly maintenance with all features included.
        </p>
        {/* Royal Industry Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.industry} 
              className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-6 border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden flex flex-col h-full"
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
              

              <div className="relative z-10 flex flex-col h-full">
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
                    {pkg.packageName}
                  </h3>
                </div>

                {/* Pricing */}
                <div className="mb-5 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-white group-hover:text-gray-100 transition-colors font-headline">
                      {pkg.setupFee}
                    </span>
                    <span className="text-zinc-400 text-sm font-medium font-paragraph">one-time setup</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-white mb-3 font-headline">What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs">
                        <div 
                          className="w-3 h-3 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${pkg.color}20` }}
                        >
                          <CheckCircleIcon 
                            className="h-2 w-2" 
                            style={{ color: pkg.color }}
                          />
                        </div>
                        <span className="text-zinc-200 font-medium font-paragraph leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <Link href="/contact">
                  <button
                    className="w-full relative overflow-hidden rounded-xl font-bold text-white py-3 px-4 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 group/btn mt-auto"
                    style={{ 
                      background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)`,
                      boxShadow: `0 0 20px ${pkg.color}40`
                    }}
                  >
                    <span className="relative z-10">Get This Package</span>
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
