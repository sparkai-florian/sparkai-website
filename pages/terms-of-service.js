import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service • SparkAI</title>
        <meta
          name="description"
          content="Terms of Service for SparkAI - Read our terms and conditions for using our services."
        />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using SparkAI services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use SparkAI services for personal, non-commercial 
              transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="mb-4">
              The materials on SparkAI's website are provided on an 'as is' basis. SparkAI makes no 
              warranties, expressed or implied, and hereby disclaims all other warranties.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
