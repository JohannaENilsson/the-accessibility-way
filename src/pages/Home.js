import Header from "../components/Header";
import test from "../assets/create-3026190_640.jpg";

import { Helmet } from "react-helmet";
import Card from "../components/Card";
import { UtilsCard } from "../assets/UtilsCard";
import { useLocation, Redirect } from "react-router-dom";

const Home = () => {
  let location = useLocation();

  return (
    <>
      <Helmet>
        <title>Home - The accessibility way</title>
      </Helmet>
      {location.pathname === "/" && <Redirect push to="/home" />}
      <a href="#mainContent" id="skipLink">
        Skip to main content
      </a>
      <Header headerText={"The accessibility way"} />

      <main className="centerColumn" id="mainContent">
        <section>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>
            Phasellus volutpat vulputate risus, non posuere odio luctus et.
            Donec eget tellus cursus, tincidunt nisi sit amet, fringilla diam.
            Quisque aliquam dignissim velit, id viverra urna rhoncus ut. Etiam
            felis erat, lobortis at sem sed, efficitur tincidunt nulla.
            Suspendisse efficitur vel turpis et hendrerit. Nunc hendrerit
            finibus volutpat. Proin rutrum, nulla sit amet fringilla convallis,
            mi augue suscipit purus, lacinia interdum ex erat ac quam.
          </p>
        </section>

        <section>
          <h2>Morbi aliquam sapien at mattis faucibus?</h2>
          <div className="centerRow">
            {UtilsCard.length > 0 &&
              UtilsCard.map((item) => {
                return <Card item={item} key={item.id} />;
              })}
            <img
              src={test}
              alt="Water microgreens"
              width="280px"
              height="280px"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
