// components/solutions/healthcare/ChatbotDemoSection.js
import { useEffect } from 'react';
import Script from 'next/script';

const ChatbotDemoSection = () => {
  useEffect(() => {
    // Wait a bit for the script to load, then initialize
    const initTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.ktt10) {
        window.ktt10.setup({
          id: "vCRnjUV0vz9",
          accountId: "1234372",
          color: "#474A38"
        });

        // Auto-open the chatbot after 4 seconds
        const autoOpenTimer = setTimeout(() => {
          if (window.ktt10Btn) {
            window.ktt10Btn.click();
          }
        }, 4000);

        return () => clearTimeout(autoOpenTimer);
      }
    }, 500);

    return () => clearTimeout(initTimer);
  }, []);

  return (
    <>
      <Script 
        src="https://app.chatgptbuilder.io/webchat/plugin.js?v=5"
        strategy="afterInteractive"
      />
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Try the Chatbot
          </h2>
          <p className="mb-8 text-gray-700">
            Test SparkAI's healthcare chatbot — no signup required. The chat will open automatically, or click the chat button to start.
          </p>
          <div className="text-sm text-gray-600 mb-4">
            <p>Experience our AI-powered chatbot with full features including voice input and seamless interaction.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatbotDemoSection;


