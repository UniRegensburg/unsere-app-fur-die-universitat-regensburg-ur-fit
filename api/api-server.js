const express = require("express"),
  colors = require("colors"),
  path = require("path"),
  app = express(),
  // config = require(__dirname + "/api-server.config"),
  port = 5001;

app.use(express.json());

let server = app.listen(port, () => {
  console.log(`API Server listening at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: " + "closing api server".yellow);
  server.close(() => {
    console.log("api server closed");
  });
});
