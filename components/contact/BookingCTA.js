import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="py-12">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8 text-center shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Prefer to book a call?</h2>
        <p className="mt-2 text-white/80">
          {"Pick a time that works for you — it's instant and easy."}
        </p>
        <div className="mt-6">
          <Link
            href="/book" /* or your Calendly link */
            className="rounded-xl bg-[#2B00FF] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Book a Call
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
