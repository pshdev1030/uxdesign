const express = require("express");
const app = express();
const port = 8000;
const data = require("./result/mydevice.json");

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`portNumber=${port}`);
});
