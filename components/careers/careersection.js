import CareerCard from "./careercard";

const JOBS = [
  {
    title: "AI Prompt Engineer",
    summary:
      "Design, test, and improve prompts that power SparkAI chatbots. Work closely with product and clients to make conversations clearer, faster, and more helpful.",
  },
  {
    title: "Sales Representative",
    summary:
      "Reach out to businesses, understand their needs, and show how SparkAI automations drive results. Manage a simple pipeline and close deals with a friendly, consultative style.",
  },
];

export default function CareersSection() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
      {/* Top copy */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Careers
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          Join SparkAI
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We’re building practical AI that helps real businesses. If you’re passionate and hands-on, we’d love to hear from you.
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Send your <span className="font-medium">resume, CV, and motivational letter</span> to{" "}
          <a className="font-medium underline underline-offset-4" href="mailto:hi@sparkai-rks.com">
            hi@sparkai-rks.com
          </a>.
        </p>
      </div>

      {/* Jobs */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
        {JOBS.map((job) => (
          <CareerCard key={job.title} title={job.title} summary={job.summary} />
        ))}
      </div>

      {/* Simple note */}
      <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-500 dark:text-zinc-400">
        Tip: Include links to examples of your work (GitHub, portfolio, or a short Loom video) if you have them.
      </div>
    </section>
  );
}
