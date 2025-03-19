import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = ({ details }) => {
  return (
    <>
      <Head>
        <title>Peregrine T&C - Home</title>
        <meta name="description" content="Welcome to Peregrine T&C. We provide high-quality training and consulting services to individuals and organizations around the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>Welcome to Peregrine T&C</h1>
            <p>We provide high-quality training and consulting services to individuals and organizations around the world.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/fetchLandingPageDetails');
  const details = response.data;

  return {
    props: {
      details,
    },
  };
}

export default HomePage;