import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrientationInfo from '../components/OrientationInfo';
import FAQAccordion from '../components/FAQAccordion';
import RegistrationForm from '../components/RegistrationForm';
import axios from 'axios';

const InternshipOrientationPage = ({ details }) => {
  return (
    <>
      <Head>
        <title>Internship Orientation - MES Mampad College & Peregrine T&C</title>
        <meta name="description" content="Register for the internship orientation session with Peregrine T&C and MES Mampad College. Learn about the University of Calicut's FYUGP internship requirements." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <header className="orientation-header">
          <div className="header-content container">
            <div className="header-text">
              <h1 className="header-title">MES Mampad College Internship Program</h1>
              <h2 className="header-subtitle">Orientation Session - April 16th, 2025</h2>
              <p className="header-partnership">In Collaboration with Peregrine T&C</p>
            </div>
          </div>
        </header>
        <OrientationInfo details={details.orientationInfo} />
        <section id="faq" className="content-section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={details.faqs} />
          </div>
        </section>
        <section id="register" className="content-section">
          <div className="container">
            <h2>Register Here</h2>
            <RegistrationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/fetchOrientationDetails');
  const details = response.data;

  return {
    props: {
      details,
    },
  };
}

export default InternshipOrientationPage;