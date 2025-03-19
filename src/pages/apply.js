import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';

const Apply = () => {
  return (
    <>
      <Head>
        <title>Apply | Peregrine T&C</title>
        <meta name="description" content="Apply for internships, apprenticeships, and other programs at Peregrine T&C. Submit your application online." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="application-page" className="content-section">
          <ApplicationForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apply;