import { useEffect } from "react";

function Home() {

  useEffect(() => {
    const title = document.getElementById("typingName");
    if (title) title.classList.add("start");
  }, []);

  return (
 <section id="home" className="section home fade-section">

  <div className="home-inner">

    <p className="eyebrow">Webbutvecklare • Örebro</p>

    <h1 className="typing" id="typingName">
      <span>B</span><span>a</span><span>t</span><span>o</span><span>o</span><span>l</span>
      <span>&nbsp;</span>
      <span>F</span><span>a</span><span>h</span><span>m</span><span>i</span>
    </h1>

    <p className="lead">
  Responsiva och visuellt skarpa webblösningar byggda med fokus på design, 
   struktur och en upplevelse som känns modern i varje detalj. 
    </p>

    <p className="sub">
      Just nu studerar jag Webbutveckling på TUC Yrkeshögskola och utvecklar projekt inom
      frontend, backend och databaser.
    </p>

    <div className="home-actions">
<a href="/CV26.pdf" className="btn-primary glow" target="_blank">Ladda ner CV</a>
      <a href="https://www.linkedin.com/in/batoolfahmi/" className="btn-secondary glow" target="_blank">LinkedIn</a>
    </div>

  <div className="social-row">
  <a href="https://www.instagram.com/b4h.mi/" target="_blank" className="social-icon">
  <i className="fa-brands fa-instagram"></i>
</a>

  <a href="https://github.com/" target="_blank" className="social-icon">
    <i className="fa-brands fa-github"></i>
  </a>
  <a href="https://facebook.com/" target="_blank" className="social-icon">
    <i className="fa-brands fa-facebook"></i>
  </a>
</div>


  </div>

</section>


  );
}

export default Home;