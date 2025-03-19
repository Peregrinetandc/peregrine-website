import Head from 'next/head';
import Layout from '../src/components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <Head>
        <title>Terms of Service | Peregrine T&C</title>
        <meta name="description" content="Terms of service of Peregrine T&C." />
      </Head>
      <main>
        <section className="content-section">
          <div className="container">
            <h1>Terms of Service</h1>
            <p>Details about the terms of service.</p>
            <img src="/images/logo.png" alt="Peregrine Logo" />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default TermsOfService;