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

const groups = [
  {
    title: 'Chatbot Core',
    items: [
      { icon: DocumentTextIcon, name: 'One Page of Info', price: '50 € / page', desc: 'Add service pages, FAQs, hours, pricing, more.' },
      { icon: PhotoIcon, name: 'Enable Photo Sends', price: '100 €', desc: 'Users can send images (ID, receipts, product shots).' },
      { icon: LanguageIcon, name: 'Multiple Languages', price: '100 €', desc: 'Detect/switch languages automatically or manually.' },
      { icon: StarIcon, name: 'Request Google Review', price: '50 €', desc: 'Ask clients for reviews after service.' },
      { icon: ChatBubbleLeftRightIcon, name: 'Request Feedback', price: '50 €', desc: 'Collect feedback directly in chat.' },
      { icon: ClipboardDocumentListIcon, name: 'AI Conversation Summaries', price: '50 €', desc: 'Email summaries of each chat to your team.' },
      { icon: SparklesIcon, name: 'AI Image Creation', price: '50 € + API', desc: 'Generate images (e.g., previews) from prompts.' },
    ],
  },
  {
    title: 'Communication & Messaging',
    items: [
      { icon: Bars3Icon, name: 'Persistent Menu', price: '50 €', desc: 'Always-on nav to key options.' },
      { icon: UserCircleIcon, name: 'Personalized Messages', price: '50 €', desc: 'Use client name, preferences, history.' },
      { icon: CameraIcon, name: 'Story Replies (Instagram)', price: '50 €', desc: 'Auto-respond to story-reply DMs.' },
      { icon: ClockIcon, name: 'Typing / Delays', price: '50 €', desc: 'Human-like timing for replies.' },
      { icon: ArchiveBoxIcon, name: 'Save Conversation History', price: '50 €', desc: 'Continuity across sessions.' },
      { icon: BellIcon, name: 'Reminders / Follow-Ups', price: '100 €', desc: 'Automated follow-ups for no-shows, carts, more.' },
      { icon: MicrophoneIcon, name: 'Voice Note Reply', price: '100 €', desc: 'Reply with TTS to voice notes.' },
      { icon: AdjustmentsHorizontalIcon, name: 'Streamlined Logic', price: '100 €', desc: 'Right message, right channel, right user.' },
    ],
  },
  {
    title: 'Orders, Sales & Integrations',
    items: [
      { icon: BellAlertIcon, name: 'Receiving Notifications', price: '10 € / device', desc: 'New messages/orders to devices.' },
      { icon: PaperAirplaneIcon, name: 'Orders to Telegram', price: '100 €', desc: 'Forward orders/inquiries instantly.' },
      { icon: DevicePhoneMobileIcon, name: 'Orders to WhatsApp', price: '150 €', desc: 'Forward orders/inquiries to WA.' },
      { icon: EnvelopeIcon, name: 'Orders by Email', price: '150 €', desc: 'Detailed order data via email.' },
      { icon: ChartBarIcon, name: 'Data Collection & Availability', price: '200 €', desc: 'Collect preferences, email, phone; show in CRM.' },
      { icon: CubeIcon, name: 'Inventory Checks', price: '100 €', desc: 'Real-time stock availability.' },
      { icon: UserPlusIcon, name: 'Lead Qual & Generation', price: '150 €', desc: 'Identify high-value users & capture info.' },
      { icon: CalendarDaysIcon, name: 'Appointment Setting', price: '150 € / person', desc: 'Book slots, sync to Calendar.' },
      { icon: PuzzlePieceIcon, name: 'Custom Integrations', price: 'Varies', desc: 'CRM, ERP, webhooks, APIs.' },
      { icon: CreditCardIcon, name: 'Payment Integration (Stripe)', price: '150 €', desc: 'Collect payments inside chat.' },
      { icon: PencilSquareIcon, name: 'Real-Time Info Editing Panel', price: '200 €', desc: 'Business can edit content anytime.' },
    ],
  },
  {
    title: 'Intelligence & Analytics',
    items: [
      { icon: ChartPieIcon, name: 'Preference & Behavior Tracking', price: '100 €', desc: 'What users click/like over time.' },
      { icon: MegaphoneIcon, name: 'Mass Outreach Campaigns', price: '150 €', desc: 'Promo blasts via email/WA/Messenger.' },
      { icon: MagnifyingGlassIcon, name: 'AI Photo Analysis', price: '100 € + API', desc: 'Analyze photos to detect products/content.' },
    ],
  },
];

export default function FeatureList() {
  return (
    <section id="all-features" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">All Features & Pricing</h2>
        <div className="space-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {group.items.map(({ icon: Icon, name, price, desc }) => (
                  <div key={name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <Icon className="h-6 w-6 text-[#d4ff00] mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{name}</p>
                          <span className="text-white/70 text-sm">· {price}</span>
                        </div>
                        <p className="text-zinc-400 text-sm">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#top" className="text-white/80 hover:text-white underline">Back to top</a>
        </div>
      </div>
    </section>
  );
}
