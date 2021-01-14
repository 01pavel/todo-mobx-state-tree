import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StoreContext } from "./contexts/StoreContext";
import { createStore } from "./stores/createStore";

const rootStore = createStore();

ReactDOM.render(
  <StoreContext.Provider value={rootStore}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
