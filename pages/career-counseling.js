import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const CareerCounseling = () => {
  return (
    <>
      <Head>
        <title>Career Counseling | Peregrine T&C</title>
        <meta name="description" content="Career counseling services provided by Peregrine T&C." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="content-section">
          <div className="container">
            <h1>Career Counseling</h1>
            <p>Details about career counseling services.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CareerCounseling;