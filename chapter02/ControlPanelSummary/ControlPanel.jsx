import React, { Component } from "react";

import Counter from "../ControlPanelSummary/Counter";

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.onCouterUpdate = this.onCouterUpdate.bind(this);
    this.initValues = [0, 10, 20];
    const initSum = this.initValues.reduce((a, b) => a + b, 0);
    this.state = { sum: initSum };
  }
  onCouterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue;
    this.setState({ sum: this.state.sum + valueChange });
  }
  render() {
    return (
      <div>
        <Counter onUpdate={this.onCouterUpdate} caption={"First"} />
        <Counter
          onUpdate={this.onCouterUpdate}
          caption={"Second"}
          initValue={this.initValues[1]}
        />
        <Counter caption={"Third"} initValue={this.initValues[2]} />
        <span>Total Count:{this.state.sum}</span>
      </div>
    );
  }
}

export default ControlPanel;
