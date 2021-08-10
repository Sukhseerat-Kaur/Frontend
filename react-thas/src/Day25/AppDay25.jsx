import { Route, BrowserRouter, Switch } from "react-router-dom";
import BootstrapWebsite from "./BootstrapWebsite/BootstrapWebsite";
import Links from "./Links";

function AppDay25() {
  return (
    <div className="app-day-25">
      <BrowserRouter>
        <Switch>
          <Route
            path="/AppDay25/bootstrap-website"
            component={BootstrapWebsite}
          />

          <Route component={Links} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppDay25;
