import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  //Method 1: using previous state
  // increment() {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //   }));
  // }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="counter">
        <button
          // onClick={() => this.increment()}
          onClick={this.increment}
          style={{ padding: "10px 30px", cursor: "pointer" }}
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
