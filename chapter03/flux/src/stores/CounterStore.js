import { EventEmitter } from "events";
import * as ActionTypes from "../ActionTypes";
import AppDispatcher from "../AppDispatcher";
const CHANGE_EVENT = "changed";

const counterValues = {
  First: 0,
  Second: 1,
  Third: 2
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues() {
    return counterValues;
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }
});

CounterStore.dispatchToken = AppDispatcher.register(action => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption]++;
    CounterStore.emitChange();
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption]--;
    CounterStore.emitChange();
  }
});

export default CounterStore;
