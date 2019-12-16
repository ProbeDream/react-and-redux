import React, { Component } from "react";
import CounterStore from "../stores/CounterStore";
import * as Actions from "../Actions";

const style = { margin: "10px" };

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = { counter: CounterStore.getCounterValues()[props.caption] };
  }
  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }
  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({ count: newCount });
  }
  increment() {
    Actions.increment(this.props.caption);
  }
  decrement() {
    Actions.decrement(this.props.caption);
  }
  render() {
    const { caption } = this.props;
    return (
      <div>
        <button style={style} onClick={this.increment}>
          +
        </button>
        <button style={style} onClick={this.decrement}>
          -
        </button>
        <span>
          {caption} Count:{this.state.count}
        </span>
      </div>
    );
  }
}
export default Counter;
