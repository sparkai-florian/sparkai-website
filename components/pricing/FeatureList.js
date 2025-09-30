// components/pricing/FeatureList.js
import {
  DocumentTextIcon,
  PhotoIcon,
  LanguageIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  SparklesIcon,
  Bars3Icon,
  UserCircleIcon,
  CameraIcon,
  ClockIcon,
  ArchiveBoxIcon,
  BellIcon,
  MicrophoneIcon,
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
  PaperAirplaneIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  ChartBarIcon,
  CubeIcon,
  UserPlusIcon,
  CalendarDaysIcon,
  PuzzlePieceIcon,
  CreditCardIcon,
  PencilSquareIcon,
  ChartPieIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const groups = [
  {
    title: 'Chatbot Core',
    items: [
      { 
        icon: DocumentTextIcon, 
        name: 'Business Information Hub', 
        price: '50 €', 
        desc: 'Add service pages, FAQs, hours, pricing, and more comprehensive business details.',
        allowMultiple: true,
        maxQuantity: 10,
        color: '#D62828'
      },
      { 
        icon: PhotoIcon, 
        name: 'Image Sharing Capability', 
        price: '100 €', 
        desc: 'Your chatbot can send images, product photos, and visual content to customers.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#D62828'
      },
      { 
        icon: LanguageIcon, 
        name: 'Smart Multi-Language Detection', 
        price: '100 €', 
        desc: 'Automatically detect and switch languages, or allow manual language selection.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#D62828'
      },
      { 
        icon: StarIcon, 
        name: 'Google Review Requests', 
        price: '50 €', 
        desc: 'Automatically ask satisfied clients for Google reviews after service completion.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#D62828'
      },
      { 
        icon: ChatBubbleLeftRightIcon, 
        name: 'In-Chat Feedback Collection', 
        price: '50 €', 
        desc: 'Collect customer feedback and satisfaction ratings directly within conversations.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#D62828'
      },
      { 
        icon: ClipboardDocumentListIcon, 
        name: 'Conversation Summary Reports', 
        price: '50 €', 
        desc: 'Email detailed summaries of each customer conversation to your team.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#D62828'
      },
      { 
        icon: SparklesIcon, 
        name: 'AI Visual Content Generator', 
        price: '50 € + API', 
        desc: 'Generate custom images, product previews, and visuals from text prompts.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#D62828'
      },
    ],
  },
  {
    title: 'Communication & Messaging',
    items: [
      { 
        icon: Bars3Icon, 
        name: 'Quick Access Navigation Menu', 
        price: '50 €', 
        desc: 'Always-visible menu with shortcuts to key options and services.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
      { 
        icon: UserCircleIcon, 
        name: 'Personal Touch Messaging', 
        price: '50 €', 
        desc: 'Use customer names, preferences, and chat history for personalized responses.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
      { 
        icon: CameraIcon, 
        name: 'Instagram Story Auto-Replies', 
        price: '50 €', 
        desc: 'Automatically respond to customers who reply to your Instagram stories.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
      { 
        icon: ClockIcon, 
        name: 'Human-Like Response Timing', 
        price: '50 €', 
        desc: 'Natural typing indicators and realistic response delays for authentic conversations.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
      { 
        icon: ArchiveBoxIcon, 
        name: 'Conversation Memory', 
        price: '50 €', 
        desc: 'Maintain conversation continuity across multiple sessions and interactions.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
      { 
        icon: BellIcon, 
        name: 'Smart Follow-Up System', 
        price: '100 €', 
        desc: 'Automated follow-ups for appointments, abandoned carts, and customer re-engagement.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
      { 
        icon: MicrophoneIcon, 
        name: 'Voice Message Responses', 
        price: '100 €', 
        desc: 'Reply to customer voice messages with text-to-speech audio responses.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
      { 
        icon: AdjustmentsHorizontalIcon, 
        name: 'Intelligent Message Routing', 
        price: '100 €', 
        desc: 'Ensure the right message reaches the right customer through the right channel.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#002855'
      },
    ],
  },
  {
    title: 'Orders, Sales & Integrations',
    items: [
      { 
        icon: BellAlertIcon, 
        name: 'Instant Notification Alerts', 
        price: '10 €', 
        desc: 'Get new messages and orders sent directly to your devices instantly.',
        allowMultiple: true,
        maxQuantity: 10,
        color: '#d4ff00'
      },
      { 
        icon: PaperAirplaneIcon, 
        name: 'Telegram Order Forwarding', 
        price: '100 €', 
        desc: 'Forward all orders and inquiries instantly to your Telegram account.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: DevicePhoneMobileIcon, 
        name: 'WhatsApp Order Integration', 
        price: '150 €', 
        desc: 'Forward orders and customer inquiries directly to your WhatsApp Business.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: EnvelopeIcon, 
        name: 'Detailed Email Order Reports', 
        price: '150 €', 
        desc: 'Receive comprehensive order data and customer details via email.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: ChartBarIcon, 
        name: 'Customer Data Collection & CRM', 
        price: '200 €', 
        desc: 'Collect customer preferences, contact info, and display in your CRM system.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: CubeIcon, 
        name: 'Real-Time Inventory Management', 
        price: '100 €', 
        desc: 'Check and display real-time stock availability to customers.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: UserPlusIcon, 
        name: 'Lead Qualification & Capture', 
        price: '150 €', 
        desc: 'Identify high-value prospects and automatically capture their contact information.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: CalendarDaysIcon, 
        name: 'Automated Appointment Booking', 
        price: '150 €', 
        desc: 'Allow customers to book appointments with automatic calendar synchronization.',
        allowMultiple: true,
        maxQuantity: 5,
        color: '#d4ff00'
      },
      { 
        icon: PuzzlePieceIcon, 
        name: 'Custom System Integrations', 
        price: 'Varies', 
        desc: 'Connect to your CRM, ERP, webhooks, and custom APIs.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: CreditCardIcon, 
        name: 'In-Chat Payment Processing', 
        price: '150 €', 
        desc: 'Accept payments directly within chat conversations using Stripe.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
      { 
        icon: PencilSquareIcon, 
        name: 'Live Content Management Panel', 
        price: '200 €', 
        desc: 'Edit business information, prices, and content anytime without technical help.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#d4ff00'
      },
    ],
  },
  {
    title: 'Intelligence & Analytics',
    items: [
      { 
        icon: ChartPieIcon, 
        name: 'Customer Behavior Insights', 
        price: '100 €', 
        desc: 'Track what customers click, prefer, and engage with over time.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#8E44AD'
      },
      { 
        icon: MegaphoneIcon, 
        name: 'Bulk Marketing Campaigns', 
        price: '150 €', 
        desc: 'Send promotional campaigns via email, WhatsApp, and Messenger to your audience.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#8E44AD'
      },
      { 
        icon: MagnifyingGlassIcon, 
        name: 'Smart Photo Recognition', 
        price: '100 € + API', 
        desc: 'Analyze customer-sent photos to detect products, documents, or specific content.',
        allowMultiple: false,
        maxQuantity: 1,
        color: '#8E44AD'
      },
    ],
  },
];

export default function FeatureList() {
  const [selectedFeatures, setSelectedFeatures] = useState({});
  const [basePrice, setBasePrice] = useState(0);
  const [baseIndustry, setBaseIndustry] = useState(null);

  useEffect(() => {
    // Listen for industry selection from parent component
    const handleIndustrySelection = (event) => {
      const industryData = event.detail;
      setBaseIndustry(industryData);
      setBasePrice(parseInt(industryData.price.replace(' €', '')));
      setSelectedFeatures({}); // Reset features when industry changes
    };

    window.addEventListener('industrySelected', handleIndustrySelection);
    return () => window.removeEventListener('industrySelected', handleIndustrySelection);
  }, []);

  const updateQuantity = (feature, change) => {
    setSelectedFeatures(prev => {
      const currentQuantity = prev[feature.name]?.quantity || 0;
      const newQuantity = Math.max(0, Math.min(feature.maxQuantity, currentQuantity + change));
      
      if (newQuantity === 0) {
        const { [feature.name]: removed, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [feature.name]: {
          ...feature,
          quantity: newQuantity,
          totalPrice: newQuantity * parseInt(feature.price.replace(' €', '').replace(' + API', ''))
        }
      };
    });
  };

  const getTotalFeatures = () => {
    return Object.values(selectedFeatures).reduce((sum, feature) => sum + feature.quantity, 0);
  };

  const calculateTotal = () => {
    const featureTotal = Object.values(selectedFeatures).reduce((sum, feature) => sum + feature.totalPrice, 0);
    return basePrice + featureTotal;
  };

  return (
    <section id="all-features" className="py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="w-[85%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            All{" "}
            <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
              Features & Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete list of all available features with interactive pricing
          </p>
        </div>

        {/* Pricing Summary */}
        {baseIndustry && (
          <div className="mb-12 p-8 bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 border border-[#2B00FF]/30 rounded-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Your Complete Package</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: baseIndustry.color }}
                    />
                    <span className="text-gray-300">{baseIndustry.industry} Package</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">{getTotalFeatures()} features selected</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-white mb-1">
                  {calculateTotal()} €
                </div>
                <div className="text-sm text-gray-400">
                  {basePrice} € base + {Object.values(selectedFeatures).reduce((sum, feature) => sum + feature.totalPrice, 0)} € features
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
                      <h3 className="text-3xl font-bold mb-8 text-center font-headline">{group.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((feature) => {
                  const { icon: Icon, name, price, desc, allowMultiple, maxQuantity, color } = feature;
                  const selectedFeature = selectedFeatures[name];
                  const quantity = selectedFeature?.quantity || 0;
                  const isSelected = quantity > 0;
                  
                  return (
                    <div 
                      key={name} 
                      className={`group bg-zinc-900/50 border rounded-xl p-4 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm ${
                        isSelected 
                          ? 'border-[#2B00FF]/50 bg-[#2B00FF]/10' 
                          : 'border-zinc-800/50 hover:border-zinc-700/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div 
                          className="p-1.5 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${color}20` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: color }} />
                        </div>
                        <div>
                                  <h4 className="font-semibold text-white group-hover:text-gray-100 transition-colors text-sm font-headline">
                                    {name}
                                  </h4>
                          {isSelected && (
                            <span className="text-xs text-[#2B00FF] font-semibold font-paragraph">
                              {quantity} {quantity === 1 ? 'item' : 'items'} selected
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-3 text-xs leading-relaxed font-paragraph">
                        {desc}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-bold text-white font-headline">{price}</span>
                          {isSelected && (
                            <div className="ml-1 text-xs font-semibold text-[#2B00FF] font-headline">
                              = {selectedFeature.totalPrice} €
                            </div>
                          )}
                        </div>
                        
                        {allowMultiple ? (
                          <div className="flex items-center gap-1">
                            <button 
                              onClick={() => updateQuantity(feature, -1)}
                              disabled={quantity === 0}
                              className="w-6 h-6 rounded-md font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                              style={{ 
                                backgroundColor: quantity === 0 ? '#6B7280' : '#EF4444',
                                boxShadow: quantity === 0 ? 'none' : '0 0 10px #EF444440'
                              }}
                            >
                              −
                            </button>
                            <span className="text-sm font-bold text-white min-w-[1rem] text-center font-headline">
                              {quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(feature, 1)}
                              disabled={quantity >= maxQuantity}
                              className="w-6 h-6 rounded-md font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                              style={{ 
                                backgroundColor: quantity >= maxQuantity ? '#6B7280' : color,
                                boxShadow: quantity >= maxQuantity ? 'none' : `0 0 10px ${color}40`
                              }}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => updateQuantity(feature, isSelected ? -1 : 1)}
                            className={`px-3 py-1.5 rounded-md font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs ${
                              isSelected ? 'bg-red-500 hover:bg-red-600' : ''
                            }`}
                            style={!isSelected ? { 
                              backgroundColor: color,
                              boxShadow: `0 0 10px ${color}40`
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
            </div>
          ))}
        </div>

        {/* Final CTA */}
        {baseIndustry && (
          <div className="mt-16 p-8 bg-gradient-to-r from-[#2B00FF]/20 to-[#00D4FF]/20 border border-[#2B00FF]/30 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Complete Package Ready?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Your custom {baseIndustry.industry.toLowerCase()} package with {getTotalFeatures()} features is ready to deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get Complete Package ({calculateTotal()} €)
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
