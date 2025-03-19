import { useEffect } from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  useEffect(() => {
    // Load header dynamically
    fetch('/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading header:", error);
        document.getElementById('header-placeholder').innerHTML = `<div class="header-error">Error loading header. Please refresh the page.</div>`;
      });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preload" href="/fonts/OpenSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer></script>
        <script src="/js/script.js" defer></script>
      </Head>
      <div id="header-placeholder"></div>
      <main>{children}</main>
      <footer>
        <div className="container">
          <p>&copy; 2025 Peregrine T&C. All rights reserved.</p>
          <nav>
            <ul className="footer-links">
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="footer-link">Terms of Service</a></li>
              <li><a href="/#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;