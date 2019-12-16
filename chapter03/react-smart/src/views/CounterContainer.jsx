import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Counter from "./Counter";
import * as Actions from "../Actions";
import store from "../store";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.state = this.getOwnState();
  }
  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption));
  }
  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption));
  }
  onChange() {
    this.setState(this.getOwnState());
  }
  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    };
  }
  componentDidMount() {
    store.subscribe(this.onChange);
  }
  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.caption !== this.props.caption ||
      nextState.value !== this.state.value
    );
  }

  render() {
    const { caption } = this.props;
    return (
      <Counter
        caption={caption}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        value={this.state.value}
      />
    );
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

export default CounterContainer;
