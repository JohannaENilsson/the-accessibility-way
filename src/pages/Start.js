import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Start = () => {
  return (
    <>
      <Helmet>
        <title>The accessibility way</title>
      </Helmet>
      <main id="start" className="centerColumn">
        <h1>
          Chose if you want to see the components with or without accessibility
        </h1>
        <nav>
          <Link to="/noA11y">NoA11y</Link>
          <Link to="/withA11y">WithA11y</Link>
        </nav>
      </main>
    </>
  );
};

export default Start;
