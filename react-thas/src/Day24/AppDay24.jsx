import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import About from "./About";
import Authentication from "./Authentication";
import Navbar from "./Navbar";
import "./StyleDay24.css";

function AppDay24() {
  return (
    <div className="app-day-24">
      <BrowserRouter>
        <Authentication>
          <Navbar />
          <Switch>
            <Route exact path="/AppDay24/" component={Home} />
            <Route path="/AppDay24/about" component={About} />
            <Route path="/AppDay24/profile" component={Profile} />
            <Route path="/AppDay24/dashboard" component={Dashboard} />
          </Switch>
        </Authentication>
      </BrowserRouter>
    </div>
  );
}

export default AppDay24;
