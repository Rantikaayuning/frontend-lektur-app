import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTemp from "./components/NavTemp";
import { publicRoutes } from "./Routes";
import "./styles.css";

function App() {
  return (
    <Router>
      <NavTemp />
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={index}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
