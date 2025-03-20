import Link from 'next/link';
import Layout from '../src/components/Layout';

const Custom404 = () => {
  return (
    <Layout>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <a>Go back to Home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;