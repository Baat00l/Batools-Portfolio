function Footer() {
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

          <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href= "#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
