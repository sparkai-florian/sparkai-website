export default function MapSection() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Find us</h2>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-md">
        <iframe
          title="Prishtina, Kosovo"
          src="https://www.google.com/maps?q=Prishtina%2C%20Kosovo&output=embed"
          className="h-[360px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
