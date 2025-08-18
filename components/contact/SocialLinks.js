import Link from "next/link";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/yourprofile" },
  { label: "LinkedIn",  href: "https://linkedin.com/company/yourpage" },
  { label: "Facebook",  href: "https://facebook.com/yourpage" },
  // { label: "X (Twitter)", href: "https://x.com/yourprofile" },
];

export default function SocialLinks() {
  return (
    <section className="px-6 sm:px-10 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Connect with us</h2>
      <ul className="flex flex-wrap gap-3">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <Link
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff00]" />
              <span>{s.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
    