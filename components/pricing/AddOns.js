// components/pricing/AddOns.js
import {
  LanguageIcon,
  CreditCardIcon,
  PencilSquareIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

const addOns = [
  {
    icon: LanguageIcon,
    name: 'Multiple Languages',
    desc: 'Speak to users in their native language.',
    price: '100 €',
  },
  { icon: CreditCardIcon, name: 'Payment Integration (Stripe)', desc: 'Accept payments in chat.', price: '150 €' },
  { icon: PencilSquareIcon, name: 'Real-Time Info Panel', desc: 'Edit chatbot text anytime.', price: '200 €' },
  { icon: PhotoIcon, name: 'Photo Uploads Enabled', desc: 'Let clients send images.', price: '100 €' },
];

export default function AddOns() {
  return (
    <section id="add-ons" className="py-16 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Popular Add‑ons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map(({ icon: Icon, name, desc, price }) => (
            <div key={name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <Icon className="h-7 w-7 text-[#d4ff00]" />
              <h3 className="mt-3 font-semibold">{name}</h3>
              <p className="text-zinc-400 text-sm">{desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-white/90 font-medium">{price}</span>
                <button className="text-[#2B00FF] font-semibold hover:underline">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
