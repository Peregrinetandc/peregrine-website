import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DigitalMarketing from '../components/DigitalMarketing';

const DigitalMarketingPage = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing Services | Peregrine T&C</title>
        <meta name="description" content="Enhance your online presence and attract more customers with Peregrine T&C's comprehensive digital marketing services. SEO, Social Media, Content Marketing, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="digital-marketing-services" className="content-section">
          <DigitalMarketing />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingPage;