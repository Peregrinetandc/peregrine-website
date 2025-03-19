import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApprenticeshipDetails from '../components/ApprenticeshipDetails';

const Apprenticeship = () => {
  return (
    <>
      <Head>
        <title>Apprenticeship Programs | Peregrine T&C</title>
        <meta name="description" content="Learn and earn with Peregrine T&C's Apprenticeship Programs. Combine practical training with theoretical knowledge. Apply now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="apprenticeship-programs" className="content-section">
          <ApprenticeshipDetails />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apprenticeship;