// components/pricing/PricingFAQ.js
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqItem({ i, open, onToggle, item }) {
  const isOpen = open === i;

  return (
    <div className="border-b border-gray-700/50">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={() => onToggle(isOpen ? -1 : i)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white pr-4">
          {item.title}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {item.answer.map((para, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
            {item.points?.length && (
              <ul className="mt-4 space-y-2">
                {item.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#d4ff00] mt-1">•</span>
                    {p.includes('sparkai-pricelist.pdf') ? (
                      <a 
                        href="/pdf/sparkai-pricelist.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#2139ff] hover:text-[#2139ff]/80 text-sm leading-relaxed"
                      >
                        sparkai-pricelist.pdf
                      </a>
                    ) : (
                      <span className="text-sm leading-relaxed">{p}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PricingFAQ() {
  const [open, setOpen] = useState(-1);

  const faqs = [
    {
      title: "Do I need to pay the monthly maintenance fee for the first month?",
      answer: [
        "No. In the first month, you only pay the one-time setup fee. This covers the creation of your system, placement of the chosen features, and also includes the first month of maintenance at no extra cost.",
        "Starting from the second month, the monthly maintenance fee applies, which covers unlimited messaging and contacts, light updates to your system (like changing business information), and ongoing performance monitoring."
      ]
    },
    {
      title: "What happens if I need more features later?",
      answer: [
        "You can easily add new features anytime. We have a full price list of available features, each with a clear one-time cost.",
        "You can browse the list here and choose exactly what you'd like to add to your system."
      ],
      points: [
        "View complete feature list: sparkai-pricelist.pdf"
      ]
    },
    {
      title: "Is setup a one-time payment?",
      answer: [
        "Yes. The setup fee is a one-time payment that ensures your system is built, personalized for your business, and fully ready with your selected features."
      ]
    },
    {
      title: "How fast can I get started?",
      answer: [
        "Very fast. Simply book a call with us, and we'll discuss your business needs, required features, and goals.",
        "Once we gather the necessary information, we begin building your personalized system right away."
      ]
    },
    {
      title: "Can I cancel anytime?",
      answer: [
        "Yes. You can cancel anytime. We only ask for a written notice at least one month in advance, sent to support@sparkai-rks.com."
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black relative overflow-hidden">
      {/* Radiant gradient in the middle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212,255,0,0.2) 0%, rgba(212,255,0,0.05) 50%, transparent 100%)'
          }}
        ></div>
      </div>
      
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Get instant answers to the most common questions about our pricing and packages.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-lg border border-gray-700/50">
          {faqs.map((item, i) => (
            <FaqItem key={i} i={i} open={open} onToggle={setOpen} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
