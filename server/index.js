import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import Root from "../src/Root";
import App from "../src/components/App";
import navData from "./data/nav/nav-data";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/api/nav", (req, res) => {
  const responseData = JSON.stringify({
    success: true,
    data: navData,
    error: null,
  });

  return res.send(responseData);
});

app.get("/", (req, res) => {
  const appInitialState = {
    nav: navData,
  };

  const app = ReactDOMServer.renderToString(
    <Root initialState={appInitialState}>
      <App />
    </Root>
  );

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
