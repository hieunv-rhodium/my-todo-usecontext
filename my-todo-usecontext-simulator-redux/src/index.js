import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from './feature';
import Provider from "./Context/Provider";
import reducers from './reducers';
import * as serviceWorker from "./serviceWorker";

const Main = () => (
    <Provider reducer={reducers}>
        <App />
    </Provider>
);

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// how useContext (https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c)
// how useContext: https://daveceddia.com/usecontext-hook/
serviceWorker.unregister();