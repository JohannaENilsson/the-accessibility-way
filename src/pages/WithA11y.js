import HeaderWithA11y from "../components/HeaderWithA11y";
import WaterMicrogreens from "../assets/water-culture-microgreens.jpg";
import Beetroot from "../assets/beetroot.jpg";
import Cress from "../assets/cress.jpg";
import InJars from "../assets/inJars.jpg";
import SproutedShoots from "../assets/sproutedShoots.jpg";
import PeaShoots from "../assets/peaShoots.jpg";
import SeedsInSoaking from "../assets/seedsInSoaking.jpg";
import SeedsAreRinsed from "../assets/seedsAreRinsed.png";

const WithA11y = () => {
  return (
    <>
      <a href="#maincontent">Skip to main content</a>
      <HeaderWithA11y headerText={"With A11Y"} />

      <main className="centerColumn" id="maincontent">
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

        <section>
          <h2>they're probably lying to make youfeel better?</h2>
          <div className="centerRow" role="presentation">
            <img
              src={WaterMicrogreens}
              alt="Water microgreens"
              width="280px"
              height="280px"
            />
            <img
              src={Beetroot}
              alt="Beetroot shoots"
              width="280px"
              height="280px"
            />
            <img src={Cress} alt="Cress shoots" width="280px" height="280px" />
            <img
              src={InJars}
              alt="Different shoots in jars"
              width="280px"
              height="280px"
            />
            <img
              src={SproutedShoots}
              alt="Sprouted shoots"
              width="280px"
              height="280px"
            />
            <img
              src={PeaShoots}
              alt="Pea shoots"
              width="280px"
              height="280px"
            />
            <img
              src={SeedsInSoaking}
              alt="seeds in soaking"
              width="280px"
              height="280px"
            />
            <img
              src={SeedsAreRinsed}
              alt="seeds are rinsed"
              width="280px"
              height="280px"
            />
            {/* <video width="300" height="300" controls muted>   ////// <------- varför funkar inte detta ?
        <source src="https://www.youtube.com/embed/o64sHhfQoBw" />
      </video> */}
            <iframe
              title="How to grow micro greens"
              src="https://www.youtube.com/embed/o64sHhfQoBw"
              frameBorder="0"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default WithA11y;
