import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();
  const [msg, setMsg] = useState("Verifying…");

  useEffect(() => {
    async function run() {
      try {
        // Case A: New PKCE flow (?code=...) — use exchangeCodeForSession
        const hasCode = typeof window !== "undefined" && window.location.search.includes("code=");
        if (hasCode) {
          const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
          if (error) throw error;
          setMsg("Signed in!");
          await router.replace("/admin/new");
          return;
        }

        // Case B: Hash flow (#access_token=...&refresh_token=...) — use setSession
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        if (hash.includes("access_token=") && hash.includes("refresh_token=")) {
          const params = new URLSearchParams(hash.replace(/^#/, ""));
          const access_token = params.get("access_token");
          const refresh_token = params.get("refresh_token");
          if (!access_token || !refresh_token) throw new Error("Missing tokens in URL fragment.");

          const { error } = await supabase.auth.setSession({ access_token, refresh_token });
          if (error) throw error;
          setMsg("Signed in!");
          await router.replace("/admin/new");
          return;
        }

        setMsg("No auth data found in URL.");
      } catch (err) {
        console.error(err);
        setMsg("There was a problem verifying your email link.");
      }
    }
    run();
  }, [router]);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Signing you in…</h1>
      <p className="mt-2 text-sm text-zinc-600">{msg}</p>
      <p className="mt-4 text-xs text-zinc-500">
        If this page was opened from your email, just wait a moment. If it fails, try a private window with extensions disabled.
      </p>
    </main>
  );
}
