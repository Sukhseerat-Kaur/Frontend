import React from "react";
import { Route, Switch } from "react-router-dom";
import AppDay16 from "./Day16/AppDay16";
import AppDay17 from "./Day17/AppDay17";
import AppDay18 from "./Day18/AppDay18";
import AppDay19 from "./Day19/AppDay19";
import AppDay20 from "./Day20/AppDay20";
import Links from "./Links";
const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/AppDay16" component={AppDay16} />
        <Route path="/AppDay17" component={AppDay17} />
        <Route path="/AppDay18" component={AppDay18} />
        <Route path="/AppDay19" component={AppDay19} />
        <Route path="/AppDay20" component={AppDay20} />
        <Route component={Links} />
      </Switch>
    </div>
  );
};

export default App;
