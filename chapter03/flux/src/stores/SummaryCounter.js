import * as ActionTypes from "../ActionTypes";
import AppDispatcher from "../AppDispatcher";
import { EventEmitter } from "events";
import CounterStore from "./CounterStore";

const CHANGE_EVENT = "changed";

function ComputerSummary(counterValues) {
  let summary = 0;
  for (let key in counterValues) {
    if (counterValues.hasOwnProperty(key)) {
      summary += counterValues[key];
    }
  }
  return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary() {
    return ComputerSummary(CounterStore.getCounterValues());
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

SummaryStore.dispatchToken = AppDispatcher.register(action => {
  if (
    action.type === ActionTypes.INCREMENT ||
    action.type === ActionTypes.DECREMENT
  ) {
    AppDispatcher.waitFor([CounterStore.dispatchToken]);
    SummaryStore.emitChange();
  }
});

export default SummaryStore;
