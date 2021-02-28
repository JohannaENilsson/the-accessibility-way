import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
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
