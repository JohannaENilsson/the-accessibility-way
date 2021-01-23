import NavigationWithA11y from "../components/NavigationWithA11y";

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
    <main>
      <header>
        <h1>With A11Y</h1>
        <NavigationWithA11y />
      </header>
      <input
        type="checkbox"
        checked={isDark}
        value={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
        aria-label="Dark mode"
      />

      <p>Testilitest</p>
    </main>
  );
};

export default WithA11y;
