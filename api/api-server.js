const express = require("express"),
  app = express(),
  { createProxyMiddleware } = require("http-proxy-middleware"),
  // config = require(__dirname + "/api-server.config"),
  port = 5001;

app.use(express.json());
app.use(
  "/proxy/mensa",
  createProxyMiddleware({
    target: "https://www.stwno.de",
    changeOrigin: true,
    pathRewrite: { "^/proxy/mensa": "" },
  })
);

let server = app.listen(port, () => {
  console.log(`API Server listening at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: " + "closing api server".yellow);
  server.close(() => {
    console.log("api server closed");
  });
});
