import React, { Component } from "react";
import SummaryStore from "../stores/SummaryCounter";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = { sum: SummaryStore.getSummary() };
  }
  componentDidMount() {
    SummaryStore.addChangeListener(this.onUpdate);
  }
  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onUpdate);
  }

  onUpdate() {
    this.setState({ sum: SummaryStore.getSummary() });
  }
  render() {
    return <span>Total Count:{this.state.sum}</span>;
  }
}

export default Summary;
