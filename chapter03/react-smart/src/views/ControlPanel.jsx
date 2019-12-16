import React, { Component } from "react";
import CounterContainer from "./CounterContainer";
import SummaryContainer from "./SummaryContainer";

const style = { margin: "50px" };

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <CounterContainer caption="first" />
        <CounterContainer caption="second" />
        <CounterContainer caption="third" />
        <hr />
        <SummaryContainer />
      </div>
    );
  }
}
export default ControlPanel;
