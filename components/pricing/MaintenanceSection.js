// components/pricing/MaintenanceSection.js
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const maintenancePlans = [
  {
    industry: 'Aesthetic Clinics',
    packageName: 'SparkAI Clinic Pro',
    monthlyFee: '€99/month',
    color: '#FF6F91',
  },
  {
    industry: 'Fashion Stores',
    packageName: 'SparkAI Fashion Pro',
    monthlyFee: '€149/month',
    color: '#8E44AD',
  },
  {
    industry: 'E-Commerce',
    packageName: 'SparkAI E-Com Pro',
    monthlyFee: '€99/month',
    color: '#FF7F11',
  },
  {
    industry: 'Law Firms',
    packageName: 'SparkAI Legal Pro',
    monthlyFee: '€99/month',
    color: '#002855',
  },
  {
    industry: 'Travel Agencies',
    packageName: 'SparkAI Travel Pro',
    monthlyFee: '€99/month',
    color: '#00B4D8',
  },
];

const maintenanceFeatures = [
  'Ongoing updates and improvements',
  'Performance monitoring and optimization',
  'Unlimited contacts and messages',
  '24/7 technical support',
  'Regular security updates',
  'Backup and data protection',
];

export default function MaintenanceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="w-[80%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline">
            Maintenance &{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Support
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-paragraph">
            All packages include comprehensive monthly maintenance to keep your chatbot running smoothly and efficiently.
          </p>
        </div>

        {/* Maintenance Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {maintenancePlans.map((plan) => (
            <div 
              key={plan.industry}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-6 border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              style={{
                boxShadow: `0 0 30px ${plan.color}20`,
                borderColor: `${plan.color}40`
              }}
            >
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br opacity-5 rounded-2xl"
                style={{ 
                  background: `linear-gradient(135deg, ${plan.color}40, transparent)`
                }}
              />
              
              <div className="relative z-10 text-center">
                {/* Industry indicator */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0 shadow-lg animate-pulse"
                    style={{ 
                      backgroundColor: plan.color,
                      boxShadow: `0 0 10px ${plan.color}80`
                    }}
                  />
                  <h3 className="text-lg font-bold text-white font-headline">
                    {plan.packageName}
                  </h3>
                </div>

                {/* Monthly fee */}
                <div className="mb-6">
                  <span className="text-3xl font-black text-white font-headline">
                    {plan.monthlyFee}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included in Maintenance */}
        <div className="bg-gradient-to-r from-[#2B00FF]/10 to-[#00D4FF]/10 border border-[#2B00FF]/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center font-headline">
            What's Included in Monthly Maintenance
          </h3>
          <p className="text-gray-300 text-center mb-8 font-paragraph">
            Includes ongoing updates, performance monitoring, and unlimited contacts/messages.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {maintenanceFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2139ff] flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium font-paragraph">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
