import { useState, useRef } from "react";

function Blog() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);

  const toggleShowAll = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="blog" ref={sectionRef} className="section fade-section blog-section">
      <div className="section-header" style={{ marginTop: "60px" }}>
        <p className="eyebrow">Reflektioner</p>
        <h2>Människan bakom utvecklaren</h2>
      </div>

      <div className="timeline">

        {/* ITEM 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-date">
            <span>2024</span>
            <i className="fa-solid fa-code"></i>
          </div>

          <div className="timeline-content">
            <h4>Min utveckling</h4>
            <p>Jag har förfinat min förmåga att skriva strukturerad och hållbar kod samt att 
              organisera projekt på ett professionellt och skalbart sätt.</p>

            {open1 && (
              <p className="blog-more">
                Förmågan att arbeta modulärt och utveckla skalbara komponenter har fördjupats ytterligare, 
                med fokus på att skapa modern, genomtänkt och visuellt sammanhängande premium‑design. 
                Arbetssättet präglas av struktur, tydlig logik och en designkänsla som lyfter helhetsupplevelsen
                och gör gränssnitt både hållbara och estetiskt starka.
              </p>
            )}

            <button className="blog-read-more" onClick={() => setOpen1(!open1)}>
              {open1 ? "Visa mindre" : "Läs mer"}
            </button>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-date">
            <span>2025</span>
            <i className="fa-solid fa-bolt"></i>
          </div>

          <div className="timeline-content">
            <h4>Utmaningar</h4>
            <p>Animationer, responsivitet och SCSS‑struktur har varit utmanande men samtidigt utvecklande 
              moment som har bidragit till en mer genomtänkt och professionell arbetsprocess.</p>

            {open2 && (
              <p className="blog-more">
                Att hantera komplexa layouter, optimera kod och skapa ett mer effektivt workflow 
                har utvecklats genom en tydligare och mer professionell strukturering av filer, 
                komponenter och projektarkitektur.
              </p>
            )}

            <button className="blog-read-more" onClick={() => setOpen2(!open2)}>
              {open2 ? "Visa mindre" : "Läs mer"}
            </button>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-date">
            <span>2026</span>
            <i className="fa-solid fa-rocket"></i>
          </div>

          <div className="timeline-content">
            <h4>Framtida mål</h4>
   <p>
Fokus ligger nu på att bredda perspektivet och ta sig an projekt som kräver mer helhetstänk, 
struktur och kreativ problemlösning.</p>

{open3 && (
<p className="blog-more">
Ambitionen är att skapa lösningar som inte bara fungerar, utan känns genomarbetade i 
varje detalj — från idé och logik till upplevelse och uttryck. Det handlar om att växa i 
både bredd och djup, och låta varje nytt projekt bli ett steg mot en ännu starkare helhet.</p>
            )}

            <button className="blog-read-more" onClick={() => setOpen3(!open3)}>
              {open3 ? "Visa mindre" : "Läs mer"}
            </button>
          </div>
        </div>

        {/* EXTRA ITEMS */}
        {showAll && (
          <>
            {/* ITEM 4 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-date">
                <span>2027</span>
                <i className="fa-solid fa-star"></i>
              </div>

              <div className="timeline-content">
                <h4>Fortsatt resa</h4>
                <p>Utvecklingen fortsätter genom att bygga större och mer avancerade 
                  projekt som successivt höjer både teknisk nivå och helhetskvalitet.</p>

                {open4 && (
                  <p className="blog-more">
                    Utforskandet av mer avancerade tekniker fortsätter, samtidigt som problemlösningen 
                    förfinas och projekt byggs som på riktigt utmanar både kreativitet och teknisk kompetens.
                  </p>
                )}

                <button className="blog-read-more" onClick={() => setOpen4(!open4)}>
                  {open4 ? "Visa mindre" : "Läs mer"}
                </button>
              </div>
            </div>

            {/* ITEM 5 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-date">
                <span>2028</span>
                <i className="fa-solid fa-heart"></i>
              </div>

              <div className="timeline-content">
                <h4>Passion</h4>
                <p>Passionen för utveckling växer för varje nytt projekt som byggs, 
                  och varje steg framåt öppnar dörren till ännu mer kreativa och utmanande möjligheter.</p>

                {open5 && (
                  <p className="blog-more">
                    Utveckling har blivit mer än ett yrke – det är något som verkligen uppskattas och drivs av en genuin passion. 
                    Varje nytt steg framåt väcker lusten att fortsätta lära, utforska och skapa ännu mer.
                  </p>
                )}

                <button className="blog-read-more" onClick={() => setOpen5(!open5)}>
                  {open5 ? "Visa mindre" : "Läs mer"}
                </button>
              </div>
            </div>
          </>
        )}

        {/* TOGGLE BUTTON */}
        <button className="blog-show-all" onClick={toggleShowAll}>
          {showAll ? "Visa färre händelser" : "Visa fler händelser"}
        </button>

      </div>
    </section>
  );
}

export default Blog;
