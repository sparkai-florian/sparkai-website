const STATS = [
  { k: "Bots deployed", v: "50+" },
  { k: "Clients served", v: "30+" },
  { k: "Countries", v: "6" },
];

export default function Milestones() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <p className="text-xs tracking-widest uppercase text-white/60 mb-2">Milestones</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Progress so far</h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {STATS.map(s => (
          <div key={s.k} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 text-center shadow-md">
            <div className="text-3xl font-extrabold text-[#d4ff00]">{s.v}</div>
            <div className="mt-1 text-white/70">{s.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
