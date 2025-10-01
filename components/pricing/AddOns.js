// components/pricing/AddOns.js
import {
  LanguageIcon,
  DocumentTextIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const addOns = [
  {
    icon: DocumentTextIcon,
    name: 'Business Information Hub',
    desc: 'Add service pages, FAQs, hours, pricing, and more comprehensive business details.',
    price: '50 €',
    color: '#D62828',
    allowMultiple: true,
    maxQuantity: 10,
  },
  {
    icon: LanguageIcon,
    name: 'Smart Multi-Language Detection',
    desc: 'Automatically detect and switch languages, or allow manual language selection.',
    price: '100 €',
    color: '#002855',
    allowMultiple: false,
    maxQuantity: 1,
  },
  {
    icon: PhotoIcon,
    name: 'Image Sharing Capability',
    desc: 'Your chatbot can send images, product photos, and visual content to customers.',
    price: '100 €',
    color: '#002855',
    allowMultiple: false,
    maxQuantity: 1,
  },
  {
    icon: ChatBubbleLeftRightIcon,
    name: 'Personal Touch Messaging',
    desc: 'Use customer names, preferences, and chat history for personalized responses.',
    price: '50 €',
    color: '#002855',
    allowMultiple: false,
    maxQuantity: 1,
  },
  {
    icon: ClipboardDocumentListIcon,
    name: 'Customer Data Collection & CRM',
    desc: 'Collect customer preferences, contact info, and display in your CRM system.',
    price: '200 €',
    color: '#d4ff00',
    allowMultiple: false,
    maxQuantity: 1,
  },
  {
    icon: ClockIcon,
    name: 'Automated Appointment Booking',
    desc: 'Allow customers to book appointments with automatic calendar synchronization.',
    price: '150 €',
    color: '#d4ff00',
    allowMultiple: true,
    maxQuantity: 5,
  },
];

export default function AddOns() {
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [basePrice, setBasePrice] = useState(0);
  const [baseIndustry, setBaseIndustry] = useState(null);

  useEffect(() => {
    // Listen for industry selection from parent component
    const handleIndustrySelection = (event) => {
      const industryData = event.detail;
      setBaseIndustry(industryData);
      setBasePrice(parseInt(industryData.price.replace(' €', '')));
      setSelectedAddOns({}); // Reset add-ons when industry changes
    };

    window.addEventListener('industrySelected', handleIndustrySelection);
    return () => window.removeEventListener('industrySelected', handleIndustrySelection);
  }, []);

  const updateQuantity = (addOn, change) => {
    setSelectedAddOns(prev => {
      const currentQuantity = prev[addOn.name]?.quantity || 0;
      const newQuantity = Math.max(0, Math.min(addOn.maxQuantity, currentQuantity + change));
      
      if (newQuantity === 0) {
        const { [addOn.name]: removed, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [addOn.name]: {
          ...addOn,
          quantity: newQuantity,
          totalPrice: newQuantity * parseInt(addOn.price.replace(' €', ''))
        }
      };
    });
  };

  const getTotalAddOns = () => {
    return Object.values(selectedAddOns).reduce((sum, addOn) => sum + addOn.quantity, 0);
  };

  const calculateTotal = () => {
    const addOnTotal = Object.values(selectedAddOns).reduce((sum, addOn) => sum + addOn.totalPrice, 0);
    return basePrice + addOnTotal;
  };

  return (
    <section id="add-ons" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="w-[80%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline">
            Popular{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Add‑ons
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-subheadline">
            Enhance your chatbot with powerful features that scale with your business needs
          </p>
        </div>

        {/* Pricing Summary */}
        {baseIndustry && (
          <div className="mb-12 p-8 bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 border border-[#2B00FF]/30 rounded-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-headline">Your Custom Package</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: baseIndustry.color }}
                    />
                  <span className="text-gray-300 font-paragraph">{baseIndustry.industry} Package</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300 font-paragraph">{getTotalAddOns()} add-on items selected</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-white mb-1 font-headline">
                  {calculateTotal()} €
                </div>
                <div className="text-sm text-gray-400 font-paragraph">
                  {basePrice} € base + {Object.values(selectedAddOns).reduce((sum, addOn) => sum + addOn.totalPrice, 0)} € add-ons
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOns.map((addOn) => {
            const { icon: Icon, name, desc, price, color, allowMultiple, maxQuantity } = addOn;
            const selectedAddOn = selectedAddOns[name];
            const quantity = selectedAddOn?.quantity || 0;
            const isSelected = quantity > 0;
            
            return (
              <div 
                key={name} 
                className={`group bg-zinc-900/50 border rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm ${
                  isSelected 
                    ? 'border-[#2B00FF]/50 bg-[#2B00FF]/10' 
                    : 'border-zinc-800/50 hover:border-zinc-700/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon className="h-8 w-8" style={{ color: color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors font-headline">
                      {name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-sm text-gray-400 font-paragraph">Add-on</span>
                      {isSelected && (
                        <span className="text-sm text-[#2B00FF] font-semibold font-paragraph">
                          • {quantity} {quantity === 1 ? 'item' : 'items'} selected
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed font-paragraph">
                  {desc}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white font-headline">{price}</span>
                    <span className="text-sm text-gray-400 font-paragraph">each</span>
                    {isSelected && (
                      <div className="ml-2 text-lg font-semibold text-[#2B00FF] font-headline">
                        = {selectedAddOn.totalPrice} €
                      </div>
                    )}
                  </div>
                  
                  {allowMultiple ? (
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(addOn, -1)}
                        disabled={quantity === 0}
                        className="w-10 h-10 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ 
                          backgroundColor: quantity === 0 ? '#6B7280' : '#EF4444',
                          boxShadow: quantity === 0 ? 'none' : '0 0 20px #EF444440'
                        }}
                      >
                        −
                      </button>
                      <span className="text-xl font-bold text-white min-w-[2rem] text-center">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(addOn, 1)}
                        disabled={quantity >= maxQuantity}
                        className="w-10 h-10 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ 
                          backgroundColor: quantity >= maxQuantity ? '#6B7280' : color,
                          boxShadow: quantity >= maxQuantity ? 'none' : `0 0 20px ${color}40`
                        }}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => updateQuantity(addOn, isSelected ? -1 : 1)}
                      className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                        isSelected ? 'bg-red-500 hover:bg-red-600' : ''
                      }`}
                      style={!isSelected ? { 
                        backgroundColor: color,
                        boxShadow: `0 0 20px ${color}40`
                      } : {}}
                    >
                      {isSelected ? '−' : '+'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Final CTA */}
        {baseIndustry && (
          <div className="mt-16 p-8 bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 border border-[#2B00FF]/30 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Your custom {baseIndustry.industry.toLowerCase()} package with {getTotalAddOns()} add-on items is ready to deploy.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get This Package ({calculateTotal()} €)
              </button>
            </div>
          </div>
        )}

        {!baseIndustry && (
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Select an industry package above to start customizing
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
