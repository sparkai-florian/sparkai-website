import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="py-20">
      <div className="w-full text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#d4ff00] to-[#2B00FF] bg-clip-text text-transparent font-headline">
          {`Let's talk about how AI can work for you.`}
        </h1>
      </div>
    </section>
  );
}
