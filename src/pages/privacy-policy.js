import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Peregrine T&C</title>
        <meta name="description" content="Read the Privacy Policy for Peregrine Training & Consulting. We are committed to protecting your privacy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
```
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
    "axios": "^0.24.0"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "babel-jest": "^27.0.6"
  }
}