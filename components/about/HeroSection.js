import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 px-6 py-14 sm:px-10 sm:py-16 shadow-2xl">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#d4ff00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#2B00FF]/10 blur-3xl" />
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white">
          Empowering Businesses with <span className="text-[#d4ff00]">AI-Powered Conversations</span> that Convert
        </h1>
        <p className="mt-5 max-w-3xl text-white/80 text-base sm:text-lg">
          We help companies save time, boost sales, and deliver exceptional customer experiences through smart automation and multilingual chatbots.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/book" className="inline-flex items-center rounded-xl bg-[#2B00FF] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition">
            Book a Free Consultation
          </Link>
          <Link href="/demo" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
            Try Our Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
