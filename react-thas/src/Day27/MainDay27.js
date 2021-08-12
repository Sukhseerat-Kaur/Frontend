import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import AppDay27 from "./AppDay27";

function MainDay27() {
  return (
    <Provider store={store}>
      <AppDay27 />
    </Provider>
  );
}

export default MainDay27;
