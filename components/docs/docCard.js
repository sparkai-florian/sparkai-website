// ================================
// File: components/DocCard.js
// Description: Simple downloadable resource card with EN/AL links
// Tech: React + Tailwind (JavaScript)
// ================================

export default function DocCard({
  title,
  summary,
  category,
  format = "PDF",
  version = "v1.0",
  updated = "Aug 2025",
  hrefEn,
  hrefAl,
  disabled = false,
}) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          <span className="shrink-0 rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
            {format}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{summary}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="rounded-full border border-zinc-200/70 px-2 py-0.5 dark:border-zinc-700">{category}</span>
          <span>•</span>
          <span>{version}</span>
          <span>•</span>
          <span>Updated {updated}</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {disabled ? (
          <span className="inline-flex items-center rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            Coming soon
          </span>
        ) : (
          <>
            {hrefEn && (
              <a
                href={hrefEn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Download EN
              </a>
            )}
            {hrefAl && (
              <a
                href={hrefAl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Shkarko AL
              </a>
            )}
          </>
        )}
      </div>
    </article>
  );
}
