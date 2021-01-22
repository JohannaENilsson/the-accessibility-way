import Home from "./pages/Home";
import NoA11y from "./pages/NoA11y";
import WithA11y from "./pages/WithA11y";
import ContactWithA11y from "./components/ContactWithA11y";
import AboutWithA11y from "./components/AboutWithA11y";
import ContactNoA11y from "./components/ContactNoA11y";
import AboutNoA11y from "./components/AboutNoA11y";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";

const routes = [
  { path: "/", component: Home },
  { path: "/noA11y/", component: NoA11y },
  { path: "/withA11y/", component: WithA11y },
  { path: "/contact-withA11y/", component: ContactWithA11y },
  { path: "/about-withA11y/", component: AboutWithA11y },
  { path: "/contact-noA11y/", component: ContactNoA11y },
  { path: "/about-noA11y/", component: AboutNoA11y },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route
              exact
              path={path}
              key={path + component}
              component={component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
