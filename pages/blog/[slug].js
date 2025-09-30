import Head from "next/head";
import { supabase } from "../../lib/supabaseClient";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from '../../components/layout/Layout';

export async function getServerSideProps({ params }) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "published")
    .single();

  if (!data) return { notFound: true };
  return { props: { post: data } };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} • SparkAI Blog</title>
        <meta name="description" content={post.summary || ""} />
        {post.cover_url && <meta property="og:image" content={post.cover_url} />}
      </Head>
      <Layout>
        <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight font-headline">{post.title}</h1>
          {post.cover_url && (
            <img
              src={post.cover_url}
              alt=""
              className="mb-4 mt-4 w-full rounded-xl object-cover"
            />
          )}
          <p className="text-sm text-zinc-500 font-paragraph">
            {post.published_at ? new Date(post.published_at).toLocaleDateString() : ""}
          </p>

          {/* Wrap ReactMarkdown, don't pass className to it */}
          <div className="prose mt-6 max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content_md || ""}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      </Layout>
    </>
  );
}
