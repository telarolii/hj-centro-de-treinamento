// React Router Dom
import { NavLink, Link } from "react-router-dom";

// Hooks
import { useState } from "react";

// CSS Styles
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img
          src="/logo.png"
          alt="Logo do Centro de Treinamento HJ"
          className="logo"
        />
      </Link>

      <div className="hamburguer" onClick={toggleMenu}>
        &#9776;
      </div>

     <ul className={`nav-links ${isOpen ? "open" : ""}`}>
  <li>
    <NavLink to="/" className="nav-item">Home</NavLink>
  </li>
  <li>
    <NavLink to="/modalidades" className="nav-item">Modalidades</NavLink>
  </li>
  <li>
    <NavLink to="/planos" className="nav-item">
      Planos <span className="year-tag">2024</span>
    </NavLink>
  </li>
  <li>
    <NavLink to="/galeria" className="nav-item">Galeria</NavLink>
  </li>
  <li>
    <NavLink to="/contato" className="nav-item">Contato</NavLink>
  </li>
</ul>
    </nav>
  );
};

export default Navbar;
