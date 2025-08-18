import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="px-6 sm:px-10 py-16">
      <div className="rounded-3xl border border-white/10 bg-neutral-900 p-10 text-center shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Ready to turn conversations into conversions?
        </h2>
        <p className="mt-3 text-white/80">
          See how Spark AI can reduce response time and lift your sales.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/book" className="rounded-xl bg-[#2B00FF] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition">
            Book a Free Consultation
          </Link>
          <Link href="/demo" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
            Try Our Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
