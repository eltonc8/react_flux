import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as ACTIONS from "./actions/item_action";

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.a = ACTIONS.getItems;
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
