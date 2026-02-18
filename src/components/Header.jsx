import { useEffect } from "react";

function Header() {

  useEffect(() => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.nav');

    if (menuIcon && nav) {
      menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        nav.classList.toggle('active');
      });
    }

    return () => {
      if (menuIcon) {
        menuIcon.replaceWith(menuIcon.cloneNode(true));
      }
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">Batool</div>

      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
