const POINTS = [
  "Personalized chatbot solutions for your industry",
  "Multilingual capability and tone control",
  "Powerful marketing mindset in UX and copy",
  "Integrations with booking, CRM, and messaging apps",
  "Fast setup with ongoing optimization and support",
];

export default function Differentiators() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <p className="text-xs tracking-widest uppercase text-white/60 mb-2">Why choose us</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">What makes Spark AI different</h2>
      <ul className="grid gap-3 text-white/80">
        {POINTS.map(p => (
          <li key={p} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#d4ff00] shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
