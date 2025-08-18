import Head from "next/head";
import CareersSection from "../components/careers/careersection";
import Layout from '../components/layout/Layout';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers • SparkAI</title>
        <meta
          name="description"
          content="Open roles at SparkAI. Apply via email: hi@sparkai-rks.com"
        />
      </Head>
      {/* Middle section only; place between nav and footer in your layout */}
      <main>
        <Layout>
            <CareersSection />
        </Layout>
      </main>
    </>
  );
}
