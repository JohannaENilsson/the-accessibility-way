import NavigationWithA11y from "./NavigationWithA11y";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
const useIsDarkState = createPersistedState("isDark");

const DARK_CLASS = "dark";

const HeaderWithA11y = ({ headerText }) => {
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
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);
  return (
    <header>
      <h1>{headerText}</h1>
      <NavigationWithA11y />
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

export default HeaderWithA11y;
