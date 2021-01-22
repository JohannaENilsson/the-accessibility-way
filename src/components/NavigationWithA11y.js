import { Link } from "react-router-dom";

const NavigationWithA11y = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to={`/contact-withA11y/`}> Contact</Link>
      <Link to={`/about-withA11y/`}> About</Link>
    </nav>
  );
};

export default NavigationWithA11y;
