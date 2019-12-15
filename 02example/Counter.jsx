import React, { Component } from "react";

import { PropTypes } from "prop-types";

const buttonStyle = { margin: "10px" };

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initValue || 0 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  decrement() {
    this.setState({ count: this.state.count + 1 });
  }
  increment() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    const { caption } = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.increment}>
          +
        </button>
        <button style={buttonStyle} onClick={this.decrement}>
          -
        </button>
        <span>
          {caption}count:{this.state.count}
        </span>
      </div>
    );
  }
}
Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
};

export default Counter;
