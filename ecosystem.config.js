module.exports = {
  apps: [
    {
      name: "ur-fit-ci",
      script: "npm",
      args: "run ci",
    },
    {
      name: "ur-fit-api",
      script: "npm",
      args: "run api",
    },
    {
      name: "ur-fit-prod",
      script: "npm",
      args: "run build",
      autorestart: false,
    },
  ],
};
