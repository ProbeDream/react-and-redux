import React, { Component } from "react";

import { PropTypes } from "prop-types";

const style = { margin: "10px" };

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initValue || 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.updateCount(true);
  }
  decrement() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
    this.setState({ count: newValue });
    /* 通过父组件给的回调来改变值! */
    this.props.onUpdate(newValue, previousValue);
  }

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button class={style} onClick={this.increment}>
          +
        </button>
        &nbsp;
        <button class={style} onClick={this.decrement}>
          -
        </button>
        &nbsp;
        <span class={style}>
          {caption} Count:{this.state.count}
        </span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  updateCount: PropTypes.func
};
Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f
};

export default Counter;
