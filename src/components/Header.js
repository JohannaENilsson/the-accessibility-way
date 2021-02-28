import { useState } from "react";
import Navigation from "./Navigation";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
import { Redirect } from "react-router-dom";

const useIsDarkState = createPersistedState("isDark");
const DARK_CLASS = "dark";

const Header = ({ headerText }) => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );
  const [isDark, setIsDark] = useIsDarkState(systemPrefersDark);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);
  return (
    <header>
      <button
        onClick={() => setRedirect(true)}
        aria-labelledby="button-label"
        id="buttonIcon"
      >
        <span id="button-label" hidden>
          Home
        </span>
        {redirect && <Redirect push to="/" />}

        <span className="material-icons" aria-hidden="true" focusable="false">
          home
        </span>
      </button>

      <h1>{headerText}</h1>
      <Navigation />
      <input
        id="switchDarkMode"
        type="checkbox"
        checked={isDark}
        value={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
        aria-label="Dark mode"
      />
    </header>
  );
};

export default Header;
