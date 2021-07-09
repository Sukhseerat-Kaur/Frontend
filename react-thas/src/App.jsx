import React from "react";
import { Route, Switch } from "react-router-dom";
import AppDay16 from "./Day16/AppDay16";
import AppDay17 from "./Day17/AppDay17";
import AppDay18 from "./Day18/AppDay18";
import Links from "./Links";
const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/AppDay16" component={AppDay16} />
        <Route path="/AppDay17" component={AppDay17} />
        <Route path="/AppDay18" component={AppDay18} />
        <Route component={Links} />
      </Switch>
    </div>
  );
};

export default App;
