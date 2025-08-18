import Head from "next/head";
import NewsletterSection from "../components/newsletter/NewsletterSection";
import Layout from '../components/layout/Layout';

export default function NewsletterPage() {
  return (
    <>
      <Head>
        <title>Newsletter • SparkAI</title>
        <meta
          name="description"
          content="Subscribe to the SparkAI newsletter for practical AI automation tips, product updates, and real-world playbooks."
        />
      </Head>

      {/* Middle section only; place between your header and footer */}
      <main>
        <Layout>
            <NewsletterSection />
        </Layout>
      </main>
    </>
  );
}
