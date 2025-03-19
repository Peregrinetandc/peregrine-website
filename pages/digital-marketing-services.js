import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const DigitalMarketingServices = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing Services | Peregrine T&C</title>
        <meta name="description" content="Digital marketing services provided by Peregrine T&C." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="content-section">
          <div className="container">
            <h1>Digital Marketing Services</h1>
            <p>Details about digital marketing services.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingServices;