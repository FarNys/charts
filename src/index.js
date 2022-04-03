import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.scss";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./components/store/rootReducer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
