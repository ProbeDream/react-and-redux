import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Summary extends Component {
  render() {
    return <div>Total Count:{this.props.sum}</div>;
  }
}
Summary.propTypes = {
  sum: PropTypes.number.isRequired
};
export default Summary;
