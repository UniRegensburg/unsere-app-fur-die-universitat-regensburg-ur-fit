# API Server

The API-Server has two basic roles.

**First**: It serves as proxy server for requests that could not be sent directly by the client. (Those are most commenly requests to external APIs that would be blocked by CORS-Policies).

**Second**: It servers as a REST-API Endpoint for simple tasks.

Currently the API-Server has three endpoints:

- `/proxy/mensa` proxies requests to the servers of Studentenwerk Ostbayern.
- `/proxy/authentication` proxies requests to the authentication server at University of Regensburg.
- `/api/feedback` is an endpoint to send user feedback via email to the development and maintenance teams.

> The API-Server needs to run in a production as well as a developement environment, in order to make authentication available.

## Configuration

At the moment only the email use case requires configuration. A sample file can be found at `./api-server.config.js.sample`

```javascript
module.exports = {
  auth: {
    // Email account to send the mails from this should be a service account.
    mail: "mail@dummy.com",
    password: "1234abc",
  },
  service: "dummy", // Email service provider for service account (sender).
  mailOptions: {
    from: "mail@dummy.com", // Account from auth property.
    to: "ur.fit.app@mailman.uni-regensburg.de", // Email distributor (e.g. mailman).
    subject: "Feedback for URfit-App", // Subject for all mails
    text: "Warning: Empty message", // Default text. This will be overwritten on request.
  },
};
```

> To lauch the API-Server rename `./api-server.config.js.sample` to `./api-server.config.js`.
> (Add a functional email account in order to make giving Feedback via the Feedback-Tab possible. This is not necessary if not needed (e.g. in development).)

## Developement

In Developement the `proxy` property in the `../package.json` file is used to forward requests to the API-Server.

## Deployment

In a production environment forwarding of `/proxy/` as well as `/api/` requests to the api server needs to be done manually. For example by using _nginx_ as a reverse proxy.

If experiencing heavy load, the `/proxy/` portion of this server can be easily seperated into its own process.
