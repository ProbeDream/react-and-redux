import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Click me!</button>
        <span>Click Count:{this.state.count}</span>
      </div>
    );
  }
}
export default ClickCounter;
