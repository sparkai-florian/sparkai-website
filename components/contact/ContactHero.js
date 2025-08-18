import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 px-6 py-14 sm:px-10 sm:py-16 shadow-2xl">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#d4ff00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#2B00FF]/10 blur-3xl" />
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white">
          {`Let's talk about how AI can work for you.`}
        </h1>
        <p className="mt-5 max-w-3xl text-white/80 text-base sm:text-lg">
          {"Fill out the form or use any of the options below — we'll get back to you fast."}
        </p>
        <div className="mt-8">
          <Link
            href="#contact-form"
            className="inline-flex items-center rounded-xl bg-[#2B00FF] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Start with the form
          </Link>
        </div>
      </div>
    </section>
  );
}
