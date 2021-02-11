const config = require(__dirname + "/ci-server.config"),
  shell = require("shelljs"),
  express = require("express"),
  path = require("path"),
  micromatch = require("micromatch"),
  app = express(),
  port = config.port ?? 4001,
  webhookEndpoint = config.webhookEndpoint ?? "postrecieve";
require("colors");

app.use(express.json());

app.post(`/${webhookEndpoint}`, (req, res) => {
  if (!shell.which("git")) {
    console.log("Sorry, this script requires git <3".red);
    process.exit(1);
  }

  res.sendStatus(200);
  // Run update for specified branch
  if (config.git.ref === req.body.ref) {
    runUpdate(req.body);
  }
});

// read process manager logs and display html conversion
app.get("/", (req, res) => {
  let pathToLogs = path.join(
    process.env["HOME"],
    `.pm2/logs/${config.self.processName}-out.log`
  );
  let shellRes = shell.exec(`tail -100 ${pathToLogs} | ci/ansi2html.sh`, {
    silent: true,
  });

  if (shellRes.code !== 0) {
    res.setHeader("Content-type", "text/plain");
    res.send(shellRes.stderr);
  } else {
    res.setHeader("Content-type", "text/html");
    res.send(shellRes.stdout);
  }
});

let server = app.listen(port, () => {
  console.log(
    `Continous Integration Server listening at http://localhost:${port}`
  );
});

process.on("SIGINT", () => {
  console.log(
    "SIGINT signal received: " + "closing continous integration server".yellow
  );
  server.close(() => {
    console.log("ci server closed");
  });
});

function runUpdate(githubPayload) {
  console.log(
    "--- integrating update from " +
      `${githubPayload.pusher.name}`.yellow +
      " at " +
      `${githubPayload.head_commit.timestamp}`.yellow +
      " ---"
  );
  let modifiedFiles = githubPayload.commits.map((obj) => obj.modified).flat();

  pullContents(githubPayload.commits.length, config.git.ref, config.git.remote);

  // Check if new dependencies need to be installed
  if (
    micromatch.some(
      modifiedFiles,
      config.requireInstall ?? ["package-lock.json"]
    )
  ) {
    installDependencies();
  }

  // restart apps if needed
  let apps = config.apps ?? [];
  for (let app of apps) {
    // Check if restart is needed
    if (micromatch.some(modifiedFiles, app.requireRestart ?? [])) {
      restartApp(app.processName, app.name);
    }
  }

  console.log("--- " + "update successful".green + " ---");

  // restart itself if necessary
  // pm2 will automatically restart the server upon exit
  if (
    micromatch.some(
      modifiedFiles,
      config.self.requireRestart ?? ["ci/*", "package.json"]
    )
  ) {
    console.log(`restarting ${config.self.name ?? "ci server"}`.yellow);
    process.exit(0);
  }
}

function pullContents(numCommits, ref, remote = "origin") {
  console.log(
    "pulling " +
      `${numCommits} commits`.yellow +
      " from " +
      `${remote}`.yellow +
      " on " +
      `${ref}`.yellow
  );
  if (shell.exec(`git remote prune ${remote}`).code !== 0) {
    console.log("Error: Git remote prune failed".red);
    process.exit(1);
  }
  if (shell.exec(`git pull ${remote} ${ref}`).code !== 0) {
    console.log("Error: Git pull failed".red);
    process.exit(1);
  }
}

function installDependencies() {
  console.log("running npm clean install".yellow);
  if (shell.exec("npm ci").code !== 0) {
    console.log("Error: npm clean install failed!".red);
    process.exit(1);
  }
}

function restartApp(processName, name = "unknown") {
  console.log(`restarting ${name}`.yellow);
  if (shell.exec(`pm2 restart ${processName}`, { silent: true }).code !== 0) {
    console.log(`Error: ${name} restart failed!`.red);
    process.exit(1);
  }
}
