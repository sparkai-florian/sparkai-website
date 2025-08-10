// components/home/Benefits.js
import { FaClock, FaMoneyBillWave, FaGlobeEurope } from 'react-icons/fa';

export default function Benefits() {
  return (
    <section className="w-full bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What You Gain with SparkAI</h2>
        <p className="text-gray-600">Three core benefits — powered by real AI features that save you time, money, and energy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Benefit 1 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <div className="text-4xl text-[#2B00FF] mb-4">
            <FaClock />
          </div>
          <h3 className="text-xl font-semibold mb-2">Respond Faster, Close More</h3>
          <ul className="text-gray-700 space-y-1 text-sm text-left">
            <li>✅ Instant replies 24/7</li>
            <li>✅ Works even on weekends</li>
            <li>✅ Trained on your business</li>
          </ul>
        </div>

        {/* Benefit 2 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <div className="text-4xl text-[#2B00FF] mb-4">
            <FaMoneyBillWave />
          </div>
          <h3 className="text-xl font-semibold mb-2">Save Time, Save Costs</h3>
          <ul className="text-gray-700 space-y-1 text-sm text-left">
            <li>✅ No more repetitive replies</li>
            <li>✅ Reduced team workload</li>
            <li>✅ Automate follow-ups</li>
          </ul>
        </div>

        {/* Benefit 3 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <div className="text-4xl text-[#2B00FF] mb-4">
            <FaGlobeEurope />
          </div>
          <h3 className="text-xl font-semibold mb-2">Multilingual Support Built-In</h3>
          <ul className="text-gray-700 space-y-1 text-sm text-left">
            <li>✅ Albanian, English, more</li>
            <li>✅ Auto-detect language</li>
            <li>✅ Consistent tone always</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
