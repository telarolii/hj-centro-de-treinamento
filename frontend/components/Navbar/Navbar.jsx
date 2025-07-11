// React Router Dom
import { NavLink, Link } from "react-router-dom";

// Hooks
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="/logo.png"
          alt="Logo do Centro de Treinamento HJ"
          className="logo"
        />

        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/modalidades">Modalidades</NavLink>
        </li>
        <li>
          <NavLink to="/planos">
            Planos <span className="year-tag">2024</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/galeria">Galeria</NavLink>
        </li>
        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
