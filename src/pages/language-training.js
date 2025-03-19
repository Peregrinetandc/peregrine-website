import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LanguageTraining from '../components/LanguageTraining';
import axios from 'axios';

const LanguageTrainingPage = ({ details }) => {
  return (
    <>
      <Head>
        <title>Language Training Services | Peregrine T&C</title>
        <meta name="description" content="Enhance your linguistic abilities with Peregrine T&C's Language Training Services. Learn from experienced instructors and enjoy flexible scheduling." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <LanguageTraining details={details} />
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/fetchLanguageTrainingDetails');
  const details = response.data;

  return {
    props: {
      details,
    },
  };
}

export default LanguageTrainingPage;