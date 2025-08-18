import Image from "next/image";

export default function EchoIntro() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <p className="text-xs tracking-widest uppercase text-white/60 mb-2">Meet Echo</p>
      <div className="grid gap-6 sm:grid-cols-[160px,1fr] items-center rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="relative h-32 w-32 mx-auto sm:mx-0">
          <Image
            src="/images/echo.png" /* update path */
            alt="Echo, the Spark AI assistant"
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold mb-1">Your friendly AI guide</h3>
          <p className="text-white/80 leading-relaxed">
            Echo brings personality to the brand while staying professional: fast replies, clear guidance, and a helpful tone.
          </p>
        </div>
      </div>
    </section>
  );
}
