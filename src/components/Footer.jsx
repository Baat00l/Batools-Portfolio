import { useState } from "react";

function Footer() {
  const [footerMenuOpen, setFooterMenuOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-inner">

        <p className="footer-copy">© 2026 Batool Fahmi. Alla rättigheter förbehållna.</p>

        <div className="footer-center">
          <a href="https://www.instagram.com/b4h.mi/" target="_blank" className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/batoolfahmi/" className="social-icon" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Baat00l" className="social-icon" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* FOOTER MENU ICON */}
        <div
          className={`footer-menu-icon ${footerMenuOpen ? "active" : ""}`}
          onClick={() => setFooterMenuOpen(!footerMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* FOOTER MENU LIST */}
        <nav className={`footer-menu ${footerMenuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#home" onClick={() => setFooterMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setFooterMenuOpen(false)}>About</a></li>
            <li><a href="#blog" onClick={() => setFooterMenuOpen(false)}>Blog</a></li>
            <li><a href="#expertise" onClick={() => setFooterMenuOpen(false)}>Expertise</a></li>
            <li><a href="#projects" onClick={() => setFooterMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setFooterMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

      </div>

      <button
        className="scroll-top"
        aria-label="Scrolla till toppen"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
