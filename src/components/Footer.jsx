import { useEffect } from "react";

function Footer() {

  useEffect(() => {
    const footerMenuIcon = document.querySelector('.footer-menu-icon');
    const footerMenu = document.querySelector('.footer-menu');

    if (footerMenuIcon && footerMenu) {
      footerMenuIcon.addEventListener('click', () => {
        footerMenuIcon.classList.toggle('active');
        footerMenu.classList.toggle('active');
      });
    }

    return () => {
      if (footerMenuIcon) {
        footerMenuIcon.replaceWith(footerMenuIcon.cloneNode(true));
      }
    };
  }, []);

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

        {/* FOOTER MENY IKON */}
        <div className="footer-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* FOOTER MENY LISTA */}
        <nav className="footer-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
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
