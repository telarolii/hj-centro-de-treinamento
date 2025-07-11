import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src="/logo.png" alt="Logo do Centro de Treinamento HJ" />
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/">Modalidades</NavLink>
        </li>
        <li>
            <NavLink to="/">Planos <span>2024</span></NavLink>
        </li>
        <li>
            <NavLink to="/">Galeria</NavLink>
        </li>
        <li>
            <NavLink to="/">Conato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
