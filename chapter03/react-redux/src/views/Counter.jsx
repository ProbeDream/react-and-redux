import React from "react";
import { PropTypes } from "prop-types";
import * as Actions from "../Actions";
import { connect } from "react-redux";

const buttonStyle = {
  margin: "10px"
};

function Counter({ caption, onDecrement, onIncrement, value }) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>
        +
      </button>
      <button style={buttonStyle} onClick={onDecrement}>
        -
      </button>
      <span>
        {caption} Count:{value}
      </span>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { value: state[ownProps.caption] };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement() {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement() {
      dispatch(Actions.decrement(ownProps.caption));
    }
  };
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
