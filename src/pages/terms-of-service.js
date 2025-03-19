import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermsOfService from '../components/TermsOfService';

const TermsOfServicePage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Peregrine T&C</title>
        <meta name="description" content="Review the Terms of Service for Peregrine Training & Consulting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TermsOfService />
      <Footer />
    </>
  );
};

export default TermsOfServicePage;