import React from "react";
import RenderDOM from "react-dom";
import App from "./Components/App.js";
import configureStore from "./Redux/configureStore.js";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

RenderDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("app")
);
