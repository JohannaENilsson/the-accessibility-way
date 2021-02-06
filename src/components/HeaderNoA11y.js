import NavigationNoA11y from "./NavigationNoA11y";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const HeaderNoA11y = ({ headerText }) => {
  const [redirect, setRedirect] = useState(false);
  return (
    <div className="header">
      <button onClick={() => setRedirect(true)} id="buttonIcon">
        {redirect && <Redirect push to="/start" />}
        <span className="material-icons">restart_alt</span>
      </button>
      <h1>{headerText}</h1>
      <NavigationNoA11y />
    </div>
  );
};

export default HeaderNoA11y;
