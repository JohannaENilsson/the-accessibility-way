import NavigationWithA11y from "../components/NavigationWithA11y";
import WaterMicrogreens from "../assets/water-culture-microgreens.jpg";
import Beetroot from "../assets/beetroot.jpg";
import Cress from "../assets/cress.jpg";
import InJars from "../assets/inJars.jpg";
import SproutedShoots from "../assets/sproutedShoots.jpg";
import PeaShoots from "../assets/peaShoots.jpg";
import SeedsInSoaking from "../assets/seedsInSoaking.jpg";
import SeedsAreRinsed from "../assets/seedsAreRinsed.png";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const DARK_CLASS = "dark";

const WithA11y = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );
  const [isDark, setIsDark] = useState(systemPrefersDark);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  console.log("is dark", isDark);
  return (
    <>
      <header>
        <h1>With A11Y</h1>
        <NavigationWithA11y />
      </header>
      <main>
        <input
          type="checkbox"
          checked={isDark}
          value={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
          aria-label="Dark mode"
        />

        <p>Testilitest</p>

        <img src={WaterMicrogreens} alt="Water microgreens" />
        <img src={Beetroot} alt="Beetroot shoots" />
        <img src={Cress} alt="Cress shoots" />
        <img src={InJars} alt="Different shoots in jars" />
        <img src={SproutedShoots} alt="Sprouted shoots" />
        <img src={PeaShoots} alt="Pea shoots" />
        <img src={SeedsInSoaking} alt="seeds in soaking" />
        <img src={SeedsAreRinsed} alt="seeds are rinsed" />
        {/* <video width="300" height="300" controls muted>   ////// <------- varför funkar inte detta ?
        <source src="https://www.youtube.com/embed/o64sHhfQoBw" />
      </video> */}
        <iframe
          title="How to grow micro greens"
          width="300"
          height="300"
          src="https://www.youtube.com/embed/o64sHhfQoBw"
          frameBorder="0"
        ></iframe>
      </main>
    </>
  );
};

export default WithA11y;
