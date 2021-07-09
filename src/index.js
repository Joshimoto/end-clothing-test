import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import appConfig from "./appConfig";

switch (appConfig.renderedBy) {
  case "client":
    ReactDOM.render(
      <React.StrictMode>
        <Root>
          <App />
        </Root>
      </React.StrictMode>,
      document.getElementById("root")
    );
    break;
  case "server":
    ReactDOM.hydrate(
      <React.StrictMode>
        <Root>
          <App />
        </Root>
      </React.StrictMode>,
      document.getElementById("root")
    );
    break;
  default:
    throw new Error(`render type ${appConfig.renderedBy} is not supported`);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
