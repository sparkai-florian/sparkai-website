import { Bot, MessageSquare, Zap } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    title: "No Buttons, No Templates",
    description: "Unlike most chatbots, we avoid rigid templates and laggy buttons. Instead, we craft personalized responses that feel human and meaningful.",
    icon: Bot,
    color: "from-[#d4ff00]/20 to-[#d4ff00]/5"
  },
  {
    title: "Every Message Matters",
    description: "Whether it's a simple inquiry or a complex request, we ensure every message is answered with care and precision.",
    icon: MessageSquare,
    color: "from-[#00D4FF]/20 to-[#00D4FF]/5"
  },
  {
    title: "Smart Automation",
    description: "While we automate repetitive tasks, we never compromise on the quality of communication.",
    icon: Zap,
    color: "from-[#2139ff]/20 to-[#2139ff]/5"
  }
];

export default function Differentiators() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-headline">What Makes SparkAI Different?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-subheadline">
              We don't just build chatbots; we build trust. Here's what sets us apart:
            </p>
          </div>

          {/* Differentiator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {DIFFERENTIATORS.map(({ icon: Icon, title, description, color }, index) => (
              <div key={title} className="bg-gray-900 p-8 rounded-xl border border-transparent bg-clip-padding relative backdrop-blur-md hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #d4ff00, #2139ff)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#d4ff0020' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: '#d4ff00' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-headline">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-paragraph">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Messages Create Brands Section */}
          <div className="bg-gray-900 p-12 rounded-2xl border border-transparent bg-clip-padding relative backdrop-blur-md" style={{
            backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #d4ff00, #2139ff)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6 font-headline">Messages Create Brands</h3>
              <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-paragraph">
                At SparkAI, we believe that messages create brands. By delivering personalized, impactful communication, we help businesses build trust, loyalty, and lasting relationships with their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
