import { useState } from "react";

export default function NewsletterSection({
  emailTo = "hi@sparkai-rks.com",
}) {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // mailto fallback (no backend needed)
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Hello SparkAI,\n\nPlease add me to the newsletter.\n\nEmail: ${email}\n\nThanks!`
    );
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setOk(true);
      setLoading(false);
    }, 600);
  }

  return (
    <section className="container mx-auto px-4 py-14 sm:py-18 md:py-24">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Newsletter
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          Stay ahead with AI communication & automation
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Join SparkAI’s newsletter for concise insights on{" "}
          <span className="font-medium">communication tips</span>,{" "}
          <span className="font-medium">automation builds inside messaging systems & chatbots</span>,{" "}
          <span className="font-medium">marketing tips</span>, and{" "}
          <span className="font-medium">AI trends</span>—straight to your inbox.
        </p>
      </div>

      {/* Benefits */}
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900">
          <div className="font-medium">Communication tips</div>
          <div className="mt-1 text-zinc-600 dark:text-zinc-400">
            Playbooks to make messages clearer, faster, and more human.
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900">
          <div className="font-medium">Automation builds</div>
          <div className="mt-1 text-zinc-600 dark:text-zinc-400">
            How we ship automations across Instagram, WhatsApp, Telegram, Viber & more.
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900">
          <div className="font-medium">Marketing & AI trends</div>
          <div className="mt-1 text-zinc-600 dark:text-zinc-400">
            Practical growth tactics + what’s new in AI that actually matters.
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto mt-8 max-w-xl">
        {!ok ? (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900 sm:flex sm:items-center sm:gap-3 sm:p-5"
          >
            <label className="sr-only" htmlFor="nl-email">
              Email
            </label>
            <input
              id="nl-email"
              type="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 sm:mb-0 sm:flex-1"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-70 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto"
            >
              {loading ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        ) : (
          <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 text-center shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              We opened your email client to <span className="font-medium">{emailTo}</span>. Send it to confirm your subscription.
            </p>
          </div>
        )}

        <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
          We’ll never spam you. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
