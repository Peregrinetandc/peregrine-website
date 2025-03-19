import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CareerCounseling from '../components/CareerCounseling';

const CareerCounselingPage = () => {
  return (
    <>
      <Head>
        <title>Career Counseling Services | Navigate Your Career Path with Peregrine T&C</title>
        <meta name="description" content="Benefit from Peregrine T&C's Career Counseling Services, offering personalized guidance to help you achieve your professional goals. Start your journey today." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="career-counseling" className="content-section">
          <CareerCounseling />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CareerCounselingPage;