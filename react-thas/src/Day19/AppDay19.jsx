import React from "react";
import Counter from "./Counter";
class AppDay19 extends React.Component {
  render() {
    return (
      <div
        className="app-day-19"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <h2>Click a counter to increase its count</h2>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default AppDay19;
