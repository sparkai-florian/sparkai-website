import Layout from '../components/layout/Layout';
import PageTransition from '../components/layout/PageTransition';
import HomePage from '../components/home/HomePage';

export default function Home() {
  return (
    <Layout>
      <PageTransition>
        <HomePage />
      </PageTransition>
    </Layout>
  );
}


