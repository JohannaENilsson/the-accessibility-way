import HeaderWithA11y from "../components/HeaderWithA11y";
import test from "../assets/social-media-1989152_640.jpg";

import { Helmet } from "react-helmet";
import Card from "../components/Card";
import { UtilsCard } from "../assets/UtilsCard";

const WithA11y = () => {
  return (
    <>
      <Helmet>
        <title>Home - The accessibility way</title>
      </Helmet>

      <a href="#mainContent" id="skipLink">
        Skip to main content
      </a>
      <HeaderWithA11y headerText={"The accessibility way"} />

      <main className="centerColumn" id="mainContent">
        <section>
          <h2>You know how I sometimes have really brilliant ideas?</h2>
          <p>
            The way I see it, every life is a pile of good things and bad
            things.â€¦hey.â€¦the good things don't always soften thebad things;
            but vice-versa the bad things don't necessarily spoil the good
            things and make them unimportant. Youknow when grown-ups tell you
            'everything's going to be fine' and you think they're probably lying
            to make you feelbetter?It's art!
          </p>
        </section>

        <article>
          <h2>they're probably lying to make youfeel better?</h2>
          <div className="centerRow">
            {UtilsCard.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
            <img
              src={test}
              alt="Water microgreens"
              width="280px"
              height="280px"
            />
          </div>
        </article>
      </main>
    </>
  );
};

export default WithA11y;
