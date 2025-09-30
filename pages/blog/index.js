import Head from "next/head";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from("posts")
    .select("slug,title,summary,cover_url,published_at,tags")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  return { props: { posts: data || [], err: error?.message || null } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog • SparkAI</title>
        <meta name="description" content="SparkAI blog: tips, automations, and AI." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold font-headline">Blog</h1>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border p-5 hover:shadow-sm">
              {p.cover_url ? (
                <img src={p.cover_url} alt="" className="mb-3 h-40 w-full rounded-lg object-cover" />
              ) : null}
              <h2 className="text-xl font-semibold font-headline">{p.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 font-paragraph">{p.summary}</p>
              <div className="mt-3 text-xs text-zinc-500 font-paragraph">
                {p.published_at ? new Date(p.published_at).toLocaleDateString() : ""}
              </div>
            </Link>
          ))}
          {posts.length === 0 && <p className="font-paragraph">No posts yet.</p>}
        </div>
      </main>
    </>
  );
}
