import React, { Component } from "react";
import { PropTypes } from "prop-types";

const style = { margin: "10px" };

class Counter extends Component {
  render() {
    const { caption, onIncrement, onDecrement, value } = this.props;
    return (
      <div>
        <button style={style} onClick={onIncrement}>
          +
        </button>
        <button style={style} onClick={onDecrement}>
          -
        </button>
        <span>
          {caption} count:{value}
        </span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Counter;
