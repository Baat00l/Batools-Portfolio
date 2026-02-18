function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="logo">
          <a href="#home">Batool</a>
        </div>

        {/* NAVIGATION */}
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* HAMBURGER ICON */}
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Header;
