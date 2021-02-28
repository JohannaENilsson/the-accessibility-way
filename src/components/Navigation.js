import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink strict to="/home" activeClassName="active">
        Home
      </NavLink>
      <NavLink strict to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink strict to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
