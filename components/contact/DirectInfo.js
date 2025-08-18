import Link from "next/link";

const CONTACT = {
  email: "hello@sparkai-rks.com",      // update if needed
  phone: "+383 44 000 000",            // update
  whatsapp: "+38344000000",            // international format, no spaces
  locationLabel: "Prishtina, Kosovo",
};

export default function DirectInfo() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <div className="grid gap-6 sm:grid-cols-3">
        <Card title="Email">
          <Link href={`mailto:${CONTACT.email}`} className="text-[#d4ff00] hover:underline break-all">
            {CONTACT.email}
          </Link>
        </Card>

        <Card title="Phone / WhatsApp">
          <div className="flex flex-col">
            <Link href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:underline">
              {CONTACT.phone}
            </Link>
            <Link
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:underline"
            >
              {"Chat on WhatsApp"}
            </Link>
          </div>
        </Card>

        <Card title="Office">
          <p className="text-white/80">{CONTACT.locationLabel}</p>
        </Card>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-md">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <div className="text-white">{children}</div>
    </div>
  );
}
