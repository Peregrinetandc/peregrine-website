import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const TranslationServices = () => {
  return (
    <>
      <Head>
        <title>Translation Services | Peregrine T&C</title>
        <meta name="description" content="Translation services provided by Peregrine T&C." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="content-section">
          <div className="container">
            <h1>Translation Services</h1>
            <p>Details about translation services.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TranslationServices;