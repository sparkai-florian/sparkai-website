import Head from "next/head";

export default function BookADemo() {
  return (
    <>
      <Head>
        <title>Book a Demo • SparkAI</title>
        <meta
          name="description"
          content="Book a demo with SparkAI to see how our AI chatbot solutions can help your business."
        />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Book a Demo</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Schedule Your Personalized Demo</h2>
            
            <p className="text-gray-600 mb-8">
              See how SparkAI can transform your customer experience with our AI-powered chatbot solutions. 
              Our team will show you exactly how our platform can benefit your business.
            </p>
            
            <div className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <textarea
                placeholder="Tell us about your business and what you'd like to see in the demo"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              We'll get back to you within 24 hours to schedule your personalized demo.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
