// ================================
// File: pages/partners.js (Next.js Pages Router)
// Description: Partners page with integrated PartnersSection component
// ================================

import Head from "next/head";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import PartnersSection from "../components/partners/PartnersSection";

export default function PartnersPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>Partners • SparkAI</title>
          <meta
            name="description"
            content="Platforms and tools that power SparkAI chatbots and automations."
          />
        </Head>
        <PageTransition>
          <main className="bg-white dark:bg-black">
            <PartnersSection />
          </main>
        </PageTransition>
      </Layout>
    </>
  );
}
