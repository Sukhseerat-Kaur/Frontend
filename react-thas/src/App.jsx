import Day16 from "./Day16/AppDay16";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Links from "./Links";
const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/Day16" component={Day16} />
        <Route component={Links} />
      </Switch>
    </div>
  );
};

export default App;
