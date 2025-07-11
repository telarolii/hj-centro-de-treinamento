import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Logo do Centro de Treinamento HJ" />
      <ul className="navlinks">
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/modalidades">Modalidades</NavLink>
        </li>
        <li>
            <NavLink to="/planos">Planos <span className="year-tag">2024</span></NavLink>
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
