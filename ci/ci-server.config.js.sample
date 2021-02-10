module.exports = {
    git: {
        ref: "refs/heads/dev",
        remote: "origin"
    },
    webhookEndpoint: "postrecieve",
    requireInstall: [
        "package-lock.json"
    ],
    self: {
        name: "ci server",
        processName: "ur-fit-ci",
        requireRestart: [
            "ci/*"
        ]
    },
    apps: [
        {
            name: "dev server",
            processName: "ur-fit-dev",
            requireRestart: [
                "src/index.js",
                "src/service-worker.js",
                "src/serviceWorkerRegistration.js",
                "package.json"
            ],
        },
        {
            name: "production server",
            processName: "ur-fit-prod",
            requireRestart: [
                "src/**/*",
                "package.json"
            ],
        }
    ]
}