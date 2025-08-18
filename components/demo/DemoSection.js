// ================================
// File: components/BookDemoSection.js
// Description: Calendly embed with: frosted card + gradient border, lazy load,
// auto-resize, skeleton + failover, prefill & UTM passthrough, event tracking
// (confetti on scheduled). Toolbar intentionally omitted per request.
// ================================

"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const CALENDLY_BASE = "https://calendly.com/florian-sparkai-rks/one-on-one";
const CALENDLY_URL = `${CALENDLY_BASE}?hide_gdpr_banner=1&primary_color=111827`;

function Confetti({ fire }) {
  // Tiny dependency-free confetti
  const [pieces, setPieces] = useState([]);
  useEffect(() => {
    if (!fire) return;
    const colors = ["#22d3ee", "#a78bfa", "#34d399", "#f472b6", "#f59e0b"];
    const arr = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 100,
      duration: 1500 + Math.random() * 1500,
      color: colors[i % colors.length],
      rotate: Math.random() * 360,
    }));
    setPieces(arr);
    const t = setTimeout(() => setPieces([]), 2500);
    return () => clearTimeout(t);
  }, [fire]);

  if (!pieces.length) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.duration}ms`,
            transform: `rotate(${p.rotate}deg)`,
            background: p.color,
          }}
          className="absolute top-0 h-2 w-1 animate-[fall_1s_linear_forwards] rounded-sm"/>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function BookDemoSection() {
  const mountRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const initialized = useRef(false);
  const failTimer = useRef(null);

  // Prefill & UTM passthrough from URL
  const { prefill, utm, calendlyUrl } = useMemo(() => {
    if (typeof window === "undefined") {
      return { prefill: {}, utm: {}, calendlyUrl: CALENDLY_URL };
    }
    const sp = new URLSearchParams(window.location.search);
    const pre = {
      name: sp.get("name") || undefined,
      email: sp.get("email") || undefined,
    };
    const u = {
      utmCampaign: sp.get("utm_campaign") || undefined,
      utmSource: sp.get("utm_source") || undefined,
      utmMedium: sp.get("utm_medium") || undefined,
      utmContent: sp.get("utm_content") || undefined,
      utmTerm: sp.get("utm_term") || undefined,
    };
    // Add primary_color / hide_gdpr already in base; keep URL clean
    return { prefill: pre, utm: u, calendlyUrl: CALENDLY_URL };
  }, []);

  // Lazy load Calendly when section enters viewport
  useEffect(() => {
    if (!mountRef.current) return;

    const onVisible = () => {
      if (initialized.current) return;
      initialized.current = true;

      // Load script
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly && mountRef.current) {
          window.Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: mountRef.current,
            prefill,
            utm,
            resize: true, // single auto-resizing embed per page
          });

          // If nothing reported after 6s, show failover
          failTimer.current = window.setTimeout(() => {
            if (!ready) setFailed(true);
          }, 6000);
        }
      };
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) onVisible();
      });
    }, { rootMargin: "200px" });

    io.observe(mountRef.current);
    return () => io.disconnect();
  }, [calendlyUrl, prefill, utm, ready]);

  // Listen for Calendly postMessage events
  useEffect(() => {
    function isCalendlyEvent(e) {
      return e.origin === "https://calendly.com" && e.data?.event?.startsWith("calendly.");
    }
    function handler(e) {
      if (!isCalendlyEvent(e)) return;
      const evt = e.data.event;
      if (!ready && (evt === "calendly.profile_page_viewed" || evt === "calendly.event_type_viewed")) {
        setReady(true);
        if (failTimer.current) window.clearTimeout(failTimer.current);
      }
      if (evt === "calendly.event_scheduled") {
        setScheduled(true);
      }
    }
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [ready]);

  return (
    <section className="relative">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(67,56,202,0.35),_transparent_60%)] blur-2xl" />
        <div className="absolute left-[12%] top-[45%] h-[280px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.35),_transparent_60%)] blur-2xl" />
        <div className="absolute right-[8%] top-[60%] h-[260px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.35),_transparent_60%)] blur-2xl" />
      </div>

      {/* Hero copy (kept minimal; you can customize) */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16 md:pt-20 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Book a live demo of SparkAI
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">
          See DM‑to‑Order funnels, chat automations, and real integrations tailored to your industry.
        </p>
      </div>

      {/* Calendly card */}
      <div className="container mx-auto px-4 pb-16 pt-8">
        <div className="relative mx-auto max-w-4xl">
          {/* Gradient ring */}
          <div className="pointer-events-none absolute -inset-[1px] rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,_#22d3ee,_#a78bfa,_#34d399,_#22d3ee)] opacity-70 blur-[2px]" />

          {/* Glass card */}
          <div className="relative overflow-hidden rounded-[26px] border border-white/30 bg-white/70 p-2 shadow-2xl backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-900/80">
            {/* Skeleton while loading */}
            {!ready && !failed && (
              <div className="animate-pulse">
                <div className="h-10 w-40 rounded-lg bg-white/60" />
                <div className="mt-3 h-6 w-64 rounded bg-white/50" />
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-24 rounded-xl bg-white/60" />
                  ))}
                </div>
              </div>
            )}

            {/* Calendly mount */}
            <div
              id="calendly-embed"
              ref={mountRef}
              style={{ minWidth: "320px", height: ready ? "" : "720px" }}
              className="w-full rounded-2xl"
            />

            {/* Failover */}
            {failed && (
              <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  Having trouble loading the scheduler?
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <a
                    href={CALENDLY_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Open Calendly in new tab ↗
                  </a>
                  <a
                    href="mailto:hi@sparkai-rks.com"
                    className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    Email us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-white/80 dark:text-zinc-400">
          We respect your time and privacy. If the embed doesn’t load, use the button above or email us.
        </p>
      </div>

      {/* Confetti on scheduled */}
      <Confetti fire={scheduled} />

      {/* Page background color is handled by parent page */}
    </section>
  );
}


