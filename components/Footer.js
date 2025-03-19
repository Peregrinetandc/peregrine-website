const Footer = () => (
  <footer>
    <div className="footer-container">
      <p className="copyright">&copy; 2025 Peregrine T&C. All rights reserved.</p>
      <nav>
        <ul className="footer-links">
          <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="footer-link">Terms of Service</a></li>
          <li><a href="/#contact" className="footer-link">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
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
    "gsap": "^3.12.2",
    "font-awesome": "^6.0.0"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "babel-jest": "^27.0.6"
  }
}