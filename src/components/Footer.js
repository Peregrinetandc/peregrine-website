import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <p>&copy; 2025 Peregrine T&C. All rights reserved.</p>
      <nav>
        <ul className="footer-links">
          <li>
            <Link href="/privacy-policy" legacyBehavior>
              <a className="footer-link">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" legacyBehavior>
              <a className="footer-link">Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact" legacyBehavior>
              <a className="footer-link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;