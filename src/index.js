import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
