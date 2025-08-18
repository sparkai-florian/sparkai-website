import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");

  async function signIn() {
    // Magic link (email) — easiest to start
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert("Check your email for the magic link.");
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Admin Login</h1>
      <div className="mt-4 max-w-md space-y-2">
        <input
          className="w-full rounded border px-3 py-2"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={signIn} className="rounded bg-zinc-900 px-4 py-2 text-white">
          Send magic link
        </button>
      </div>
    </main>
  );
}
