// components/solutions/healthcare/ChatbotDemoSection.js
const ChatbotDemoSection = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Try the Chatbot
        </h2>
        <p className="mb-8 text-gray-700">
          Test SparkAI's healthcare chatbot — no signup required. Just start chatting below.
        </p>

        <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
          <iframe
            src="https://app.chatgptbuilder.io/webchat/?p=1166608&ref=1759931411611"
            style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
            allow="camera; microphone; clipboard-read; clipboard-write"
            title="SparkAI Healthcare Chatbot"
          />
        </div>
      </div>
    </section>
  );
};

export default ChatbotDemoSection;


