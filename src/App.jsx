import './styles/main.scss';
import { useEffect } from "react";


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(sec => observer.observe(sec));
}, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Blog />
                <Services/>
        <Skills/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
