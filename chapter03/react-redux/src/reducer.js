import * as ActionTypes from "./ActionTypes";

const reducer = (state, action) => {
  const { counterCaption } = action;
  switch (action.type) {
    case ActionTypes.DECREMENT:
      return { ...state, [counterCaption]: state[counterCaption] - 1 };
    case ActionTypes.INCREMENT:
      return { ...state, [counterCaption]: state[counterCaption] + 1 };
    default:
      return state;
  }
};

export default reducer;
