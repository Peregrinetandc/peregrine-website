import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Load header content dynamically if needed
  }, []);

  return (
    <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" legacyBehavior>
            <a className="logo-link">
              <img src="/images/logo.png" alt="Peregrine T&C Logo" className="logo-image professional-logo" />
            </a>
          </Link>
          <button className="menu-toggle" aria-label="Toggle Navigation" onClick={toggleMenu}>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <li>
              <Link href="/" legacyBehavior>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="has-submenu">
              <Link href="/#our-services" legacyBehavior>
                <a className="nav-link">Services</a>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/language-training" legacyBehavior>
                    <a className="sub-menu-link">Language Training</a>
                  </Link>
                </li>
                <li>
                  <Link href="/translation-services" legacyBehavior>
                    <a className="sub-menu-link">Translation Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/career-counseling" legacyBehavior>
                    <a className="sub-menu-link">Career Counseling</a>
                  </Link>
                </li>
                <li>
                  <Link href="/digital-marketing-services" legacyBehavior>
                    <a className="sub-menu-link">Digital Marketing Services</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;