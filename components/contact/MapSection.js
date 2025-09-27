export default function MapSection() {
  return (
    <section className="py-12">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Find us</h2>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-md">
          <iframe
            title="10 Enver Maloku, Prishtina 10000, Kosovo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5678912345678!2d21.1616!3d42.6616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sEnver%20Maloku%2C%20Prishtina%2010000%2C%20Kosovo!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s&q=10+Enver+Maloku,+Prishtina+10000"
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
