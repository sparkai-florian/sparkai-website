const DIFFERENTIATORS = [
  {
    title: "No Buttons, No Templates",
    description: "Unlike most chatbots, we avoid rigid templates and laggy buttons. Instead, we craft personalized responses that feel human and meaningful.",
    icon: "🤖",
    color: "from-[#2B00FF]/20 to-[#2B00FF]/5"
  },
  {
    title: "Every Message Matters",
    description: "Whether it's a simple inquiry or a complex request, we ensure every message is answered with care and precision.",
    icon: "💬",
    color: "from-[#00D4FF]/20 to-[#00D4FF]/5"
  },
  {
    title: "Smart Automation",
    description: "While we automate repetitive tasks, we never compromise on the quality of communication.",
    icon: "⚡",
    color: "from-[#f6db4b]/20 to-[#f6db4b]/5"
  }
];

export default function Differentiators() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">What Makes SparkAI Different?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              We don't just build chatbots; we build trust. Here's what sets us apart:
            </p>
            <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-4">
              <p><strong>No Buttons, No Templates:</strong> Unlike most chatbots, we avoid rigid templates and laggy buttons. Instead, we craft personalized responses that feel human and meaningful.</p>
              <p><strong>Every Message Matters:</strong> Whether it's a simple inquiry or a complex request, we ensure every message is answered with care and precision.</p>
              <p><strong>Smart Automation:</strong> While we automate repetitive tasks, we never compromise on the quality of communication.</p>
            </div>
          </div>
          

          <div className="bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 rounded-2xl p-12 border border-white/10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Messages Create Brands</h3>
              <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                At SparkAI, we believe that messages create brands. By delivering personalized, impactful communication, we help businesses build trust, loyalty, and lasting relationships with their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
