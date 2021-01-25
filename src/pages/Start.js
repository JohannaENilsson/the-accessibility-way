import { Fragment } from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <main id="start">
      <h1>
        Chose if you want to see the components with or without accessibility
      </h1>
      <nav>
        <Link to="/noA11y">NoA11y</Link>
        <Link to="/withA11y">WithA11y</Link>
      </nav>
    </main>
  );
};

export default Start;
