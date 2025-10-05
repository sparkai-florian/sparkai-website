import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="py-20">
      <div className="w-full text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white font-headline">
          Let's talk about how AI can{" "}
          <span className="bg-gradient-to-r from-[#2B00FF] to-[#00D4FF] bg-clip-text text-transparent">
            work for you
          </span>
          .
        </h1>
      </div>
    </section>
  );
}
