const BENEFITS = [
  {
    title: "Build Trust",
    description: "Through personalized, meaningful communication that creates lasting relationships with your customers.",
    icon: "🤝",
    color: "from-[#2B00FF]/20 to-[#2B00FF]/5"
  },
  {
    title: "Save Time & Resources",
    description: "By automating repetitive tasks so your team can focus on what truly matters to your business.",
    icon: "⏰",
    color: "from-[#00D4FF]/20 to-[#00D4FF]/5"
  },
  {
    title: "Create Brands",
    description: "That stand out, one message at a time, with communication that reflects your unique value.",
    icon: "🎯",
    color: "from-[#f6db4b]/20 to-[#f6db4b]/5"
  }
];

export default function Values() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-headline">Why SparkAI?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 font-subheadline">
              Because we believe that every message matters. We're here to help businesses:
            </p>
            <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-4">
              <p className="font-paragraph">Build trust through personalized, meaningful communication.</p>
              <p className="font-paragraph">Save time and resources by automating repetitive tasks.</p>
              <p className="font-paragraph">Create brands that stand out, one message at a time.</p>
            </div>
          </div>


          <div className="bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 rounded-2xl p-12 border border-white/10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6 font-headline">Our Commitment</h3>
              <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-paragraph">
                At SparkAI, we're not just building chatbots; we're building connections. Join us in transforming communication and helping businesses thrive in a fast-paced, digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
