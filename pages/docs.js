import Head from "next/head";
import DocsSection from "../components/docs/docSection";
import Layout from '../components/layout/Layout';


export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Docs • SparkAI</title>
        <meta
          name="description"
          content="Download SparkAI communication guides (EN/AL), sales funnels, and automation playbooks."
        />
      </Head>
      {/* Middle section only; place between nav and footer in your layout */}
      <main>
        <Layout>
            <DocsSection />
        </Layout>   
      </main>
    </>
  );
}
