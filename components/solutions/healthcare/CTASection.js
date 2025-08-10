// components/solutions/healthcare/FinalCTA.js
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-[#2B00FF] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your clinic with 24/7 AI communication?
        </h2>
        <p className="text-lg mb-8">
          Start automating replies, boost your client satisfaction, and never miss a message again.
        </p>
        <Link href="/book">
          <button className="bg-white text-[#2B00FF] px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition-all">
            Book Your Free Demo Today
          </button>
        </Link>
      </div>
    </section>
  );
}
