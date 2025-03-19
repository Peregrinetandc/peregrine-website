import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CorporateTraining from '../components/CorporateTraining';

const CorporateTrainingPage = () => {
  return (
    <>
      <Head>
        <title>Corporate Training Programs | Peregrine T&C</title>
        <meta name="description" content="Explore Peregrine T&C's Corporate Training Programs, offering expert guidance to help you achieve your business goals. Get started today." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="corporate-training" className="content-section">
          <CorporateTraining />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CorporateTrainingPage;