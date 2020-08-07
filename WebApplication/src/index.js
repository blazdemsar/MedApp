import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"; //application now be handled by this
import store from "./store";
import App from "./App/app";

render(
    <Provider store={store}>
        <App />
    </Provider>, //The react application, wrapped up using provider from react-redux
    document.getElementById("root") //rendering react application over root element created in index.html : bootstrapping
)