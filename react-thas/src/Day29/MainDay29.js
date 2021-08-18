import React from "react";
import { Provider } from "react-redux";
import AppDay29 from "./AppDay29";
import store from "./store";

const MainDay29 = () => {
  return (
    <div>
      <Provider store={store}>
        <AppDay29 />
      </Provider>
    </div>
  );
};

export default MainDay29;
