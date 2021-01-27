import { Link, NavLink } from "react-router-dom";

const NavigationWithA11y = () => {
  return (
    <nav>
      <Link to="/">Start</Link>
      <NavLink to="/withA11y/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/contact-withA11y/" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/about-withA11y/" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
};

export default NavigationWithA11y;
