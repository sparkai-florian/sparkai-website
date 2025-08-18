import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <p className="text-xs tracking-widest uppercase text-white/60 mb-2">Founder</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">A message from Florian Shllaku</h2>

      <div className="grid gap-8 sm:grid-cols-[180px,1fr] items-start">
        <div className="relative h-44 w-44 sm:h-48 sm:w-48 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <Image
            src="/images/founder.jpg" /* update path */
            alt="Founder portrait"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>

        <div className="text-white/80 leading-relaxed">
          <p className="mb-4">
            I started Spark AI to make automation feel simple, helpful, and human. Technology should remove friction, not add it.
            When businesses reply instantly with clarity, customers feel respected and choose to return.
          </p>
          <p>
            What excites me most is watching a team breathe easier after launch: fewer repetitive tasks, faster answers, and
            a cleaner path to growth. If that sounds good, let us show you what is possible.
          </p>
        </div>
      </div>
    </section>
  );
}
