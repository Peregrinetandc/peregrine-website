import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConsultingServices from '../components/ConsultingServices';

const ConsultingPage = () => {
  return (
    <>
      <Head>
        <title>Consulting Services | Peregrine T&C</title>
        <meta name="description" content="Explore Peregrine T&C's Consulting Services, offering expert guidance to help you achieve your business goals. Get started today." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="consulting-services" className="content-section">
          <ConsultingServices />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConsultingPage;