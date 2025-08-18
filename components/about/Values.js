const VALUES = [
  { title: "Innovation", desc: "We experiment, iterate, and use the best of AI to create practical outcomes." },
  { title: "Simplicity", desc: "Clear flows, plain language, and setup that customers understand and trust." },
  { title: "Client-Centric", desc: "Designed around your goals, brand voice, and tools to deliver ROI." },
  { title: "Honesty", desc: "Transparent pricing, realistic promises, and data over hype every time." },
  { title: "Impact", desc: "We prioritize features that save time, reduce costs, and increase sales." },
];

export default function Values() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <p className="text-xs tracking-widest uppercase text-white/60 mb-2">Values</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">How we work</h2>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map(v => (
          <li key={v.title} className="rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-md">
            <h3 className="text-white font-semibold mb-1">{v.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
