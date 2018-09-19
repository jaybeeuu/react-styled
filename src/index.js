// PACKAGE DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { loadState, saveState } from "./api/local-storage";
import App from "./components/App";
import { debounce } from "./debounce";
import configureStore from "./redux/configure-store";

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(debounce(() => {
  saveState({
    domain: store.getState().domain
  });
}, 1000));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("app"));