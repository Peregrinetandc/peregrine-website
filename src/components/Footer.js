import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Peregrine T&C. All rights reserved.</p>
      <nav>
        <ul className="footer-links">
          <li>
            <Link href="/privacy-policy">
              <a className="footer-link">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service">
              <a className="footer-link">Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a className="footer-link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;