import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const LanguageTraining = () => {
  return (
    <>
      <Head>
        <title>Language Training | Peregrine T&C</title>
        <meta name="description" content="Language training services provided by Peregrine T&C." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="content-section">
          <div className="container">
            <h1>Language Training</h1>
            <p>Details about language training services.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LanguageTraining;