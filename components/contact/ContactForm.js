import { useState } from "react";

const HELP_OPTIONS = [
  "Book a Demo",
  "Pricing Question",
  "Partnership",
  "Support",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState({ submitting: false, success: false, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // Simple client validation
    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ submitting: false, success: false, error: "Please fill the required fields." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
      setStatus({ submitting: false, success: false, error: "Please enter a valid email." });
      return;
    }
    if (!payload.consent) {
      setStatus({ submitting: false, success: false, error: "Please accept the privacy note." });
      return;
    }

    setStatus({ submitting: true, success: false, error: "" });

    // TODO: Replace with your API route or automation (Pabbly/Make/Telegram/Email, etc.)
    // Example (when ready): await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) })
    await new Promise((r) => setTimeout(r, 900)); // mock delay

    setStatus({ submitting: false, success: true, error: "" });
    e.currentTarget?.reset?.();
  }

  return (
    <section id="contact-form" className="py-12">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 sm:p-8 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Contact Form</h2>
        <p className="text-white/70 mb-6">{"Tell us a bit about your needs and we'll be in touch."}</p>

        {status.error && (
          <div className="mb-4 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-red-200">
            {status.error}
          </div>
        )}
        {status.success && (
          <div className="mb-4 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-200">
            {"Thanks! We've received your message and will reply shortly."}
          </div>
        )}

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-1" htmlFor="name">Name *</label>
            <input
              id="name" name="name" type="text" autoComplete="name" required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[#d4ff00]"
              placeholder="Your full name"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-1" htmlFor="email">Email *</label>
            <input
              id="email" name="email" type="email" autoComplete="email" required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[#d4ff00]"
              placeholder="you@company.com"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-1" htmlFor="company">Company (optional)</label>
            <input
              id="company" name="company" type="text" autoComplete="organization"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[#d4ff00]"
              placeholder="Your company name"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-1" htmlFor="help">How can we help?</label>
            <select
              id="help" name="help"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[#d4ff00]"
              defaultValue={HELP_OPTIONS[0]}
            >
              {HELP_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-neutral-900 text-white">{opt}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70 mb-1" htmlFor="message">Message *</label>
            <textarea
              id="message" name="message" required rows={5}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[#d4ff00]"
              placeholder="Share any details that would help us prepare."
            />
          </div>


          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status.submitting}
              className="inline-flex items-center rounded-xl bg-[#2B00FF] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition disabled:opacity-60"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}
