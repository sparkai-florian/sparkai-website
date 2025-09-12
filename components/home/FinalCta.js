// components/home/FinalCta.js
import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Stop Losing Clients?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          SparkAI replies instantly — so your business never misses a message again.
        </p>

        <Link href="/book">
          <button className="bg-[#2B00FF] hover:opacity-90 transition px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-md">
            Book Your Demo Today
          </button>
        </Link>
      </div>
    </section>
  );
}
