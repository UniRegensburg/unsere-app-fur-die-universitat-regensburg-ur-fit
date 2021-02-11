const express = require("express"),
  app = express(),
  { createProxyMiddleware } = require("http-proxy-middleware"),
  // config = require(__dirname + "/api-server.config"),
  port = 5001;

require("colors");

app.use(
  "/proxy/mensa",
  createProxyMiddleware({
    target: "https://www.stwno.de",
    changeOrigin: true,
    pathRewrite: { "^/proxy/mensa": "" },
  })
);

app.use(
  "/proxy/authentication",
  createProxyMiddleware({
    target: "https://mistudent.ddns.net",
    changeOrigin: true,
    pathRewrite: { "^/proxy/authentication": "" },
  })
);

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
