import Link from "next/link";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const CONTACT = {
  email: "hi@sparkai-rks.com",
  phone: "+383 49 453 595",
  whatsapp: "+38349453595",            // international format, no spaces
  locationLabel: "10 Enver Maloku, Prishtina 10000",
};

export default function DirectInfo() {
  return (
    <section className="py-12">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Email" icon={EnvelopeIcon}>
          <div className="text-white">
            {CONTACT.email}
          </div>
        </Card>

        <Card title="Phone" icon={PhoneIcon}>
          <div className="text-white">
            {CONTACT.phone}
          </div>
        </Card>

        <Card title="WhatsApp" icon={ChatBubbleLeftRightIcon}>
          <Link
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#d4ff00] transition-colors"
          >
            {CONTACT.phone}
          </Link>
        </Card>

        <Card title="Office" icon={MapPinIcon}>
          <p className="text-white">{CONTACT.locationLabel}</p>
        </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 shadow-lg hover:border-[#2B00FF]/30 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#d4ff00]/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#d4ff00]" />
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <div className="text-white/90 text-base leading-relaxed">{children}</div>
    </div>
  );
}
