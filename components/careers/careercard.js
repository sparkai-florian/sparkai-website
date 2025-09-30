export default function CareerCard({ title, location = "Remote / Prishtina", summary, email = "hi@sparkai-rks.com" }) {
  return (
    <article className="group rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight font-headline">{title}</h3>
          <p className="mt-1 text-sm text-zinc-500 font-paragraph">{location}</p>
        </div>
        <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
          Open
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300 font-paragraph">{summary}</p>
      <div className="mt-5">
        <a
          href={`mailto:${email}?subject=${encodeURIComponent('Application: ' + title)}&body=${encodeURIComponent('Hello SparkAI team,\n\nI would like to apply for the ' + title + ' role. Please find my resume/CV and motivational letter attached.\n\nBest regards,\n')}`}
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 font-subheadline"
        >
          Apply via Email
        </a>
      </div>
    </article>
  );
}
