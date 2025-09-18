// ================================
// File: pages/partners.js (Next.js Pages Router)
// Description: Partners page with integrated PartnersSection component
// ================================

import Head from "next/head";
import PartnersSection from "../components/partners/PartnersSection";

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Partners • SparkAI</title>
        <meta
          name="description"
          content="Platforms and tools that power SparkAI chatbots and automations."
        />
      </Head>
      {/* Place between your <Header/> and <Footer/> in your layout */}
      <main>
        <PartnersSection />
      </main>
    </>
  );
}
