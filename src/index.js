
import ReactDOM from "react-dom"
import React from "react"
import App from "./App"

import { Provider } from "react-redux";

import store from "./redux/reducers/store"

import "./_base.scss"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);