import React from "react";
import ReactDOM from "react-dom";
import ControlPanel from "../chapter03/react-redux/src/views/ControlPanel";
import store from "../chapter03/react-redux/src/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>,
  rootElement
);
