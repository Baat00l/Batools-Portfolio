function Contact() {
  return (
    <section id="contact" className="section contact fade-section">
      <div className="contact-form stagger">
        <p className="eyebrow">Kontakt</p>
        <h2>Skicka ett meddelande</h2>

        <form className="form" id="contactForm">
          <div className="form-group">
            <input type="text" id="name" placeholder=" " required />
            <label htmlFor="name">Namn</label>
          </div>

          <div className="form-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">E‑post</label>
          </div>

          <div className="form-group">
            <textarea id="message" placeholder=" " required></textarea>
            <label htmlFor="message">Meddelande</label>
          </div>

          <button type="submit" className="btn-primary glow">Skicka meddelande</button>

          <p id="form-success" className="form-success">
            Tack för ditt meddelande! Jag återkommer snart.
          </p>
        </form>
      </div>

      <div className="contact-info stagger">
        <h3>Kontaktuppgifter</h3>
        <p>Du kan också nå mig direkt via telefon eller e‑post.</p>

        <div className="contact-details">
          <p><span className="icon">👤</span><strong>Namn:</strong> Batool Fahmi</p>
       <p>
  <span className="icon">📍</span>
  <strong>Plats:</strong>
  <a 
    href="https://maps.google.com/?q=Örebro%2C+Sverige" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Örebro, Sverige
  </a>
</p>

<p>
  <span className="icon">📞</span>
  <strong>Mobil:</strong>
  <a href="tel:+46739098804">(+46) 739 098 804</a>
</p>

          <p><span className="icon">✉️</span><strong>E‑post:</strong> <a href="mailto:batoolfahmi4@gmail.com">batoolfahmi4@gmail.com</a></p>
        </div>

       <a
  href="https://www.linkedin.com/in/batoolfahmi/"
  className="social-link glow"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>LinkedIn Profil →</span>
</a>


          
        <a href="mailto:batoolfahmi4@gmail.com?subject=Boka%20möte%20med%20Batool" className="book-meeting glow">
          <span>Boka möte →</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
