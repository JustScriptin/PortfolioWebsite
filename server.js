const express = require("express");
const app = require("./server/app");
const path = require("path");
app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});
