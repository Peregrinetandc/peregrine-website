import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Peregrine T&C. All rights reserved.</p>
      <nav>
        <ul className="footer-links">
          <li>
            <Link href="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="footer-link">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="footer-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;