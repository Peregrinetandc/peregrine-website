import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TranslationServices from '../components/TranslationServices';
import LanguageSelector from '../components/LanguageSelector';

const TranslationPage = () => {
  return (
    <>
      <Head>
        <title>Professional Translation Services | Peregrine T&C</title>
        <meta name="description" content="Accurate and reliable translation services by Peregrine T&C. Expert translators, cultural sensitivity, and timely delivery for all your translation needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LanguageSelector />
      <TranslationServices />
      <Footer />
    </>
  );
};

export default TranslationPage;

{
  "name": "peregrine-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "axios": "^0.24.0",
    "framer-motion": "^4.1.17",
    "react-i18next": "^11.8.5",
    "i18next": "^19.8.4"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "babel-jest": "^27.0.6"
  }
}