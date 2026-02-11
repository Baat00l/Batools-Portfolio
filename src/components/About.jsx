import batool from "../assets/batool.jpg";
import batool1 from "../assets/batool1.jpg";
import batool2 from "../assets/batool2.jpg";


function About() {
  return (
    <section id="about" className="section fade-section">

      {/* ABOUT HEADER */}
      <div className="section-header">
        <p className="eyebrow">Om mig</p>
        <h2>Vem jag är bakom koden</h2>
      </div>

      {/* ABOUT GRID */}
      <div className="about-grid">

           {/* TEXTDEL */}
        <div className="about-text">
          <p>
            Född i Damaskus och uppvuxen i Örebro, med erfarenhet från vård, service och
             butik som har format en trygg känsla för ansvar, lyhördhet och att alltid sätta människan i fokus.
          </p>

          <h3>Personlig profil</h3>
          <p>
En ambitiös och målinriktad person som drivs av en genuin vilja att växa,
 lära och skapa. Kommunikation, problemlösning och utveckling är inte bara styrkor, 
utan något som kommer naturligt och byggs på för varje nytt steg framåt.        
</p>

          <div className="about-facts-grid">
            <div className="fact-card">
              <h4>Bakgrund</h4>
              <ul>
                <li>Födelseort: Damaskus</li>
                <li>Plats: Örebro, Sverige</li>
               
              </ul>
            </div>

            <div className="fact-card">
              <h4>Språk</h4>
              <ul>
                <li>Arabiska – modersmål</li>
                <li>Svenska – flytande</li>
                <li>Engelska – grundläggande</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BILDER */}
        <div className="about-images">
<div className="about-photo large">
  <img src={batool} alt="Batool" />
</div>

<div className="about-photo small">
  <img src={batool1} alt="Bild 2" />
</div>

<div className="about-photo small">
  <img src={batool2} alt="Bild 3" />
</div>



        </div>

      </div>

      {/* EDUCATION HEADER */}
      <div className="section-header" style={{ marginTop: "90px" }}>
        <p className="eyebrow">Utbildning</p>
        <h2>Min utbildningsbakgrund</h2>
      </div>

      {/* EDUCATION GRID */}
      <div className="education-grid">

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <span className="edu-date">2024 - 2026</span>
              <h4>TUC Yrkeshögskola</h4>
              <p>Webbutveckling</p>
            </div>
            <div className="flip-back">
              <h4>TUC Yrkeshögskola – Webbutveckling</h4>
              <p>En kombination av frontend, backend, UX‑design, projektledning och
                 agila arbetssätt som tillsammans skapar moderna, skalbara och genomtänkta 
                 digitala lösningar.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <span className="edu-date">2020 - 2023</span>
              <h4>Thoren Business School</h4>
              <p>Naturvetenskap</p>
            </div>
            <div className="flip-back">
              <h4>Thoren Business School – Naturvetenskap</h4>
              <p>Biologi, kemi, fysik, matematik och vetenskapliga arbetssätt
                 - en naturvetenskaplig grund med fokus på analys, problemlösning och
                  strukturerat tänkande.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <span className="edu-date">2016 - 2020</span>
              <h4>Västra Engelbrektsskolan</h4>
              <p>Grundskola</p>
            </div>
            <div className="flip-back">
              <h4>Västra Engelbrektsskolan</h4>
              <p>Allmän grundskoleutbildning från årskurs 6–9 med en bred kunskapsbas
                 i alla centrala ämnen.</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;
