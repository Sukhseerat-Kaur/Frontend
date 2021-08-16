import React from "react";
import { Route, Switch } from "react-router-dom";
import AppDay16 from "./Day16/AppDay16";
import AppDay17 from "./Day17/AppDay17";
import AppDay18 from "./Day18/AppDay18";
import AppDay19 from "./Day19/AppDay19";
import AppDay20 from "./Day20/AppDay20";
import AppDay21 from "./Day21/AppDay21";
import AppDay22 from "./Day22/AppDay22";
import AppDay23 from "./Day23/AppDay23";
import AppDay24 from "./Day24/AppDay24";
import AppDay25 from "./Day25/AppDay25";
import MainDay26 from "./Day26/MainDay26";
import MainDay27 from "./Day27/MainDay27";
import AppDay28 from "./Day28/AppDay28";
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
        <Route path="/AppDay21" component={AppDay21} />
        <Route path="/AppDay22" component={AppDay22} />
        <Route path="/AppDay23" component={AppDay23} />
        <Route path="/AppDay24" component={AppDay24} />
        <Route path="/AppDay25" component={AppDay25} />
        <Route path="/MainDay26" component={MainDay26} />
        <Route path="/MainDay27" component={MainDay27} />
        <Route path="/AppDay28" component={AppDay28} />
        <Route component={Links} />
      </Switch>
    </div>
  );
};

export default App;
