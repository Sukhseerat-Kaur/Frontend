import React from "react";
import AppDay26 from "./AppDay26";
import { Provider } from "react-redux";
import store from "./Store";

const Main = () => {
  return (
    <Provider store={store}>
      <div>
        <AppDay26 />
      </div>
    </Provider>
  );
};

export default Main;
