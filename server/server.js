import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import SSRExample from "../src/SSRExample";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/*", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<SSRExample />);
  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
