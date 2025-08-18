import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import ReactMarkdown from "react-markdown";

export default function NewPost() {
  const [session, setSession] = useState(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub?.subscription.unsubscribe();
  }, []);

  function autoSlug(v) {
    const s = v.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    setSlug(s);
  }

  async function save() {
    if (!session) return alert("Please log in.");
    if (!title || !slug || !content) return alert("Title, slug, and content are required.");
    const author_id = session.user.id;
    const payload = {
      title,
      slug,
      summary,
      cover_url: cover || null,
      content_md: content,
      status,
      language: lang,
      author_id,
      published_at: status === "published" ? new Date().toISOString() : null,
    };
    const { error } = await supabase.from("posts").insert(payload);
    if (error) alert(error.message);
    else alert("Saved!");
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">New Post</h1>
      {!session && (
        <p className="mt-4 text-sm text-zinc-600">
          You’re not logged in. Go to <a className="underline" href="/admin/login">/admin/login</a>
        </p>
      )}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <input
            className="w-full rounded border px-3 py-2"
            placeholder="Title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); if (!slug) autoSlug(e.target.value); }}
          />
          <input
            className="w-full rounded border px-3 py-2"
            placeholder="slug-url"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <input
            className="w-full rounded border px-3 py-2"
            placeholder="Cover image URL (optional)"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
          <textarea
            className="h-24 w-full rounded border px-3 py-2"
            placeholder="Summary (1–2 sentences)"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <div className="flex gap-3">
            <select className="rounded border px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <select className="rounded border px-3 py-2" value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="en">EN</option>
              <option value="al">AL</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <textarea
            className="h-64 w-full rounded border px-3 py-2 font-mono"
            placeholder="Write in Markdown…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={save} className="rounded bg-zinc-900 px-4 py-2 text-white">
            Save
          </button>
        </div>
      </div>

      <h2 className="mt-8 text-lg font-semibold">Preview</h2>
      <article className="prose mt-3 max-w-none rounded border p-4">
        <ReactMarkdown>{content || "_Start typing to preview…_"}</ReactMarkdown>
      </article>
    </main>
  );
}
