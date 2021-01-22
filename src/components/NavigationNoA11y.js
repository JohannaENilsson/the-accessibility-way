import { Link } from "react-router-dom";

const NavigationNoA11y = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to={`/contact-noA11y/`}> Contact</Link>
      <Link to={`/about-noA11y/`}> About</Link>
    </div>
  );
};

export default NavigationNoA11y;
