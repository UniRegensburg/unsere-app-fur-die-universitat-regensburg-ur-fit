const express = require("express"),
  app = express(),
  { createProxyMiddleware } = require("http-proxy-middleware"),
  config = require(__dirname + "/api-server.config"),
  port = 5001,
  mailTransporter = require("nodemailer").createTransport({
    service: config.service,
    auth: config.auth,
  });

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
    target: "https://pro.mi.ur.de/ldap/urfit",
    changeOrigin: true,
    pathRewrite: { "^/proxy/authentication": "" },
  })
);

app.use(express.json());

app.post("/api/feedback", (req, res) => {
  if (req.body && req.body.message) {
    if (req.body.message.length === 0) {
      res.sendStatus(200);
      return;
    }
    let mailOptions = config.mailOptions;
    mailOptions.text = req.body.message;
    mailTransporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  } else {
    res.sendStatus(400);
  }
});

let server = app.listen(port, () => {
  console.log(`API Server listening at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: " + "closing api server".yellow);
  server.close(() => {
    console.log("api server closed");
  });
});
