// components/solutions/healthcare/ChatbotDemoSection.js
const ChatbotDemoSection = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Try the Chatbot
        </h2>
        <p className="mb-8 text-gray-700">
          Test SparkAI’s healthcare chatbot — no signup required. Just start chatting below.
        </p>

        <div className="w-full h-[700px] border border-gray-300 rounded-xl shadow-md overflow-hidden">
          <iframe
            src="https://app.chatgptbuilder.io/webchat/index.html?id=vCRnjUV0vz9&accountId=1234372&color=%23474A38"
            width="100%"
            height="100%"
            allow="camera; microphone; clipboard-read; clipboard-write"
            title="SparkAI Chatbot"
            style="border:none;"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDemoSection;


