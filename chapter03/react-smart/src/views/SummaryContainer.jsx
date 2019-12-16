import React, { Component } from "react";
import { PropTypes } from "prop-types";
import store from "../store";
import Summary from "./Summary";

class SummaryContainer extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.state = this.getOwnState();
  }
  onChange() {
    this.setState(this.getOwnState());
  }
  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { sum };
  }

  shouldComponentUpdate(nextPorps, nextState) {
    return nextPorps.sum !== this.state.sum;
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }
  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    return <Summary sum={this.state.sum} />;
  }
}

SummaryContainer.propTypes = {
  sum: PropTypes.number.isRequred
};

export default SummaryContainer;
