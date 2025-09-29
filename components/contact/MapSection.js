export default function MapSection() {
  return (
    <section className="py-12">
      <div className="w-[85%] mx-auto px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Find us</h2>
        
        {/* Two-column layout for both locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prishtina Location */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Prishtina, Kosovo</h3>
            <p className="text-gray-400 text-sm mb-4">10 Enver Maloku, Prishtina 10000</p>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-md">
              <iframe
                title="10 Enver Maloku, Prishtina 10000, Kosovo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5678912345678!2d21.1616!3d42.6616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sEnver%20Maloku%2C%20Prishtina%2010000%2C%20Kosovo!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s&q=10+Enver+Maloku,+Prishtina+10000"
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Ingolstadt Location */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Ingolstadt, Germany</h3>
            <p className="text-gray-400 text-sm mb-4">Nuernberger Strasse 60, Ingolstadt 85055</p>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-md">
              <iframe
                title="Nuernberger Strasse 60, Ingolstadt 85055, Germany"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.123456789!2d11.4244!3d48.7665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e8c1234567890%3A0xabcdef1234567890!2sNuernberger%20Strasse%2060%2C%2085055%20Ingolstadt%2C%20Germany!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s&q=Nuernberger+Strasse+60,+Ingolstadt+85055"
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
