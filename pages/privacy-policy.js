import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Peregrine T&C</title>
        <meta name="description" content="Privacy policy of Peregrine T&C." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="content-section">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Details about the privacy policy.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;