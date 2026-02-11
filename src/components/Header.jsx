function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">Batools Portfolio</a>

      <nav className="nav">
        <ul>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#blog" className="nav-link">Blog</a></li>
<li><a href="#expertise" className="nav-link">Expertise</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
