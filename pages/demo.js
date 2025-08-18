import Layout from '../components/layout/Layout';
import Head from "next/head";
import dynamic from "next/dynamic";

const BookDemoSection = dynamic(() => import("../components/demo/DemoSection"), { ssr: false });

export default function DemoPage() {
  return (
    <>
      <Head>
        <title>Book a Demo • SparkAI</title>
        <meta name="description" content="See SparkAI in action: DM‑to‑Order funnels, chat automations, and live integrations. Book a demo now." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-indigo-700 via-sky-600 to-emerald-500">
        <Layout>
            <BookDemoSection />
        </Layout>        
      </main>
    </>
  );
}
