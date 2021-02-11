module.exports = {
  apps : [
    {
      name: "ur-fit-ci",
      script: "npm",
      args: "run ci",
    },
    {
      name: "ur-fit-dev",
      script: "npm",
      args: "run start",
    },
    {
      name: "ur-fit-prod",
      script: "npm",
      args: "run build",
      autorestart: false,
    }
  ]
}
