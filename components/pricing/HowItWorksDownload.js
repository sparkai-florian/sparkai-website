import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function HowItWorksDownload() {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4
                        rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">How it works — full walkthrough</h3>
            <p className="text-sm text-zinc-400">A simple guide that explains pages, setup, training, and going live.</p>
          </div>

          <Link
            href="/guides/how-it-works.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#2B00FF] text-white px-5 py-2.5
                       rounded-lg font-semibold hover:opacity-90 transition"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download PDF
          </Link>
        </div>
      </div>
    </section>
  );
}